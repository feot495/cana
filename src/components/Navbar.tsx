import React, { useState } from 'react';
import { 
  Clapperboard, 
  Layers, 
  SplitSquareVertical, 
  FileText, 
  Youtube, 
  Sparkles,
  Download,
  Copy,
  Check,
  ChevronDown,
  Film
} from 'lucide-react';
import { SceneItem, Episode } from '../types';

interface NavbarProps {
  activeTab: 'scene' | 'compare' | 'script' | 'thumbnail' | 'generator';
  setActiveTab: (tab: 'scene' | 'compare' | 'script' | 'thumbnail' | 'generator') => void;
  currentScene: SceneItem;
  onDownloadCurrent: () => void;
  episodes: Episode[];
  currentEpisode: Episode;
  onSelectEpisode: (episodeId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentScene,
  onDownloadCurrent,
  episodes,
  currentEpisode,
  onSelectEpisode,
}) => {
  const [copied, setCopied] = useState(false);
  const [episodeMenuOpen, setEpisodeMenuOpen] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentScene.promptEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090b10]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Episode Switcher Dropdown */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-rose-500 p-[1px] shadow-lg shadow-cyan-500/10 shrink-0">
              <div className="w-full h-full bg-[#090b10] rounded-[11px] flex items-center justify-center">
                <Clapperboard className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            
            <div className="relative min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-100 to-rose-400">
                  BEM OU MAL
                </span>
                
                {/* Episode Switcher Button */}
                <div className="relative">
                  <button
                    onClick={() => setEpisodeMenuOpen(!episodeMenuOpen)}
                    className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/90 hover:bg-slate-700/90 text-cyan-300 border border-slate-700/80 text-[11px] font-mono font-medium transition-all"
                  >
                    <Film className="w-3 h-3 text-cyan-400" />
                    <span>EP {currentEpisode.number.toString().padStart(2, '0')}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${episodeMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {episodeMenuOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-72 rounded-2xl bg-slate-900/95 border border-slate-700 shadow-2xl p-2 z-50 backdrop-blur-xl"
                      onMouseLeave={() => setEpisodeMenuOpen(false)}
                    >
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-slate-800 mb-1">
                        Selecione o Episódio
                      </div>
                      {episodes.map(ep => {
                        const isCurrent = ep.id === currentEpisode.id;
                        return (
                          <button
                            key={ep.id}
                            onClick={() => {
                              onSelectEpisode(ep.id);
                              setEpisodeMenuOpen(false);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                              isCurrent 
                                ? 'bg-cyan-500/15 border border-cyan-500/30 text-white' 
                                : 'hover:bg-slate-800 text-slate-300'
                            }`}
                          >
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                              isCurrent ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                            }`}>
                              EP {ep.number.toString().padStart(2, '0')}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold truncate text-slate-100">{ep.title}</p>
                              <p className="text-[10px] text-slate-400 truncate">{ep.tagline}</p>
                            </div>
                            {isCurrent && (
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-400 truncate hidden sm:block font-medium">
                {currentEpisode.title}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('scene')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'scene'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cenas & Arte</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'compare'
                  ? 'bg-gradient-to-r from-cyan-600 to-rose-600 text-white shadow-md shadow-rose-500/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bem vs Mal</span>
              <span className="sm:hidden">Slider</span>
            </button>

            <button
              onClick={() => setActiveTab('script')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'script'
                  ? 'bg-slate-700 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Roteiro & Storyboard</span>
            </button>

            <button
              onClick={() => setActiveTab('thumbnail')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hidden md:flex ${
                activeTab === 'thumbnail'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Thumbnails</span>
            </button>

            <button
              onClick={() => setActiveTab('generator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'generator'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gerador IA</span>
              <span className="sm:hidden">IA</span>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPrompt}
              title="Copiar prompt em inglês da cena selecionada"
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 hidden sm:inline">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Copiar Prompt</span>
                </>
              )}
            </button>

            <button
              onClick={onDownloadCurrent}
              title="Baixar imagem 16:9 em alta resolução"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Baixar Imagem</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

