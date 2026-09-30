import React, { useState, useEffect } from 'react';
import { 
  SceneItem, 
  CharacterProfile,
  Episode
} from '../types';
import { 
  Youtube, 
  Download, 
  Smartphone, 
  Monitor, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  Edit3 
} from 'lucide-react';

interface ThumbnailSimulatorProps {
  currentScene: SceneItem;
  allScenes: SceneItem[];
  character: CharacterProfile;
  onSelectScene: (scene: SceneItem) => void;
  currentEpisode?: Episode;
}

export const ThumbnailSimulator: React.FC<ThumbnailSimulatorProps> = ({
  currentScene,
  allScenes,
  character,
  onSelectScene,
  currentEpisode,
}) => {
  const [videoTitle, setVideoTitle] = useState(
    currentEpisode 
      ? `${currentEpisode.title.toUpperCase()} (A Verdade que Ninguém Admite)`
      : 'MENTIR FAZ BEM OU MAL? (A Verdade que Ninguém Admite)'
  );

  useEffect(() => {
    if (currentEpisode) {
      setVideoTitle(`${currentEpisode.title.toUpperCase()} (A Verdade que Ninguém Admite)`);
    }
  }, [currentEpisode?.id]);

  const [channelName, setChannelName] = useState('Bem ou Mal');
  const [viewCount, setViewCount] = useState('548 mil visualizações');
  const [duration, setDuration] = useState('14:38');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleDownloadThumbnail = () => {
    const a = document.createElement('a');
    a.href = currentScene.imageUrl;
    a.download = `thumbnail-youtube-16x9-${currentScene.id}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-rose-950/40 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <Youtube className="w-3.5 h-3.5 inline mr-1" />
              Simulador de Feed do YouTube
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Otimização de CTR (Taxa de Cliques)
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            Preview de Thumbnail para o YouTube
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Veja exatamente como a imagem do cenário e do personagem se comportam nas recomendações do YouTube.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'desktop'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Celular</span>
            </button>
          </div>

          <button
            onClick={handleDownloadThumbnail}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Thumbnail</span>
          </button>
        </div>
      </div>

      {/* Main YouTube Card Simulation */}
      <div className="flex justify-center">
        <div className={`transition-all duration-300 ${viewMode === 'mobile' ? 'w-full max-w-sm' : 'w-full max-w-3xl'}`}>
          <div className="rounded-2xl border border-slate-800/90 bg-[#0f0f0f] p-4 shadow-2xl space-y-3">
            
            {/* Top YouTube player bar mockup */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/5">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Youtube className="w-4 h-4 text-red-600" />
                <span>YouTube Mockup</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">1280 x 720 (16:9)</span>
            </div>

            {/* Thumbnail Image Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer shadow-lg">
              <img
                src={currentScene.imageUrl}
                alt="Thumbnail Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Red Watch Progress Bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full w-2/5 bg-red-600" />
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 rounded bg-black/85 text-[11px] font-mono font-semibold text-white tracking-wider">
                {duration}
              </div>

              {/* HD Badge */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                4K HDR
              </div>
            </div>

            {/* Video Metadata (Title, Channel, Views) */}
            <div className="flex gap-3 pt-1">
              {/* Channel Avatar */}
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-700 bg-slate-900">
                <img
                  src={character.customUploadedUrl || character.referenceImageUrl}
                  alt={channelName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white line-clamp-2 leading-snug hover:text-blue-400 cursor-pointer">
                  {videoTitle}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <span className="hover:text-white cursor-pointer font-medium">{channelName}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>
                <p className="text-xs text-slate-400">
                  {viewCount} • há 2 dias
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Editor & Thumbnail Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Metadata Editor */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-cyan-400" />
            Personalizar Título & Parâmetros do Vídeo
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Título do Vídeo do YouTube:</label>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Nome do Canal:</label>
                <input
                  type="text"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Duração no Badge:</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* CTR Tips */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
              Por que esta Thumbnail funciona no YouTube:
            </span>
            <ul className="text-xs text-slate-300 space-y-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Sem texto poluído:</strong> O rosto do personagem e a luz contam a história em menos de 1 segundo.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Contraste dramático:</strong> O azul neon/holograma se destaca contra o fundo preto das telas OLED.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Curiosidade imediata:</strong> O espectador quer entender os dois lados (&quot;Bem ou Mal?&quot;).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Quick Thumbnail Variant Switcher */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-400" />
            Escolher Variação de Imagem para a Capa
          </h3>

          <div className="space-y-3">
            {allScenes.map(scene => (
              <div
                key={scene.id}
                onClick={() => onSelectScene(scene)}
                className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                  scene.id === currentScene.id
                    ? 'border-rose-500 bg-rose-950/30'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="w-20 aspect-video rounded-lg overflow-hidden shrink-0 bg-black">
                  <img
                    src={scene.imageUrl}
                    alt={scene.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-semibold text-slate-200 truncate">
                    {scene.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {scene.subtitle}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-bold text-rose-400">
                  {scene.id === currentScene.id ? 'Selecionada' : 'Usar'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
