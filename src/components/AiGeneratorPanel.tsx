import React, { useState } from 'react';
import { 
  CharacterProfile, 
  SceneItem 
} from '../types';
import { 
  Sparkles, 
  Wand2, 
  Image as ImageIcon, 
  RefreshCw, 
  Download, 
  Plus, 
  Check, 
  AlertCircle,
  Copy
} from 'lucide-react';

interface AiGeneratorPanelProps {
  character: CharacterProfile;
  onAddSceneToGallery: (scene: SceneItem) => void;
  defaultPrompt: string;
}

export const AiGeneratorPanel: React.FC<AiGeneratorPanelProps> = ({
  character,
  onAddSceneToGallery,
  defaultPrompt,
}) => {
  const [promptText, setPromptText] = useState(defaultPrompt);
  const [includeCharacterReference, setIncludeCharacterReference] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '1:1' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [generatedResult, setGeneratedResult] = useState<{
    imageUrl: string;
    text?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const activeCharUrl = character.customUploadedUrl || character.referenceImageUrl;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    try {
      const response = await fetch('/api/generate-scene', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          characterImage: includeCharacterReference ? activeCharUrl : undefined,
          aspectRatio,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao gerar imagem.');
      }

      setGeneratedResult({
        imageUrl: data.imageUrl,
        text: data.text,
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Falha ao conectar ao servidor de geração.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddToStudio = () => {
    if (!generatedResult) return;
    const newScene: SceneItem = {
      id: `custom-scene-${Date.now()}`,
      title: 'Nova Cena Gerada por IA com seu Personagem',
      subtitle: 'Composição personalizada criada no estúdio',
      side: 'custom',
      imageUrl: generatedResult.imageUrl,
      promptEn: promptText,
      promptPt: 'Prompt customizado gerado no estúdio Bem ou Mal.',
      narrativeContext: 'Cena gerada sob demanda para o roteiro.',
      cognitiveKeypoints: [
        'Consistência com a imagem do personagem de referência',
        'Enquadramento cinematográfico 16:9 para YouTube',
      ],
      tags: ['IA', '16:9', 'Custom', 'Personagem'],
    };
    onAddSceneToGallery(newScene);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-indigo-950/40 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 inline mr-1" />
              Gemini Image Generation
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Consistência de Personagem + Cenas 16:9
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
            Gerador de Cenas com o seu Personagem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Envie a foto do seu personagem junto com o prompt para gerar novas cenas e variações cinematográficas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Prompt & Character Reference Settings (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Character Reference Attachment Toggle */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40 bg-black shrink-0">
                  <img
                    src={activeCharUrl}
                    alt="Referência"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">
                    {character.customUploadedUrl ? 'Seu Personagem Enviado (Referência Ativa)' : 'Personagem Padrão do Canal'}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    A IA usará o rosto, barba e postura desta imagem como guia estrito.
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeCharacterReference}
                  onChange={(e) => setIncludeCharacterReference(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
          </div>

          {/* Prompt Text Input */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Prompt Cinematográfico da Cena:
              </label>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(promptText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <textarea
              rows={8}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 font-mono leading-relaxed focus:outline-none focus:border-cyan-500"
              placeholder="Descreva a cena desejada em detalhes..."
            />

            {/* Aspect Ratio Selector */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Proporção da Tela:</span>
              <div className="flex items-center gap-2">
                {(['16:9', '1:1', '9:16'] as const).map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                      aspectRatio === ratio
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-xl shadow-indigo-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Gerando Cena Cinematográfica com Gemini...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Gerar Cena 16:9 com a IA</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Column: Generation Result & Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              Resultado da Geração
            </h3>

            {generatedResult ? (
              <div className="space-y-4">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-black">
                  <img
                    src={generatedResult.imageUrl}
                    alt="Cena Gerada"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddToStudio}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar ao Estúdio</span>
                  </button>
                  <a
                    href={generatedResult.imageUrl}
                    download={`cena-gemini-${Date.now()}.png`}
                    className="flex items-center justify-center p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    title="Baixar imagem gerada"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-xl border border-dashed border-slate-800 bg-slate-950/40 flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <Sparkles className="w-8 h-8 mb-2 text-slate-600" />
                <p className="text-xs font-semibold text-slate-400">
                  Nenhuma imagem gerada nesta sessão ainda
                </p>
                <p className="text-[11px] text-slate-600 mt-1 max-w-xs">
                  Clique em &quot;Gerar Cena 16:9 com a IA&quot; para criar uma nova variação mantendo a consistência do seu personagem.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
