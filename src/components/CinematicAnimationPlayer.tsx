import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Download, 
  Sparkles, 
  Maximize2, 
  Sliders,
  Layers,
  Clock,
  ChevronRight,
  Flame
} from 'lucide-react';
import { SceneItem } from '../types';

interface CinematicAnimationPlayerProps {
  scene: SceneItem;
  onDownloadFrame?: () => void;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  angle: number;
  distance: number;
  speed: number;
  type: 'xp' | 'coin' | 'trophy' | 'star' | 'synapse';
  color: string;
  size: number;
  alpha: number;
}

export const CinematicAnimationPlayer: React.FC<CinematicAnimationPlayerProps> = ({
  scene,
  onDownloadFrame,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const duration = 5.0; // 5.0 seconds exact timeline
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize particles
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Generate orbital particles
    const pList: Particle[] = [];
    const colors = ['#38bdf8', '#fbbf24', '#f43f5e', '#a855f7', '#ffffff', '#22d3ee'];
    const types: ('xp' | 'coin' | 'trophy' | 'star' | 'synapse')[] = ['xp', 'coin', 'trophy', 'star', 'synapse'];

    for (let i = 0; i < 90; i++) {
      pList.push({
        x: 0,
        y: 0,
        radius: Math.random() * 2.5 + 1.5,
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 260 + 80,
        speed: (Math.random() * 0.8 + 0.4) * (Math.random() > 0.5 ? 1 : -1),
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }
    particlesRef.current = pList;
  }, []);

  // Web Audio synth for ambient space pulse and synaptic feedback
  const playPulseSound = (freq = 80, type: OscillatorType = 'sine', duration = 0.4) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio fallback
    }
  };

  // Main animation loop
  useEffect(() => {
    const animate = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + delta * playbackSpeed;
          if (next >= duration) {
            return 0; // Seamless loop
          }
          return next;
        });
      }

      // Draw overlay canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const centerX = canvas.width / 2;
          const centerY = canvas.height * 0.48;
          const t = currentTime;

          // Orbit speed increases during Phase 2 (1.5s to 3.0s) and beyond
          let orbitMultiplier = 1;
          if (t >= 1.5 && t < 3.0) {
            orbitMultiplier = 1 + ((t - 1.5) / 1.5) * 3.5;
          } else if (t >= 3.0) {
            orbitMultiplier = 4.5;
          }

          // Shadow expansion during Phase 3 (3.0s to 5.0s)
          if (t >= 2.5) {
            const shadowProgress = Math.min((t - 2.5) / 1.8, 1);
            const grad = ctx.createRadialGradient(
              centerX, centerY, 40,
              centerX, centerY, canvas.width * 0.75
            );
            grad.addColorStop(0, 'rgba(3, 4, 8, 0)');
            grad.addColorStop(0.4, `rgba(5, 7, 14, ${shadowProgress * 0.55})`);
            grad.addColorStop(1, `rgba(2, 3, 6, ${shadowProgress * 0.85})`);

            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Pulsing red synaptic energy lines behind character
            if (t >= 3.0) {
              const pulse = (Math.sin(t * 8) + 1) * 0.5;
              ctx.save();
              ctx.strokeStyle = `rgba(239, 68, 68, ${pulse * 0.45 * shadowProgress})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const r = 180 + Math.sin(t * 4 + i) * 40;
                ctx.moveTo(centerX, centerY);
                ctx.quadraticCurveTo(
                  centerX + Math.cos(angle + 0.3) * (r * 0.6),
                  centerY + Math.sin(angle + 0.3) * (r * 0.6),
                  centerX + Math.cos(angle) * r,
                  centerY + Math.sin(angle) * r
                );
              }
              ctx.stroke();
              ctx.restore();
            }
          }

          // Draw orbiting reward particles
          if (t >= 1.0) {
            const particleAlpha = Math.min((t - 1.0) / 0.8, 1);

            particlesRef.current.forEach((p, idx) => {
              p.angle += p.speed * 0.04 * orbitMultiplier;
              const currentDist = p.distance * (1 - Math.sin(t * 0.8 + idx) * 0.08);

              // 3D-like ellipse projection
              const px = centerX + Math.cos(p.angle) * currentDist;
              const py = centerY + Math.sin(p.angle) * (currentDist * 0.38);

              ctx.save();
              ctx.globalAlpha = p.alpha * particleAlpha;

              if (p.type === 'trophy' || p.type === 'coin') {
                // Golden glow
                ctx.shadowColor = '#fbbf24';
                ctx.shadowBlur = 10;
                ctx.fillStyle = '#fbbf24';
                ctx.beginPath();
                ctx.arc(px, py, p.radius * 1.4, 0, Math.PI * 2);
                ctx.fill();
              } else if (p.type === 'xp') {
                // Electric cyan
                ctx.shadowColor = '#38bdf8';
                ctx.shadowBlur = 8;
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(px, py, p.radius, 0, Math.PI * 2);
                ctx.fill();
              } else {
                // Star particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(px, py, p.radius * 0.8, 0, Math.PI * 2);
                ctx.fill();
              }

              // Connecting energy tether for every 5th particle
              if (idx % 6 === 0 && t >= 2.0) {
                ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * particleAlpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(centerX, centerY);
                ctx.stroke();
              }

              ctx.restore();
            });
          }
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, playbackSpeed, soundEnabled, currentTime]);

  // Phase calculation
  const getPhaseInfo = (time: number) => {
    if (time < 1.5) {
      return {
        step: 1,
        title: 'Fase 1: Despertar Cósmico & Push de Câmera',
        desc: 'Universo cósmico profundo, luz azul e branca do jogo, o personagem fascinado iluminado.',
        badge: '0.0s – 1.5s',
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
      };
    } else if (time < 3.0) {
      return {
        step: 2,
        title: 'Fase 2: O Loop Cósmico de Recompensas',
        desc: 'Partículas de XP, troféus e moedas multiplicam-se e orbitam cada vez mais rápido em espiral circular.',
        badge: '1.5s – 3.0s',
        color: 'text-amber-400 border-amber-500/30 bg-amber-950/40',
      };
    } else if (time < 4.0) {
      return {
        step: 3,
        title: 'Fase 3: A Sombra Psicológica Gigantesca',
        desc: 'Uma colossal sombra escura expande-se por trás dele enquanto o cosmos escurece, com vias neurais pulsando.',
        badge: '3.0s – 4.0s',
        color: 'text-purple-400 border-purple-500/30 bg-purple-950/40',
      };
    } else {
      return {
        step: 4,
        title: 'Fase 4: A Revelação do Título Monumental',
        desc: 'Câmera avança e a tipografia cinematográfica surge com hold final legível.',
        badge: '4.0s – 5.0s',
        color: 'text-rose-400 border-rose-500/30 bg-rose-950/40',
      };
    }
  };

  const currentPhase = getPhaseInfo(currentTime);

  // Dynamic Camera Zoom calculation (Slow push-in from scale 1.0 to 1.14)
  const cameraScale = 1.0 + (currentTime / duration) * 0.12;
  const cameraTranslateY = -(currentTime / duration) * 12;

  // Title Opacity calculation (Appears during final 2 seconds: 3.5s to 5.0s)
  const titleOpacity = currentTime >= 3.6 ? Math.min((currentTime - 3.6) / 0.8, 1) : 0;
  const titleTranslateY = currentTime >= 3.6 ? (1 - titleOpacity) * 15 : 15;

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
      
      {/* Header Bar */}
      <div className="px-5 py-4 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-rose-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                Animação Cinematográfica 5 Segundos
              </h2>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-full">
                4K Timeline 5.0s
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              O Sequestro Biológico da Dopamina • Push de câmera, órbita de recompensas e revelação de título
            </p>
          </div>
        </div>

        {/* Phase Pill */}
        <div className={`px-3 py-1 rounded-full border text-xs font-mono font-medium flex items-center gap-2 ${currentPhase.color}`}>
          <span className="w-2 h-2 rounded-full bg-current animate-ping" />
          <span>{currentPhase.badge}</span>
          <span className="hidden sm:inline font-sans">• {currentPhase.title.split(':')[1]}</span>
        </div>
      </div>

      {/* Main Viewport (16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full bg-black overflow-hidden select-none group">
        
        {/* Animated Background Container with Camera Push */}
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `scale(${cameraScale}) translateY(${cameraTranslateY}px)`,
          }}
        >
          {/* Base Keyframe Image */}
          <img
            src={scene.imageUrl}
            alt={scene.title}
            className="w-full h-full object-cover object-center pointer-events-none"
          />

          {/* Dynamic Light Beam at start (0-2s) */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent pointer-events-none transition-opacity duration-500"
            style={{
              opacity: currentTime < 2.5 ? 0.7 - (currentTime / 2.5) * 0.4 : 0.1,
            }}
          />

          {/* Canvas for real-time particles & synaptic shadows */}
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-80" />

        {/* Cinematic Letterbox Bars */}
        <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-black/90 pointer-events-none border-b border-white/5" />
        <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 bg-black/90 pointer-events-none border-t border-white/5" />

        {/* Real-time Dynamic Typography Reveal (Fase 4: 3.6s to 5.0s) */}
        <div 
          className="absolute inset-x-0 bottom-12 sm:bottom-16 flex flex-col items-center justify-center text-center px-4 pointer-events-none transition-all duration-300"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          <div className="inline-block px-5 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 shadow-2xl">
            <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl font-black tracking-widest text-slate-100 drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] uppercase font-mono">
              O SEQUESTRO BIOLÓGICO DA
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-rose-500 drop-shadow-[0_0_25px_rgba(244,63,94,0.9)] uppercase mt-0.5">
              DOPAMINA
            </span>
          </div>
        </div>

        {/* Time Overlay in Viewport (Top Right) */}
        <div className="absolute top-9 right-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-slate-700/60 text-slate-300 font-mono text-xs flex items-center gap-1.5 shadow-lg">
          <Clock className="w-3 h-3 text-cyan-400" />
          <span>{currentTime.toFixed(2)}s</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{duration.toFixed(1)}s</span>
        </div>

        {/* Center Play Watermark on Hover if Paused */}
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-cyan-500/80 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 z-20"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
        )}
      </div>

      {/* Timeline Scrubber Bar with Phase Markers */}
      <div className="px-5 pt-4 pb-2 bg-slate-950 border-t border-slate-800">
        <div className="relative w-full h-8 flex items-center">
          
          {/* Phase Segments Background */}
          <div className="absolute inset-x-0 h-2 bg-slate-800 rounded-full overflow-hidden flex">
            {/* Phase 1: 0 - 1.5s (30%) */}
            <div className="w-[30%] h-full bg-cyan-950/60 border-r border-slate-700/60 relative group">
              <span className="hidden group-hover:block absolute -top-5 left-1 text-[9px] font-mono text-cyan-400">0–1.5s</span>
            </div>
            {/* Phase 2: 1.5 - 3.0s (30%) */}
            <div className="w-[30%] h-full bg-amber-950/60 border-r border-slate-700/60 relative group">
              <span className="hidden group-hover:block absolute -top-5 left-1 text-[9px] font-mono text-amber-400">1.5–3.0s</span>
            </div>
            {/* Phase 3: 3.0 - 4.0s (20%) */}
            <div className="w-[20%] h-full bg-purple-950/60 border-r border-slate-700/60 relative group">
              <span className="hidden group-hover:block absolute -top-5 left-1 text-[9px] font-mono text-purple-400">3.0–4.0s</span>
            </div>
            {/* Phase 4: 4.0 - 5.0s (20%) */}
            <div className="w-[20%] h-full bg-rose-950/60 relative group">
              <span className="hidden group-hover:block absolute -top-5 left-1 text-[9px] font-mono text-rose-400">4.0–5.0s</span>
            </div>
          </div>

          {/* Active Progress Fill */}
          <div 
            className="absolute left-0 h-2 bg-gradient-to-r from-cyan-500 via-amber-400 to-rose-500 rounded-full pointer-events-none shadow-[0_0_12px_rgba(56,189,248,0.5)]"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />

          {/* Draggable Scrubber Thumb */}
          <input
            type="range"
            min="0"
            max={duration}
            step="0.02"
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(parseFloat(e.target.value));
              playPulseSound(140, 'triangle', 0.1);
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />

          {/* Visual Thumb Marker */}
          <div 
            className="absolute w-4 h-4 bg-white rounded-full border-2 border-cyan-500 shadow-md pointer-events-none -ml-2 transition-transform duration-75 group-hover:scale-125"
            style={{ left: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Phase Timeline Labels */}
        <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1 select-none">
          <span className="text-cyan-400">0.0s Despertar</span>
          <span className="text-amber-400">1.5s Órbita XP</span>
          <span className="text-purple-400">3.0s Sombra Colossal</span>
          <span className="text-rose-400">4.0s Título</span>
          <span className="text-slate-400">5.0s Hold</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              playPulseSound(isPlaying ? 70 : 120, 'sine', 0.2);
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Reproduzir</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setCurrentTime(0);
              setIsPlaying(true);
              playPulseSound(180, 'sine', 0.25);
            }}
            title="Reiniciar Animação (0.0s)"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5">
            {[0.5, 1, 1.5].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-2 py-1 text-[11px] font-mono rounded-lg transition-all ${
                  playbackSpeed === spd 
                    ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border transition-all ${
              soundEnabled 
                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400' 
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={soundEnabled ? 'Áudio Sintetizado Ligado' : 'Áudio Sintetizado Desligado'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* Right: Quick Actions & Phase Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <span className="text-xs font-bold text-slate-200 block">
              {currentPhase.title}
            </span>
            <span className="text-[11px] text-slate-400 block max-w-xs truncate">
              {currentPhase.desc}
            </span>
          </div>

          {onDownloadFrame && (
            <button
              onClick={onDownloadFrame}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all border border-slate-700"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Baixar Keyframe</span>
            </button>
          )}
        </div>

      </div>

      {/* Timeline Breakdown Cards */}
      <div className="p-4 bg-slate-950/50 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        
        {/* Step 1 */}
        <div 
          onClick={() => { setCurrentTime(0.5); setIsPlaying(false); }}
          className={`p-3 rounded-xl border cursor-pointer transition-all ${
            currentTime < 1.5 
              ? 'bg-cyan-950/40 border-cyan-500/40 ring-1 ring-cyan-500/30' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-bold text-cyan-400">0.0s – 1.5s</span>
            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300">Push-in</span>
          </div>
          <h4 className="text-xs font-bold text-slate-200">Despertar Cósmico</h4>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
            Galáxias profundas, luz azul-branca e o personagem fascinado iluminado.
          </p>
        </div>

        {/* Step 2 */}
        <div 
          onClick={() => { setCurrentTime(2.2); setIsPlaying(false); }}
          className={`p-3 rounded-xl border cursor-pointer transition-all ${
            currentTime >= 1.5 && currentTime < 3.0 
              ? 'bg-amber-950/40 border-amber-500/40 ring-1 ring-amber-500/30' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-bold text-amber-400">1.5s – 3.0s</span>
            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300">Aceleração</span>
          </div>
          <h4 className="text-xs font-bold text-slate-200">Órbita de Recompensas</h4>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
            XP, moedas e troféus aceleram em espiral contínua ao redor do jogador.
          </p>
        </div>

        {/* Step 3 */}
        <div 
          onClick={() => { setCurrentTime(3.4); setIsPlaying(false); }}
          className={`p-3 rounded-xl border cursor-pointer transition-all ${
            currentTime >= 3.0 && currentTime < 4.0 
              ? 'bg-purple-950/40 border-purple-500/40 ring-1 ring-purple-500/30' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-bold text-purple-400">3.0s – 4.0s</span>
            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-purple-500/10 text-purple-300">Sombra</span>
          </div>
          <h4 className="text-xs font-bold text-slate-200">Sombra Psicológica</h4>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
            A escuridão se expande com sinapses vermelhas demonstrando o aprisionamento.
          </p>
        </div>

        {/* Step 4 */}
        <div 
          onClick={() => { setCurrentTime(4.5); setIsPlaying(false); }}
          className={`p-3 rounded-xl border cursor-pointer transition-all ${
            currentTime >= 4.0 
              ? 'bg-rose-950/40 border-rose-500/40 ring-1 ring-rose-500/30' 
              : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono font-bold text-rose-400">4.0s – 5.0s</span>
            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-300">Hold</span>
          </div>
          <h4 className="text-xs font-bold text-slate-200">Título Monumental</h4>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
            "O SEQUESTRO BIOLÓGICO DA DOPAMINA" surge com legibilidade perfeita.
          </p>
        </div>

      </div>

    </div>
  );
};
