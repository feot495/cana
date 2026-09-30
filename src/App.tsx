/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  SceneItem, 
  CharacterProfile, 
  CompositorSettings,
  Episode
} from './types';
import { 
  PRESET_SCENES, 
  INITIAL_CHARACTER 
} from './data/presetData';
import { 
  EPISODES_CATALOG, 
  getScenesForEpisode 
} from './data/episodes';
import { Navbar } from './components/Navbar';
import { SceneViewer } from './components/SceneViewer';
import { CharacterCompositor } from './components/CharacterCompositor';
import { DualComparator } from './components/DualComparator';
import { ThumbnailSimulator } from './components/ThumbnailSimulator';
import { ScriptStoryboard } from './components/ScriptStoryboard';
import { AiGeneratorPanel } from './components/AiGeneratorPanel';
import { 
  Film, 
  Layers, 
  SplitSquareVertical, 
  FileText, 
  Youtube, 
  Sparkles,
  Info,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'scene' | 'compare' | 'script' | 'thumbnail' | 'generator'>('scene');
  const [currentEpisodeId, setCurrentEpisodeId] = useState<string>('ep-2-mentir');
  
  const currentEpisode = EPISODES_CATALOG.find(e => e.id === currentEpisodeId) || EPISODES_CATALOG[0];
  const [scenes, setScenes] = useState<SceneItem[]>(getScenesForEpisode(currentEpisode.id));
  const [currentScene, setCurrentScene] = useState<SceneItem>(scenes[0] || PRESET_SCENES[0]);
  const [character, setCharacter] = useState<CharacterProfile>(INITIAL_CHARACTER);

  const [compositorSettings, setCompositorSettings] = useState<CompositorSettings>({
    scale: 0.85,
    posX: 82,
    posY: 75,
    opacity: 0, // 0 = viewing pure scene, can be turned on or adjusted in compositor tab
    blendMode: 'source-over',
    featherEdge: false,
    mirrored: false,
    showSafeZone: false,
    showCinematicBars: false,
  });

  const handleSelectEpisode = (episodeId: string) => {
    setCurrentEpisodeId(episodeId);
    const episodeScenes = getScenesForEpisode(episodeId);
    setScenes(episodeScenes);
    setCurrentScene(episodeScenes[0]);
  };

  const goodScene = scenes.find(s => s.side === 'good') || scenes[0];
  const badScene = scenes.find(s => s.side === 'bad') || scenes[1] || scenes[0];

  const handleDownloadCurrent = () => {
    const a = document.createElement('a');
    a.href = currentScene.imageUrl;
    a.download = `bem-ou-mal-${currentScene.id}-16x9.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleAddSceneToGallery = (newScene: SceneItem) => {
    setScenes(prev => [newScene, ...prev]);
    setCurrentScene(newScene);
    setActiveTab('scene');
  };

  const handleSelectSceneById = (sceneId: string) => {
    const found = scenes.find(s => s.id === sceneId);
    if (found) {
      setCurrentScene(found);
      setActiveTab('scene');
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e2e8f0] flex flex-col bg-grid-subtle">
      
      {/* Top Navbar with Episode Selector */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentScene={currentScene}
        onDownloadCurrent={handleDownloadCurrent}
        episodes={EPISODES_CATALOG}
        currentEpisode={currentEpisode}
        onSelectEpisode={handleSelectEpisode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* Episode Quick Switcher Header Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden shrink-0 shadow-lg">
              <img 
                src={currentEpisode.coverImageUrl} 
                alt={currentEpisode.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  EPISÓDIO {currentEpisode.number.toString().padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentEpisode.number === 2 ? '🔥 NOVO EPISÓDIO' : 'EPISÓDIO 1'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
                {currentEpisode.title}
              </h2>
              <p className="text-xs text-slate-400">
                {currentEpisode.question}
              </p>
            </div>
          </div>

          {/* Quick Switch Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {EPISODES_CATALOG.map(ep => {
              const isActive = ep.id === currentEpisode.id;
              return (
                <button
                  key={ep.id}
                  onClick={() => handleSelectEpisode(ep.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>EP {ep.number}: {ep.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* TAB 1: Main Scene Viewer & Character Compositor */}
        {activeTab === 'scene' && (
          <div className="space-y-10">
            <SceneViewer
              currentScene={currentScene}
              allScenes={scenes}
              character={character}
              compositorSettings={compositorSettings}
              setCompositorSettings={setCompositorSettings}
              onSelectScene={(scene) => setCurrentScene(scene)}
              onOpenCompositor={() => {
                const el = document.getElementById('character-compositor-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Character Inserter & Upload Section */}
            <div id="character-compositor-section" className="pt-6 border-t border-slate-800/80">
              <div className="mb-4">
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                  Customização do Personagem
                </span>
                <h3 className="text-xl font-bold text-slate-100">
                  Coloque a Foto do Seu Personagem no Cenário
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Faça upload da foto do personagem que vocês criaram ou ajuste a posição, escala e modo de mesclagem sobre o cenário 16:9.
                </p>
              </div>

              <CharacterCompositor
                character={character}
                setCharacter={setCharacter}
                currentScene={currentScene}
                compositorSettings={compositorSettings}
                setCompositorSettings={setCompositorSettings}
                onGenerateWithAi={() => setActiveTab('generator')}
              />
            </div>
          </div>
        )}

        {/* TAB 2: Bem vs Mal (Dual Comparator) */}
        {activeTab === 'compare' && (
          <DualComparator
            goodScene={goodScene}
            badScene={badScene}
            onDownloadSplit={(pos) => {}}
          />
        )}

        {/* TAB 3: Script & Video Beats */}
        {activeTab === 'script' && (
          <ScriptStoryboard
            beats={currentEpisode.scriptBeats}
            allScenes={scenes}
            onSelectSceneById={handleSelectSceneById}
            activeSceneId={currentScene.id}
            currentEpisode={currentEpisode}
          />
        )}

        {/* TAB 4: YouTube Thumbnail Simulator */}
        {activeTab === 'thumbnail' && (
          <ThumbnailSimulator
            currentScene={currentScene}
            allScenes={scenes}
            character={character}
            onSelectScene={(scene) => setCurrentScene(scene)}
            currentEpisode={currentEpisode}
          />
        )}

        {/* TAB 5: AI Generator Panel */}
        {activeTab === 'generator' && (
          <AiGeneratorPanel
            character={character}
            onAddSceneToGallery={handleAddSceneToGallery}
            defaultPrompt={currentScene.promptEn}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#06080d] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-slate-300">BEM OU MAL</span>
            <span>•</span>
            <span>Estúdio Visual para Produção de Vídeos no YouTube (16:9 4K)</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Formato: 16:9 • Sem marcas d&apos;água • Gráficos Prontos</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

