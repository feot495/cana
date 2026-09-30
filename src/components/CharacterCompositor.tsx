import React, { useState, useRef, useEffect } from 'react';
import { 
  CharacterProfile, 
  SceneItem, 
  CompositorSettings 
} from '../types';
import { 
  Upload, 
  User, 
  Sliders, 
  Download, 
  RefreshCw, 
  Move, 
  Sparkles, 
  Check, 
  Trash2, 
  Layers, 
  Camera, 
  FlipHorizontal,
  CircleDot,
  Wand2
} from 'lucide-react';

interface CharacterCompositorProps {
  character: CharacterProfile;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterProfile>>;
  currentScene: SceneItem;
  compositorSettings: CompositorSettings;
  setCompositorSettings: React.Dispatch<React.SetStateAction<CompositorSettings>>;
  onGenerateWithAi: () => void;
}

export const CharacterCompositor: React.FC<CharacterCompositorProps> = ({
  character,
  setCharacter,
  currentScene,
  compositorSettings,
  setCompositorSettings,
  onGenerateWithAi,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [activePreset, setActivePreset] = useState<string>('streamer');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const activeCharUrl = character.customUploadedUrl || character.referenceImageUrl;

  // Handle image upload from file or drop
  const handleImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido (PNG, JPEG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        setCharacter(prev => ({
          ...prev,
          customUploadedUrl: e.target?.result as string,
        }));
        // Enable overlay if it was hidden
        if (compositorSettings.opacity === 0) {
          setCompositorSettings(s => ({ ...s, opacity: 0.95 }));
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) handleImageFile(blob);
        break;
      }
    }
  };

  // Presets for placing the character
  const applyPlacementPreset = (preset: string) => {
    setActivePreset(preset);
    switch (preset) {
      case 'streamer-right':
        setCompositorSettings(s => ({
          ...s,
          scale: 0.85,
          posX: 82,
          posY: 75,
          opacity: 0.95,
          blendMode: 'source-over',
          featherEdge: false,
          mirrored: false,
        }));
        break;
      case 'streamer-left':
        setCompositorSettings(s => ({
          ...s,
          scale: 0.85,
          posX: 18,
          posY: 75,
          opacity: 0.95,
          blendMode: 'source-over',
          featherEdge: false,
          mirrored: true,
        }));
        break;
      case 'holographic-center':
        setCompositorSettings(s => ({
          ...s,
          scale: 1.1,
          posX: 50,
          posY: 50,
          opacity: 0.55,
          blendMode: 'screen',
          featherEdge: true,
          mirrored: false,
        }));
        break;
      case 'pip-avatar':
        setCompositorSettings(s => ({
          ...s,
          scale: 0.65,
          posX: 14,
          posY: 22,
          opacity: 0.95,
          blendMode: 'source-over',
          featherEdge: true,
          mirrored: false,
        }));
        break;
      case 'hidden':
        setCompositorSettings(s => ({
          ...s,
          opacity: 0,
        }));
        break;
    }
  };

  // Render high-res composite image to canvas and trigger download
  const handleExportComposite = async () => {
    setExporting(true);
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Não foi possível inicializar o canvas 2D');

      // 1. Draw base scene (1920x1080)
      const baseImg = new Image();
      baseImg.crossOrigin = 'anonymous';
      baseImg.src = currentScene.imageUrl;
      await new Promise((resolve, reject) => {
        baseImg.onload = resolve;
        baseImg.onerror = reject;
      });
      ctx.drawImage(baseImg, 0, 0, 1920, 1080);

      // 2. Draw character overlay if visible
      if (compositorSettings.opacity > 0) {
        const charImg = new Image();
        charImg.crossOrigin = 'anonymous';
        charImg.src = activeCharUrl;
        await new Promise((resolve, reject) => {
          charImg.onload = resolve;
          charImg.onerror = reject;
        });

        ctx.save();
        ctx.globalAlpha = compositorSettings.opacity;
        ctx.globalCompositeOperation = compositorSettings.blendMode;

        const targetCenterX = (compositorSettings.posX / 100) * 1920;
        const targetCenterY = (compositorSettings.posY / 100) * 1080;
        
        // Base dimensions for overlay character (approx 450x450 scaled)
        const charW = 500 * compositorSettings.scale;
        const charH = 500 * compositorSettings.scale;

        ctx.translate(targetCenterX, targetCenterY);
        if (compositorSettings.mirrored) {
          ctx.scale(-1, 1);
        }

        if (compositorSettings.featherEdge) {
          // Circular clip with soft feather
          ctx.beginPath();
          ctx.arc(0, 0, charW / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
        }

        ctx.drawImage(charImg, -charW / 2, -charH / 2, charW, charH);

        // Draw border if not feathered
        if (!compositorSettings.featherEdge) {
          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 4;
          ctx.strokeRect(-charW / 2, -charH / 2, charW, charH);
        }

        ctx.restore();
      }

      // 3. Cinematic letterbox if enabled
      if (compositorSettings.showCinematicBars) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 1920, 108);
        ctx.fillRect(0, 1080 - 108, 1920, 108);
      }

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `composição-bem-ou-mal-personagem-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setExporting(false);
      }, 'image/png');

    } catch (err) {
      console.error('Erro na exportação:', err);
      alert('Erro ao exportar imagem. Tente baixar a cena individual.');
      setExporting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" onPaste={handlePaste}>
      
      {/* Left Column: Character Reference & Upload (5 Cols) */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Upload Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <User className="w-4 h-4 text-cyan-400" />
              Foto do seu Personagem
            </h3>
            {character.customUploadedUrl && (
              <button
                onClick={() => setCharacter(prev => ({ ...prev, customUploadedUrl: null }))}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium transition-colors"
                title="Voltar para o personagem de referência padrão"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Restaurar padrão</span>
              </button>
            )}
          </div>

          {/* Active Portrait Display */}
          <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-cyan-500/40 bg-black">
              <img
                src={activeCharUrl}
                alt="Retrato do personagem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block shadow-sm shadow-emerald-400" />
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="text-sm font-bold text-slate-200 truncate">
                {character.customUploadedUrl ? 'Seu Personagem Enviado' : character.name}
              </h4>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                {character.age}
              </p>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                {character.appearanceSummary}
              </p>
            </div>
          </div>

          {/* Drag & Drop Upload Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-cyan-400 bg-cyan-950/30'
                : 'border-slate-700/80 bg-slate-950/40 hover:border-cyan-500/60 hover:bg-slate-950/70'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleImageFile(e.target.files[0]);
                }
              }}
            />
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center mb-2">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-200">
              Clique ou arraste a foto do seu personagem aqui
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Suporta PNG, JPG, WebP ou cole com <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Ctrl+V</kbd>
            </p>
          </div>

          {/* Consistency Rules Checklist */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
              Regras de Consistência Visual do Personagem:
            </span>
            <div className="space-y-1">
              {character.traits.map((trait, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="line-clamp-1">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action: Generate with AI using this Character */}
          <div className="pt-2">
            <button
              onClick={onGenerateWithAi}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
            >
              <Wand2 className="w-4 h-4" />
              <span>Gerar Nova Cena com a IA usando este Personagem</span>
            </button>
          </div>

        </div>

      </div>

      {/* Right Column: Composite Controls & Live Canvas (7 Cols) */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Placement Presets Toolbar */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Modos de Inserção no Cenário 16:9
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Opacidade: {Math.round(compositorSettings.opacity * 100)}%
            </span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => applyPlacementPreset('streamer-right')}
              className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                activePreset === 'streamer-right' && compositorSettings.opacity > 0
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Canto Direito
            </button>

            <button
              onClick={() => applyPlacementPreset('streamer-left')}
              className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                activePreset === 'streamer-left' && compositorSettings.opacity > 0
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Canto Esquerdo
            </button>

            <button
              onClick={() => applyPlacementPreset('holographic-center')}
              className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                activePreset === 'holographic-center' && compositorSettings.opacity > 0
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Holograma Central
            </button>

            <button
              onClick={() => applyPlacementPreset('hidden')}
              className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                compositorSettings.opacity === 0
                  ? 'border-indigo-500 bg-indigo-950/40 text-indigo-300 font-semibold shadow-sm shadow-indigo-500/20'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Apenas Cenário
            </button>
          </div>

          {/* Fine Tuning Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Horizontal Position X */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Posição Horizontal (X)</span>
                <span className="font-mono text-cyan-400">{compositorSettings.posX}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="95"
                value={compositorSettings.posX}
                onChange={(e) => setCompositorSettings(s => ({ ...s, posX: Number(e.target.value) }))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

            {/* Vertical Position Y */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Posição Vertical (Y)</span>
                <span className="font-mono text-cyan-400">{compositorSettings.posY}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={compositorSettings.posY}
                onChange={(e) => setCompositorSettings(s => ({ ...s, posY: Number(e.target.value) }))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

            {/* Scale */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Tamanho / Escala</span>
                <span className="font-mono text-cyan-400">{compositorSettings.scale.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.3"
                max="1.8"
                step="0.05"
                value={compositorSettings.scale}
                onChange={(e) => setCompositorSettings(s => ({ ...s, scale: Number(e.target.value) }))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

            {/* Opacity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Opacidade</span>
                <span className="font-mono text-cyan-400">{Math.round(compositorSettings.opacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={compositorSettings.opacity}
                onChange={(e) => setCompositorSettings(s => ({ ...s, opacity: Number(e.target.value) }))}
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
            </div>

          </div>

          {/* Toggle Options: Blend Mode & Feather */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCompositorSettings(s => ({ ...s, mirrored: !s.mirrored }))}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  compositorSettings.mirrored
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span>Espelhar Horizontal</span>
              </button>

              <button
                onClick={() => setCompositorSettings(s => ({ ...s, featherEdge: !s.featherEdge }))}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  compositorSettings.featherEdge
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <CircleDot className="w-3.5 h-3.5" />
                <span>Borda Suave / Circular</span>
              </button>
            </div>

            {/* Blend Mode selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Modo:</span>
              <select
                value={compositorSettings.blendMode}
                onChange={(e) => setCompositorSettings(s => ({ ...s, blendMode: e.target.value as any }))}
                className="bg-slate-950 text-xs text-slate-200 border border-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
              >
                <option value="source-over">Normal (Recorte Sólido)</option>
                <option value="screen">Tela (Holográfico Brilhante)</option>
                <option value="overlay">Sobreposição Cinematográfica</option>
                <option value="lighten">Clarear</option>
              </select>
            </div>
          </div>

          {/* Export Action */}
          <div className="pt-2">
            <button
              onClick={handleExportComposite}
              disabled={exporting}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-xl shadow-cyan-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {exporting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Renderizando Composição 1080p...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Baixar Composição 16:9 em Alta Resolução (PNG 1080p)</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
