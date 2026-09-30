import React, { useState, useRef, useEffect } from 'react';
import { 
  SceneItem 
} from '../types';
import { 
  SplitSquareVertical, 
  Sparkles, 
  Flame, 
  BrainCircuit, 
  Download, 
  Play, 
  Pause, 
  Layers, 
  Maximize2 
} from 'lucide-react';

interface DualComparatorProps {
  goodScene: SceneItem;
  badScene: SceneItem;
  onDownloadSplit: (sliderPos: number) => void;
}

export const DualComparator: React.FC<DualComparatorProps> = ({
  goodScene,
  badScene,
  onDownloadSplit,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSweeping, setIsSweeping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-sweep animation
  useEffect(() => {
    if (!isSweeping) return;
    let forward = true;
    const interval = setInterval(() => {
      setSliderPos(pos => {
        if (pos >= 85) forward = false;
        if (pos <= 15) forward = true;
        return forward ? pos + 1 : pos - 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isSweeping]);

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(newPos);
  };

  const handleExportSplitCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgGood = new Image();
    const imgBad = new Image();
    imgGood.crossOrigin = 'anonymous';
    imgBad.crossOrigin = 'anonymous';
    imgGood.src = goodScene.imageUrl;
    imgBad.src = badScene.imageUrl;

    Promise.all([
      new Promise(res => { imgGood.onload = res; }),
      new Promise(res => { imgBad.onload = res; }),
    ]).then(() => {
      // 1. Draw bad side full
      ctx.drawImage(imgBad, 0, 0, 1920, 1080);

      // 2. Clip and draw good side on left
      const splitPx = (sliderPos / 100) * 1920;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, splitPx, 1080);
      ctx.clip();
      ctx.drawImage(imgGood, 0, 0, 1920, 1080);
      ctx.restore();

      // 3. Draw divider line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(splitPx, 0);
      ctx.lineTo(splitPx, 1080);
      ctx.stroke();

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bem-ou-mal-split-comparativo-${sliderPos}pct.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 'image/png');
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-rose-950/40 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 to-rose-500/20 text-slate-200 border border-slate-700">
              ⚖️ O Paradoxo dos Games
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Divisão interativa para B-Roll de YouTube
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            Comparador Visual: O Bem vs O Mal
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Arraste a linha central para transitar entre a cognição de alta performance e a exaustão noturna.
          </p>
        </div>

        {/* Quick Position Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => setSliderPos(20)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-800/60 transition-colors"
          >
            Foco no Mal (80%)
          </button>
          <button
            onClick={() => setSliderPos(50)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            Split 50 / 50
          </button>
          <button
            onClick={() => setSliderPos(80)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950/50 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/60 transition-colors"
          >
            Foco no Bem (80%)
          </button>
          <button
            onClick={() => setIsSweeping(!isSweeping)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isSweeping
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isSweeping ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isSweeping ? 'Pausar Varredura' : 'Auto Varredura'}</span>
          </button>
          <button
            onClick={handleExportSplitCanvas}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Split 16:9</span>
          </button>
        </div>
      </div>

      {/* Main Draggable Split Canvas Viewport */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black select-none cursor-ew-resize shadow-2xl touch-none"
      >
        {/* RIGHT LAYER: O Lado MAL (Full background) */}
        <div className="absolute inset-0">
          <img
            src={badScene.imageUrl}
            alt={badScene.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Label for Mal */}
          <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-rose-500/40 shadow-xl">
            <Flame className="w-4 h-4 text-rose-400" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block">
                O Lado Mal
              </span>
              <span className="text-[10px] text-slate-300 font-mono">
                Exaustão • 4:00 AM • Insônia
              </span>
            </div>
          </div>
        </div>

        {/* LEFT LAYER: O Lado BEM (Clipped by slider position) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-[100vw] max-w-none h-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
            <img
              src={goodScene.imageUrl}
              alt={goodScene.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Label for Bem */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-500/40 shadow-xl pointer-events-none">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                O Lado Bem
              </span>
              <span className="text-[10px] text-slate-300 font-mono">
                Hiperfoco • Luz Azul • Cognição
              </span>
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_3px_rgba(6,182,212,0.8)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-xl flex items-center justify-center text-cyan-400">
            <SplitSquareVertical className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Percentage Pill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-300 pointer-events-none">
          <span className="text-cyan-400 font-bold">{Math.round(sliderPos)}% Bem</span>
          <span className="text-slate-500 mx-2">|</span>
          <span className="text-rose-400 font-bold">{Math.round(100 - sliderPos)}% Mal</span>
        </div>

      </div>

      {/* Comparison Arguments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Good Side Card */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-slate-900/60 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-cyan-300">
                O Lado BEM (Potencial Cognitivo)
              </h3>
              <p className="text-xs text-slate-400">
                Iluminação fria, estratégia mental, conexões neurais rápidas
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span><strong>Resolução de Problemas:</strong> Jogos complexos estimulam raciocínio lógico sob pressão de tempo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span><strong>Orientação Tridimensional:</strong> Melhora substancial na rotação mental e mapas espaciais.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span><strong>Estado de Flow:</strong> Concentração imersiva que desliga distrações mundanas.</span>
            </li>
          </ul>
        </div>

        {/* Bad Side Card */}
        <div className="rounded-2xl border border-rose-500/30 bg-gradient-to-b from-rose-950/20 to-slate-900/60 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-rose-300">
                O Lado MAL (Sobrecarga & Desgaste)
              </h3>
              <p className="text-xs text-slate-400">
                Iluminação vermelha nociva, fadiga biológica, noites sem dormir
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
              <span><strong>Privação Crônica de Sono:</strong> Supressão severa de melatonina pela luz azul às 4 da manhã.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
              <span><strong>Sequestro de Recompensa:</strong> Picos artificiais de dopamina diminuem o prazer em atividades reais.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
              <span><strong>Fadiga do Córtex:</strong> O cérebro esgotado perde a paciência para leituras e trabalho profundo.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
