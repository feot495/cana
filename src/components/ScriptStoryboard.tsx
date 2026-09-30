import React, { useState, useRef, useEffect } from 'react';
import { 
  ScriptBeat, 
  SceneItem,
  Episode
} from '../types';
import { 
  FileText, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Volume2, 
  Video, 
  Copy, 
  BookOpen, 
  Mic, 
  AlignLeft, 
  Tv, 
  Download, 
  Loader2, 
  AlertCircle, 
  Radio, 
  Sliders, 
  Zap, 
  Gauge,
  VolumeX,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { speedUpAudioAndGetWavUrl } from '../utils/audioSpeedExport';

interface ScriptStoryboardProps {
  beats: ScriptBeat[];
  allScenes: SceneItem[];
  onSelectSceneById: (sceneId: string) => void;
  activeSceneId: string;
  currentEpisode: Episode;
}

export const ScriptStoryboard: React.FC<ScriptStoryboardProps> = ({
  beats,
  allScenes,
  onSelectSceneById,
  activeSceneId,
  currentEpisode,
}) => {
  const [viewMode, setViewMode] = useState<'storyboard' | 'fullScript' | 'voiceStudio'>('storyboard');
  const [activeBeatIndex, setActiveBeatIndex] = useState<number>(0);
  const [isPlayingTimer, setIsPlayingTimer] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [copiedScript, setCopiedScript] = useState(false);

  // Audio Engine & Voice State
  const [audioCache, setAudioCache] = useState<Record<string, string>>({});
  const [loadingAudioKey, setLoadingAudioKey] = useState<string | null>(null);
  const [downloadingAudioKey, setDownloadingAudioKey] = useState<string | null>(null);
  const [playingAudioKey, setPlayingAudioKey] = useState<string | null>(null);
  const [browserSpeakingKey, setBrowserSpeakingKey] = useState<string | null>(null);

  // Quota & Fallback State
  const [quotaCountdown, setQuotaCountdown] = useState<number | null>(null);
  const [pendingRetryItem, setPendingRetryItem] = useState<{ key: string; text: string } | null>(null);
  const [narratorEngine, setNarratorEngine] = useState<'fenrir' | 'browser'>('fenrir');
  const [preferredModel, setPreferredModel] = useState<string>('gemini-3.8-flash-lite-tts');
  const [lastUsedModel, setLastUsedModel] = useState<string>('gemini-3.8-flash-lite-tts');
  const [fallbackTriggered, setFallbackTriggered] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [customSpeechText, setCustomSpeechText] = useState<string>(
    'Você já mentiu hoje? Talvez tenha sido uma mentira pequena. Um "está tudo bem"... quando você claramente não estava.'
  );
  const [selectedVoice, setSelectedVoice] = useState<'Fenrir' | 'Charon' | 'Puck' | 'Kore' | 'Zephyr'>('Fenrir');
  
  // Natural original cadence (1.0x) - preserves deep psychological mystery
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Apply playback speed in real-time to active audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speechSpeed;
      if ('preservesPitch' in audioRef.current) {
        (audioRef.current as any).preservesPitch = true;
      }
    }
  }, [speechSpeed]);

  // Quota Countdown Timer
  useEffect(() => {
    let timer: any;
    if (quotaCountdown !== null && quotaCountdown > 0) {
      timer = setInterval(() => {
        setQuotaCountdown(prev => {
          if (prev === null || prev <= 1) {
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quotaCountdown]);

  // Teleprompter Timer
  useEffect(() => {
    let timer: any;
    if (isPlayingTimer) {
      timer = setInterval(() => {
        setElapsedSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlayingTimer]);

  // Audio cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopyFullScript = () => {
    navigator.clipboard.writeText(currentEpisode.fullScriptText);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  // Browser Web Speech Synthesis Fallback (Unlimited, Zero Quota)
  const speakWithBrowserVoice = (key: string, text: string) => {
    if (!('speechSynthesis' in window)) {
      setErrorMessage('Seu navegador não suporta a síntese nativa de voz.');
      return;
    }

    // Stop previous audio or speech
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingAudioKey(null);
    }
    window.speechSynthesis.cancel();

    if (browserSpeakingKey === key) {
      setBrowserSpeakingKey(null);
      return;
    }

    const cleanText = text
      .replace(/#+\s+/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/---+/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = speechSpeed;
    utterance.lang = 'pt-BR';

    const voices = window.speechSynthesis.getVoices();
    const ptVoices = voices.filter(v => v.lang.startsWith('pt'));
    const preferredVoice = ptVoices.find(v => 
      v.name.toLowerCase().includes('google') || 
      v.name.toLowerCase().includes('natural') || 
      v.name.toLowerCase().includes('daniel') || 
      v.name.toLowerCase().includes('lucas') ||
      v.name.toLowerCase().includes('male')
    ) || ptVoices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      setBrowserSpeakingKey(null);
    };
    utterance.onerror = () => {
      setBrowserSpeakingKey(null);
    };

    setBrowserSpeakingKey(key);
    window.speechSynthesis.speak(utterance);
  };

  // Generate or Play Narration for a given key and text
  const handlePlayOrGenerateAudio = async (key: string, textToNarrate: string) => {
    setErrorMessage(null);

    // If using unlimited browser speech mode
    if (narratorEngine === 'browser') {
      speakWithBrowserVoice(key, textToNarrate);
      return;
    }

    // Stop browser voice if running
    if (browserSpeakingKey) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setBrowserSpeakingKey(null);
    }

    // If currently playing this audio, pause it
    if (playingAudioKey === key && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setPlayingAudioKey(null);
      return;
    }

    // If audio is already cached in memory
    if (audioCache[key]) {
      playAudioData(key, audioCache[key]);
      return;
    }

    // If currently waiting on quota countdown, warn and offer browser voice
    if (quotaCountdown !== null && quotaCountdown > 0) {
      setPendingRetryItem({ key, text: textToNarrate });
      setErrorMessage(`Cota temporária da API Gemini em recarga (${quotaCountdown}s). Clique no botão abaixo para ouvir imediatamente com o Narrador Ilimitado.`);
      return;
    }

    // Call server TTS endpoint
    setLoadingAudioKey(key);
    try {
      const response = await fetch('/api/narrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textToNarrate,
          voice: selectedVoice,
          style: 'A deeply immersive, calm, psychological, mysterious and intense YouTube documentary narrator voice.',
          speed: speechSpeed,
          preferredModel,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429 || data.isQuota) {
          const retrySeconds = data.retryAfter || 14;
          setQuotaCountdown(retrySeconds);
          setPendingRetryItem({ key, text: textToNarrate });
          setErrorMessage(`Limite de requisições temporário do Gemini atingido em ambos os modelos. Aguardando ${retrySeconds}s para a voz Fenrir, ou use a narração ilimitada do navegador agora.`);
          return;
        }
        throw new Error(data.error || 'Erro ao gerar locução.');
      }

      if (data.usedModel) {
        setLastUsedModel(data.usedModel);
        if (data.usedModel !== preferredModel) {
          setFallbackTriggered(true);
        }
      }

      const audioUrl = data.audioData;
      setAudioCache(prev => ({ ...prev, [key]: audioUrl }));
      playAudioData(key, audioUrl);
    } catch (err: any) {
      console.error('TTS error:', err);
      setErrorMessage(err.message || 'Falha ao sintetizar a voz.');
    } finally {
      setLoadingAudioKey(null);
    }
  };

  const playAudioData = (key: string, audioDataUrl: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;
    audio.src = audioDataUrl;
    audio.playbackRate = speechSpeed;
    if ('preservesPitch' in audio) {
      (audio as any).preservesPitch = true;
    }

    audio.onended = () => {
      setPlayingAudioKey(null);
    };
    audio.onerror = () => {
      setPlayingAudioKey(null);
      setErrorMessage('Erro ao reproduzir arquivo de áudio.');
    };
    audio.play().then(() => {
      setPlayingAudioKey(key);
    }).catch(e => {
      console.error('Audio play error:', e);
      setPlayingAudioKey(null);
    });
  };

  // Download WAV with the chosen speed acceleration applied
  const handleDownloadWav = async (key: string, filenamePrefix: string) => {
    const originalAudioUrl = audioCache[key];
    if (!originalAudioUrl) return;

    setDownloadingAudioKey(key);
    try {
      const processedWavUrl = await speedUpAudioAndGetWavUrl(originalAudioUrl, speechSpeed);
      const a = document.createElement('a');
      a.href = processedWavUrl;
      a.download = `${filenamePrefix}-fenrir-${speechSpeed}x.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download acceleration error, downloading original:', err);
      const a = document.createElement('a');
      a.href = originalAudioUrl;
      a.download = `${filenamePrefix}-fenrir-1.0x.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setDownloadingAudioKey(null);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Timer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-cyan-950/40 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <FileText className="w-3.5 h-3.5 inline mr-1" />
              Roteiro & Locução Fenrir
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold flex items-center gap-1">
              <Mic className="w-3 h-3" />
              {narratorEngine === 'fenrir' ? `VOZ NEURAL: ${selectedVoice.toUpperCase()}` : 'NARRADOR NATIVO (ILIMITADO)'}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {speechSpeed}x Velocidade
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            {currentEpisode.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {currentEpisode.tagline}
          </p>
        </div>

        {/* View Mode Toggle & Teleprompter Timer */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('storyboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'storyboard'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Storyboard</span>
            </button>
            <button
              onClick={() => setViewMode('voiceStudio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'voiceStudio'
                  ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Voz Fenrir (Estúdio)</span>
            </button>
            <button
              onClick={() => setViewMode('fullScript')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'fullScript'
                  ? 'bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlignLeft className="w-3.5 h-3.5" />
              <span>Teleprompter</span>
            </button>
          </div>

          {/* Teleprompter Timer */}
          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-xl">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Cronômetro</span>
              <span className="text-sm font-mono font-bold text-cyan-400">{formatTimer(elapsedSeconds)}</span>
            </div>
            <button
              onClick={() => setIsPlayingTimer(!isPlayingTimer)}
              className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 flex items-center justify-center transition-colors"
              title={isPlayingTimer ? 'Pausar' : 'Iniciar'}
            >
              {isPlayingTimer ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => { setIsPlayingTimer(false); setElapsedSeconds(0); }}
              className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 flex items-center justify-center transition-colors"
              title="Resetar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Speed & Narrator Engine Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left: Engine Selection Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setNarratorEngine('fenrir')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                narratorEngine === 'fenrir'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-rose-400" />
              <span>Voz Neural Fenrir</span>
            </button>

            <button
              onClick={() => setNarratorEngine('browser')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                narratorEngine === 'browser'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Narrador Ilimitado (Navegador)</span>
            </button>
          </div>
        </div>

        {/* Right: Speed Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-mono font-medium flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            Cadência:
          </span>
          {[
            { value: 1.0, label: '1.0x' },
            { value: 1.15, label: '1.15x' },
            { value: 1.25, label: '1.25x (Recomendado)' },
            { value: 1.35, label: '1.35x' },
            { value: 1.5, label: '1.5x' },
          ].map((preset) => (
            <button
              key={preset.value}
              onClick={() => setSpeechSpeed(preset.value)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                speechSpeed === preset.value
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quota Exhaustion / Fallback Alert Card */}
      {(quotaCountdown !== null && quotaCountdown > 0) && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-cyan-950/40 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2">
                Recarga de Cota Gemini TTS em Andamento
                <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-amber-500 text-slate-950 font-black">
                  {quotaCountdown}s
                </span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                O limite temporário de requisições por minuto foi atingido. Você pode continuar ouvindo imediatamente com o Narrador Ilimitado do Navegador ou aguardar {quotaCountdown}s.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {pendingRetryItem && (
              <button
                onClick={() => speakWithBrowserVoice(pendingRetryItem.key, pendingRetryItem.text)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4" />
                <span>Ouvir com Narrador Agora</span>
              </button>
            )}

            <button
              onClick={() => {
                if (pendingRetryItem) {
                  handlePlayOrGenerateAudio(pendingRetryItem.key, pendingRetryItem.text);
                }
              }}
              disabled={quotaCountdown > 0}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Tentar Fenrir Novamente</span>
            </button>
          </div>
        </div>
      )}

      {/* General Error Banner */}
      {errorMessage && !quotaCountdown && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold text-rose-300">Aviso da Locução:</p>
            <p className="text-rose-200/90">{errorMessage}</p>
          </div>
          <button 
            onClick={() => setErrorMessage(null)}
            className="text-rose-400 hover:text-rose-200 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* VIEW 1: Voice Studio (Locutor Fenrir) */}
      {viewMode === 'voiceStudio' && (
        <div className="space-y-6">
          {/* Voice Settings Card */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    Estúdio de Voz Oficial: Fenrir
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30">
                      Grave & Firme
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sintetizador neural com velocidade ajustada em <strong>{speechSpeed}x</strong> para ritmo dinâmico de documentário.
                  </p>
                </div>
              </div>

              {/* Voice & Model Selectors */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-medium">Voz:</span>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value as any)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  >
                    <option value="Fenrir">Fenrir (Grave, Dramática, Narrador Principal)</option>
                    <option value="Charon">Charon (Profunda, Misteriosa)</option>
                    <option value="Puck">Puck (Enérgica, Narrativa)</option>
                    <option value="Kore">Kore (Voz Feminina Calma)</option>
                    <option value="Zephyr">Zephyr (Serena, Suave)</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-medium">Modelo:</span>
                  <select
                    value={preferredModel}
                    onChange={(e) => {
                      setPreferredModel(e.target.value);
                      setFallbackTriggered(false);
                    }}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="gemini-3.8-flash-tts">Gemini 3.8 Flash TTS (Principal)</option>
                    <option value="gemini-3.8-flash-lite-tts">Gemini 3.8 Flash Lite TTS</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fallback Live Status Banner */}
            <div className="flex items-center justify-between text-[11px] bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 text-emerald-400" />
                  Fallback Automático Armado
                </span>
                <span className="text-slate-300">
                  {fallbackTriggered 
                    ? `Cota excedida no modelo inicial. Alternado com sucesso para ${lastUsedModel}!`
                    : `Se o modelo ${preferredModel} atingir o limite, o servidor migra imediatamente para o secundário.`}
                </span>
              </div>
              <span className="font-mono text-slate-400">
                Ativo: <strong className="text-emerald-400">{lastUsedModel}</strong>
              </span>
            </div>

            {/* Custom Text Synthesizer */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Testar Fala Livre com a Voz Fenrir (no ritmo de {speechSpeed}x):</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {customSpeechText.length} caracteres
                </span>
              </label>
              <textarea
                value={customSpeechText}
                onChange={(e) => setCustomSpeechText(e.target.value)}
                rows={3}
                placeholder="Digite ou cole qualquer frase do roteiro para ouvir com a voz Fenrir..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-rose-500 font-sans"
              />
              <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ritmo ajustado: {speechSpeed}x (exporta em WAV 24kHz acelerado)</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayOrGenerateAudio('custom-preview', customSpeechText)}
                    disabled={loadingAudioKey === 'custom-preview' || !customSpeechText.trim()}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold shadow-lg transition-all cursor-pointer ${
                      playingAudioKey === 'custom-preview' || browserSpeakingKey === 'custom-preview'
                        ? 'bg-rose-500 text-white shadow-rose-500/30'
                        : 'bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-400 hover:to-indigo-500 text-white shadow-rose-500/20'
                    } disabled:opacity-50`}
                  >
                    {loadingAudioKey === 'custom-preview' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sintetizando Voz...</span>
                      </>
                    ) : (playingAudioKey === 'custom-preview' || browserSpeakingKey === 'custom-preview') ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Pausar ({speechSpeed}x)</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Ouvir ({speechSpeed}x)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => speakWithBrowserVoice('custom-preview', customSpeechText)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all cursor-pointer"
                    title="Ouvir imediatamente com a voz nativa do navegador (Sem limites de cota)"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Navegador (Ilimitado)</span>
                  </button>

                  {audioCache['custom-preview'] && (
                    <button
                      onClick={() => handleDownloadWav('custom-preview', 'locucao-teste')}
                      disabled={downloadingAudioKey === 'custom-preview'}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-xs font-bold"
                      title="Baixar áudio WAV em 16-bit com velocidade ajustada"
                    >
                      {downloadingAudioKey === 'custom-preview' ? (
                        <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      ) : (
                        <Download className="w-4 h-4 text-cyan-400" />
                      )}
                      <span>Baixar WAV ({speechSpeed}x)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Act-by-Act Narration Blocks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400" />
                Blocos de Locução para o Episódio 02 (Ritmo de {speechSpeed}x)
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {beats.length} Cenas Narradas
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {beats.map((beat, idx) => {
                const key = `beat-audio-${idx}`;
                const isLoading = loadingAudioKey === key;
                const isPlaying = playingAudioKey === key || browserSpeakingKey === key;
                const hasAudio = !!audioCache[key];
                const isDownloading = downloadingAudioKey === key;

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-slate-800 text-cyan-300 border border-slate-700">
                          {beat.timestamp}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-200 truncate">
                          {beat.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 italic line-clamp-2">
                        {beat.narrationSnippet}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Neural Fenrir Button */}
                      <button
                        onClick={() => handlePlayOrGenerateAudio(key, beat.narrationSnippet)}
                        disabled={isLoading}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isPlaying && playingAudioKey === key
                            ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                            : hasAudio
                            ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                        } disabled:opacity-50`}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Gerando...</span>
                          </>
                        ) : isPlaying && playingAudioKey === key ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Pausar ({speechSpeed}x)</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>{hasAudio ? `Tocar Fenrir (${speechSpeed}x)` : `Fenrir (${speechSpeed}x)`}</span>
                          </>
                        )}
                      </button>

                      {/* Instant Browser Voice Button */}
                      <button
                        onClick={() => speakWithBrowserVoice(key, beat.narrationSnippet)}
                        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          browserSpeakingKey === key
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700'
                        }`}
                        title="Ouvir imediatamente com a voz nativa do navegador (Sem limites de cota)"
                      >
                        <Cpu className="w-3 h-3 text-cyan-400" />
                        <span>Navegador</span>
                      </button>

                      {/* Download WAV */}
                      {hasAudio && (
                        <button
                          onClick={() => handleDownloadWav(key, `bloco-${idx + 1}`)}
                          disabled={isDownloading}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-mono font-semibold"
                          title={`Baixar arquivo WAV acelerado a ${speechSpeed}x`}
                        >
                          {isDownloading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                          ) : (
                            <Download className="w-3.5 h-3.5 text-cyan-400" />
                          )}
                          <span>.WAV</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Full Script & Teleprompter Reader */}
      {viewMode === 'fullScript' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-bold text-slate-200">
                Texto Integral com Instruções de Entonação para Locução
              </span>
            </div>
            <button
              onClick={handleCopyFullScript}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer"
            >
              {copiedScript ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Roteiro Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Roteiro Completo</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 font-sans text-slate-200 leading-relaxed space-y-4 shadow-inner max-h-[700px] overflow-y-auto">
            {currentEpisode.fullScriptText.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={pIdx} className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-100 to-rose-400 pt-4 pb-2 border-b border-slate-800">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('### ')) {
                const headerText = paragraph.replace('### ', '');
                const isWarning = headerText.includes('ATO 2') || headerText.includes('MAL') || headerText.includes('VIRADA');
                const isGood = headerText.includes('ATO 1') || headerText.includes('BEM');
                return (
                  <div key={pIdx} className={`p-3 rounded-xl border mt-6 mb-2 ${
                    isWarning 
                      ? 'bg-rose-950/30 border-rose-800/40 text-rose-300' 
                      : isGood 
                      ? 'bg-cyan-950/30 border-cyan-800/40 text-cyan-300' 
                      : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-300'
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block">
                      {headerText}
                    </span>
                  </div>
                );
              }
              if (paragraph.startsWith('---')) {
                return <hr key={pIdx} className="border-slate-800 my-6" />;
              }
              if (paragraph.includes('**[PAUSA DRAMÁTICA]**')) {
                return (
                  <div key={pIdx} className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono my-2">
                    ⏳ [PAUSA DRAMÁTICA DE 2 SEGUNDOS]
                  </div>
                );
              }
              return (
                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                  {paragraph.split('**').map((chunk, cIdx) => 
                    cIdx % 2 === 1 ? <strong key={cIdx} className="text-slate-100 font-bold">{chunk}</strong> : chunk
                  )}
                </p>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: Storyboard Timeline with Matching Scene Artwork */}
      {viewMode === 'storyboard' && (
        <div className="space-y-4">
          {beats.map((beat, idx) => {
            const matchingScene = allScenes.find(s => s.id === beat.recommendedSceneId);
            const isSelected = activeBeatIndex === idx;
            const audioKey = `beat-audio-${idx}`;
            const isAudioLoading = loadingAudioKey === audioKey;
            const isAudioPlaying = (playingAudioKey === audioKey) || (browserSpeakingKey === audioKey);
            const hasAudio = !!audioCache[audioKey];
            const isDownloading = downloadingAudioKey === audioKey;

            return (
              <div
                key={idx}
                onClick={() => {
                  setActiveBeatIndex(idx);
                  if (matchingScene) onSelectSceneById(matchingScene.id);
                }}
                className={`rounded-2xl border transition-all duration-200 p-5 cursor-pointer ${
                  isSelected
                    ? 'border-cyan-500 bg-slate-900/90 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                    : 'border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-5 items-start">
                  
                  {/* Scene Preview Thumbnail */}
                  {matchingScene && (
                    <div className="w-full md:w-64 aspect-video rounded-xl overflow-hidden shrink-0 border border-slate-700 relative bg-black shadow-lg">
                      <img
                        src={matchingScene.imageUrl}
                        alt={matchingScene.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          matchingScene.side === 'good'
                            ? 'bg-cyan-500 text-slate-950'
                            : matchingScene.side === 'bad'
                            ? 'bg-rose-500 text-white'
                            : 'bg-indigo-500 text-white'
                        }`}>
                          {matchingScene.side === 'good' ? 'O LADO BOM' : matchingScene.side === 'bad' ? 'O LADO MAL' : 'DUALIDADE'}
                        </span>
                      </div>
                      <div className="absolute bottom-1 right-2 text-[10px] font-mono font-semibold bg-black/80 px-1.5 py-0.5 rounded text-slate-300">
                        16:9 1080p
                      </div>
                    </div>
                  )}

                  {/* Beat Text Details */}
                  <div className="flex-1 min-w-0 space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {beat.timestamp}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-100">
                          {beat.title}
                        </h3>
                      </div>
                      
                      {/* Audio Controls */}
                      <div className="flex items-center gap-2">
                        {/* Fenrir Neural Voice Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayOrGenerateAudio(audioKey, beat.narrationSnippet);
                          }}
                          disabled={isAudioLoading}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            isAudioPlaying && playingAudioKey === audioKey
                              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                              : hasAudio
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                          } disabled:opacity-50`}
                          title={`Ouvir beat com a voz Fenrir a ${speechSpeed}x`}
                        >
                          {isAudioLoading ? (
                            <>
                              <Loader2 className="w-3 h-3 animate-spin" />
                              <span className="text-[11px]">Gerando...</span>
                            </>
                          ) : isAudioPlaying && playingAudioKey === audioKey ? (
                            <>
                              <Pause className="w-3 h-3" />
                              <span className="text-[11px]">Pausar ({speechSpeed}x)</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3 h-3 text-cyan-400" />
                              <span className="text-[11px]">{hasAudio ? `Tocar Fenrir (${speechSpeed}x)` : `Fenrir (${speechSpeed}x)`}</span>
                            </>
                          )}
                        </button>

                        {/* Instant Browser Voice Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakWithBrowserVoice(audioKey, beat.narrationSnippet);
                          }}
                          className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all ${
                            browserSpeakingKey === audioKey
                              ? 'bg-amber-500 text-slate-950 font-bold'
                              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700'
                          }`}
                          title="Ouvir imediatamente com a voz nativa do navegador (Sem limites de cota)"
                        >
                          <Cpu className="w-3 h-3 text-cyan-400" />
                          <span className="text-[11px]">Navegador</span>
                        </button>

                        {hasAudio && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadWav(audioKey, `bloco-${idx + 1}`);
                            }}
                            disabled={isDownloading}
                            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                            title={`Baixar WAV acelerado a ${speechSpeed}x`}
                          >
                            {isDownloading ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                            ) : (
                              <Download className="w-3.5 h-3.5 text-cyan-400" />
                            )}
                          </button>
                        )}

                        {isSelected && (
                          <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 ml-1">
                            <Check className="w-3.5 h-3.5" /> Ativa
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Narration Snippet */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                        <Volume2 className="w-3 h-3 text-cyan-400" />
                        Locução do Narrador (Voiceover):
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        {beat.narrationSnippet}
                      </p>
                    </div>

                    {/* Visual Direction */}
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Video className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span><strong>Direção de Arte:</strong> {beat.visualDirection}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
