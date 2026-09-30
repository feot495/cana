import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '25mb' }));

// Initialize GoogleGenAI
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Generate voice narration with Fenrir voice (or other Gemini TTS voices)
app.post('/api/narrate', async (req, res) => {
  try {
    const { text, voice = 'Fenrir', style, speed = 1.2, preferredModel } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Texto para locução é obrigatório.' });
    }

    const ai = getAiClient();
    if (!ai) {
      return res.status(503).json({
        error: 'Chave GEMINI_API_KEY não configurada no servidor.',
      });
    }

    // Clean markdown headings, directives and brackets for natural speech
    const cleanSpeechText = text
      .replace(/#+\s+/g, '') // remove markdown #
      .replace(/\[.*?\]/g, '') // remove bracket directives like [PAUSA DRAMÁTICA]
      .replace(/\*\*/g, '') // remove bold markers
      .replace(/\*/g, '')
      .replace(/---+/g, '')
      .trim();

    if (!cleanSpeechText) {
      return res.status(400).json({ error: 'Texto limpo para áudio está vazio.' });
    }

    // Deep, immersive psychological documentary narrator voice (original authentic sound)
    const originalDeepNarratorStyle = 'A deeply immersive, calm, psychological, mysterious and intense YouTube documentary narrator voice.';

    const requestPayload = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: cleanSpeechText,
              speechMetadata: {
                style: style || originalDeepNarratorStyle,
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice || 'Fenrir' },
          },
        },
      },
    };

    // Primary & secondary models using the original authentic style
    const primaryModel = preferredModel || 'gemini-3.8-flash-lite-tts';
    const fallbackModel = primaryModel === 'gemini-3.8-flash-lite-tts' ? 'gemini-3.8-flash-tts' : 'gemini-3.8-flash-lite-tts';

    let response;
    let usedModel = primaryModel;

    try {
      response = await ai.models.generateContent({
        model: primaryModel,
        ...requestPayload,
      });
    } catch (primaryError: any) {
      const isQuotaError = primaryError?.message?.includes('429') ||
                           primaryError?.message?.includes('quota') ||
                           primaryError?.message?.includes('RESOURCE_EXHAUSTED');

      if (isQuotaError) {
        console.log(`Primary model ${primaryModel} reached quota limit, executing fallback to ${fallbackModel}...`);
        usedModel = fallbackModel;
        try {
          response = await ai.models.generateContent({
            model: fallbackModel,
            ...requestPayload,
          });
        } catch (fallbackError: any) {
          console.error(`Fallback to ${fallbackModel} also failed:`, fallbackError?.message);
          throw fallbackError;
        }
      } else {
        throw primaryError;
      }
    }

    const candidatePart = response.candidates?.[0]?.content?.parts?.[0];
    const base64Audio = candidatePart?.inlineData?.data;
    const mimeType = candidatePart?.inlineData?.mimeType || 'audio/wav';

    if (!base64Audio) {
      return res.status(500).json({
        error: 'O modelo TTS não retornou os dados de áudio.',
      });
    }

    res.json({
      success: true,
      audioData: `data:${mimeType};base64,${base64Audio}`,
      voice: voice || 'Fenrir',
      usedModel,
      mimeType,
      textLength: cleanSpeechText.length,
    });
  } catch (error: any) {
    console.error('Error generating Fenrir narration:', error);

    const errorMessage = error?.message || '';
    const isQuota = errorMessage.includes('429') || 
                    errorMessage.includes('quota') || 
                    errorMessage.includes('RESOURCE_EXHAUSTED') ||
                    errorMessage.includes('exceeded your current quota');

    // Extract retry delay if available in message (e.g. "Please retry in 13.386584001s")
    let retryAfter = 14;
    const retryMatch = errorMessage.match(/retry in\s+([\d\.]+)s/i);
    if (retryMatch && retryMatch[1]) {
      retryAfter = Math.ceil(parseFloat(retryMatch[1])) + 1;
    }

    if (isQuota) {
      return res.status(429).json({
        isQuota: true,
        retryAfter,
        error: `Limite de requisições temporário do Gemini atingido. Aguarde ${retryAfter} segundos ou use a narração nativa do navegador.`,
        details: errorMessage,
      });
    }

    res.status(500).json({
      isQuota: false,
      error: errorMessage || 'Erro ao gerar locução com a voz Fenrir.',
    });
  }
});

// Generate or Edit Scene with Character Reference
app.post('/api/generate-scene', async (req, res) => {
  try {
    const { prompt, characterImage, aspectRatio = '16:9' } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getAiClient();
    if (!ai) {
      return res.status(503).json({
        error: 'Chave GEMINI_API_KEY não configurada no ambiente. Usando cenários renderizados de alta resolução.',
        hasApiKey: false,
      });
    }

    const parts: any[] = [];

    // If user provided a base64 character image reference
    if (characterImage && typeof characterImage === 'string') {
      const matches = characterImage.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        parts.push({
          inlineData: {
            mimeType: matches[1],
            data: matches[2],
          },
        });
      }
    }

    parts.push({
      text: prompt,
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-image',
      contents: {
        parts,
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
        },
      },
    });

    let imageUrl = '';
    let responseText = '';

    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType || 'image/jpeg'};base64,${part.inlineData.data}`;
        } else if (part.text) {
          responseText += part.text;
        }
      }
    }

    if (!imageUrl) {
      return res.status(500).json({
        error: 'O modelo não retornou dados de imagem válidos.',
        details: responseText,
      });
    }

    res.json({
      success: true,
      imageUrl,
      text: responseText,
    });
  } catch (error: any) {
    console.error('Error generating scene:', error);
    res.status(500).json({
      error: error.message || 'Erro ao gerar imagem com o modelo Gemini.',
    });
  }
});

// Prompt helper / video essay script helper
app.post('/api/script-helper', async (req, res) => {
  try {
    const { topic, side = 'both' } = req.body;
    const ai = getAiClient();

    if (!ai) {
      return res.status(503).json({ error: 'GEMINI_API_KEY não configurada' });
    }

    const promptText = `Você é o roteirista principal do canal do YouTube "Bem ou Mal", que analisa os dois lados de hábitos e tecnologias.
Crie ideias de cenas visuais e trecho de roteiro para o tema: "${topic || 'Videogames: Foco mental vs Exaustão'}".
Foco de análise: ${side}.
Responda em formato JSON com a seguinte estrutura:
{
  "hook": "Gancho instigante para o início do vídeo",
  "goodSide": {
    "title": "O Lado Bom (Benefícios)",
    "points": ["ponto 1", "ponto 2", "ponto 3"],
    "visualScenePrompt": "Prompt visual detalhado em inglês para IA cinematográfica 16:9"
  },
  "badSide": {
    "title": "O Lado Mal (Prejuízos)",
    "points": ["ponto 1", "ponto 2", "ponto 3"],
    "visualScenePrompt": "Prompt visual detalhado em inglês para IA cinematográfica 16:9"
  },
  "thumbnailIdea": "Conceito de thumbnail contrastante para alta taxa de cliques (CTR)"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: promptText,
      config: {
        responseMimeType: 'application/json',
      },
    });

    res.json({ result: JSON.parse(response.text || '{}') });
  } catch (error: any) {
    console.error('Error in script helper:', error);
    res.status(500).json({ error: error.message });
  }
});

// Setup Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
