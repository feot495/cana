import React, { useState, useEffect } from 'react';
import { 
  SceneItem, 
  CharacterProfile, 
  CompositorSettings 
} from '../types';
import { 
  Maximize2, 
  Minimize2, 
  Eye, 
  Copy, 
  Check, 
  Download, 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  Tv, 
  BrainCircuit, 
  Flame, 
  Info,
  UserCheck,
  PlayCircle,
  ImageIcon
} from 'lucide-react';
import { CinematicAnimationPlayer } from './CinematicAnimationPlayer';

interface SceneViewerProps {
  currentScene: SceneItem;
  allScenes: SceneItem[];
  character: CharacterProfile;
  compositorSettings: CompositorSettings;
  setCompositorSettings: React.Dispatch<React.SetStateAction<CompositorSettings>>;
  onSelectScene: (scene: SceneItem) => void;
  onOpenCompositor: () => void;
}

export const SceneViewer: React.FC<SceneViewerProps> = ({
  currentScene,
  allScenes,
  character,
  compositorSettings,
  setCompositorSettings,
  onSelectScene,
  onOpenCompositor,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedPrompt, setCopiedPrompt] = useState<'pt' | 'en' | null>(null);
  const [showMetadata, setShowMetadata] = useState(true);
  const [isAnimationMode, setIsAnimationMode] = useState<boolean>(() => {
    return currentScene.id.includes('anim') || currentScene.id.includes('dopamine');
  });

  useEffect(() => {
    if (currentScene.id.includes('anim')) {
      setIsAnimationMode(true);
    }
  }, [currentScene.id]);

  const activeCharUrl = character.customUploadedUrl || character.referenceImageUrl;

  const handleCopy = (lang: 'pt' | 'en') => {
    const text = lang === 'en' ? currentScene.promptEn : currentScene.promptPt;
    navigator.clipboard.writeText(text);
    setCopiedPrompt(lang);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = currentScene.imageUrl;
    a.download = `bem-ou-mal-videogames-${currentScene.id}-16x9.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/40 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              currentScene.side === 'good'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : currentScene.side === 'bad'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
            }`}>
              {currentScene.side === 'good' ? '🔵 O Lado Bom • Cognição & Foco' : currentScene.side === 'bad' ? '🔴 O Lado Mau • Exaustão & Dopamina' : '⚖️ Dualidade • Bem ou Mal?'}
            </span>
            {currentScene.isOriginalPrompt && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                ★ Prompt Original do Usuário
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            {currentScene.title}
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            {currentScene.subtitle}
          </p>
        </div>

        {/* Action Controls for the Viewport */}
        <div className="flex items-center flex-wrap gap-2">
          {/* 5-Second Animation Mode Toggle */}
          <button
            onClick={() => setIsAnimationMode(!isAnimationMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isAnimationMode
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-md shadow-rose-500/10'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title="Alternar entre player de animação 5s e tela estática"
          >
            {isAnimationMode ? <ImageIcon className="w-3.5 h-3.5 text-cyan-400" /> : <PlayCircle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />}
            <span>{isAnimationMode ? 'Ver Imagem 16:9' : '🎬 Player de Animação 5s'}</span>
          </button>

          <button
            onClick={() => setCompositorSettings(s => ({ ...s, showSafeZone: !s.showSafeZone }))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              compositorSettings.showSafeZone
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="Mostrar guias de safe-zone do YouTube (subtítulos e interface)"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guias YouTube</span>
          </button>

          <button
            onClick={() => setCompositorSettings(s => ({ ...s, showCinematicBars: !s.showCinematicBars }))}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              compositorSettings.showCinematicBars
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="Ativar barras pretas cinematográficas (formato 2.39:1)"
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Cinema 2.39:1</span>
          </button>

          <button
            onClick={() => setZoomLevel(z => (z === 1 ? 1.5 : z === 1.5 ? 2 : 1))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors"
            title="Alternar nível de zoom para inspecionar detalhes"
          >
            {zoomLevel > 1 ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>Zoom {zoomLevel}x</span>
          </button>

          <button
            onClick={onOpenCompositor}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Compor Personagem</span>
          </button>
        </div>
      </div>

      {/* Main 16:9 Viewport Display (Animation Mode or Static Mode) */}
      {isAnimationMode ? (
        <CinematicAnimationPlayer 
          scene={currentScene} 
          onDownloadFrame={handleDownload} 
        />
      ) : (
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#04060a] shadow-2xl group">
        
        {/* Aspect Ratio Container (16:9) */}
        <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
          
          {/* Rendered Scene Image */}
          <div 
            className="w-full h-full transition-transform duration-300 ease-out origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentScene.imageUrl}
              alt={currentScene.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* Optional Character Inlay / PiP Overlay */}
          {compositorSettings.opacity > 0 && (
            <div 
              className="absolute pointer-events-none transition-all duration-150"
              style={{
                left: `${compositorSettings.posX}%`,
                top: `${compositorSettings.posY}%`,
                transform: `translate(-50%, -50%) scale(${compositorSettings.scale}) ${compositorSettings.mirrored ? 'scaleX(-1)' : ''}`,
                opacity: compositorSettings.opacity,
                mixBlendMode: compositorSettings.blendMode as any,
              }}
            >
              <div className={`relative ${compositorSettings.featherEdge ? 'rounded-full p-2 bg-gradient-to-tr from-cyan-500/20 via-transparent to-transparent shadow-2xl backdrop-blur-[1px]' : 'rounded-xl overflow-hidden border-2 border-cyan-400/80 shadow-2xl'}`}>
                <img
                  src={activeCharUrl}
                  alt="Personagem sobreposto"
                  referrerPolicy="no-referrer"
                  className="w-48 h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-mono text-cyan-300 border border-cyan-500/40">
                  {character.customUploadedUrl ? 'Seu Personagem' : 'Personagem Base'}
                </div>
              </div>
            </div>
          )}

          {/* Cinematic Letterbox Bars (Optional 2.39:1 scope) */}
          {compositorSettings.showCinematicBars && (
            <>
              <div className="absolute top-0 left-0 right-0 h-[10%] bg-black pointer-events-none transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-black pointer-events-none transition-all duration-300" />
            </>
          )}

          {/* YouTube UI Safe-Zone Overlay */}
          {compositorSettings.showSafeZone && (
            <div className="absolute inset-0 pointer-events-none border border-dashed border-cyan-500/40">
              {/* YouTube Title Area (Top) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300/80 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  YouTube Video Safe Zone • [16:9 - 1920x1080 / 4K UHD]
                </span>
                <span className="font-mono text-[10px] text-cyan-300">Área limpa de texto central</span>
              </div>

              {/* YouTube Subtitles Safe Area */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-6 py-2 rounded-md bg-black/70 border border-yellow-500/30 text-yellow-200 text-xs font-mono">
                [Espaço reservado para legendas automáticas do YouTube]
              </div>

              {/* YouTube Bottom Controls Area */}
              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-32 h-1 bg-red-600 rounded-full" />
                  <span className="font-mono">03:42 / 10:45</span>
                </div>
                <div className="flex items-center gap-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white">
                  1080p HD • 60fps
                </div>
              </div>
            </div>
          )}

          {/* Floating Badges inside Scene */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-lg">
              16:9 • Ilustração Digital Cinematográfica
            </span>
            <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-emerald-300 border border-emerald-500/30 hidden sm:inline">
              ✓ Estilo Cartoon / Desenho
            </span>
            <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md text-slate-300 border border-slate-700 hidden md:inline">
              Foco: Luz Azul & Hologramas
            </span>
          </div>

          {/* Quick Download Button on Hover */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-cyan-600 backdrop-blur-md text-white text-xs font-medium border border-white/20 transition-all cursor-pointer shadow-xl"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar HD</span>
            </button>
          </div>

        </div>

      </div>
      )}

      {/* Preset Scenes Picker Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Cenários do Episódio &quot;Videogames: Bem ou Mal&quot;
          </h3>
          <span className="text-xs text-slate-400">
            Clique para carregar no visualizador
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allScenes.map((scene) => {
            const isSelected = scene.id === currentScene.id;
            return (
              <div
                key={scene.id}
                onClick={() => onSelectScene(scene)}
                className={`group relative rounded-xl overflow-hidden border p-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? scene.side === 'good'
                      ? 'border-cyan-500 bg-cyan-950/30 ring-2 ring-cyan-500/20 shadow-lg shadow-cyan-500/10'
                      : scene.side === 'bad'
                      ? 'border-rose-500 bg-rose-950/30 ring-2 ring-rose-500/20 shadow-lg shadow-rose-500/10'
                      : 'border-indigo-500 bg-indigo-950/30 ring-2 ring-indigo-500/20'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden relative mb-2.5 bg-black">
                  <img
                    src={scene.imageUrl}
                    alt={scene.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      scene.side === 'good'
                        ? 'bg-cyan-500 text-slate-950'
                        : scene.side === 'bad'
                        ? 'bg-rose-500 text-white'
                        : 'bg-indigo-500 text-white'
                    }`}>
                      {scene.side === 'good' ? 'O LADO BOM' : scene.side === 'bad' ? 'O LADO MAL' : 'DUALIDADE'}
                    </span>
                  </div>
                  {scene.isOriginalPrompt && (
                    <div className="absolute bottom-1.5 right-1.5">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow">
                        Prompt do Usuário
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-1">
                  <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {scene.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {scene.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Analysis, Narrative Context & Prompts Accordion */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-5">
        
        {/* Header Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Análise de Roteiro & Prompt da Cena
            </h3>
          </div>
          <button
            onClick={() => setShowMetadata(!showMetadata)}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
          >
            {showMetadata ? 'Recolher detalhes' : 'Expandir detalhes'}
          </button>
        </div>

        {showMetadata && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 border-t border-slate-800/80">
            
            {/* Left: Narrative & Psychological Context */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                  Aplicação no Roteiro do Vídeo:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/60">
                  {currentScene.narrativeContext}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Pilares de Argumentação do Episódio:
                </h4>
                <ul className="space-y-1.5">
                  {currentScene.cognitiveKeypoints.map((pt, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentScene.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical Prompt Copy & Rules */}
            <div className="space-y-4">
              {/* English Prompt (Exact AI prompt) */}
              <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                    Prompt Original em Inglês (Cinematográfico 16:9)
                  </span>
                  <button
                    onClick={() => handleCopy('en')}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    {copiedPrompt === 'en' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copiar EN</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto pr-2 leading-relaxed selection:bg-cyan-500 selection:text-black">
                  {currentScene.promptEn}
                </pre>
              </div>

              {/* Portuguese Explanation */}
              <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1.5">
                    Versão em Português para Direção de Arte
                  </span>
                  <button
                    onClick={() => handleCopy('pt')}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    {copiedPrompt === 'pt' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copiar PT</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-300 whitespace-pre-wrap max-h-36 overflow-y-auto pr-2 leading-relaxed">
                  {currentScene.promptPt}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};
