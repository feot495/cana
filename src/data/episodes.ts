import { Episode } from '../types';
import { PRESET_SCENES, VIDEO_SCRIPT_BEATS } from './presetData';
import { 
  EPISODE_2_SCENES, 
  EPISODE_2_SCRIPT_BEATS, 
  EPISODE_2_FULL_SCRIPT 
} from './episode2MentirData';

export const EPISODE_1_FULL_SCRIPT = `# 🎬 VIDEOGAME: BEM OU MAL?

### [ABERTURA — O PARADOXO DOS JOGOS DIGITAIS]
Você já se pegou às 3 da manhã jogando mais uma partida e se perguntou:
isso está deixando o meu cérebro mais ágil ou simplesmente destruindo a minha rotina?

Seja muito bem-vindo ao canal **BEM OU MAL**.
Hoje vamos analisar a fundo a ciência, a psicologia e os impactos reais dos videogames no cérebro, na produtividade e na vida humana.

---

### [ATO 1 — O LADO BEM: NEUROPLASTICIDADE E FOCO]
Estudos de neurociência mostram que jogos estratégicos ativam o córtex pré-frontal, melhorando a tomada de decisão rápida, a visão espacial e os reflexos motores finos.
Além disso, jogos cooperativos conectam milhões de pessoas pelo mundo, criando laços de amizade e cooperação à distância.

---

### [ATO 2 — O LADO MAL: A ESPIRAL DA DOPAMINA E ISOLAMENTO]
Por outro lado, o design dos jogos modernos é milimetricamente planejado para sequestrar o sistema de recompensa dopaminérgico.
O quarto escuro às 4 da manhã, cadernos intocados, trabalhos acumulados e a sensação de se tornar um passageiro da própria vida.

---

### [O VEREDITO FINAL]
Videogame não é o vilão e nem o salvador da pátria: é um multiplicador da sua disciplina.
Use como academia para a mente, não como anestésico para a realidade.

O controle está na sua mão... ou você virou um NPC?
`;

export const EPISODES_CATALOG: Episode[] = [
  {
    id: 'ep-2-mentir',
    number: 2,
    title: 'Mentir Faz Bem ou Mal?',
    shortTitle: 'Mentir: Bem ou Mal?',
    tagline: 'Onde está a linha entre proteção e prisão?',
    question: 'Toda mentira é realmente ruim ou existem mentiras por amor?',
    coverImageUrl: '/src/assets/images/thumb_mentir_bem_ou_mal_1790804279454.jpg',
    fullScriptText: EPISODE_2_FULL_SCRIPT,
    scriptBeats: EPISODE_2_SCRIPT_BEATS,
    defaultSceneId: 'thumb-mentir-bem-ou-mal-oficial',
  },
  {
    id: 'ep-1-videogame',
    number: 1,
    title: 'Videogame: Bem ou Mal?',
    shortTitle: 'Videogames: Bem ou Mal?',
    tagline: 'Neuroplasticidade ou Aprisionamento Dopaminérgico?',
    question: 'Você está no controle ou virou um NPC do próprio jogo?',
    coverImageUrl: '/src/assets/images/thumb_videogame_bem_ou_mal_clique_1790644827065.jpg',
    fullScriptText: EPISODE_1_FULL_SCRIPT,
    scriptBeats: VIDEO_SCRIPT_BEATS,
    defaultSceneId: 'thumb-videogame-bem-ou-mal-clique-scene',
  },
];

export const getScenesForEpisode = (episodeId: string) => {
  if (episodeId === 'ep-2-mentir') {
    return EPISODE_2_SCENES;
  }
  return PRESET_SCENES;
};
