import { SceneItem, CharacterProfile, ScriptBeat } from '../types';

export const INITIAL_CHARACTER: CharacterProfile = {
  name: 'O Protagonista Ilustrado (Cartoon)',
  age: 'Homem maduro estilizado, ~38 anos',
  role: 'Avatar Ilustrado do Canal Bem ou Mal',
  referenceImageUrl: '/src/assets/images/cartoon_character_avatar_1790633685982.jpg',
  appearanceSummary: 'Personagem DESENHADO / CARTOON ilustrado, estilo animação cinematográfica madura e graphic novel digital. Traços nítidos de desenho, cabelo escuro alinhado, barba bem desenhada e moletom cinza chumbo.',
  traits: [
    'Estilo estritamente DESENHADO / CARTOON estilizado (sem fotorrealismo)',
    'Traço de animação madura com contornos limpos e sombreamento digital',
    'Barba alinhada e cabelo escuro consistente com o avatar',
    'Iluminação ilustrada com recorte azul ciano volumétrico',
  ],
  customUploadedUrl: null,
};

export const PRESET_SCENES: SceneItem[] = [
  {
    id: 'cover-tiktok-videogame-bem-ou-mal-scene',
    title: 'Capa Viral TikTok / Shorts: VIDEOGAME: BEM OU MAL? (9:16)',
    subtitle: 'Capa Vertical 9:16 • Close extremo frontal, controle em destaque, divisão vertical azul vs. vermelho e tipografia massiva mobile',
    side: 'dual',
    imageUrl: '/src/assets/images/cover_tiktok_videogame_bem_ou_mal_1790647028496.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma capa altamente clicável para o TikTok em formato vertical 9:16.
PERSONAGEM DE DESENHO / CARTOON ILUSTRADO. NÃO transforme o personagem em humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Mostre o mesmo personagem masculino em um close extremo da câmera, centralizado, com uma expressão intensa e questionadora, olhando diretamente para o espectador.
Ele está segurando um controle de videogame de forma proeminente à sua frente.
O fundo é dramaticamente dividido em dois lados contrastantes:
LADO ESQUERDO — BEM: Iluminação azul fria e branca poderosa, conquistas de videogame, símbolos sutis de estratégia, criatividade, amizade e vitória. Atraente e enérgico.
LADO DIREITO — MAL: Iluminação preta profunda e vermelha escura, correntes sutis ao redor do controle, relógio marcando tarde da noite, livros abandonados e sinais de excesso nos jogos.
O personagem está exatamente entre os dois lados.
Adicione tipografia ENORME, em negrito e altamente legível na parte superior:
"VIDEOGAME"
"BEM OU MAL?"
Faça "BEM" em branco e "MAL" em vermelho escuro.
Na parte inferior, inclua sutilmente a identidade do canal:
"BEM OU MAL?" com tipografia de pincelada cinematográfica do logotipo.
Estilo: documentário psicológico escuro, ilustração madura de graphic novel, formato vertical 9:16.
SEM OUTRO TEXTO. SEM LEGENDAS. SEM MARCA D'ÁGUA. SEM LOGOS ADICIONAIS.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror, texto extra, legendas, logo adicional, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a highly clickable TikTok cover in vertical 9:16 format.

DRAWN / ILLUSTRATED CARTOON CHARACTER.
Do NOT transform the character into a real human, photorealistic person, live-action actor or photograph.

Show the same male character extremely close to the camera, centered, with an intense and questioning expression, looking directly at the viewer.

He is holding a videogame controller prominently in front of him.

The background is dramatically divided into two contrasting sides:

LEFT SIDE — BEM:
Powerful cool blue and white lighting, videogame achievements, subtle symbols of strategy, creativity, friendship and victory. Attractive and energetic.

RIGHT SIDE — MAL:
Deep black and dark red lighting, subtle chains around the controller, a clock showing late night, abandoned books and signs of excessive gaming. Dark, psychologically unsettling but realistic.

The character stands exactly between the two sides, representing the question of whether videogames are good or bad depending on how they are used.

Add HUGE, bold, highly readable typography in the upper portion:

“VIDEOGAME”
“BEM OU MAL?”

Make “BEM” white and “MAL” deep red.

The text must be extremely clear on a smartphone screen and occupy a strong portion of the composition.

At the bottom, subtly include the channel identity:

“BEM OU MAL?”

Use the same gritty, sophisticated brush typography from the channel logo.

STYLE:
Dark cinematic psychological documentary.
Premium graphic-novel illustration.
High contrast.
Deep black and charcoal.
Cool blue versus restrained dark red.
Dramatic cinematic lighting.
Sharp facial expression.
Strong depth.
Professional viral TikTok cover aesthetic.
Mysterious, provocative and immediately understandable.

IMPORTANT:
The thumbnail must communicate the entire question instantly:
“VIDEOGAME: BEM OU MAL?”

No other text.
No subtitles.
No random letters.
No watermark.
No additional logos.
No photorealism.
No excessive neon.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, horror, extra text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'A capa vertical definitiva desenvolvida sob medida para a retenção em feeds verticais (TikTok, YouTube Shorts e Instagram Reels): close extremo magnético, contraste agressivo 50/50 e tipografia massiva que prende a atenção antes mesmo do primeiro segundo de vídeo.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Formato nativo vertical 9:16 para TikTok, YouTube Shorts e Reels',
      'Close dramático e frontal com olhar magnético de questionamento',
      'O controle de videogame em primeiro plano com correntes de sombras de um lado e feixes de energia azul do outro',
      'Tipografia massiva e ultralegível no topo: "VIDEOGAME BEM OU MAL?" com BEM em branco e MAL em vermelho escuro',
      'Assinatura oficial de rodapé "BEM OU MAL?" em pincelada gráfica',
      'Zero poluição de legendas ou marcas d\'água',
    ],
    tags: ['Capa TikTok 9:16', 'Shorts & Reels', 'VIDEOGAME: BEM OU MAL?', 'Vertical Viral', '9:16'],
  },
  {
    id: 'thumb-voce-virou-um-npc-scene',
    title: 'Thumbnail Provocativa: VOCÊ VIROU UM NPC?',
    subtitle: 'Capa Mais Misteriosa 16:9 • O duplo translúcido no piloto automático ao fundo, o protagonista desperto em primeiro plano e a pergunta provocativa',
    side: 'dual',
    imageUrl: '/src/assets/images/thumb_voce_virou_um_npc_1790645008563.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie a thumbnail mais misteriosa e provocativa das três.
Thumbnail para YouTube 16:9.
PERSONAGEM DE DESENHO / CARTOON ILUSTRADO. NÃO fotorrealista, NÃO humano real, NÃO live-action.
Mostre o mesmo personagem masculino em pé em primeiro plano, olhando diretamente para o espectador com uma expressão séria e ligeiramente surpresa/desperta.
Atrás dele há um mundo gigantesco no estilo videogame.
De um lado, mostre a vida real do personagem: trabalho, relacionamentos, saúde, estudos e responsabilidades cotidianas.
Do outro lado, mostre um mundo virtual com níveis brilhantes, conquistas, barras de XP e um personagem progredindo infinitamente.
Ao fundo, crie uma versão translúcida do próprio personagem principal caminhando automaticamente por um caminho pré-determinado de videogame, como um NPC seguindo instruções mecânicas.
O personagem em primeiro plano está parado, segurando o controle e olhando para o espectador, como se perguntasse:
"EU ESTOU ESCOLHENDO... OU APENAS SEGUINDO O JOGO?"
Adicione tipografia cinematográfica grande:
"VOCÊ VIROU UM NPC?"
Tipografia branca com "NPC?" em vermelho escuro.
Atmosfera cinematográfica escura, fundo preto e carvão, iluminação azul do jogo, toques sutis de vermelho, iluminação volumétrica dramática, estilo de documentário psicológico.
Sem outro texto. Sem legendas. Sem marca d'água. Sem logos. Sem letras aleatórias.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror, texto extra, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create the most mysterious and provocative thumbnail of the three.

16:9 YouTube thumbnail.
DRAWN / ILLUSTRATED CARTOON CHARACTER.
NOT photorealistic, NOT a real human, NOT live-action.

Show the same male character standing in the foreground, looking directly toward the viewer with a serious and slightly surprised expression.

Behind him is a gigantic videogame-style world.

On one side, show the character's real life: work, relationships, health, studies and everyday responsibilities.

On the other side, show a virtual videogame world with glowing levels, achievements, XP bars and a character progressing endlessly.

In the background, create a translucent version of the main character walking automatically along a predetermined videogame path, like an NPC following instructions.

The foreground character is standing still, holding the controller and looking at the viewer, as if asking:

“EU ESTOU ESCOLHENDO... OU APENAS SEGUINDO O JOGO?”

Make the NPC silhouette clearly recognizable but subtle.

Add large cinematic typography:

“VOCÊ VIROU UM NPC?”

White typography with “NPC” in deep red.

Dark cinematic atmosphere, black and charcoal background, cool blue videogame illumination, subtle red accents, dramatic volumetric light, mature graphic-novel illustration, psychological documentary style, premium YouTube thumbnail.

The image must create immediate curiosity and make the viewer want to click to discover what the question means.

No other text.
No subtitles.
No watermark.
No logos.
No random letters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, horror, extra text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'A capa com maior poder de curiosidade psicológica (alto CTR orgânico): o avatar encara o espectador como se tivesse acabado de despertar de uma simulação, enquanto seu próprio clone fantasmagórico continua caminhando no piloto automático como um NPC.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Olhar frontal com expressão de choque lúcido e despertar da consciência',
      'O clone translúcido do próprio personagem ao fundo andando em uma trilha automática de NPC',
      'Divisão de mundos: a vida real cotidiana de um lado vs. o universo de barras de XP e níveis virtuais do outro',
      'Tipografia cinematográfica gigante: "VOCÊ VIROU UM NPC?" com "NPC?" em vermelho carmim vibrante',
      'Gatilho irresistível de curiosidade para YouTube (Mobile, Desktop e Smart TV)',
      'Sem textos adicionais, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Thumbnail Provocativa', 'VOCÊ VIROU UM NPC?', 'O Duplo Fantasma', 'Alto CTR', '16:9'],
  },
  {
    id: 'thumb-voce-esta-no-controle-scene',
    title: 'Thumbnail Psicológica: VOCÊ ESTÁ NO CONTROLE?',
    subtitle: 'Capa Cinematográfica 16:9 • Close dramático, controle em primeiro plano com cordas de marionete rompendo e a pergunta decisiva',
    side: 'dual',
    imageUrl: '/src/assets/images/thumb_voce_esta_no_controle_1790644937758.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma thumbnail para o YouTube extremamente cinematográfica e psicologicamente intrigante, 16:9.
PERSONAGEM DE DESENHO / CARTOON ILUSTRADO. NÃO torne o personagem fotorrealista nem o transforme em uma pessoa real.
Mostre o mesmo personagem masculino em um close dramático extremamente próximo da câmera, segurando um controle de videogame firmemente em sua mão.
Seu rosto é sério e pensativo, olhando diretamente para o espectador.
Atrás dele, crie uma metáfora visual dramática:
de um lado, o mundo do videogame é azul brilhante, atraente e cheio de conquistas;
do outro lado, a vida real é mais escura, mostrando um livro inacabado, contas não pagas, um relógio, mensagens não respondidas e responsabilidades.
O controle deve ser o elemento visual central.
Fios invisíveis sutis conectados ao controle parecem estar se quebrando em partículas/fagulhas brilhantes, sugerindo que o personagem está retomando o controle de sua vida.
Adicione texto cinematográfico grande e em negrito:
"VOCÊ ESTÁ NO CONTROLE?"
Use letras brancas com a palavra essencial em vermelho escuro: "CONTROLE".
Fundo carvão escuro, luz azul suave do jogo, toques contidos de vermelho escuro, iluminação dramática, estética madura de graphic novel.
Sem outros textos. Sem legendas. Sem marca d'água. Sem logos. Sem letras aleatórias.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror, texto extra, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create an extremely cinematic and psychologically intriguing YouTube thumbnail, 16:9.

DRAWN / ILLUSTRATED CARTOON CHARACTER.
Do NOT make the character photorealistic or transform him into a real person.

Show the same male character extremely close to the camera, holding a videogame controller firmly in his hand.

His face is serious and thoughtful, looking directly at the viewer.

Behind him, create a dramatic visual metaphor:
on one side, the videogame world is bright blue, attractive and full of achievements;
on the other side, real life is darker, showing an unfinished book, unpaid bills, a clock, unanswered messages and responsibilities.

The controller should be the central visual element.

Subtle invisible strings connected to the controller appear to be breaking, suggesting the character is taking back control.

Add large, bold cinematic text:

“VOCÊ ESTÁ NO CONTROLE?”

Use white lettering with one important word in deep red:

“CONTROLE”

Dark charcoal background, cool blue gaming light, restrained dark red accents, subtle golden highlights, dramatic shadows, mature graphic-novel illustration, premium psychological documentary aesthetic.

Make the image immediately understandable and emotionally provocative at thumbnail size.

No other text.
No subtitles.
No watermark.
No logos.
No random letters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, horror, extra text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'O questionamento psicológico supremo: encarando o espectador em close dramático, o protagonista segura o controle enquanto as cordas invisíveis de manipulação se rompem. A thumbnail incita o espectador a refletir se ele comanda seu próprio tempo ou se é controlado por estímulos algorítmicos.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Enquadramento frontal em close intenso, com contato visual direto e penetrante',
      'O controle de videogame em primeiro plano com linhas sutis de marionete se quebrando em fagulhas',
      'Metáfora de fundo: conquistas virtuais em azul ciano vs. contas, livros inacabados e relógio na escuridão',
      'Tipografia cinematográfica potente: "VOCÊ ESTÁ NO CONTROLE?" com "CONTROLE" em vermelho carmim',
      'Altíssimo magnetismo para miniatura do YouTube em desktops, TVs e dispositivos móveis',
      'Zero textos adicionais, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Thumbnail Psicológica', 'VOCÊ ESTÁ NO CONTROLE?', 'Rompendo as Cordas', 'Close Dramático', '16:9'],
  },
  {
    id: 'thumb-videogame-bem-ou-mal-clique-scene',
    title: 'Thumbnail Principal: VIDEOGAME: BEM OU MAL? (Alto CTR)',
    subtitle: 'Capa Oficial 16:9 • Alto impacto visual para mobile, rosto em conflito no centro, divisão ciano vs. carmim e tipografia cinematográfica gigante',
    side: 'dual',
    imageUrl: '/src/assets/images/thumb_videogame_bem_ou_mal_clique_1790644827065.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma thumbnail para o YouTube com alto poder de clique (alto CTR), 16:9, em estilo de DESENHO / CARTOON ILUSTRADO premium. NÃO fotorrealista, NÃO humano real, NÃO live-action.
Mostre o mesmo personagem masculino no centro, olhando diretamente para o espectador com uma expressão séria e conflitante.
Divida todo o fundo em dois lados poderosos:
LADO ESQUERDO — BEM:
Iluminação azul fria e branca, controle de videogame, símbolos sutis de inteligência, estratégia, amizade, conquista e criatividade. A atmosfera parece empolgante e positiva.
LADO DIREITO — MAL:
Iluminação preta profunda e vermelha escura, controle cercado por correntes sutis como sombras, livros abandonados, relógio marcando tarde da noite, isolamento e perda de controle.
O contraste deve ser imediato e visualmente compreensível até mesmo como uma miniatura pequena no celular.
Adicione uma tipografia cinematográfica gigante:
"VIDEOGAME"
e embaixo:
"BEM OU MAL?"
BEM em branco.
MAL em vermelho escuro.
Faça o personagem sobrepor-se levemente aos dois lados, representando a pergunta central.
Estética de documentário psicológico escuro, ilustração madura de graphic novel, iluminação dramática, alto contraste, thumbnail premium do YouTube, ponto focal extremamente nítido, forte expressão facial, visualmente marcante.
Sem texto extra. Sem legendas. Sem marca d'água. Sem letras aleatórias.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror grotesco, texto extra, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a highly clickable YouTube thumbnail, 16:9, in a premium DRAWN / ILLUSTRATED CARTOON style. NOT photorealistic, NOT a real human, NOT live-action.

Show the same male character in the center, looking directly at the viewer with a serious, conflicted expression.

Split the entire background into two powerful sides:

LEFT SIDE — BEM:
Cool blue and white lighting, videogame controller, subtle symbols of intelligence, strategy, friendship, achievement and creativity. The atmosphere feels exciting and positive.

RIGHT SIDE — MAL:
Deep black and dark red lighting, controller surrounded by subtle shadow-like chains, abandoned books, clock showing late night, isolation and loss of control.

The contrast must be immediate and visually understandable even as a small thumbnail.

Add huge cinematic typography:

“VIDEOGAME”
and underneath:
“BEM OU MAL?”

BEM in white.
MAL in deep red.

Make the character overlap slightly between the two sides, representing the central question.

Dark cinematic psychological documentary aesthetic, mature graphic-novel illustration, dramatic lighting, high contrast, premium YouTube thumbnail, extremely sharp focal point, strong facial expression, visually striking.

No extra text.
No subtitles.
No watermark.
No random letters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, grotesque horror, extra text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'A miniatura definitiva desenvolvida para converter cliques no YouTube: rosto frontal magnético com conflito psicológico palpável, divisão cromática instantânea entre azul elétrico e vermelho carmim, e tipografia em grande escala perfeitamente legível na timeline do celular.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Enquadramento frontal em close/médio plano com forte apelo magnético e olhar direto na câmera',
      'Divisão bipolar instantânea: lado azul construtivo vs. lado vermelho de perda de controle',
      'Tipografia massiva e nítida "VIDEOGAME BEM OU MAL?" com BEM em branco e MAL em vermelho intenso',
      'Legibilidade testada para telas reduzidas de smartphones e smart TVs',
      'Zero textos espúrios, sem legendas desnecessárias e sem marcas d\'água',
    ],
    tags: ['Thumbnail Oficial', 'Alto CTR', 'VIDEOGAME: BEM OU MAL?', 'Divisão 50/50', '16:9'],
  },
  {
    id: 'youtube-outro-scene-inscreva-se',
    title: 'Encerramento & Chamada: BEM OU MAL? • INSCREVA-SE',
    subtitle: 'Tela Final / Outro 16:9 • O apresentador se despede com gesto acolhedor, branding do canal e botão de inscrição',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_youtube_outro_inscreva_se_1790640265209.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma CENA FINAL DE DESPEDIDA / ENCERRAMENTO (OUTRO) para um vídeo do YouTube.
PERSONAGEM DE DESENHO / CARTOON ILUSTRADO. NÃO transforme em humano real, pessoa fotorrealista ou fotografia.
O mesmo personagem masculino ilustrado está sentado confortavelmente em sua cadeira gamer, ligeiramente virado para o espectador, com uma expressão calma, confiante e um sorriso genuíno sutil. Ele acabou de concluir uma conversa profunda com o público e agora está se despedindo.
O monitor do videogame permanece atrás dele emitindo uma luz azul suave, enquanto uma luz dourada quente sutil ilumina o personagem pela lateral, criando sensação de aconchego, conexão e fechamento.
Na mesa: fones de ouvido, controle de videogame, uma pequena xícara de café.
O personagem gesticula naturalmente em direção ao espectador com uma mão aberta, como se convidasse o público a participar do debate e compartilhar sua história nos comentários.
Inclua sutilmente bolhas de fala abstratas flutuando perto da parte inferior (sem textos legíveis falsos).
Inclua um botão vermelho de inscrição no estilo YouTube na área inferior direita com o texto exato legível:
"INSCREVA-SE"
Ao lado, um pequeno ícone de polegar para cima (like) e sino de notificação.
BRANDING DO CANAL:
Coloque o nome exato do canal no canto superior:
"BEM OU MAL?"
"BEM" em branco. "OU" em prata/cinza sutil. "MAL" em vermelho escuro.
Tipografia elegante estilo pincelada cinematográfica associada ao logotipo do canal.
Estilo: documentário psicológico escuro, ilustração madura de graphic novel, luz volumétrica bonita, 16:9.
TEXTO PERMITIDO APENAS: "BEM OU MAL?" e "INSCREVA-SE". Sem outros textos, sem legendas, sem logos adicionais, sem marca d'água.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror, textos falsos de comentários, legendas, logo extra, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a FINAL GOODBYE / OUTRO SCENE for a YouTube video.

DRAWN / ILLUSTRATED CARTOON CHARACTER.
Do NOT transform the character into a real human, photorealistic person, live-action actor or photograph.

The same male illustrated character is sitting comfortably in his gaming chair, slightly turned toward the viewer, with a calm and confident expression and a subtle genuine smile. He has just finished a deep conversation with the audience and is now saying goodbye.

The videogame monitor remains behind him, emitting a soft cool blue light, while a subtle warm golden light illuminates the character from the side, creating a feeling of warmth, connection and closure.

On the desk:
- videogame controller
- headphones
- a small cup
- monitor showing a fictional videogame
- subtle ambient lighting

The room should feel like the same environment from the video, creating visual continuity.

IMPORTANT VISUAL ELEMENTS:

Behind the character, very subtly incorporate the identity of the channel:
a sophisticated symbolic balance between two sides.

On the left, a soft cool blue glow with subtle positive videogame elements: achievement, creativity, strategy and connection.

On the right, a restrained dark red glow with subtle darker elements representing the negative side: excess, isolation and loss of balance.

Neither side should dominate.

The character remains exactly in the middle, representing the idea that the answer depends on how videogames fit into each person's life.

Make the character gesture naturally toward the viewer with one hand, as if inviting the audience to participate in the debate and share their own story.

Add a subtle visual suggestion of a comment section floating near the bottom of the scene, with a few abstract speech bubbles and interaction symbols, but WITHOUT readable fake comments.

Also include a subtle YouTube-style red subscribe button near the lower-right area with the exact readable text:

“INSCREVA-SE”

Next to it, a small elegant thumbs-up icon and a subtle notification bell.

CHANNEL BRANDING:

Place the exact channel name prominently but elegantly in the upper-left or upper-right:

“BEM OU MAL?”

“BEM” in white.
“OU” in subtle silver/gray.
“MAL” in deep red.

Use the same gritty, sophisticated brush-style typography associated with the channel logo.

Below the character, leave some clean visual space so the scene can breathe and work as a final video frame.

CINEMATIC STYLE:

Dark cinematic psychological documentary.
Mature graphic-novel illustration.
Sophisticated and premium.
Deep charcoal and black background.
Cool blue gaming light.
Subtle warm golden light.
Very restrained dark red accents.
High contrast.
Beautiful volumetric lighting.
Soft atmospheric particles.
Professional YouTube documentary aesthetic.
Emotional but not sad.
Mysterious but welcoming.
A feeling of conversation ending, not a dramatic finale.

COMPOSITION:

16:9 cinematic frame.
Character centered.
Camera slightly pulled back compared to previous scenes.
Strong depth of field.
The character's face must remain clearly visible.
The channel name and “INSCREVA-SE” must be perfectly readable.
Balanced negative space.
Visually clean enough to remain on screen while the narrator delivers the final CTA.

FINAL EMOTIONAL MESSAGE:

The image should communicate:

“Essa conversa termina aqui... mas agora é a sua vez de falar.”

The viewer should feel invited to leave a comment and return for the next debate.

TEXT RESTRICTION:

Only these readable texts are allowed:

“BEM OU MAL?”
“INSCREVA-SE”

No other words.
No subtitles.
No captions.
No fake comments.
No random letters.
No watermark.
No additional logos.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, fake comment text, subtitles, captions, extra logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'O fechamento interativo do documentário: o apresentador encerra a análise com serenidade e postura acolhedora, transferindo a palavra para os espectadores. Com o logotipo oficial do canal e o botão de inscrição perfeitamente integrados, a cena prepara o público para a ação final de comentar e se inscrever no canal.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Expressão calma, calorosa e com sorriso amigável de despedida',
      'Gesto de mão aberto convidando a audiência a participar nos comentários',
      'Mesa com fones de ouvido, xícara e controle, garantindo continuidade do ambiente do vídeo',
      'Logotipo cinematográfico oficial "BEM OU MAL?" destacado com "BEM" em branco e "MAL" em vermelho escuro',
      'Botão oficial de chamada para ação "INSCREVA-SE" no canto inferior com ícones de like e sino',
      'Apenas os dois textos autorizados, sem poluição visual ou marcas d\'água',
    ],
    tags: ['Tela Final / Outro', 'BEM OU MAL?', 'INSCREVA-SE', 'Engajamento & CTA', '16:9'],
  },
  {
    id: 'definitive-npc-crossroads-final-scene',
    title: 'O Despertar do Protagonista: O Controle na Sua Mão vs. Virar um NPC',
    subtitle: 'Cena Final Definitiva 16:9 • Encruzilhada simbólica, cabo do controle dissolvendo em partículas e a pergunta existencial máxima',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_definitive_npc_vs_control_final_1790639939088.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal. Esta é a IMAGEM FINAL do vídeo, torne a composição poderosa, emocional, cinematográfica e memorável.
Crie uma CENA DE CARTOON / DESENHO ILUSTRADO premium, NÃO um humano real, NÃO fotorrealista, NÃO live-action.
O CONCEITO:
O mesmo personagem masculino ilustrado está em pé no centro absoluto de uma massiva encruzilhada simbólica entre duas versões possíveis de sua vida.
Ele segura um controle de videogame em uma mão — o cabo que conecta o controle ao mundo virtual começa a se dissolver em partículas perto de sua mão, sugerindo que o CONTROLE ESTÁ EM SUAS MÃOS e que ele é capaz de escolher quando jogar e quando retornar à vida real.
Ele olha diretamente para o espectador com uma expressão séria, reflexiva e desperta.
Atrás dele, crie um forte contraste visual:
DE UM LADO: Um belo mundo de videogame brilhando em luz azul e ciano fria — conquistas, níveis, vitórias, paisagens virtuais atraentes.
DO OUTRO LADO: Sua VIDA REAL — um caminho caloroso iluminado por luz dourada sutil, levando a uma cidade moderna comum, trabalho, relacionamentos, saúde, aprendizado e experiências humanas genuínas.
A METÁFORA CENTRAL:
Atrás do personagem, revele sutilmente uma silhueta translúcida de um NPC/personagem de jogo completamente parado, seguindo um caminho pré-determinado marcado por checkpoints brilhantes.
Mas o protagonista NÃO está seguindo aquele caminho: ele deu um passo para FORA da trilha automática do NPC e está de pé na encruzilhada.
TEXTO:
Inclua UMA pergunta cinematográfica poderosa na porção superior da imagem:
"O CONTROLE ESTÁ NA SUA MÃO..."
Abaixo dela, menor mas perfeitamente legível:
"OU VOCÊ VIROU UM NPC NA SUA PRÓPRIA HISTÓRIA?"
Tipografia elegante, cinematográfica, em tons de branco e prata.
SEM outros textos, sem legendas adicionais, sem logos, sem marcas d'água.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, horror, monstros, apocalipse distópico, neon excessivo, texto repetido, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character. This is the FINAL IMAGE of the video, so make the composition powerful, emotional, cinematic and memorable.

Create a premium DRAWN / ILLUSTRATED CARTOON SCENE, NOT a real human, NOT photorealistic, NOT live-action.

THE CONCEPT:
The same male illustrated character is standing at the absolute center of a massive symbolic crossroads between two possible versions of his life.

He is holding a videogame controller in one hand — but the controller is connected by a subtle cable to a gigantic invisible control system above him. He looks directly toward the viewer with a serious, thoughtful and awakened expression, as if he has just realized that the choice is his.

Behind him, create a powerful visual contrast:

ON ONE SIDE:
A beautiful videogame world glowing in cool blue light — achievements, levels, victories, colorful but restrained game elements, virtual landscapes and endless progression. It looks attractive and rewarding, but slightly artificial.

ON THE OTHER SIDE:
His REAL LIFE — a warm path illuminated by subtle golden light, leading toward a normal modern city, work, relationships, health, learning, experiences and genuine human moments. The path should feel open and full of possibilities.

THE CENTRAL METAPHOR:
Behind the character, subtly reveal a giant translucent silhouette of an NPC/game character standing completely still, following a predetermined path marked by glowing checkpoints.

But the main character is NOT following that path.

Instead, he has stepped OUT of the predetermined NPC path and is standing at the crossroads, holding the controller himself.

The NPC silhouette should appear slightly faded and distant, representing the possibility of living on autopilot.

The main character must clearly communicate:
“I decide where my life goes.”

Make the controller visually important, but do NOT make it look like he is trapped by it. His hand should be firmly holding it, symbolizing that CONTROL IS IN HIS HANDS.

Add a subtle visual transformation: the cable connecting the controller to the virtual world is beginning to dissolve into particles near his hand, suggesting that he is capable of choosing when to play and when to return to real life.

ATMOSPHERE:
Extremely cinematic.
Dark charcoal and black environment.
Cool blue light from the videogame side.
Subtle warm golden light from the real-life side.
Strong volumetric lighting.
Deep shadows.
Fine atmospheric particles.
High contrast.
Sophisticated mature graphic-novel illustration.
Psychological documentary aesthetic.
Premium YouTube documentary thumbnail quality.
Epic but NOT fantasy.
Emotional but NOT melodramatic.

COMPOSITION:
16:9 cinematic frame.
Character centered and slightly foregrounded.
Crossroads clearly visible behind him.
Videogame world on one side.
Real-life path on the other.
NPC silhouette subtly positioned in the background.
Strong depth of field.
The viewer's eye should immediately go to the character's face and the controller in his hand.

IMPORTANT:
The image must NOT portray videogames as inherently evil.
The videogame side should remain attractive and positive.
The message is about CHOICE, BALANCE AND CONTROL.

TEXT:
Include ONE powerful cinematic question across the upper portion of the image:

“O CONTROLE ESTÁ NA SUA MÃO...”

Below it, smaller but still highly readable:

“OU VOCÊ VIROU UM NPC NA SUA PRÓPRIA HISTÓRIA?”

Typography should be elegant, cinematic and integrated into the scene.
White/silver lettering with very subtle contrast.
Do NOT add any other text.

FINAL FEELING:
The viewer should look at this image and immediately feel:
“Caramba... talvez eu esteja no controle. Ou talvez esteja apenas seguindo o caminho.”

This must feel like the definitive final frame of the entire video — mysterious, thought-provoking, emotionally powerful and visually unforgettable.

No subtitles.
No captions beyond the two specified lines.
No logos.
No watermark.
No extra characters in the foreground.
No horror.
No dystopian apocalypse.
No excessive neon.
No photorealism.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, horror, monsters, dystopian apocalypse, excessive neon, text repetition, captions, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'O encerramento memorável do documentário: de pé na encruzilhada de sua própria existência, o protagonista rompe com o piloto automático e assume a soberania de seu tempo. A vida virtual continua rica e atraente, a vida real continua aberta e luminosa, e cabe a ele — e a quem assiste ao vídeo — decidir quem está no comando.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'O controle segurado com firmeza e o cabo se dissolvendo em feixes de partículas luminosas',
      'Encruzilhada grandiosa entre a vastidão azul digital e o horizonte dourado da cidade real',
      'Silhueta fantasmagórica do NPC em segundo plano, representando o perigo de viver no piloto automático',
      'Tipografia cinematográfica em prata/branco integrada com as duas perguntas existenciais decisivas',
      'Equilíbrio conceitual: nem repúdio aos jogos, nem abandono da vida real — a mensagem definitiva é sobre AUTONOMIA',
    ],
    tags: ['Cena Final Definitiva', 'O Despertar do Protagonista', 'NPC vs Autonomia', 'Thumb Clímax', '16:9'],
  },
  {
    id: 'scene-gaming-safezone-creeping-shadows',
    title: 'A Armadilha Silenciosa: A Bolha Azul vs. A Sombra Carmim da Realidade',
    subtitle: 'Ilustração Psicológica 16:9 • Monitor em primeiro plano, santuário azul no rosto e a maré escura de responsabilidades adiadas',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_gaming_safezone_creeping_shadows_1790639839244.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma CENA DE CARTOON / DESENHO ILUSTRADO cinematográfica, NÃO um humano real, NÃO fotorrealista, NÃO live-action.
Mostre o mesmo personagem masculino ilustrado sentado sozinho em sua cadeira gamer tarde da noite, completamente absorvido em um videogame. O monitor curvo em primeiro plano emite uma luz ciano e azul elétrica brilhante, formando uma redoma ou zona segura sobre seu rosto e mãos enquanto o resto do quarto afunda em escuridão profunda.
Ao redor dele, mostre os problemas da vida real que ele está evitando: contas e envelopes não pagos com avisos em vermelho, livros de estudo atrasados, um laptop aberto com trabalho pendente, mensagens não lidas no celular e uma foto de entes queridos na prateleira sombria.
A escuridão avança lentamente com toques muito sutis de vermelho escuro nas sombras como uma armadilha invisível.
Metáfora visual: VIDEOGAME COMO REFÚGIO → VIDA REAL SENDO IGNORADA → CONSEQUÊNCIAS SILENCIOSAS.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, fotografia, monstros, caveiras, horror exagerado, sangue, texto, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a cinematic DRAWN / ILLUSTRATED CARTOON SCENE, NOT a real human, NOT photorealistic, NOT live-action.

Show the same male illustrated character sitting alone in his gaming chair late at night, completely absorbed in a videogame. The blue light from the monitor illuminates his face while the rest of the room becomes increasingly dark.

Around him, clearly but naturally show the real-life problems he is avoiding: unpaid bills and envelopes on the desk, overdue study books and unfinished notes, a laptop with unfinished work, unanswered messages on a phone, and a subtle personal photograph representing relationships and emotional pain.

The videogame screen should appear visually attractive and rewarding, while everything outside the screen feels neglected and forgotten. The character is using the game as a hiding place from reality. His expression should not be exaggerated or terrified — instead, show emotional exhaustion, avoidance and quiet dependence.

Create a strong visual metaphor: the blue glow of the videogame forms a small safe zone around him, while the darkness of the room slowly surrounds that zone like a silent poison or invisible trap. Very subtle dark red accents can appear in the shadows, symbolizing the danger without becoming horror.

Important: do NOT show literal poison, bottles, skulls, monsters or exaggerated horror. The danger must feel psychological, realistic and silent.

Composition: cinematic wide shot, character centered, videogame monitor in the foreground, real-life problems visible around him, deep shadows in the background, strong depth and atmosphere.

Color palette: deep black, dark charcoal, cold blue/cyan from the game, with very restrained dark red accents. Mature graphic-novel aesthetic, sophisticated, dramatic cinematic lighting, psychological documentary style.

Visual metaphor:
VIDEOGAME AS REFUGE → REAL LIFE BEING IGNORED → SILENT CONSEQUENCES.

No text, no captions, no subtitles, no logos, no watermark, no extra characters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, skulls, poison bottles, monsters, demons, exaggerated horror, blood, violence, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'O enclausuramento na zona de conforto digital: a tela do jogo oferece alívio imediato e controle aparente, enquanto na escuridão ao redor acumulam-se boletos, compromissos acadêmicos, prazos profissionais e laços emocionais que sofrem pela ausência crônica.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Composição em plano geral cinematográfico com monitor envolvente no primeiro plano',
      'A "zona de segurança" de luz azul e ciano delimitada estritamente sobre o personagem',
      'Sombras de carvão com gradientes carmim/vermelho escuro rastejando pela sala como uma armadilha invisível',
      'Objetos do cotidiano negligenciados: envelopes de contas, livros pesados, planilhas pendentes no laptop e foto de amigos',
      'Expressão contida de evasão e exaustão psicológica',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['A Armadilha Silenciosa', 'A Bolha Azul', 'Evasão & Consequências', 'O Lado Mal', '16:9'],
  },
  {
    id: 'gaming-refuge-silent-trap-scene',
    title: 'A Bolha de Refúgio: O Jogo como Fuga e a Realidade Sufocada',
    subtitle: 'Ilustração Psicológica 16:9 • A zona segura de luz azul no rosto vs. contas atrasadas, livros pendentes e sombras vermelhas ao redor',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_gaming_refuge_silent_trap_1790639771258.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma CENA DE CARTOON / DESENHO ILUSTRADO cinematográfica, NÃO um humano real, NÃO fotorrealista, NÃO live-action.
Mostre o mesmo personagem masculino ilustrado sentado sozinho em sua cadeira gamer tarde da noite, completamente absorvido em um videogame. A luz azul do monitor ilumina seu rosto enquanto o resto do quarto se torna cada vez mais escuro.
Ao redor dele, mostre de forma clara, mas natural, os problemas da vida real que ele está evitando: contas não pagas e envelopes sobre a mesa, livros de estudo atrasados e anotações inacabadas, um laptop com trabalho por fazer, mensagens não respondidas no celular e uma fotografia pessoal sutil representando relacionamentos e dor emocional.
A tela do videogame deve parecer visualmente atraente e recompensadora, enquanto tudo fora da tela parece negligenciado e esquecido. O personagem está usando o jogo como um esconderijo da realidade. Sua expressão não deve ser exagerada ou aterrorizada — em vez disso, mostre exaustão emocional, evasão e dependência silenciosa.
Crie uma forte metáfora visual: o brilho azul do videogame forma uma pequena zona segura ao seu redor, enquanto a escuridão do quarto cerca lentamente essa zona como um veneno silencioso ou uma armadilha invisível. Detalhes muito sutis em vermelho escuro podem aparecer nas sombras, simbolizando o perigo sem se tornar horror.
Importante: NÃO mostre veneno literal, garrafas, caveiras, monstros ou horror exagerado. O perigo deve parecer psicológico, realista e silencioso.
Composição: plano geral cinematográfico, personagem centralizado, monitor em primeiro plano, problemas da vida real visíveis ao seu redor, sombras profundas ao fundo.
Paleta de cores: preto profundo, carvão escuro, azul/ciano frio do jogo, com toques contidos de vermelho escuro.
Metáfora visual:
VIDEOGAME COMO REFÚGIO → VIDA REAL SENDO IGNORADA → CONSEQUÊNCIAS SILENCIOSAS.
Sem texto, sem legendas, sem logos, sem marcas d'água, sem personagens extras.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, caveiras, veneno literal, monstros, demônios, horror exagerado, sangue, texto, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a cinematic DRAWN / ILLUSTRATED CARTOON SCENE, NOT a real human, NOT photorealistic, NOT live-action.

Show the same male illustrated character sitting alone in his gaming chair late at night, completely absorbed in a videogame. The blue light from the monitor illuminates his face while the rest of the room becomes increasingly dark.

Around him, clearly but naturally show the real-life problems he is avoiding: unpaid bills and envelopes on the desk, overdue study books and unfinished notes, a laptop with unfinished work, unanswered messages on a phone, and a subtle personal photograph representing relationships and emotional pain.

The videogame screen should appear visually attractive and rewarding, while everything outside the screen feels neglected and forgotten. The character is using the game as a hiding place from reality. His expression should not be exaggerated or terrified — instead, show emotional exhaustion, avoidance and quiet dependence.

Create a strong visual metaphor: the blue glow of the videogame forms a small safe zone around him, while the darkness of the room slowly surrounds that zone like a silent poison or invisible trap. Very subtle dark red accents can appear in the shadows, symbolizing the danger without becoming horror.

Important: do NOT show literal poison, bottles, skulls, monsters or exaggerated horror. The danger must feel psychological, realistic and silent.

Composition: cinematic wide shot, character centered, videogame monitor in the foreground, real-life problems visible around him, deep shadows in the background, strong depth and atmosphere.

Color palette: deep black, dark charcoal, cold blue/cyan from the game, with very restrained dark red accents. Mature graphic-novel aesthetic, sophisticated, dramatic cinematic lighting, psychological documentary style.

Visual metaphor:
VIDEOGAME AS REFUGE → REAL LIFE BEING IGNORED → SILENT CONSEQUENCES.

No text, no captions, no subtitles, no logos, no watermark, no extra characters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, skulls, poison bottles, monsters, demons, exaggerated horror, blood, violence, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'A armadilha da evasão psicológica: a luz azul do monitor cria uma pequena ilha de conforto simulado, enquanto nas sombras do quarto as consequências reais se acumulam silenciosamente — contas a pagar, trabalho incompleto, estudos negligenciados e afetos que se esvaem.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Expressão de cansaço emocional, evasão e dependência psicológica silenciosa',
      'Zona segura ilusória de luz azul e ciano brilhante envolvendo apenas o rosto e as mãos',
      'Sombras profundas de carvão com toques avermelhados avançando silenciosamente ao redor da mesa',
      'Obrigações tangíveis negligenciadas: envelopes de cobrança, livros com prazos estourados, laptop aberto com planilhas e foto esquecida',
      'Sem monstros, caveiras ou venenos literais: a ameaça é inteiramente realista e psicológica',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['O Refúgio Ilusório', 'Evasão da Realidade', 'Consequências Silenciosas', 'O Lado Mal', '16:9'],
  },
  {
    id: 'well-deserved-gaming-reward-scene',
    title: 'O Descanso Merecido: Vitória na Vida Real → Videogame como Recompensa',
    subtitle: 'Ilustração Cinematográfica Positiva 16:9 • Dever cumprido, checklist concluída, laptop fechado e o jogo como pura celebração',
    side: 'good',
    imageUrl: '/src/assets/images/scene_well_deserved_gaming_reward_1790639690990.jpg',
    isOriginalPrompt: true,
    promptPt: `Use o avatar anexado como referência visual EXATA para o personagem principal.
Crie uma CENA DE CARTOON / DESENHO ILUSTRADO cinematográfica, NÃO um humano real, NÃO fotorrealista, NÃO live-action.
O mesmo personagem masculino ilustrado está sentado confortavelmente em sua cadeira gamer após um longo dia de responsabilidades da vida real. Ele tem uma expressão calma e satisfeita, um leve sorriso genuíno, postura relaxada e segura um controle de videogame casualmente.
Ao seu redor, mostre sutilmente símbolos visuais de vitórias da vida real que ele já alcançou: um caderno de trabalho finalizado, mesa organizada, lista de verificação (checklist) concluída com vistos, bolsa de academia, laptop fechado, um relógio mostrando o final do dia e um ambiente doméstico acolhedor. Esses elementos devem comunicar que suas responsabilidades estão CUMPRIDAS e que ele mereceu seu momento de descanso.
A tela do videogame à sua frente emite uma luz azul suave e fria, criando uma atmosfera agradável e relaxante. O jogo deve parecer uma recompensa, entretenimento e celebração — não uma fuga ou vício.
O personagem deve parecer em paz e no controle de seu tempo. Sem correntes, sem escuridão opressiva ao redor, sem isolamento, sem ansiedade, sem exaustão, sem simbolismo negativo.
Metáfora visual: VITÓRIA NA VIDA REAL → LAZER MERECIDO → VIDEOGAME COMO RECOMPENSA.
Estilo: documentário psicológico cinematográfico escuro, ilustração madura de graphic novel, composição sofisticada, iluminação ilustrada realista, fundo carvão escuro e preto, luz suave azul do jogo, luz dourada sutil da sala, alto contraste, cores contidas.
A imagem deve comunicar:
"Eu venci minhas batalhas de hoje. Agora posso simplesmente relaxar."
Sem texto, sem legendas, sem logos, sem marcas d'água, sem personagens extras.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, fotografia, 3D realista, anime, desenho infantil, correntes, tristeza, ansiedade, culpa, depressão, texto, legendas, logo, marca d'água.`,
    promptEn: `Use the attached avatar as the EXACT visual reference for the main character.

Create a cinematic DRAWN / ILLUSTRATED CARTOON SCENE, NOT a real human, NOT photorealistic, NOT live-action.

The same male illustrated character is sitting comfortably in his gaming chair after a long day of real-life responsibilities. He has a calm, satisfied expression, slight genuine smile, relaxed posture, and is holding a videogame controller casually.

Around him, subtly show visual symbols of real-life victories that he has already achieved: a finished work notebook, organized desk, completed checklist, gym bag, closed laptop, a clock showing the end of the day, and a warm home environment. These elements should communicate that his responsibilities are DONE and he has earned his moment of rest.

The videogame screen in front of him emits a soft cool blue light, creating a pleasant and relaxing atmosphere. The game should feel like a reward, entertainment and celebration — not an escape or addiction.

The character should look peaceful and in control of his time. No chains, no darkness surrounding him, no isolation, no anxiety, no exhaustion, no negative symbolism.

Visual metaphor: REAL LIFE VICTORY → WELL-DESERVED LEISURE → VIDEOGAME AS REWARD.

Style: dark cinematic psychological documentary, mature graphic-novel illustration, sophisticated composition, realistic illustrated lighting, deep charcoal and black background, cool blue gaming light, subtle warm golden light from the room, high contrast, restrained colors, premium cinematic atmosphere.

The image should communicate:
“Eu venci minhas batalhas de hoje. Agora posso simplesmente relaxar.”

No text, no captions, no subtitles, no logos, no watermark, no extra characters.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, chains, crying, anxiety, guilt, depression, messy chaotic room, horror, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'A relação madura e equilibrada com a diversão eletrônica: quando o homem adulto vence suas obrigações do dia — treina, produz, estuda e cuida de si —, jogar videogame se torna o ápice de um descanso sagrado, prazeroso e sem culpa.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Expressão tranquila, calma e com um sorriso discreto de realização e paz de espírito',
      'Símbolos visuais de vitória real: checklist concluída, laptop fechado, caderno guardado e bolsa de academia no chão',
      'Luz azul suave do monitor que transmite relaxamento e lazer legítimo, não hipnose compulsiva',
      'Sem correntes, sem sombras opressivas, sem ansiedade e sem culpa: controle total sobre o tempo',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Descanso Merecido', 'Dever Cumprido', 'Videogame como Recompensa', 'O Lado Bem', '16:9'],
  },
  {
    id: 'final-scene-videogame-bem-ou-mal',
    title: 'O Julgamento Final: VIDEOGAME: BEM OU MAL?',
    subtitle: 'Cena Conclusiva 16:9 • Equilíbrio perfeito entre azul construtivo e vermelho destrutivo com o avatar reflexivo ao centro',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_final_videogame_bem_ou_mal_1790639257245.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena final poderosa e cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, exatamente correspondendo ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções e estética de graphic novel madura do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
CENA:
Mostre o mesmo personagem masculino em pé sozinho no centro de um ambiente escuro e misterioso.
Ele está de frente para o espectador com uma expressão pensativa e neutra.
Atrás dele, crie uma divisão visual dramática em DOIS LADOS DIFERENTES:
LADO ESQUERDO — O LADO POSITIVO (BEM):
Iluminação elegante em azul frio e branco sutil.
Símbolos visuais sutis representando os aspectos positivos dos videogames: um controle brilhante, conexões neurais sutis, caminhos estratégicos, criatividade, aprendizado e conquista. Atmosfera inteligente, inspiradora e construtiva.
LADO DIREITO — O LADO ESCURO (MAL):
Preto profundo, carvão escuro e iluminação sutil em vermelho escuro.
Símbolos visuais sutis representando o lado negativo: um controle cercado por correntes tênues, uma ampulheta perdendo areia, um livro de estudo abandonado, mensagens não lidas no smartphone e sombras sugerindo isolamento e perda de controle.
IMPORTANTE:
Nenhum dos lados deve dominar a imagem. A composição deve criar um EQUILÍBRIO VISUAL VERDADEIRO entre ambos os lados.
O personagem está exatamente no meio, olhando entre os dois lados como se estivesse decidindo o que o videogame representa em sua própria vida.
Não mostre o personagem escolhendo nenhum lado.
A imagem transmite: VIDEOGAMES PODEM CONSTRUIR. VIDEOGAMES PODEM CONSUMIR. A decisão final depende de como são usados.
TEXTO:
Adicione APENAS UM grande título cinematográfico no topo central: "VIDEOGAME: BEM OU MAL?"
O texto deve aparecer EXATAMENTE UMA VEZ.
"BEM" deve ser branco. "MAL" deve ser vermelho escuro. "VIDEOGAME:" deve ser branco/prata sutil.
Tipografia elegante, séria, cinematográfica e legível.
NÃO adicione nenhum outro texto legível. SEM legendas. SEM logos. SEM marca d'água.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, super-herói, demônio, monstro, horror, imagem extrema de anjo/diabo, cores excessivas, neon excessivo, pós-apocalíptico, texto repetido, legendas, logo, marca d'água.`,
    promptEn: `Create a powerful cinematic final scene using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar's artistic style, facial features, hair, beard, skin tone, proportions and mature graphic-novel aesthetic.

Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or realistic 3D human.

SCENE:

Show the same male character standing alone in the center of a dark, mysterious environment.

He is facing the viewer with a thoughtful and neutral expression.

Behind him, create a dramatic visual division into TWO DIFFERENT SIDES.

LEFT SIDE — THE POSITIVE SIDE:

Use elegant cool blue and subtle white lighting.

Show subtle visual symbols representing the positive aspects of videogames:

a glowing controller,
subtle neural connections,
strategic paths,
friendship and cooperation,
creative worlds,
achievement and learning.

The atmosphere should feel intelligent, inspiring and constructive.

RIGHT SIDE — THE DARK SIDE:

Use deep black, dark charcoal and subtle dark red lighting.

Show subtle visual symbols representing the negative side:

a controller surrounded by faint transparent chains,
an hourglass losing sand,
an abandoned study book,
an unread message on a smartphone,
a dark gaming screen,
and subtle shadows suggesting isolation and loss of control.

The atmosphere should feel mysterious and psychologically darker.

IMPORTANT:
Neither side should completely dominate the image.

The composition must create a TRUE VISUAL BALANCE between both sides.

The character stands exactly in the middle, looking between the two sides as if he is deciding what the videogame represents in his own life.

Do NOT show the character choosing either side.

Do NOT show a thumbs up or thumbs down.

Do NOT portray videogames as entirely good or entirely bad.

The image should communicate:

VIDEOGAMES CAN BUILD.
VIDEOGAMES CAN CONSUME.

The final decision depends on how they are used.

The character should appear thoughtful rather than judgmental.

BACKGROUND:

Keep the environment dark and minimalist.

Use subtle particles floating in the air.

Avoid colorful galaxies or excessive visual effects.

The background should feel like a cinematic psychological documentary.

COLOR PALETTE:

Left side:
dark blue,
cool white,
subtle cyan.

Right side:
black,
dark charcoal,
very subtle deep red.

Center:
neutral shadows with a soft white light illuminating the character's face.

No excessive colors.

COMPOSITION:

Wide cinematic frame.

Character perfectly centered.

Positive visual elements on the left.

Negative visual elements on the right.

A subtle dividing line of light and shadow behind the character.

Strong negative space.

Symmetrical and visually balanced composition.

The image should feel like the FINAL QUESTION of a psychological documentary.

TEXT:

Add ONLY ONE large cinematic title at the top center:

"VIDEOGAME: BEM OU MAL?"

The text must appear EXACTLY ONCE.

"BEM" should be white.
"MAL" should be deep red.
"VIDEOGAME:" should be subtle white/silver.

The typography must be elegant, serious, cinematic and perfectly readable.

Do NOT create any other readable text anywhere in the image.

NO subtitles.
NO captions.
NO logos.
NO watermark.

Mood:

mysterious,
thought-provoking,
balanced,
psychological,
cinematic,
serious,
intelligent,
emotionally powerful.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary visual style.
Dramatic lighting.
High detail.
4K quality.

NEGATIVE PROMPT:

photorealistic human, real person, live action, photography, realistic human face, real actor, 3D realistic human, anime, childish cartoon, superhero, demon, monster, horror, extreme good versus evil imagery, angel, devil, excessive colors, colorful galaxy, excessive neon, post-apocalyptic, dystopian, violence, destruction, excessive text, repeated title, duplicate words, subtitles, captions, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign, distorted hands, extra limbs.`,
    narrativeContext: 'A conclusão definitiva do documentário: sem extremismos ou respostas fáceis. O videogame é uma ferramenta que pode tanto expandir horizontes cognitivos quanto aprisionar o indivíduo na inércia. A balança entre o Bem e o Mal depende exclusivamente da consciência e da disciplina de quem segura o controle.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Composição com simetria e equilíbrio perfeitos: o avatar reflexivo exatamente no centro',
      'Lado Esquerdo (Bem): azul ciano, conexões neurais luminosas e controle brilhante',
      'Lado Direito (Mal): carvão e vermelho profundo, controle acorrentado, ampulheta e sombras de isolamento',
      'Título cinematográfico no topo: "VIDEOGAME: BEM OU MAL?" com contraste entre branco e vermelho profundo',
      'Atmosfera de documentário maduro: reflexiva, sóbria e sem maniqueísmo infantil',
    ],
    tags: ['Cena Final', 'VIDEOGAME: BEM OU MAL?', 'Equilíbrio Conceitual', 'Dualidade', '16:9'],
  },
  {
    id: 'lvl1-real-vs-game-level-up-scene',
    title: 'O Paradoxo dos Níveis: O Avatar Sobe de Nível, a Vida Real Continua no Level 1',
    subtitle: 'Ilustração Psicológica 16:9 • Ampulheta de areia em primeiro plano, glória virtual à direita vs. estagnação \'LVL 1\' à esquerda',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_lvl1_real_vs_game_lvl99_1790639106776.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração psicológica cinematográfica e escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, exatamente correspondendo ao estilo artístico, traços faciais, cabelo, barba, tom de pele e estética de graphic novel madura do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
CENA:
Mostre o mesmo personagem masculino sentado sozinho em sua mesa gamer tarde da noite, completamente absorvido em um videogame ficcional.
Crie um poderoso contraste visual entre DUAS VERSÕES DE SUA VIDA.
NO LADO DIREITO:
O mundo do videogame está vivo, empolgante e constantemente recompensando-o.
O monitor exibe um ambiente de jogo ficcional espetacular com um personagem poderoso progredindo.
Mostre representações visuais sutis de progressão de nível, pontos de experiência (EXP), recompensas, troféus, novas habilidades e uma barra de progresso brilhante subindo.
O personagem virtual dentro do jogo parece claramente cada vez mais poderoso.
NO LADO ESQUERDO:
Represente sua VIDA REAL como completamente estagnada.
Mostre suas responsabilidades inacabadas acumulando-se ao seu redor:
um livro fechado, trabalho inacabado em um laptop, equipamentos de exercício (halteres) intocados, mensagens não respondidas em um smartphone, um calendário com dias passando, e objetos pessoais sugerindo relacionamentos e vida social negligenciados.
No fundo, mostre sutilmente uma fotografia de amigos ou pessoa querida em uma prateleira, ligeiramente desfocada e coberta por sombras, sugerindo que as relações reais estão ficando distantes.
Em primeiro plano, coloque uma GRANDE AMPULHETA com areia caindo visivelmente em direção à tela do videogame, enfatizando que o TEMPO está desaparecendo.
Enquanto o tempo desaparece... O PERSONAGEM DO JOGO SOBE DE NÍVEL. O PERSONAGEM DA VIDA REAL NÃO.
Adicione um indicador sutil no estilo de videogame no lado da vida real mostrando: "LVL 1".
No lado do videogame, mostre um indicador de nível muito alto.
O contraste visual transmite:
VIDA VIRTUAL: LEVEL UP, MAIS PODER, MAIS RECOMPENSAS.
VIDA REAL: ESTAGNAÇÃO, TAREFAS INACABADAS, RELAÇÕES DISTANTES, TEMPO PERDIDO.
Quarto moderno completamente normal, sem elementos pós-apocalípticos.
Paleta de cores: carvão escuro, preto profundo, azul elétrico do monitor, ouro metálico das recompensas, sombras desaturadas no lado real.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, 16:9.
SEM TEXTO ADICIONAL, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA (apenas o indicador mínimo "LVL 1").
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, fantasia de super-herói, quarto destruído, monstro, cores excessivas, legendas, logo, marca d'água.`,
    promptEn: `Create a dark, cinematic psychological illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar's artistic style, facial features, hair, beard, skin tone, proportions and mature graphic-novel aesthetic.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph or realistic 3D human.

SCENE:

Show the same male character sitting alone at his gaming desk late at night, completely absorbed in a fictional videogame.

Create a powerful visual contrast between TWO VERSIONS OF HIS LIFE.

ON THE RIGHT SIDE:
The videogame world is alive, exciting and constantly rewarding him.

The monitor displays a spectacular fictional game environment with a powerful player character progressing through the game.

Show subtle visual representations of:
level progression,
experience points,
achievement rewards,
trophies,
new abilities,
and a glowing progression bar moving upward.

The virtual character inside the game should clearly look increasingly powerful.

ON THE LEFT SIDE:
Represent his REAL LIFE as completely stagnant.

Show his unfinished responsibilities accumulating around him:

an unopened book,
unfinished work on a laptop,
exercise equipment sitting unused,
unanswered messages on a smartphone,
a calendar with days passing,
and personal objects suggesting relationships and social life being neglected.

In the background, subtly show a photograph of friends or a loved one on a shelf, slightly out of focus and covered by shadow, suggesting that real relationships are becoming distant.

Do NOT portray anyone as angry or hostile.

The relationships are simply becoming colder because the character is absent and disconnected.

In the foreground, place a large hourglass.

Sand should be visibly falling through the hourglass, emphasizing that TIME is continuously disappearing.

The hourglass should be one of the strongest visual elements in the composition.

Create a symbolic visual connection:

The sand falling from the hourglass gradually disappears toward the videogame screen.

While TIME disappears...

THE GAME CHARACTER LEVELS UP.

THE REAL-LIFE CHARACTER DOES NOT.

Add a subtle videogame-style visual indicator near the real-life side showing:

"LVL 1"

And on the videogame side, show a much higher level indicator.

The contrast should be immediately understandable even without reading any text.

The main character himself should remain physically seated in the real world, while his virtual character becomes increasingly powerful on the screen.

The visual metaphor is:

VIRTUAL LIFE:
LEVEL UP.
MORE POWER.
MORE REWARDS.
MORE ACHIEVEMENTS.

REAL LIFE:
STAGNATION.
UNFINISHED TASKS.
DISTANT RELATIONSHIPS.
TIME LOST.

Do not make the real world post-apocalyptic or destroyed.

It must be a completely NORMAL modern bedroom/home environment.

The room should simply look increasingly neglected because the character has stopped investing time in his real life.

COLOR PALETTE:

Dark cinematic environment.

Deep black and charcoal.

Cool blue light from the videogame.

Subtle metallic gold from game rewards.

Very restrained warm tones in the real-world memories and photographs.

The real-world side should be darker and more desaturated.

The videogame side should be brighter and more visually stimulating.

Do NOT make the image excessively colorful.

COMPOSITION:

Wide cinematic composition.

Character positioned near the center.

Gaming monitor dominating the right side.

Real-life responsibilities and neglected relationships visible on the left.

Large hourglass in the foreground.

Clear visual separation between virtual progression and real-life stagnation.

Strong depth and cinematic perspective.

The viewer should immediately understand the metaphor:

"Enquanto o personagem sobe de nível, a vida real permanece no level um."

Do NOT make the character look like a superhero.

Do NOT make the videogame character a copyrighted character.

Create a completely original fictional videogame world.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary visual style.
Dark cinematic lighting.
Emotional storytelling.
High detail.
4K quality.

TEXT RULE:

Only use the minimal videogame interface text necessary:
"LVL 1" on the real-life side.

Do NOT add any other readable text.
Do NOT add subtitles.
Do NOT add captions.
Do NOT add logos.
Do NOT add watermarks.

NEGATIVE PROMPT:

photorealistic human, real person, live action, photography, realistic human face, real actor, 3D realistic human, anime, childish cartoon, superhero costume, copyrighted videogame character, post-apocalyptic, dystopian, destroyed room, abandoned house, horror, monster, demon, excessive colors, rainbow colors, excessive neon, excessive text, duplicate text, subtitles, captions, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign, distorted hands, extra limbs, deformed anatomy.`,
    narrativeContext: 'O paradoxo do progresso simulado: a areia da ampulheta escorre inexoravelmente enquanto a tela premia o jogador com barras de experiência e títulos reluzentes. Porém, no mundo físico ao lado, seus livros continuam fechados, seus projetos intocados e sua vida estagnada no LVL 1.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Grande ampulheta dramática em primeiro plano: areia do tempo caindo em direção ao monitor',
      'Lado Direito: tela brilhante com avatar ascendendo de nível, barras de EXP e troféus dourados',
      'Lado Esquerdo: vida real estagnada (livros fechados, halteres intocados, foto de amigos na penumbra) e etiqueta HUD discreta \'LVL 1\'',
      'Metáfora imediata: poder e progresso no mundo virtual vs. tempo perdido e inércia no mundo real',
      'Sem textos adicionais, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Level Up vs Level 1', 'A Ampulheta do Tempo', 'Estagnação Real', 'Dualidade', '16:9'],
  },
  {
    id: 'social-interaction-friction-scene',
    title: 'O Medo da Conexão Real: O Café, a Vulnerabilidade e o Refúgio Digital',
    subtitle: 'Ilustração Psicológica 16:9 • Conversa real desconfortável em um café moderno vs. a tentação segura da tela azul no bolso',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_social_interaction_friction_1790638622050.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração psicológica cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino sentado em frente a outra pessoa em uma cafeteria moderna normal.
O ambiente deve ser completamente comum e realista:
mesas, cadeiras, xícaras de café, luzes de fundo suaves, outros clientes conversando naturalmente.
As duas pessoas estão tendo uma conversa cara a cara normal.
No entanto, o personagem principal parece visivelmente desconfortável e hesitante.
Sua postura é ligeiramente fechada. Suas mãos estão juntas na mesa. Ele evita o contato visual por um momento. Sua expressão comunica desconforto social e incerteza.
Do outro lado da mesa, a outra pessoa é amigável e paciente, ouvindo naturalmente.
A ideia visual importante é que a INTERAÇÃO HUMANA REAL agora parece difícil e arriscada em comparação com o mundo previsível dos videogames.
Mostre sutilmente um reflexo azul tênue de um smartphone ou notificação relacionada a jogos perto do personagem, sugerindo que o mundo digital parece mais seguro e fácil para ele.
NÃO retrate a outra pessoa como ameaçadora. NÃO há perigo real.
O "risco" é inteiramente emocional: medo do julgamento, estranheza, rejeição ou dizer a coisa errada.
Mantenha a cena sutil e psicologicamente realista.
Paleta de cores: carvão escuro, cinza suave, iluminação quente e suave do café, reflexo sutil em azul frio perto do personagem.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, narrativa emocional, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: pessoa ameaçadora, violência, confronto, bullying, horror, armas, cidade distópica, pós-apocalíptico, ansiedade extrema com lágrimas, humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, texto, legendas, logo, marca d'água.`,
    promptEn: `Create a dark cinematic psychological illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character sitting across from another person at a normal modern coffee shop.

The environment must be completely ordinary and realistic:
tables,
chairs,
coffee cups,
soft background lights,
other customers talking naturally.

The two people are having a normal face-to-face conversation.

However, the main character appears visibly uncomfortable and hesitant.

His posture is slightly closed.
His hands are close together on the table.
He avoids eye contact for a moment.
His expression communicates social discomfort and uncertainty.

Across the table, the other person is friendly and patient, listening naturally.

The important visual idea is that REAL HUMAN INTERACTION now feels difficult and risky compared with the predictable world of videogames.

Subtly show a faint blue reflection from a smartphone or gaming-related notification near the character, suggesting that the digital world feels safer and easier to him.

Do NOT portray the other person as threatening.

There is NO actual danger.

The "risk" is entirely emotional:
fear of judgment,
awkwardness,
rejection,
or saying the wrong thing.

Keep the scene subtle and psychologically realistic.

Color palette:
dark charcoal,
muted gray,
soft natural warm café lighting,
subtle cool blue reflection near the main character.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary visual style.
Cinematic composition.
Emotional storytelling.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
threatening person, violence, confrontation, bullying, horror, weapons, dangerous environment, dystopian city, post-apocalyptic, extreme anxiety, crying, depression imagery, photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'O custo oculto da previsibilidade virtual: nos jogos, as respostas são calculadas e sem risco de rejeição. Na mesa de um café, diante de uma conversa humana real, desarmada e autêntica, o cérebro condicionado pelas telas sente vulnerabilidade e timidez, espiando o reflexo azul do smartphone em busca de segurança.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Cafeteria moderna acolhedora: mesa de madeira, xícaras de café, iluminação ambiente suave',
      'Interlocutor paciente e simpático: ausência total de agressividade ou ameaça',
      'Linguagem corporal de vulnerabilidade social: mãos tensas, ombros encolhidos e olhar desviado',
      'Reflexo sutil azul ciano no smartphone sobre a mesa, sinalizando a tentação do porto seguro digital',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Atrito Social', 'Conexão Real vs Mundo Virtual', 'Vulnerabilidade', 'O Lado Mal', '16:9'],
  },
  {
    id: 'gym-impatience-effort-scene',
    title: 'A Impaciência do Esforço Físico: O Treino Lento vs. A Ilusão da Pressa',
    subtitle: 'Ilustração Psicológica 16:9 • Academia moderna, relógio na parede e impaciência corporal vs. o reflexo azul digital',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_gym_impatience_effort_1790638472328.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino dentro de uma academia moderna completamente normal.
A academia deve parecer limpa, realista e comum:
máquinas de musculação,
halteres,
esteiras,
bancos de exercício,
espelhos,
outras pessoas se exercitando ao fundo.
O personagem está em pé ao lado de uma esteira ou aparelho, parecendo impaciente e entediado.
Ele checa o relógio na parede.
O ambiente de treino deve parecer lento sob a perspectiva dele.
Contraste sutilmente isso com um pequeno reflexo visual ou tela próxima mostrando o brilho azul atraente de um videogame.
A linguagem corporal do personagem deve comunicar:
"ISSO DEMORA DEMAIS."
Ele não está fisicamente exausto. Ele está simplesmente impaciente porque a recompensa do exercício leva tempo.
Mostre outras pessoas continuando seus treinos pacientemente ao fundo, enfatizando que o progresso na vida real acontece gradualmente.
Mantenha a academia completamente normal. SEM elementos distópicos. SEM músculos exagerados. SEM fantasia de fisiculturismo.
Paleta de cores: carvão escuro, cinza esportivo suave, toques de azul frio, iluminação natural discreta.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, iluminação cinematográfica, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: pós-apocalíptico, academia distópica ou abandonada, corpo de super-herói, músculos exagerados, fantasia de fisiculturismo, horror, humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, texto, legendas, logo, marca d'água.`,
    promptEn: `Create a dark cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character inside a completely normal modern gym.

The gym should look clean, realistic and ordinary:
weight machines,
dumbbells,
treadmills,
exercise benches,
mirrors,
other people exercising in the background.

The character is standing beside a treadmill or workout machine, looking impatient and bored.

He checks the clock on the wall.

The workout environment should feel slow from his perspective.

Subtly contrast this with a small visual reflection or nearby screen showing the exciting blue glow of a videogame.

The character's body language should communicate:

"THIS TAKES TOO LONG."

He is not physically exhausted.
He is simply impatient because the reward from exercising takes time.

Show other people continuing their workouts patiently in the background, emphasizing that real-life progress happens gradually.

Keep the gym completely normal.
NO dystopian elements.
NO exaggerated muscles.
NO bodybuilding fantasy.

Color palette:
dark charcoal,
muted gray,
cool blue highlights,
subtle natural warm lighting.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary style.
Cinematic lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
post-apocalyptic, dystopian gym, destroyed gym, abandoned gym, superhero body, exaggerated muscles, fantasy gym, horror, photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'O choque entre a velocidade biológica dos músculos e o hábito de recompensas digitais instantâneas: no jogo, o avatar ganha força e atributos em um segundo com barras de status reluzentes; na academia, o ganho de força exige meses de repetição mecânica diante do relógio que avança vagarosamente.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Academia contemporânea realista: halteres de ferro, esteiras, aparelhos de cabos e espelhos',
      'Linguagem corporal de impaciência autêntica: checando o relógio com tédio e cansaço mental',
      'Outros frequentadores treinando de forma consistente e paciente em segundo plano',
      'Pequeno reflexo azul elétrico no smartphone ou vidro, remetendo à dopamina fácil dos jogos',
      'Sem músculos caricatos ou fantasia de super-herói: anatomia humana crível e realista',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['A Impaciência do Esforço', 'Academia & Realidade', 'Progresso Gradual', 'Dualidade', '16:9'],
  },
  {
    id: 'study-boredom-vs-gaming-scene',
    title: 'O Atrito da Recompensa Tardia: O Estudo Monótono vs. A Tentação da Tela Azul',
    subtitle: 'Ilustração Psicológica 16:9 • Livros, cansaço e postura desabada na mesa vs. o brilho hipnótico do videogame ao fundo',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_study_boredom_vs_gaming_1790638417668.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino sentado em uma mesa de estudo normal se preparando para um exame importante.
O ambiente é um quarto ou sala de estudos moderno completamente comum.
Há livros, cadernos, um laptop, anotações feitas à mão e materiais de estudo espalhados pela mesa.
O personagem está tentando estudar, mas parece extremamente entediado e sonolento.
Sua postura está ligeiramente desabada. Uma das mãos apoia sua cabeça. Seus olhos estão pesados. O livro didático está aberto à sua frente.
Um pequeno relógio na mesa mostra que um tempo significativo já passou.
Atrás dele, mostre sutilmente o monitor do videogame brilhando com uma luz azul atraente.
A tela do videogame deve parecer muito mais estimulante visualmente do que os materiais de estudo.
O contraste deve comunicar:
ESTUDO = recompensa lenta, difícil e postergada.
VIDEOGAME = estimulação e empolgação imediatas.
Não faça o personagem parecer profundamente deprimido. Ele deve apenas parecer entediado, cansado e impaciente.
Mantenha o ambiente do mundo real completamente normal.
Paleta de cores: carvão escuro, cinza suave, luz azul fria do monitor, iluminação suave e quente da lâmpada de estudo.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, composição cinematográfica, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: pós-apocalíptico, distópico, quarto abandonado, imagens de depressão clínica extrema, chorando, tristeza extrema, humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, texto, legendas, logo, marca d'água.`,
    promptEn: `Create a dark cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character sitting at a normal study desk preparing for an important exam.

The environment is a completely ordinary modern bedroom or study room.

There are books, notebooks, a laptop, handwritten notes and study materials spread across the desk.

The character is trying to study, but he looks extremely bored and sleepy.

His posture is slightly collapsed.
One hand supports his head.
His eyes are heavy.
The textbook is open in front of him.

A small clock on the desk shows that significant time has passed.

Behind him, subtly show the gaming monitor glowing with attractive blue light.

The videogame screen should look much more visually stimulating than the study materials.

The contrast should communicate:

STUDY = slow, difficult, delayed reward.

VIDEOGAME = immediate stimulation and excitement.

Do not make the character look severely depressed.
He should simply look bored, tired and impatient.

Keep the real-world environment completely normal.

Color palette:
dark charcoal,
muted gray,
cool blue monitor light,
subtle warm room lighting.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary visual style.
Cinematic composition.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
post-apocalyptic, dystopian, abandoned room, horror, depression imagery, crying, extreme sadness, photorealistic human, real person, live action, photograph, 3D human, anime, childish cartoon, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'O conflito biológico entre a gratificação atrasada e o prazer instantâneo: o esforço cognitivo do estudo exige horas de concentração sem recompensa visível, enquanto o monitor ligado nas costas pulsa com a promessa de alívio e dopamina em um clique.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Mesa de estudo realista: livros densos abertos, anotações, canetas, laptop e relógio',
      'Linguagem corporal autêntica: postura curvada, mão apoiando a cabeça, pálpebras pesadas de cansaço',
      'Monitor gamer ao fundo iluminando o ambiente com feixes de luz azul ciano vibrante e sedutora',
      'Contraste neurobiológico evidente: esforço intelectual árduo vs. hiperestímulo digital imediato',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Recompensa Tardia', 'O Tédio do Estudo', 'A Tentação da Tela', 'Dualidade', '16:9'],
  },
  {
    id: 'vibrant-game-dull-world-scene',
    title: 'O Sequestro Sensorial: O Jogo Hiperestimulante vs. O Mundo Real Desbotado',
    subtitle: 'Ilustração Psicológica 16:9 • Tela em azul ciano elétrico vs. a cidade contemporânea cinzenta e distante pela janela',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_vibrant_game_dull_world_1790638362605.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino sentado sozinho em sua mesa gamer tarde da noite.
O monitor do videogame à sua frente é vibrante, imersivo e visualmente estimulante, com intensa luz azul iluminando seu rosto.
No entanto, além do monitor, mostre o MUNDO REAL ao seu redor tornando-se visualmente desbotado, cinzento e sem vida.
Pela janela, mostre uma cidade moderna normal com pessoas caminhando, carros em movimento e prédios iluminados, mas tudo do lado de fora deve parecer abafado, cinza e emocionalmente distante.
O contraste é a ideia principal:
O mundo do videogame é visualmente vivo e estimulante.
O mundo real é visualmente cinzento, lento e sem graça sob a perspectiva dele.
NÃO torne a cidade distópica ou abandonada. Deve ser uma cidade moderna completamente normal.
O personagem deve estar focado no jogo, mal prestando atenção no mundo exterior.
Use uma narrativa visual sutil para sugerir que o mundo real está perdendo gradualmente seu apelo.
Paleta de cores: preto profundo, carvão escuro, luz azul fria do videogame, cinza muito atenuado do lado de fora, pequenas quantidades de luz quente natural em prédios distantes.
Estética madura de graphic novel ilustrada, estilo de documentário psicológico premium, iluminação cinematográfica, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: pós-apocalíptico, cidade distópica, prédios destruídos, cidade abandonada, fantasia, humano fotorrealista, pessoa real, live action, fotografia, 3D, anime, desenho infantil, texto, legendas, logo, marca d'água.`,
    promptEn: `Create a dark cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character sitting alone at his gaming desk late at night.

The videogame monitor in front of him is vibrant, immersive and visually stimulating, with intense blue light illuminating his face.

However, beyond the monitor, show the REAL WORLD around him becoming visually desaturated and dull.

Through the window, show an ordinary modern city with people walking, cars moving and buildings illuminated, but everything outside should appear muted, gray and emotionally distant.

The contrast is the main idea:

The videogame world is visually alive and stimulating.

The real world is visually gray, slow and boring from his perspective.

Do NOT make the city dystopian or abandoned.
It must be a completely normal modern city.

The character should be focused on the game, barely paying attention to the outside world.

Use subtle visual storytelling to suggest that the real world is gradually losing its appeal.

Color palette:
deep black,
dark charcoal,
cool blue videogame light,
very muted gray outside,
small amounts of natural warm light in distant buildings.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary style.
Cinematic lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
post-apocalyptic, dystopian city, destroyed buildings, abandoned city, disaster, war, zombies, fantasy world, excessive colors, colorful background, photorealistic human, real person, live action, photograph, realistic human face, 3D human, anime, childish cartoon, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard.`,
    narrativeContext: 'O contraste da saturação perceptiva: a dopamina artificial gerada pelo monitor em ciano elétrico torna a vida cotidiana lá fora — mesmo sendo uma cidade moderna pacífica e cheia de pessoas — visualmente insípida, lenta e cinzenta aos olhos do jogador hipnotizado.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Monitor curvado vibrante emitindo intensa luz azul-ciano elétrica sobre o rosto',
      'Janela panorâmica revelando a cidade moderna ordinária desbotada em tons de cinza desaturado',
      'Contraste psicológico: estímulo digital hipervivo vs. realidade tangível percebida como monótona',
      'Cidade real contemporânea normal, sem elementos pós-apocalípticos ou distópicos',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Sequestro Sensorial', 'Estímulo vs Desbotamento', 'A Cidade Cinzenta', 'O Lado Mal', '16:9'],
  },
  {
    id: 'modern-adult-life-routine-scene',
    title: 'A Rotina da Vida Real: O Tempo, a Disciplina e a Construção Lenta',
    subtitle: 'Ilustração Cinematográfica Contemporânea 16:9 • Trabalho noturno, estudo, treino e a alvorada dourada sobre a cidade',
    side: 'good',
    imageUrl: '/src/assets/images/scene_real_life_routine_effort_1790637849983.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura, mas realista, usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino vivenciando uma VIDA ADULTA MODERNA COMPLETAMENTE NORMAL.
O ambiente deve parecer uma cidade e um ambiente doméstico contemporâneos normais.
SEM elementos pós-apocalípticos. SEM prédios abandonados. SEM destruição. SEM ruínas. SEM mundo distópico. SEM ambiente de fantasia.
Crie uma metáfora visual para os anos de esforço necessários para se tornar forte, respeitado e bem-sucedido na vida real.
Mostre o personagem em uma rotina diária comum:
trabalhando em uma mesa,
estudando,
exercitando-se,
organizando suas responsabilidades,
acordando cedo,
trabalhando até tarde,
e progredindo gradualmente em direção aos seus objetivos.
Represente esses diferentes momentos sutilmente dentro da mesma composição cinematográfica, como se diferentes momentos de sua vida estivessem conectados.
Mostre:
uma mesa de escritório normal com documentos e um laptop,
livros e materiais de estudo,
um ambiente de treino (halteres),
um calendário com muitos dias riscados,
um despertador indicando o início da manhã,
e um espaço de trabalho noturno tranquilo.
O personagem deve parecer cansado às vezes, mas disciplinado e determinado.
NÃO retrate sofrimento extremo. NÃO o faça parecer desesperado ou miserável.
Esta é simplesmente a realidade da vida adulta comum:
trabalhar, estudar, economizar, treinar, errar, recomeçar, esperar e continuar.
No fundo distante, mostre uma luz quente sutil representando a conquista e o sucesso a longo prazo através de uma janela urbana com o amanhecer.
A ideia visual central é:
A VIDA REAL EXIGE TEMPO.
PALETA DE CORES:
Ambientes em carvão escuro e preto profundo, iluminação azul fria, luz dourada quente sutil representando conquistas futuras, tons de pele naturais, cores muito contidas.
Composição: composição cinematográfica ampla, personagem como foco visual principal, ambientes modernos comuns ao seu redor, progressão sutil do primeiro plano mais escuro para o fundo distante mais quente, profundidade forte, grandes áreas de espaço negativo.
Clima: realista, introspectivo, difícil mas esperançoso, disciplinado, maduro, cinematográfico.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: pós-apocalíptico, apocalipse, cidade distópica, prédios destruídos, ruínas, zumbis, destruição, fogo, fantasia, monstro, super-herói, humano fotorrealista, pessoa real, live action, fotografia, texto, legendas, logo, marca d'água, anime, desenho infantil.`,
    promptEn: `Create a dark but realistic cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character experiencing a completely NORMAL MODERN ADULT LIFE.

The environment must look like an ordinary contemporary city and home environment.
NO post-apocalyptic elements.
NO abandoned buildings.
NO destruction.
NO ruins.
NO dystopian world.
NO fantasy environment.

Create a visual metaphor for the years of effort required to become strong, respected and successful in real life.

Show the character moving through an ordinary daily routine:

working at a desk,
studying,
exercising,
organizing his responsibilities,
waking up early,
working late,
and gradually progressing toward his goals.

Represent these different moments subtly within the same cinematic composition, as if different moments of his life are connected together.

Show:
a normal office desk with documents and a laptop,
books and study materials,
a gym environment,
a calendar with many days crossed out,
an alarm clock indicating an early morning,
and a quiet nighttime workspace.

The character should appear tired at times, but disciplined and determined.

Do NOT portray extreme suffering.
Do NOT make him look homeless, desperate or miserable.

This is simply the difficult reality of ordinary adult life:
working,
studying,
saving,
training,
making mistakes,
starting again,
waiting,
and continuing.

In the far background, show a subtle warm light representing long-term achievement and success.

The central visual idea is:

REAL LIFE REQUIRES TIME.

The character is moving forward, but the progress is slow and gradual.

COLOR PALETTE:

Keep the beautiful cinematic colors from the previous version.

Dark charcoal and deep black environments,
cool blue lighting,
subtle warm golden light representing future achievement,
natural skin tones,
very restrained colors.

The image should feel cinematic without becoming gloomy or depressing.

Composition:
wide cinematic composition,
character as the main visual focus,
ordinary modern environments surrounding him,
subtle progression from darker foreground to warmer distant background,
strong depth,
large areas of negative space.

Mood:
realistic,
introspective,
difficult but hopeful,
disciplined,
mature,
cinematic,
thought-provoking.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary visual style.
Dramatic but natural lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

ABSOLUTE NEGATIVE PROMPT:
post-apocalyptic, apocalypse, dystopian city, destroyed buildings, ruins, abandoned city, war zone, disaster, wasteland, zombies, destruction, fire, destroyed cars, fantasy world, medieval environment, futuristic dystopia, monster, superhero, photorealistic human, real person, live action, photograph, realistic human face, real actor, 3D human, anime, childish cartoon, excessive darkness, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'A beleza madura do progresso real: em vez de recompensas digitais instantâneas, a vida cotidiana se constrói em silêncio — trabalhando até tarde, treinando, estudando e riscando dias no calendário sob a luz do amanhecer.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e corte',
      'Cenário moderno realista: escritório contemporâneo organizado, laptop, livros e halteres no chão',
      'Metáfora do tempo: calendário com dias riscados e despertador da madrugada',
      'Expressão calma, disciplinada e obstinada: sem drama apocalíptico, apenas foco adulto',
      'Alvorada dourada na janela da cidade ao fundo, simbolizando a colheita de longo prazo',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['A Vida Real Exige Tempo', 'Rotina & Disciplina', 'Progresso Gradual', 'O Lado Bem', '16:9'],
  },
  {
    id: 'virtual-power-real-fragility-scene',
    title: 'O Gigante Virtual e o Homem Real: A Ilusão de Poder Imediato',
    subtitle: 'Ilustração Psicológica 16:9 • O avatar colossal triunfante em ouro e ciano vs. a versão real pequena e vulnerável na escuridão',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_virtual_power_real_fragility_1790637592629.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração psicológica cinematográfica e escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino dentro de um mundo espetacular de videogame ficcional.
Por um breve momento, ele parece extremamente poderoso e quase invencível.
Cercando-o com representações visuais sutis de sucesso virtual:
uma medalha brilhante,
troféus,
símbolos de conquista,
uma arma ficcional poderosa,
energia de subida de nível (level-up),
e oponentes ficcionais derrotados ao longe no fundo.
O personagem deve estar em pé com confiança no centro da cena, iluminado pela luz dramática do jogo.
No entanto, crie um contraste psicológico sutil.
Atrás de sua silhueta heróica poderosa, mostre uma versão muito menor e frágil de si mesmo sentado sozinho na mesa de jogo no mundo real.
A versão heróica do videogame deve ser enorme.
A versão do mundo real deve ser pequena e quase perdida na escuridão.
Esse contraste deve comunicar que a sensação de ser poderoso existe dentro do mundo virtual, enquanto a vida real não mudou.
O herói do videogame deve parecer impressionante, mas NÃO como um super-herói tradicional (sem capa, sem fantasia genérica).
Ele deve permanecer o mesmo personagem de avatar ilustrado maduro.
O mundo virtual deve parecer sedutor e magnífico, mas ligeiramente artificial.
Paleta de cores contida: preto profundo, azul escuro, branco frio, ouro metálico sutil, detalhes muito sutis em vermelho.
A imagem deve comunicar a ideia de:
"PODER INSTANTANEAMENTE CONCEDIDO"
versus
"A VIDA REAL AINDA À ESPERA."
Não exiba essas palavras como texto.
Composição: enquadramento cinematográfico amplo, personagem heróico centralizado, mundo virtual ao redor, versão pequena do mundo real visível abaixo/atrás dele.
Clima: sedutor, poderoso, belo, ligeiramente perturbador, psicológico, instigante.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, super-herói tradicional, capa, músculos excessivos, cores excessivas, texto, legendas, logo, marca d'água, anime, desenho infantil.`,
    promptEn: `Create a dark, cinematic psychological illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character standing inside a spectacular fictional videogame world.

For a brief moment, he appears extremely powerful and almost invincible.

Surround him with subtle visual representations of virtual success:
a glowing medal,
trophies,
achievement symbols,
a powerful fictional weapon,
level-up energy,
and distant fictional opponents defeated in the background.

The character should stand confidently at the center of the scene, illuminated by the game's dramatic light.

However, create a subtle psychological contrast.

Behind his powerful heroic silhouette, show a much smaller and fragile version of himself sitting alone at the gaming desk in the real world.

The heroic videogame version should be enormous.

The real-world version should be small and almost lost in darkness.

This contrast should communicate that the feeling of being powerful exists inside the virtual world, while real life has not changed.

The videogame hero should look impressive but NOT like a traditional superhero.

He must remain the same mature illustrated avatar character.

The virtual world should feel seductive and magnificent, but slightly artificial.

Use a restrained color palette:
deep black,
dark blue,
cold white,
subtle metallic gold,
very subtle red accents.

Avoid excessive colors.

The image should communicate the idea of:

"POWER INSTANTLY GIVEN"
versus
"REAL LIFE STILL WAITING."

Do not display these words as text.

Composition:
large cinematic frame,
heroic character centered,
virtual world surrounding him,
small real-world version visible behind or beneath him,
strong contrast between virtual power and real-world vulnerability.

Mood:
seductive,
powerful,
beautiful,
slightly disturbing,
psychological,
thought-provoking.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary aesthetic.
Dramatic cinematic lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, realistic human face, real actor, 3D human, anime, childish cartoon, traditional superhero costume, cape, excessive muscles, copyrighted videogame character, excessive colors, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign, distorted hands, extra limbs.`,
    narrativeContext: 'A ilusão da onipotência virtual: dentro do jogo, o avatar se sente um gigante vitorioso, coroado por medalhas e troféus em segundos. Na realidade tangível, o jogador continua pequeno, imóvel e vulnerável em seu quarto escuro.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços faciais, barba e cabelo',
      'Versão virtual monumental: confiante, empunhando artefato brilhante e rodeado por troféus dourados',
      'Versão real pequena e frágil: curvada diante do monitor na escuridão profunda',
      'Contraste psicológico perturbador: Poder Imediatamente Concedido vs. A Vida Real Ainda à Espera',
      'Sem capa, sem fantasia de super-herói tradicional e sem músculos caricatos',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['O Gigante Virtual', 'Vulnerabilidade Real', 'Ilusão de Poder', 'O Lado Mal', '16:9'],
  },
  {
    id: 'instant-reward-vs-effort-scene',
    title: 'Recompensa Instantânea vs. Esforço Real: O Botão START e a Ilusão de Conquista',
    subtitle: 'Ilustração Cinematográfica 16:9 • Troféus e medalhas douradas em segundos vs. a estrada pesada esquecida nas sombras',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_instant_reward_vs_effort_1790637529261.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino sentado em uma mesa gamer em uma sala extremamente escura.
À sua frente está um grande monitor de videogame.
O momento deve representar o instante em que ele pressiona o botão START.
A tela do videogame de repente se torna intensamente brilhante, contrastando dramaticamente com a sala escura.
Da tela, uma sequência de recompensas virtuais instantâneas começa a surgir:
medalhas de ouro,
troféus,
símbolos de conquista,
efeitos brilhantes de level-up,
aplausos representados por silhuetas sutis,
e poderosas recompensas de jogo.
Tudo acontece quase instantaneamente.
O rosto do personagem demonstra surpresa e empolgação ao receber um enorme reconhecimento virtual após apenas alguns segundos.
O contraste é extremamente importante:
Atrás dele, mal visível na escuridão, está o difícil caminho da vida real com escadas, pesos, livros e obstáculos.
À sua frente, o videogame proporciona recompensas imediatas com quase nenhum esforço visível.
A cena deve comunicar visualmente:
ANOS DE ESFORÇO NA VIDA REAL
VERSUS
MINUTOS DE RECOMPENSA VIRTUAL.
Mantenha a imagem sofisticada e cinematográfica, sem parecer infantil.
Paleta de cores: principalmente preto e carvão escuro, luz azul fria do monitor, ouro metálico sutil das medalhas, detalhes muito contidos em vermelho.
Composição: personagem centralizado, monitor diretamente à frente, recompensas virtuais emergindo da tela, obstáculos escuros da vida real quase ocultos atrás dele.
Clima: tentador, hipnótico, poderoso, misterioso, psicológico.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, efeitos infantis exagerados, personagens protegidos por direitos autorais, texto, legendas, logo, marca d'água, anime, desenho infantil.`,
    promptEn: `Create a dark, cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character sitting at a gaming desk in an extremely dark room.

In front of him is a large videogame monitor.

The moment should represent the instant he presses the START button.

The videogame screen suddenly becomes intensely bright, contrasting dramatically with the dark room.

From the screen, a sequence of instant virtual rewards begins appearing:
gold medals,
trophies,
achievement symbols,
glowing level-up effects,
applause represented by subtle silhouettes,
and powerful game rewards.

Everything happens almost instantly.

The character's face shows surprise and excitement as he receives enormous virtual recognition after only a few seconds.

The contrast is extremely important:

Behind him, barely visible in darkness, is the difficult real-life path with stairs, weights, books and obstacles.

In front of him, the videogame provides immediate rewards with almost no visible effort.

The scene should visually communicate:

YEARS OF REAL-LIFE EFFORT
VERSUS
MINUTES OF VIRTUAL REWARD.

Keep the image sophisticated and cinematic rather than colorful or childish.

Color palette:
mostly black and dark charcoal,
cold blue monitor light,
subtle metallic gold from the medals,
very restrained red accents.

Composition:
character centered,
monitor directly in front,
virtual rewards emerging from the screen,
dark real-life obstacles barely visible behind him.

Mood:
tempting,
hypnotic,
powerful,
mysterious,
psychological.

Mature illustrated graphic-novel aesthetic.
Premium documentary visual style.
Dramatic lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, realistic human face, real actor, 3D human, anime, childish cartoon, excessive colorful effects, childish videogame, copyrighted game characters, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'O gatilho psicológico da recompensa sem atrito: o botão START ativa uma cascata de dopamina, troféus e validação imediata em segundos, enquanto a realidade exige disciplina penosa ao longo de anos.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços, barba e cabelo',
      'Monitor intensamente brilhante no exato momento em que aperta START',
      'Cascata instantânea de medalhas de ouro, troféus reluzentes e silhuetas de aplauso',
      'Expressão de surpresa e fascínio diante do reconhecimento imediato sem esforço',
      'Contraste dramático: livros, pesos e escadas da vida real esquecidos na penumbra atrás dele',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['Recompensa Instantânea', 'O Botão START', 'Anos vs Minutos', 'Dualidade', '16:9'],
  },
  {
    id: 'real-life-difficult-path-scene',
    title: 'A Estrada da Vida Real: O Custo do Esforço, Disciplina e Paciência',
    subtitle: 'Ilustração Cinematográfica 16:9 • Longa estrada chuvosa, pesos, livros de estudo e luz quente distante',
    side: 'dual',
    imageUrl: '/src/assets/images/scene_real_life_journey_1790637405396.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração cinematográfica escura usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
Mostre o mesmo personagem masculino caminhando sozinho por um caminho longo e difícil que representa a vida real.
O caminho deve se estender para longe na distância e desaparecer na escuridão.
Ao longo do caminho, mostre sutilmente símbolos visuais de anos de esforço:
pesos pesados no chão,
livros,
ferramentas de trabalho,
escadas íngremes,
chuva,
pequenos obstáculos,
projetos inacabados,
e objetivos distantes que ainda estão muito longe.
O personagem deve parecer cansado, mas determinado.
Suas roupas devem parecer ligeiramente desgastadas pela jornada, mas ele continua avançando.
O caminho deve comunicar que tornar-se forte, admirado e bem-sucedido exige:
anos de esforço,
dor,
incerteza,
disciplina,
paciência,
e incontáveis momentos em que ninguém está assistindo.
Não mostre texto literal ou rótulos.
O ambiente deve ser predominantemente escuro e desbotado, com uma pequena luz quente visível bem à frente, representando a conquista de longo prazo.
Composição: plano cinematográfico amplo, personagem relativamente pequeno, estrada longa dominando o quadro, grande espaço negativo, perspectiva dramática.
Clima: difícil, solitário, sério, determinado, introspectivo, cinematográfico.
Estética de graphic novel ilustrada madura, estilo de documentário psicológico premium, iluminação dramática, alto detalhe, 16:9.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, super-herói, músculos exagerados, cores excessivas, mundo de fantasia, texto, legendas, logo, marca d'água, anime, desenho infantil.`,
    promptEn: `Create a dark, cinematic illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

Show the same male character walking alone through a long, difficult path representing real life.

The path should stretch far into the distance and disappear into darkness.

Along the path, subtly show visual symbols of years of effort:
heavy weights on the ground,
books,
work tools,
steep stairs,
rain,
small obstacles,
unfinished projects,
and distant goals that are still far away.

The character should look tired but determined.

His clothing should appear slightly worn from the journey, but he continues moving forward.

The path should communicate that becoming strong, admired and successful requires:
years of effort,
pain,
uncertainty,
discipline,
patience,
and countless moments when nobody is watching.

Do not show literal text or labels.

The environment should be predominantly dark and desaturated, with a small warm light visible far ahead, representing long-term achievement.

Composition:
wide cinematic shot,
character relatively small,
long road dominating the frame,
large negative space,
dramatic perspective.

Mood:
difficult,
lonely,
serious,
determined,
introspective,
cinematic.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary style.
Dramatic lighting.
High detail.
4K quality.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, realistic human face, real actor, 3D human, anime, childish cartoon, superhero, exaggerated muscles, excessive colors, fantasy world, text, subtitles, logos, watermark, generic character, different face, different hairstyle, different beard, character redesign.`,
    narrativeContext: 'O contraste da realidade: os videogames dão feedback e dopamina imediata, enquanto a vida real exige anos de esforço invisível, tropeços, chuva e disciplina solitária para construir conquistas duradouras.',
    cognitiveKeypoints: [
      'Avatar em estilo cartoon ilustrado 2D, com fidelidade aos traços, barba e cabelo',
      'Estrada íngreme e longa com perspectiva profunda estendendo-se pela chuva e neblina',
      'Símbolos de esforço: pesos de ferro no chão, pilhas de livros, ferramentas e plantas de projetos',
      'Personagem cansado, porém firme e resoluto, caminhando rumo ao horizonte',
      'Pequena luz dourada ao longe representando a recompensa genuína de longo prazo',
      'Zero texto, sem legendas, sem logos e sem marcas d\'água',
    ],
    tags: ['A Estrada Real', 'Esforço & Disciplina', 'Recompensa de Longo Prazo', 'Dualidade', '16:9'],
  },
  {
    id: 'dopamine-minimalist-title-scene',
    title: 'O Sequestro Biológico da Dopamina: Minimalismo Sombrio & Espaço Negativo',
    subtitle: 'Ilustração Conceitual Minimalista 16:9 • 90% preto, vazio cósmico silencioso, sombra opressiva e título único',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_dopamine_dark_v2_1790637154421.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração conceitual ESCURA, MINIMALISTA e CINEMATOGRÁFICA usando a imagem do avatar anexada como referência EXATA de personagem.
REGRA IMPORTANTE DO PERSONAGEM:
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista 3D.
CENA:
Mostre o mesmo personagem masculino sozinho em um espaço escuro vasto, quase vazio.
O ambiente deve ser extremamente minimalista.
O fundo é predominantemente PRETO e carvão muito escuro (90%).
NÃO mostre galáxias coloridas. NÃO mostre nebulosas. NÃO mostre planetas. NÃO mostre nuvens cósmicas coloridas.
Apenas algumas microestrelas distantes BRANCAS e azuladas muito sutis devem aparecer espalhadas no fundo.
O espaço deve parecer enorme, vazio, silencioso e misterioso.
O personagem é iluminado por uma luz azul fria muito sutil vinda de uma tela de videogame à sua frente.
A tela do videogame é a principal fonte de luz.
Atrás do personagem, a luz cria uma GRANDE, PROFUNDA E ESCURA SOMBRA.
A sombra deve ser muito maior que o personagem e deve parecer psicologicamente opressiva.
Dentro da sombra, mostre sutilmente alguns símbolos fracos de recompensa brilhantes e padrões circulares sugerindo recompensas intermináveis de videogame e repetição.
Mantenha esses elementos extremamente sutis e quase ocultos.
NÃO crie um monstro. NÃO crie um demônio. NÃO crie possessão literal.
A sombra representa o mecanismo psicológico e biológico oculto por trás da estimulação excessiva de recompensa.
O visual deve comunicar:
RECOMPENSA BRILHANTE → REPETIÇÃO → SOMBRA ESCURA.
O personagem deve permanecer focado na tela do videogame, enquanto a enorme sombra atrás dele revela o perigo oculto.
A composição deve ter MUITO ESPAÇO NEGATIVO VAZIO.
A imagem deve parecer o cartão de título de um documentário psicológico premium.
PALETA DE CORES:
90% preto / carvão escuro. Luz azul fria muito sutil. Pequenas estrelas brancas. Toques muito sutis em vermelho escuro apenas dentro da sombra.
SEM cores vibrantes. SEM nebulosa roxa. SEM galáxias coloridas.
TIPOGRAFIA — EXTREMAMENTE IMPORTANTE:
Deve haver EXATAMENTE UM elemento de texto em toda a imagem.
Escreva APENAS esta frase exata:
"O SEQUESTRO BIOLÓGICO DA DOPAMINA"
Esta frase exata deve aparecer APENAS UMA VEZ.
NÃO repita a frase. NÃO repita nenhuma palavra da frase em outro lugar. NÃO crie um segundo título. NÃO crie subtítulos. NÃO crie texto adicional.
O texto deve ser perfeitamente legível e grafado corretamente.
Use tipografia cinematográfica elegante e séria.
"O SEQUESTRO BIOLÓGICO DA" deve ser branco/prateado sutil.
"DOPAMINA" deve ter uma ênfase sutil em vermelho escuro.
Posicione o título único na área central inferior da composição, com bastante espaço vazio ao redor.
Composição cinematográfica muito ampla, personagem relativamente pequeno em comparação com o enorme ambiente vazio, grande espaço negativo ao redor.
SEM TEXTO ADICIONAL, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: galáxia colorida, nebulosa colorida, espaço colorido, nuvens roxas ou rosas, planetas, iluminação colorida, monstro, demônio, sangue, cérebro literal, humano fotorrealista, pessoa real, live action, texto repetido, título duplicado, palavras duplicadas, legendas, logo, marca d'água.`,
    promptEn: `Create a DARK, MINIMALIST and CINEMATIC conceptual illustration using the attached avatar image as the EXACT character reference.

IMPORTANT CHARACTER RULE:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the attached avatar.
Do NOT transform him into a real human, photorealistic person, live-action actor, photograph or 3D realistic human.

SCENE:

Show the same male character alone in a vast, almost empty dark space.

The environment should be extremely minimal.

The background is predominantly BLACK and very dark charcoal.

Do NOT show colorful galaxies.
Do NOT show nebulae.
Do NOT show planets.
Do NOT show colorful cosmic clouds.

Only a few tiny distant WHITE and very subtle BLUE stars should appear scattered across the background.

The space should feel enormous, empty, silent and mysterious.

The character is illuminated by a very subtle cold blue light coming from a videogame screen in front of him.

The videogame screen is the main light source.

Behind the character, the light creates a LARGE, DEEP, DARK SHADOW.

The shadow should be much larger than the character and should feel psychologically oppressive.

Inside the shadow, subtly show a few faint glowing reward symbols and circular patterns suggesting endless videogame rewards and repetition.

Keep these elements extremely subtle and almost hidden.

Do NOT create a monster.
Do NOT create a demon.
Do NOT create literal possession.

The shadow represents the hidden psychological and biological mechanism behind excessive reward stimulation.

The visual should communicate:

BRIGHT REWARD → REPETITION → DARK SHADOW.

The character should remain focused on the videogame screen, while the enormous shadow behind him reveals the hidden danger.

The composition must have a LOT OF EMPTY NEGATIVE SPACE.

The image should feel like a premium psychological documentary title card.

COLOR PALETTE:

90% black / dark charcoal.

Very subtle cold blue light.

Tiny white stars.

Extremely subtle dark red accents only inside the shadow.

NO vibrant colors.
NO purple nebula.
NO colorful galaxies.
NO rainbow lighting.

TYPOGRAPHY — EXTREMELY IMPORTANT:

There must be EXACTLY ONE text element in the entire image.

Write ONLY this exact sentence:

"O SEQUESTRO BIOLÓGICO DA DOPAMINA"

This exact sentence must appear ONLY ONCE.

DO NOT repeat the sentence.
DO NOT repeat any words from the sentence anywhere else.
DO NOT create a second title.
DO NOT create subtitles.
DO NOT create additional text.
DO NOT create labels.
DO NOT create random letters.

The text must be perfectly readable and correctly spelled.

Use elegant, serious cinematic typography.

"O SEQUESTRO BIOLÓGICO DA" should be subtle white/silver.

"DOPAMINA" should have a very subtle dark red emphasis.

Place the single title in the lower central area of the composition, with enough empty space around it.

The title must be the ONLY readable text in the image.

COMPOSITION:

Very wide cinematic composition.

Character relatively small compared to the enormous empty environment.

Large negative space surrounding him.

A few tiny stars in the distance.

Subtle blue videogame light in front.

Huge dark shadow behind.

Single title at the bottom center.

The image should feel:

dark,
empty,
mysterious,
psychological,
serious,
minimalist,
hypnotic,
cinematic,
intelligent.

Mature illustrated graphic-novel aesthetic.
Premium psychological documentary aesthetic.
Dramatic but restrained lighting.
High detail.
4K quality.

ABSOLUTE NEGATIVE PROMPT:

colorful galaxy, colorful nebula, colorful space, purple clouds, pink clouds, rainbow colors, planets, meteorites, excessive stars, busy background, colorful lighting, excessive visual effects, excessive particles, monster, demon, horror creature, literal possession, blood, gore, literal brain, medical diagram, photorealistic human, real person, live action, photograph, realistic human face, real actor, 3D human, anime, childish cartoon, text repeated, duplicate title, duplicate words, extra text, subtitles, captions, labels, random letters, misspelled text, distorted typography, logo, watermark, generic character, different face, different hairstyle, different beard, character redesign, excessive colors, cluttered composition.`,
    narrativeContext: 'O título conceitual minimalista e sombrio: a solidão silenciosa da mente presa na armadilha dos circuitos de recompensa, com 90% de escuridão profunda, zero distração cósmica e a tipografia central que resume o fenômeno neurobiológico.',
    cognitiveKeypoints: [
      'Estética rigorosamente minimalista: 90% preto e carvão com amplo espaço negativo',
      'Sem galáxias coloridas, nebulosas ou planetas: silêncio e vazio absoluto',
      'Personagem em escala reduzida imerso na vastidão, iluminado pela tela azul fria',
      'Sombra colossal contendo padrões circulares sutis em vermelho escuro',
      'Título único "O SEQUESTRO BIOLÓGICO DA DOPAMINA" na base com espaçamento elegante',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Minimalismo Sombrio', 'Espaço Negativo 90%', 'Título Único', 'Vazio Psicológico', 'O Lado Mal', '16:9'],
  },
  {
    id: 'dopamine-animation-sequence-scene',
    title: 'Animação Cinematográfica 5s: O Sequestro Biológico da Dopamina',
    subtitle: 'Sequência de Animação 16:9 • Push de câmera, órbita acelerada de XP, sombra colossal e revelação de título',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_dopamine_anim_1790636811657.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma animação cinematográfica de 5 segundos usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções e estética madura de graphic novel do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Cena:
O personagem é cercado por um enorme universo cósmico escuro repleto de galáxias, nebulosas, estrelas, poeira cósmica e energia brilhante em azul e violeta.
No início da animação, uma bela luz de videogame azul e branca brilha em direção ao personagem.
Lentamente, a câmera avança em direção a ele.
Símbolos brilhantes de recompensa de videogame começam a aparecer ao redor do personagem:
partículas de XP, ícones de conquistas, troféus, moedas e efeitos de subida de nível.
Essas recompensas começam a se mover cada vez mais rápido em um loop circular ao redor dele.
A bela luz cósmica então cria uma enorme sombra escura atrás do personagem.
A sombra se expande lentamente pelo universo, revelando que as recompensas infinitas estão conectadas a ela.
Vias sutis de energia semelhantes a neurônios pulsam pelo ambiente cósmico, sugerindo um sistema biológico de recompensa sem mostrar um cérebro literal.
O personagem permanece fascinado pela luz à sua frente enquanto a enorme sombra cresce atrás dele.
O momento final deve criar um poderoso contraste visual:
LUZ BRILHANTE NA FRENTE.
SOMBRA ESCURA ATRÁS.
Durante os 2 segundos finais, revele uma tipografia cinematográfica elegante na parte central/inferior do quadro:
"O SEQUESTRO BIOLÓGICO DA DOPAMINA"
O texto deve aparecer suavemente e permanecer perfeitamente legível.
"O SEQUESTRO BIOLÓGICO DA" deve ser branco/prateado.
"DOPAMINA" deve aparecer em vermelho intenso.
A tipografia deve parecer o título de um documentário psicológico premium.
Estilo de animação: movimento lento de câmera, partículas flutuantes, galáxias em movimento lento, fluxo de energia cósmica, símbolos orbitando velozmente, sombra expandindo-se gradualmente, pulsos suaves de luz.
Cronograma:
0–1,5s: Universo cósmico belo, luz azul-branca, personagem iluminado.
1,5–3s: Recompensas multiplicam-se e orbitam o personagem velozmente.
3–4s: Sombra gigantesca expande-se atrás dele enquanto o cosmos escurece.
4–5s: Câmera aproxima-se e surge o título "O SEQUESTRO BIOLÓGICO DA DOPAMINA" com hold final.`,
    promptEn: `Create a 5-second cinematic animation using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform him into a real human, photorealistic person, live-action actor or photograph.

Scene:
The character is surrounded by an enormous dark cosmic universe filled with galaxies, nebulae, stars, cosmic dust and glowing blue and violet energy.

At the beginning of the animation, beautiful blue-white videogame light shines toward the character.

Slowly, the camera pushes forward toward him.

Glowing videogame reward symbols begin appearing around the character:
XP particles, achievement icons, trophies, coins and level-up effects.

These rewards start moving faster and faster in a circular loop around him.

The beautiful cosmic light then creates an enormous dark shadow behind the character.

The shadow slowly expands across the universe, revealing that the endless rewards are connected to it.

Subtle neural-like energy pathways pulse through the cosmic environment, suggesting a biological reward system without showing a literal brain.

The character remains fascinated by the light in front of him while the enormous shadow grows behind him.

The final moment should create a powerful visual contrast:

BRIGHT LIGHT IN FRONT.
DARK SHADOW BEHIND.

During the final 2 seconds, reveal elegant cinematic typography in the center/lower portion of the frame:

"O SEQUESTRO BIOLÓGICO DA DOPAMINA"

The text must appear smoothly and remain perfectly readable.

"O SEQUESTRO BIOLÓGICO DA" should be white/silver.

"DOPAMINA" should appear in intense red.

The typography should feel like the title of a premium psychological documentary.

Animation style:
slow cinematic camera movement,
subtle floating particles,
galaxies slowly moving,
cosmic energy flowing,
reward symbols orbiting faster,
shadow expanding gradually,
subtle light pulses,
smooth professional motion.

Do NOT make the animation chaotic.
The movement should feel hypnotic and progressively darker.

Timeline:

0–1.5 seconds:
Beautiful cosmic universe, blue-white videogame light, character illuminated.

1.5–3 seconds:
Videogame rewards begin multiplying and orbiting around the character faster and faster.

3–4 seconds:
A gigantic dark shadow expands behind him while the cosmic environment becomes darker.

4–5 seconds:
Camera moves slightly closer and the title appears:

"O SEQUESTRO BIOLÓGICO DA DOPAMINA"

The final frame should hold for a brief moment so the text is completely readable.

Mood:
hypnotic,
mysterious,
psychological,
beautiful but disturbing,
cinematic,
intelligent,
thought-provoking.

Mature illustrated graphic-novel animation,
premium psychological documentary aesthetic,
dramatic volumetric lighting,
high detail,
smooth animation,
4K quality.

NO additional text.
NO subtitles.
NO logos.
NO watermark.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, demon, monster, literal possession, horror creature, blood, gore, literal brain, medical diagram, distorted typography, misspelled words, unreadable text, extra text, logo, watermark, generic character, different face, different hairstyle, different beard, character redesign, distorted hands, extra limbs.`,
    narrativeContext: 'A sequência de animação central de 5 segundos que introduz o capítulo científico: o espectador acompanha a transição hipnótica onde o universo de recompensas acelera em órbita até revelar o sequestro dopaminérgico em tipografia monumental.',
    cognitiveKeypoints: [
      'Timeline precisa de 5 segundos com 4 fases sequenciais bem marcadas',
      '0–1.5s: Despertar cósmico e push-in da câmera cinematográfica',
      '1.5–3s: Aceleração orbital de partículas de XP, troféus e moedas em vórtice 3D',
      '3–4s: Expansão da sombra psicológica monumental com pulsos sinápticos',
      '4–5s: Revelação da tipografia "O SEQUESTRO BIOLÓGICO DA DOPAMINA" com hold legível',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Animação 5s', 'Timeline Sequencial', 'Órbita de Recompensas', 'Push de Câmera', 'Tipografia Revelada', 'O Lado Mal', '16:9'],
  },
  {
    id: 'dopamine-biological-kidnap-scene',
    title: 'O Sequestro Biológico da Dopamina: O Loop de Recompensa Cósmico',
    subtitle: 'Ilustração Conceitual 16:9 • Tipografia cinematográfica, universo cósmico, sombra de XP e sinapses',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_dopamine_kidnap_1790636671324.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma ilustração conceitual altamente cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções e estética madura de graphic novel do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Mostre o personagem em pé ou sentado em um universo cósmico escuro, cercado por um enorme ambiente de espaço profundo: espaço preto profundo, galáxias, nebulosas, estrelas, poeira cósmica, nuvens brilhantes em azul e violeta, planetas distantes e partículas sutis de energia.
O personagem é iluminado principalmente por uma poderosa luz azul e branca vinda de uma interface de videogame brilhante à sua frente.
A bela luz cósmica deve se transformar gradualmente em uma gigantesca sombra escura atrás do personagem.
Dentro desta enorme sombra, incorpore sutilmente símbolos visuais de recompensas intermináveis de videogame: ícones brilhantes de conquistas, partículas de XP, símbolos de subida de nível, moedas, troféus, barras de progresso e padrões repetitivos de recompensa.
Esses elementos devem parecer formar um loop circular infinito ao redor do personagem, representando estimulação constante e busca por recompensa.
Crie a metáfora visual de um belo universo se tornando uma armadilha invisível.
O personagem deve parecer fascinado pela luz brilhante à sua frente, enquanto a enorme sombra atrás dele revela o perigo oculto.
A sombra NÃO deve ser um monstro ou demônio. Deve parecer um mecanismo biológico e psicológico abstrato oculto dentro da beleza da experiência do videogame.
Adicione vias de energia sutis semelhantes a neurônios dentro do ambiente cósmico, conectando as recompensas brilhantes, sugerindo o sistema de recompensa do cérebro sem mostrar um cérebro humano literal.
A composição geral deve comunicar:
LUZ → RECOMPENSA → REPETIÇÃO → COMPULSÃO → SOMBRA.
MAIS IMPORTANTE:
Coloque uma tipografia cinematográfica grande, elegante e altamente legível na parte inferior/central da imagem:
"O SEQUESTRO BIOLÓGICO DA DOPAMINA"
O texto DEVE ser escrito exatamente assim, com grafia e acentuação corretas.
Use tipografia cinematográfica sofisticada. "O SEQUESTRO BIOLÓGICO DA" deve ser branco ou prateado. "DOPAMINA" deve ser destacada em vermelho intenso.
O texto deve parecer integrado ao universo cinematográfico, como pertencente a um documentário psicológico premium.
Composição: enquadramento cinematográfico amplo, personagem posicionado ligeiramente abaixo do centro, universo cósmico enorme ao redor, luz azul-branca brilhante na frente, sombra escura colossal atrás.
Iluminação: azul elétrico, ciano, violeta, realces brancos, sombras pretas profundas, detalhes sutis em vermelho escuro dentro da sombra.
Clima: misterioso, psicológico, belo, hipnótico, perturbador, inteligente, cinematográfico.
SEM texto adicional, SEM legendas, SEM logos, SEM marcas d'água.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, monstro, demônio, possessão literal, sangue, cérebro literal, diagrama médico, tipografia distorcida, palavras com erros ortográficos.`,
    promptEn: `Create a highly cinematic conceptual illustration using the attached avatar image as the EXACT character reference.

IMPORTANT:
The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform him into a real human, photorealistic person, live-action actor or photograph.

Show the character standing or sitting in a dark cosmic universe, surrounded by an enormous deep-space environment.

The background should look like an infinite universe:
deep black space, galaxies, nebulae, stars, cosmic dust, glowing blue and violet clouds, distant planets and subtle energy particles.

The character is illuminated primarily by a powerful blue-white light coming from a glowing videogame interface in front of him.

The beautiful cosmic light should gradually transform into a gigantic dark shadow behind the character.

Inside this enormous shadow, subtly incorporate visual symbols of endless videogame rewards:
glowing achievement icons, XP particles, level-up symbols, coins, trophies, progress bars and repeating reward patterns.

These elements should appear to form an infinite circular loop around the character, representing constant stimulation and reward seeking.

Create the visual metaphor of a beautiful universe becoming an invisible trap.

The character should look fascinated by the glowing light in front of him, while the enormous shadow behind him reveals the hidden danger.

The shadow should NOT be a monster or demon.
It should look like an abstract biological and psychological mechanism hidden inside the beauty of the videogame experience.

Add subtle neural-like energy pathways inside the cosmic environment, connecting the glowing rewards together, suggesting the brain's reward system without showing a literal human brain.

The overall composition should communicate:

LIGHT → REWARD → REPETITION → COMPULSION → SHADOW.

MOST IMPORTANT:
Place large, elegant, highly readable cinematic typography in the center/lower portion of the image:

"O SEQUESTRO BIOLÓGICO DA DOPAMINA"

The text MUST be written exactly like this, with correct spelling and accents.

Use sophisticated cinematic typography.
"O SEQUESTRO BIOLÓGICO DA" should be white or silver.
"DOPAMINA" should be highlighted in intense red.

The text should look integrated into the cinematic universe, as if it belongs to a premium psychological documentary.

Make the typography perfectly readable, correctly spelled, without distorted letters.

Composition:
wide cinematic frame,
character positioned slightly below center,
enormous cosmic universe surrounding him,
bright blue-white light in front,
massive dark shadow behind,
cosmic particles flowing through the scene,
strong depth and perspective.

Lighting:
electric blue,
cyan,
violet,
white highlights,
deep black shadows,
subtle dark red accents inside the shadow.

Mood:
mysterious,
psychological,
beautiful,
hypnotic,
disturbing,
intelligent,
cinematic.

Mature illustrated graphic-novel aesthetic,
premium documentary visual style,
dramatic volumetric lighting,
high detail,
4K quality.

NO additional text.
NO subtitles.
NO logos.
NO watermark.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photograph, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, demon, monster, literal possession, horror creature, blood, gore, literal brain, medical diagram, distorted typography, misspelled words, unreadable text, extra text, logo, watermark, generic character, different face, different hairstyle, different beard, character redesign, distorted hands, extra limbs.`,
    narrativeContext: 'O ápice reflexivo do documentário: o momento em que a neurociência investiga como o cérebro humano é sequestrado pela liberação contínua de dopamina pré-programada pelo design de jogos, criando um ciclo perpétuo de recompensa e ilusão de controle.',
    cognitiveKeypoints: [
      'Tipografia cinematográfica de prestígio: "O SEQUESTRO BIOLÓGICO DA DOPAMINA" com "DOPAMINA" em vermelho',
      'Universo cósmico monumental com galáxias e nebulosas violetas em espaço profundo',
      'Sombra psicológica gigantesca contendo o loop infinito de troféus, XP, barras de progresso e níveis',
      'Caminhos neurais de energia interligando as recompensas sem recurso a demônios ou monstros literais',
      'Avatar desenhado em estilo cartoon ilustrado 2D, com total fidelidade ao canal',
    ],
    tags: ['Sequestro de Dopamina', 'Tipografia Cinematográfica', 'Loop de Recompensa', 'Universo Cósmico', 'O Lado Mal', '16:9'],
  },
  {
    id: 'game-refuge-lonely-scene',
    title: 'O Game como Refúgio: O Acolhimento Contra o Vazio e a Incerteza',
    subtitle: 'Ilustração Cartoon 16:9 • Quarto sem notificações vs. monitor-portal banhado em calor e aceitação',
    side: 'good',
    imageUrl: '/src/assets/images/scene_game_refuge_1790636406756.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena emocional cinematográfica representando um VIDEOGAME ONLINE COMO UM REFÚGIO para uma pessoa tímida e solitária.
NÃO use o personagem do avatar principal. Crie um personagem jovem adulto fictício completamente diferente.
A cena deve comunicar visualmente a ideia de encontrar um refúgio temporário da solidão e do desconforto social através de um jogo multiplayer online.
Mostre o personagem sentado sozinho em uma mesa gamer tarde da noite em um quarto pequeno e silencioso.
O ambiente do mundo real ao seu redor deve parecer emocionalmente distante e desconfortável:
quarto escuro, cortinas fechadas, cadeira vazia por perto, telefone deitado na mesa sem notificações, ambiente silencioso, sombras sutis envolvendo o personagem.
Sua postura é reservada e ligeiramente fechada, ombros baixos, mãos descansando no controle.
Ele NÃO parece arrasado ou deprimido. Em vez disso, parece alguém que simplesmente não sabe onde se encaixa no mundo real.
Então crie uma transição visual poderosa ao redor do monitor do computador.
O monitor se torna uma espécie de PORTAL VISUAL para outro mundo.
Dentro da tela, mostre um saguão (lobby) de jogo online acolhedor e caloroso, repleto de vários jogadores fictícios amigáveis.
O saguão virtual deve parecer um espaço social seguro:
jogadores sentados juntos, comunicando-se através de fones de ouvido, rindo naturalmente, acolhendo o recém-chegado e se preparando para uma aventura cooperativa.
O personagem principal olha em direção à tela e relaxa lentamente.
Sua postura se abre. Seus ombros sobem naturalmente. Um sorriso sutil e genuíno aparece em seu rosto.
A luz do mundo virtual ilumina suavemente seu rosto, criando a sensação de que ele finalmente encontrou um lugar ao qual pertence.
Crie uma metáfora visual sutil:
o quarto escuro permanece atrás dele, enquanto o saguão de jogo brilhante envolve a frente da cena como um espaço protetor.
O mundo do jogo deve conter belas montanhas, florestas, cidades distantes e caminhos misteriosos, sugerindo aventura, exploração e infinitas possibilidades.
A ideia central deve ser:
O MUNDO REAL PARECE SOLITÁRIO.
O JOGO SE TORNA UM REFÚGIO TEMPORÁRIO.
DENTRO DESSE REFÚGIO, ELE ENCONTRA PESSOAS QUE O OUVEM.
NÃO exiba essas palavras como texto. Comunique tudo através da narrativa visual.
A cena NÃO deve sugerir que os videogames curam magicamente a solidão ou a ansiedade social. Ela deve simplesmente mostrar como um jogo online pode se tornar o primeiro lugar onde alguém se sente ouvido, acolhido e conectado a outras pessoas.
Composição cinematográfica, estética madura de graphic novel ilustrada, atmosfera escura sofisticada, narrativa emocional, iluminação dramática, sombras profundas, lindo contraste entre isolamento e conexão, ambiente altamente detalhado, 16:9.
Iluminação: iluminação fria e suave em azul-acinzentado no quarto real. Iluminação em azul quente e branco suave vindo do lobby virtual.
Clima: solitário, íntimo, misterioso, reconfortante, esperançoso e emocionalmente poderoso.
IMPORTANTE: O personagem deve ser um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO. NÃO transforme em humano real, pessoa fotorrealista ou fotografia.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, tristeza extrema, choro, horror, ambiente tóxico, bullying, agressividade, violência.`,
    promptEn: `Create a cinematic emotional scene representing an ONLINE GAME AS A REFUGE for a shy and lonely person.

Do NOT use the main avatar character. Create a completely different fictional young adult character.

The scene should visually communicate the idea of finding a temporary refuge from loneliness and social discomfort through an online multiplayer game.

Show the character sitting alone at a gaming desk late at night in a small, quiet bedroom.

The real-world environment around him should feel emotionally distant and uncomfortable:
dark room, closed curtains, empty chair nearby, phone lying on the desk with no notifications, quiet surroundings, subtle shadows surrounding the character.

His posture is reserved and slightly closed, shoulders lowered, hands resting on the controller.

He does NOT look devastated or depressed.
Instead, he looks like someone who simply doesn't know where they belong in the real world.

Then create a powerful visual transition around the computer monitor.

The monitor becomes a kind of VISUAL DOORWAY into another world.

Inside the screen, show a warm and welcoming online game lobby filled with several friendly fictional players.

The virtual lobby should feel like a safe social space:
players sitting together, communicating through headsets, laughing naturally, welcoming the newcomer and preparing for a cooperative adventure.

The main character looks toward the screen and slowly becomes more relaxed.

His posture opens.
His shoulders rise naturally.
A subtle genuine smile appears on his face.

The light from the virtual world gently illuminates his face, creating the feeling that he has finally found somewhere where he belongs.

Create a subtle visual metaphor:
the dark bedroom remains behind him, while the glowing game lobby surrounds the front of the scene like a protective space.

The game world should contain beautiful mountains, forests, distant cities and mysterious paths, suggesting adventure, exploration and endless possibilities.

The central idea should be:

THE REAL WORLD FEELS LONELY.
THE GAME BECOMES A TEMPORARY REFUGE.
INSIDE THAT REFUGE, HE FINDS PEOPLE WHO LISTEN TO HIM.

Do NOT display these words as text.
Communicate everything through the visual storytelling.

The scene should NOT suggest that videogames magically cure loneliness or social anxiety.
It should simply show how an online game can become the first place where someone feels heard, welcomed and connected to other people.

Cinematic composition, mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, emotional storytelling, dramatic lighting, deep shadows, beautiful contrast between isolation and connection, highly detailed environment, premium cinematic illustration, 4K quality.

Lighting:
cold, subdued blue-gray lighting in the real bedroom.
Warm blue and soft white illumination coming from the virtual lobby.
The transition between both worlds should feel natural and emotionally powerful.

Mood:
lonely, intimate, mysterious, comforting, hopeful and emotionally powerful.

IMPORTANT:
The character must be a DRAWN / ILLUSTRATED CARTOON CHARACTER.
Do NOT transform the character into a real human, photorealistic person, live-action actor or photograph.

NO TEXT.
NO SUBTITLES.
NO LOGOS.
NO WATERMARKS.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic stock character, depression imagery, crying, extreme sadness, horror, toxic gaming environment, bullying, aggressive players, violence, text, subtitles, logos, watermark, distorted face, extra limbs, deformed hands.`,
    narrativeContext: 'O papel dos games como refúgio acolhedor: como o ambiente cooperativo online oferece um porto seguro para jovens que se sentem deslocados no mundo físico, servindo como uma primeira ponte de pertencimento social.',
    cognitiveKeypoints: [
      'Personagem inédito: jovem adulto cartoon estilizado em suéter aconchegante, sem usar o avatar principal',
      'Celular na mesa com tela escura e sem notificações, cortinas fechadas e sombras frias no quarto',
      'Monitor como portal de luz cálida dourada e azul projetando calor protetor sobre o rosto do jogador',
      'Postura que se abre com ombros relaxados e um sorriso suave de alívio e pertencimento',
      'Companheiros virtuais amigáveis com fones no saguão, acenando em boas-vindas',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['O Game como Refúgio', 'Acolhimento', 'Solidão Curada', 'Lobby Protetor', 'O Lado Bom', '16:9'],
  },
  {
    id: 'lonely-belonging-split-scene',
    title: 'Solidão Real vs. Pertencimento Virtual: O Acolhimento no Lobby Online',
    subtitle: 'Ilustração Split 16:9 • Quarto isolado com janelas da cidade vs. lobby caloroso com equipe acolhedora',
    side: 'good',
    imageUrl: '/src/assets/images/scene_lonely_belonging_1790636238813.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena emocional cinematográfica mostrando um jovem adulto tímido e solitário encontrando conexão e aceitação através de um videogame multiplayer online.
NÃO use o personagem do avatar principal. Crie uma pessoa fictícia completamente diferente.
A cena deve contrastar visualmente dois mundos.
No LADO ESQUERDO, mostre a pessoa sozinha em seu ambiente do mundo real, sentada em silêncio em uma mesa em um quarto escuro.
Sua postura é ligeiramente fechada e reservada, ombros baixos, mãos descansando perto do teclado e do controle. Sua expressão deve comunicar timidez, desconforto social e solidão, sem parecer excessivamente triste ou deprimida.
O quarto deve parecer silencioso e isolado. Uma janela mostra uma cidade distante lá fora, com muitas janelas iluminadas sugerindo milhares de outras pessoas vivendo suas próprias vidas.
No LADO DIREITO, mostre a mesma pessoa entrando em um saguão (lobby) de jogo online.
A atmosfera muda completamente.
Dentro do saguão virtual, mostre vários jogadores fictícios amigáveis reunidos, comunicando-se através de fones de ouvido, rindo, acolhendo o novo jogador e se preparando para jogar juntos.
O ambiente virtual deve parecer acolhedor, seguro e receptivo.
Crie conexões visuais sutis entre a pessoa real e o grupo online: linhas de comunicação brilhantes, pequenos balões de fala sem texto legível, ícones de jogo compartilhados e símbolos de jogadores conectados.
A pessoa que estava isolada à esquerda agora tem um sorriso sutil e genuíno e uma postura mais relaxada à direita.
A mensagem emocional central deve ser:
"No mundo real, eles lutam para encontrar um lugar onde se sintam ouvidos.
Dentro do jogo, alguém finalmente diz: 'Venha conosco'."
Não exiba esse texto literalmente. Comunique a ideia inteiramente através da narrativa visual.
Torne o contraste poderoso, mas respeitoso. Não retrate os videogames como uma cura mágica para a solidão ou a ansiedade social. Em vez disso, mostre o saguão do jogo como um lugar temporário de conexão, pertencimento e interação social.
Composição cinematográfica de mundos divididos (split-world), estética madura de graphic novel ilustrada, atmosfera escura sofisticada, narrativa emocional, ambiente detalhado.
Iluminação: iluminação fria e suave no lado do mundo real, fazendo a transição gradual para tons de azul quente e suavemente iluminados dentro do lobby virtual.
Clima: íntimo, humano, esperançoso, acolhedor e emocionalmente poderoso.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, celebridade, anime, desenho infantil, tristeza exagerada, choro, ambiente tóxico, bullying, violência.`,
    promptEn: `Create a cinematic emotional scene showing a shy and lonely young adult finding connection and acceptance through an online multiplayer video game.

Do NOT use the main avatar character. Create a completely different fictional person.

The scene should visually contrast two worlds.

On the LEFT side, show the person alone in their real-world environment, sitting quietly at a desk in a dim bedroom.

Their posture is slightly closed and reserved, shoulders lowered, hands resting near the keyboard and controller. Their expression should communicate shyness, social discomfort and loneliness without looking excessively sad or depressed.

The room should feel quiet and isolated. A window shows a distant city outside, with many illuminated windows suggesting thousands of other people living their own lives.

On the RIGHT side, show the same person entering an online game lobby.

The atmosphere completely changes.

Inside the virtual lobby, show several friendly fictional players gathered together, communicating through headsets, laughing, welcoming the new player and preparing to play together.

The virtual environment should feel warm, safe and welcoming.

Create subtle visual connections between the real person and the online group: glowing communication lines, small speech bubbles without readable text, shared game icons and connected player symbols.

The person who was isolated on the left now has a subtle genuine smile and a more relaxed posture on the right.

The central emotional message should be:

“In the real world, they struggle to find a place where they feel heard.

Inside the game, someone finally says: ‘Come with us.’”

Do not literally display this text. Communicate the idea entirely through visual storytelling.

Make the contrast powerful but respectful. Do not portray videogames as a magical cure for loneliness or social anxiety. Instead, show the game lobby as a temporary place of connection, belonging and social interaction.

Cinematic split-world composition, mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, emotional storytelling, detailed environment.

Lighting: cold and subdued lighting on the real-world side, gradually transitioning into warm blue and soft illuminated tones inside the virtual lobby.

Mood: intimate, human, hopeful, welcoming and emotionally powerful.

High-detail cinematic illustration, professional documentary visual style, dramatic depth, 4K quality.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, celebrity, recognizable public figure, anime, childish cartoon, exaggerated sadness, crying, depression imagery, horror, toxic gaming environment, aggressive players, bullying, violence, text, subtitles, logos, watermark, distorted faces, extra limbs.`,
    narrativeContext: 'A dimensão empática e humana dos games: como ambientes virtuais cooperativos e servidores comunitários funcionam como um refúgio acolhedor onde pessoas tímidas e isoladas encontram aceitação, escuta ativa e amizades genuínas.',
    cognitiveKeypoints: [
      'Composição split-world: Quarto solitário e reservado à esquerda vs. lobby virtual vibrante e acolhedor à direita',
      'Personagem completamente novo (jovem tímido com capuz e óculos, sem usar o avatar principal)',
      'À esquerda: postura retraída, iluminação fria e janela com o mar de luzes inalcançáveis da cidade',
      'À direita: sorriso sincero, postura relaxada e equipe sorridente com headsets acenando calorosamente',
      'Transição de iluminação fria e sombria para tons dourados e cianos acolhedores',
    ],
    tags: ['Solidão vs Pertencimento', 'Composição Dividida', 'Lobby Cooperativo', 'Acolhimento', 'O Lado Bom', '16:9'],
  },
  {
    id: 'coop-global-connection-scene',
    title: 'Cooperação Global & Pertencimento: Diferentes Culturas, Uma Equipe',
    subtitle: 'Ilustração 16:9 • Cinco jogadores de diferentes continentes unidos por um objetivo comum',
    side: 'good',
    imageUrl: '/src/assets/images/scene_coop_global_1790636144996.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica mostrando pessoas de diferentes continentes e origens culturais completamente distintas unidas por um objetivo comum através de um videogame cooperativo online.
NÃO use o personagem do avatar principal. Mostre vários jogadores fictícios DIFERENTES em ambientes separados ao redor do mundo, cada um sentado em seu próprio setup de jogos.
Mostre aproximadamente cinco jogadores fictícios:
— um em um ambiente urbano moderno
— um em um ambiente rural
— um em um apartamento pequeno e aconchegante
— um em um ambiente urbano de inspiração africana
— um em um ambiente urbano de inspiração asiática
Os personagens devem ter aparências, estilos de roupas, ambientes e origens culturais claramente diferentes, comunicando que vêm de partes completamente diferentes do mundo.
No monitor de cada jogador, mostre o MESMO jogo fictício de aventura cooperativa.
Dentro do jogo, seus personagens fictícios estão juntos como uma equipe em um ambiente de fantasia colossal, preparando-se para enfrentar o mesmo objetivo difícil.
Conecte os jogadores visualmente com linhas brilhantes sutis que viajam através de um mapa múndi digital estilizado, representando sua conexão online entre continentes.
A ideia visual central é:
Países diferentes.
Culturas diferentes.
Vidas diferentes.
Uma equipe.
Um objetivo.
Mostre cooperação genuína: jogadores comunicando-se, coordenando estratégias, ajudando uns aos outros e avançando juntos.
O mundo fictício do jogo deve ser visualmente espetacular, com montanhas, ruínas antigas, florestas e um objetivo distante brilhando no horizonte.
Os ambientes do mundo real devem permanecer mais escuros e separados, enquanto o mundo virtual compartilhado é mais brilhante e vibrante, simbolizando como um objetivo comum une as pessoas apesar da distância física.
Composição panorâmica cinematográfica, estética sofisticada de documentário, narrativa emocional, profundidade dramática, ambientes detalhados, qualidade visual premium.
Iluminação: ambientes cinematográficos escuros com luz fria de monitor, conectados por iluminação digital sutil azul e branca.
Clima: conexão, amizade, cooperação, pertencimento, diversidade e propósito compartilhado.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: celebridades reais, figuras públicas conhecidas, personagens protegidos por direitos autorais, avatar principal fotorrealista, anime, desenho infantil, personagens de fantasia exagerados, imagens militares, conflito ou violência entre jogadores.`,
    promptEn: `Create a cinematic scene showing people from different continents and completely different cultural backgrounds united by a common objective through an online cooperative video game.

Do NOT use the main avatar character. Show several DIFFERENT fictional players in separate environments around the world, each sitting at their own gaming setup.

Show approximately five fictional players:

— one in a modern city environment
— one in a rural environment
— one in a small apartment
— one in an African-inspired urban environment
— one in an Asian-inspired urban environment

The characters should have clearly different appearances, clothing styles, environments and cultural backgrounds, communicating that they come from completely different parts of the world.

On each player's monitor, show the SAME fictional cooperative adventure game.

Inside the game, their fictional characters are standing together as a team in a massive fantasy environment, preparing to face the same difficult objective.

Connect the players visually with subtle glowing lines traveling across a stylized digital world map, representing their online connection across continents.

The central visual idea is:

Different countries.
Different cultures.
Different lives.
One team.
One objective.

Show genuine cooperation: players communicating, coordinating strategies, helping one another and moving forward together.

The fictional game world should be visually spectacular, with mountains, ancient ruins, forests and a distant objective glowing on the horizon.

The real-world environments should remain darker and separated, while the shared virtual world is brighter and more vibrant, symbolizing how a common goal brings people together despite physical distance.

Cinematic wide composition, sophisticated documentary aesthetic, emotional storytelling, dramatic depth, detailed environments, premium visual quality.

Lighting: dark cinematic environments with cool monitor light, connected by subtle blue and white digital illumination.

Mood: connection, friendship, cooperation, belonging, diversity and shared purpose.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: real celebrities, recognizable public figures, copyrighted videogame characters, photorealistic main avatar, anime, childish cartoon, exaggerated fantasy characters, military imagery, conflict between players, violence between players, text, subtitles, logos, watermark, distorted faces, extra limbs, duplicated characters.`,
    narrativeContext: 'A dimensão social e comunitária dos games: a quebra de fronteiras geográficas e preconceitos em prol de uma cooperação genuína, onde diferentes realidades se unem em sincronia por um objetivo comum.',
    cognitiveKeypoints: [
      'Cinco jogadores de diferentes origens e culturas em seus respectivos quartos pelo mundo',
      'O mesmo jogo de aventura cooperativa em todas as telas com avatares unidos em equipe',
      'Linhas de dados digitais luminosas atravessando o mapa múndi conectando os jogadores',
      'Contraste entre os quartos reais na penumbra e o mundo virtual radiante no centro',
      'Sem o avatar principal, enfatizando a diversidade global real da comunidade gamer',
    ],
    tags: ['Cooperação Global', 'Diversidade Cultural', 'Pertencimento', 'Comunidade Online', 'O Lado Bom', '16:9'],
  },
  {
    id: 'cartoon-gamer-stoic-resilience-scene',
    title: 'Resiliência Estoica: Derrota → Aprendizado → Adaptação',
    subtitle: 'Ilustração Cartoon 16:9 • Ecos translúcidos virando vetores táticos, respiração calma e controle emocional',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_stoic_1790635952297.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem masculino sentado em sua mesa gamer após perder uma luta fictícia contra um chefe extremamente difícil.
Crie uma poderosa metáfora visual para RESILIÊNCIA ESTOICA.
O personagem acabou de sofrer outra derrota, mas em vez de ficar com raiva ou desistir, ele calmamente respira fundo e olha para a tela com concentração renovada.
Ao redor dele, mostre sutilmente ecos visuais translúcidos de suas tentativas anteriores fracassadas: múltiplas versões desbotadas da mesma batalha contra o chefe fictício aparecendo atrás dele, cada uma representando uma falha anterior.
No entanto, essas falhas devem se transformar gradualmente em lições visuais: padrões de ataque, trajetórias de movimento, indicadores de tempo e caminhos estratégicos emergem sutilmente das tentativas fracassadas, mostrando que cada derrota lhe ensinou algo.
À frente do personagem, a próxima tentativa aparece no monitor.
A postura do personagem torna-se cada vez mais calma e focada, comunicando disciplina, paciência, controle emocional e determinação.
A metáfora visual deve comunicar claramente:
DERROTA → APRENDIZADO → ADAPTAÇÃO → OUTRA TENTATIVA.
Não mostre fúria, destruição ou raiva exagerada.
O personagem deve parecer alguém que aceitou a falha, aprendeu com ela e decidiu tentar novamente.
O ambiente fictício do jogo deve ser desafiador e dramático, com um chefe poderoso esperando à frente, mas o personagem deve parecer mentalmente preparado.
Iluminação: sala cinematográfica escura com luz azul fria do monitor, combinada com uma luz quente sutil atrás do personagem simbolizando perseverança e força interior.
Clima: estoico, disciplinado, introspectivo, determinado, emocionalmente poderoso e inspirador.
Composição: plano médio-aberto cinematográfico, personagem em primeiro plano e a batalha fictícia contra o chefe visível no monitor, com ecos translúcidos de tentativas anteriores ao redor da cena.
Estética madura de graphic novel ilustrada, atmosfera escura sofisticada, iluminação dramática, alto detalhe, narrativa cinematográfica profissional.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem, fúria, gritaria, quebrar controle, raiva exagerada.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same male character sitting at his gaming desk after losing an extremely difficult fictional boss fight.

Create a powerful visual metaphor for STOIC RESILIENCE.

The character has just experienced another defeat, but instead of becoming angry or giving up, he calmly takes a deep breath and looks at the screen with renewed concentration.

Around him, subtly show translucent visual echoes of his previous failed attempts: multiple faded versions of the same fictional boss battle appearing behind him, each representing a previous failure.

However, these failures should gradually transform into visual lessons: attack patterns, movement trajectories, timing indicators and strategic paths subtly emerge from the failed attempts, showing that every defeat has taught him something.

In front of the character, the next attempt appears on the monitor.

The character's posture becomes increasingly calm and focused, communicating discipline, patience, emotional control and determination.

The visual metaphor should clearly communicate:

DEFEAT → LEARNING → ADAPTATION → ANOTHER ATTEMPT.

Do not show rage, destruction or exaggerated anger.

The character should look like someone who has accepted the failure, learned from it and decided to try again.

The fictional game environment should be challenging and dramatic, with a powerful boss waiting ahead, but the character should appear mentally prepared.

Lighting: dark cinematic room with cold blue monitor light, combined with a subtle warm light behind the character symbolizing perseverance and inner strength.

Mood: stoic, disciplined, introspective, determined, emotionally powerful and inspiring.

Composition: cinematic medium-wide shot, character in the foreground and the fictional boss battle visible on the monitor, with translucent echoes of previous attempts surrounding the scene.

Mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, dramatic lighting, high detail, professional cinematic storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, rage, screaming, breaking controller, destroying equipment, exaggerated anger, text, subtitles, logos, watermark.`,
    narrativeContext: 'A essência da filosofia estoica aplicada à mente gamer: o fracasso não é um julgamento moral ou motivo de destruição, mas um insumo bruto de aprendizado que refina a estratégia a cada ciclo.',
    cognitiveKeypoints: [
      'Respiração profunda e postura serena de autocontrole absoluto',
      'Ecos fantasmagóricos de falhas anteriores transmutando-se em linhas de trajetórias táticas',
      'Nova tentativa no monitor com o chefe fictício aguardando na arena',
      'Combinação de luz azul fria da tela com rim light dourada de força interior',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Resiliência Estoica', 'Derrota → Aprendizado', 'Ecos Translúcidos', 'Controle Emocional', 'O Lado Bom', '16:9'],
  },
  {
    id: 'cartoon-gamer-conclusion-doorway-scene',
    title: 'A Conclusão: Equilíbrio, Autonomia & A Porta Iluminada',
    subtitle: 'Ilustração Cartoon 16:9 • Controle repousado na mesa, monitor escurecendo e passos rumo à luz',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_conclusion_1790635331731.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem masculino em pé sozinho em seu quarto gamer escuro após uma longa noite jogando.
O monitor gamer ainda está ligado atrás dele, exibindo o mundo do jogo fictício que antes capturava toda a sua atenção. A tela agora está diminuindo o brilho e gradualmente se tornando menos importante.
O personagem segura o controle em uma mão e olha para ele em silêncio.
Após um momento de reflexão, ele abaixa a mão e coloca o controle cuidadosamente sobre a mesa.
À sua frente, uma porta aberta conduz para fora do quarto escuro em direção a uma luz suave e quente.
O contraste deve ser extremamente claro:
Atrás dele: o quarto gamer escuro, o monitor brilhante, o mundo virtual, sombras e a cadeira gamer familiar.
À sua frente: a porta aberta, luz natural quente, profundidade, espaço e a sugestão do mundo real esperando lá fora.
O personagem se afasta lentamente do monitor e dá seu primeiro passo em direção à porta iluminada.
Não faça a cena parecer que ele está abandonando os videogames para sempre. A mensagem deve ser sobre equilíbrio, escolha e controle sobre o próprio tempo.
Sua expressão deve comunicar constatação calma, maturidade e determinação em vez de tristeza.
O controle permanece visível na mesa atrás dele, simbolizando que a escolha ainda é sua.
Plano aberto cinematográfico visto por trás e ligeiramente de lado do personagem, mostrando o quarto escuro atrás dele e a porta iluminada à frente.
Iluminação: sombras azuis profundas ao redor da área de jogos, transitando gradualmente para luz natural quente perto da porta.
Clima: emocional, reflexivo, esperançoso, misterioso e poderoso.
A imagem final deve parecer a conclusão visual de um documentário psicológico sobre videogames, equilíbrio e escolha pessoal.
Estética madura de graphic novel ilustrada, composição cinematográfica sofisticada, ambiente detalhado, iluminação dramática, narrativa visual profissional.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem, tristeza exagerada, choro.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same male character standing alone in his dark gaming room after a long night of playing.

The gaming monitor is still turned on behind him, displaying the fictional game world that previously captured all of his attention. The screen is now dimming and gradually becoming less important.

The character is holding the controller in one hand and looking at it silently.

After a moment of reflection, he lowers his hand and places the controller carefully on the desk.

In front of him, an open doorway leads out of the dark room toward a soft, warm light.

The contrast should be extremely clear:

Behind him: the dark gaming room, the glowing monitor, the virtual world, shadows and the familiar gaming chair.

In front of him: the open doorway, natural warm light, depth, space and the suggestion of the real world waiting outside.

The character slowly turns away from the monitor and takes his first step toward the illuminated doorway.

Do not make the scene look like he is abandoning videogames forever. The message should be about balance, choice and control over his own time.

His expression should communicate calm realization, maturity and determination rather than sadness.

The controller remains visible on the desk behind him, symbolizing that the choice is still his.

Cinematic wide shot from behind and slightly to the side of the character, showing the dark room behind him and the illuminated doorway ahead.

Lighting: deep blue shadows surrounding the gaming area, gradually transitioning into warm natural light near the doorway.

Mood: emotional, reflective, hopeful, mysterious and powerful.

The final image should feel like the visual conclusion of a psychological documentary about videogames, balance and personal choice.

Mature illustrated graphic-novel aesthetic, sophisticated cinematic composition, detailed environment, dramatic lighting, professional visual storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, realistic human avatar, exaggerated sadness, crying, text, subtitles, logos, watermark.`,
    narrativeContext: 'O desfecho visual e filosófico definitivo do documentário: a soberania do jogador sobre seu próprio tempo. Não se trata de demonizar os jogos, mas de assumir o controle da própria vida e atravessar a porta rumo ao mundo real.',
    cognitiveKeypoints: [
      'Plano aberto cinematográfico mostrando a transição entre a penumbra azul e a porta iluminada',
      'Controle repousado com cuidado sobre a mesa (o poder de escolha continua nas mãos dele)',
      'Monitor ao fundo diminuindo o brilho enquanto o jogo perde a prioridade absoluta',
      'Luz solar dourada acolhedora revelando a profundidade do mundo real',
      'Expressão de serenidade e maturidade, sem culpa ou drama exagerado',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['A Conclusão', 'Equilíbrio & Escolha', 'Porta Iluminada', 'Mundo Real', 'Maturidade', '16:9'],
  },
  {
    id: 'neuroscience-brain-visualization-scene',
    title: 'Neurociência Cognitiva: Redes Neurais & Impulsos Sinápticos 3D',
    subtitle: 'Visualização Científica 16:9 • Cérebro tridimensional, sinapses elétricas e telas holográficas (Sem personagem)',
    side: 'good',
    imageUrl: '/src/assets/images/scene_neuroscience_brain_1790635283113.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma visualização de neurociência altamente cinematográfica e científica SEM NENHUM PERSONAGEM HUMANO.
Mostre uma visualização tridimensional sofisticada de um cérebro humano em um ambiente científico escuro, cercado por uma intrincada rede de conexões neurais brilhantes.
O cérebro deve ser anatomicamente inspirado, mas apresentado em uma visualização científica cinematográfica e elegante, não como uma ilustração médica de livro didático.
Milhares de vias neurais sutis conectam diferentes regiões do cérebro, com sinais elétricos viajando rapidamente pela rede neural.
Visualize vários processos cognitivos simultaneamente através de elementos científicos abstratos:
— processamento rápido de informações
— percepção espacial
— percepção visual
— tomada de decisão
— memória
— atenção
— coordenação motora
— reconhecimento de padrões
— velocidade de reação
Use vias neurais brilhantes, conexões sinápticas, impulsos elétricos e partículas sutis semelhantes a dados se movendo pela rede.
Algumas conexões neurais devem ser ativadas sequencialmente, criando a impressão de que o cérebro recebe informações rapidamente, as processa e produz uma resposta.
Inclua interfaces científicas holográficas sutis ao fundo, com gráficos abstratos, padrões de redes neurais, varreduras cerebrais e visualizações de dados, mas SEM texto ou números legíveis.
A composição deve parecer um laboratório de neurociência de ponta do futuro.
Paleta de cores: ambiente em preto profundo e azul escuro, com iluminação neural elegante em azul elétrico, ciano e branco sutil.
A iluminação deve ser dramática e cinematográfica, com o cérebro e a rede neural emergindo da escuridão.
Perspectiva da câmera: visão lenta e cinematográfica em três quartos, ligeiramente acima do cérebro, dando uma sensação de profundidade e complexidade.
Clima: descoberta científica, inteligência, curiosidade, avanço tecnológico e mistério.
Conexões neurais extremamente detalhadas, texturas científicas realistas, iluminação volumétrica, profundidade de campo cinematográfica, estética premium de documentário.
SEM PERSONAGEM HUMANO, SEM PESSOA, SEM ROSTO, SEM MÃOS.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: cérebro de desenho animado, ilustração infantil, anime, personagem humano, pessoa, rosto, mãos, sangue cirúrgico, horror, texto, letras, legendas, logos, marca d'água.`,
    promptEn: `Create a highly cinematic scientific neuroscience visualization with NO human character.

Show a sophisticated three-dimensional visualization of a human brain in a dark scientific environment, surrounded by an intricate network of glowing neural connections.

The brain should be anatomically inspired but presented in an elegant cinematic scientific visualization, not as a medical textbook illustration.

Thousands of subtle neural pathways connect different regions of the brain, with electrical signals traveling rapidly through the neural network.

Visualize several cognitive processes simultaneously through abstract scientific elements:

— rapid information processing
— spatial awareness
— visual perception
— decision making
— memory
— attention
— motor coordination
— pattern recognition
— reaction speed

Use glowing neural pathways, synaptic connections, electrical impulses and subtle data-like particles moving through the network.

Some neural connections should activate sequentially, creating the impression of the brain rapidly receiving information, processing it and producing a response.

Include subtle holographic scientific interfaces in the background, with abstract graphs, neural network patterns, brain scans and data visualizations, but NO readable text or numbers.

The composition should feel like a cutting-edge neuroscience laboratory of the future.

Color palette: deep black and dark blue environment, with elegant electric blue, cyan and subtle white neural illumination.

Lighting should be dramatic and cinematic, with the brain and neural network emerging from darkness.

Camera perspective: slow cinematic three-quarter view, slightly above the brain, giving a sense of depth and complexity.

Mood: scientific discovery, intelligence, curiosity, technological advancement and mystery.

Extremely detailed neural connections, realistic scientific textures, volumetric lighting, cinematic depth of field, premium documentary aesthetic, high-end neuroscience visualization, 4K quality.

NO HUMAN CHARACTER, NO PERSON, NO FACE, NO HANDS.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: cartoon brain, childish illustration, anime, human character, person, face, hands, medical gore, blood, surgery, horror, text, letters, subtitles, logos, watermark, low detail, blurry image, generic stock image.`,
    narrativeContext: 'O B-Roll científico definitivo para o documentário: uma representação de alto nível do cérebro em atividade máxima, ilustrando como o videogame desafia múltiplos sistemas cognitivos ao mesmo tempo.',
    cognitiveKeypoints: [
      'Visualização 3D de alta precisão em perspectiva de 3/4 ligeiramente superior',
      'Milhares de sinapses e impulsos elétricos em azul elétrico, ciano e branco',
      'Representação abstrata de tomada de decisão, reflexos e memória de trabalho',
      'Interfaces holográficas de laboratório futurista ao fundo, sem números legíveis',
      '100% livre de personagens humanos, sem rostos, sem mãos e sem marcas d\'água',
    ],
    tags: ['Neurociência 3D', 'Sinapses Elétricas', 'Redes Neurais', 'B-Roll Científico', 'Sem Personagem', '16:9'],
  },
  {
    id: 'cartoon-gamer-cognition-scene',
    title: 'A Ciência dos Games: Descoberta Cognitiva & Neurociência',
    subtitle: 'Ilustração Cartoon 16:9 • Hologramas de mapas espaciais, trajetórias e laboratório nas sombras',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_cognition_1790635198500.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem masculino sentado em sua mesa gamer, completamente focado em um intenso videogame fictício.
Ao redor dele, o ambiente começa a se transformar visualmente em uma representação simbólica de descoberta científica.
Elementos visuais holográficos sutis emergem ao redor do personagem:
— mapas espaciais complexos
— padrões geométricos
— múltiplos alvos em movimento
— caminhos estratégicos
— trajetórias de reação
— pontos interconectados
— representações visuais de memória e atenção
— conexões neurais sutis se formando ao fundo
Os elementos visuais devem sugerir que jogar um videogame desafiador exige que o cérebro processe informações, tome decisões rápidas, reconheça padrões, coordene movimentos e se adapte a situações em mudança.
Atrás do personagem, mostre um ambiente escuro de pesquisa científica surgindo gradualmente através das sombras: equipamentos abstratos de laboratório, notas de pesquisa, gráficos e telas de observação brilhantes, sugerindo que pesquisadores estão estudando os efeitos cognitivos dos jogos.
NÃO mostre texto científico legível, equações, diagramas médicos ou estudos reais específicos.
O personagem permanece calmo e intensamente focado, reagindo rapidamente aos eventos na tela.
A cena deve comunicar a ideia: "Durante muito tempo, videogames foram vistos apenas como diversão. Mas pesquisas começaram a revelar que jogar também pode envolver habilidades cognitivas complexas."
Faça com que os elementos científicos pareçam integrados ao ambiente cinematográfico.
Iluminação: forte iluminação azul e branca fria do monitor e dos elementos holográficos, com sombras sutis pela sala.
Clima: descoberta intelectual, curiosidade, tecnológico, misterioso e cinematográfico.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem, cérebro flutuante literal, ilustração médica de cérebro.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same male character sitting at his gaming desk, completely focused on an intense fictional video game.

Around him, the environment begins to visually transform into a symbolic representation of scientific discovery.

Subtle holographic visual elements emerge around the character:

— complex spatial maps
— geometric patterns
— multiple moving targets
— strategic paths
— reaction trajectories
— interconnected points
— visual representations of memory and attention
— subtle neural connections forming in the background

The visual elements should suggest that playing a challenging video game requires the brain to process information, make rapid decisions, recognize patterns, coordinate movement and adapt to changing situations.

Behind the character, show a dark scientific research environment gradually appearing through the shadows: abstract laboratory equipment, research notes, charts and glowing observation screens, suggesting that researchers are studying the cognitive effects of gaming.

Do NOT show readable scientific text, equations, medical diagrams or specific real-world studies.

The character remains calm and intensely focused, reacting quickly to events on the screen.

The scene should communicate the idea:

“Durante muito tempo, videogames foram vistos apenas como diversão. Mas pesquisas começaram a revelar que jogar também pode envolver habilidades cognitivas complexas.”

Make the scientific elements feel integrated into the cinematic environment rather than looking like a generic science presentation.

Lighting: strong cool blue and white illumination from the monitor and holographic elements, with subtle shadows around the room.

Mood: intellectual discovery, curiosity, technological, mysterious and cinematic.

Mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, detailed environment, dramatic composition, professional visual storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, medical brain illustration, literal brain floating above head, text, subtitles, logos, watermark.`,
    narrativeContext: 'A virada científica do documentário: o momento em que a narrativa comprova que jogos de ação e estratégia exigem processamento visual avançado, memória de trabalho e reflexos neurais acelerados.',
    cognitiveKeypoints: [
      'Hologramas sutis de nós e redes espaciais ao redor do jogador',
      'Laboratório abstrato de pesquisa científica emergindo nas sombras do quarto',
      'Foco sereno e veloz no controle sem elementos médicos caricatos',
      'Iluminação cinematográfica azul fria e branca de alta tecnologia',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Neurociência', 'Descoberta Cognitiva', 'Hologramas', 'Laboratório', 'O Lado Bom', '16:9'],
  },
  {
    id: 'cartoon-gamer-progression-vs-stagnation-scene',
    title: 'Progressão Virtual vs. Estagnação Real: A Ilusão de Conquista',
    subtitle: 'Ilustração Cartoon 16:9 • Avatar poderoso no cume do mundo vs. quarto escuro estagnado',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_cartoon_progression_1790634960954.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, características faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Crie uma poderosa metáfora visual mostrando a diferença entre a progressão virtual e a estagnação na vida real.
O mesmo personagem masculino está sentado imóvel em sua mesa gamer em uma sala escura, segurando o controle e olhando fixamente para o monitor. Sua postura é cansada e quase completamente estática.
No grande monitor, mostre seu avatar fictício de videogame de pé em um enorme mundo de fantasia após se tornar extremamente poderoso. O avatar virtual usa uma impressionante armadura fictícia, carrega equipamentos poderosos e está no alto de uma plataforma com vista para um vasto mundo, cercado por sinais de progressão: áreas desbloqueadas, tesouros, conquistas representadas visualmente através de símbolos, inimigos derrotados e um caminho brilhante que conduz adiante.
O avatar virtual deve parecer uma representação heroica do potencial do jogador, mas permanecer claramente fictício e parte do mundo do jogo.
Enquanto isso, os arredores reais do personagem contam a história oposta:
— a mesma cadeira
— a mesma mesa
— papéis inacabados
— um caderno intocado
— um copo vazio ou meio cheio
— um quarto escuro
— um relógio mostrando tarde da noite
— nenhum progresso visível em seu ambiente real
Crie um forte contraste visual:
Dentro da tela: movimento, poder, conquista, progressão, aventura e um mundo enorme se abrindo.
Fora da tela: quietude, escuridão, tarefas inacabadas e o tempo passando.
O monitor de jogos quase parece um portal para outra vida, com o vibrante mundo fictício contrastando com a escuridão silenciosa ao redor do personagem.
O personagem em si deve permanecer emocionalmente sutil. Sua expressão comunica uma percepção calma de que seu personagem virtual avança enquanto sua vida real permanece inalterada.
Composição: plano aberto cinematográfico mostrando claramente tanto o personagem real quanto o monitor inteiro.
Iluminação: luz azul fria do monitor iluminando o personagem, com o mundo virtual na tela contendo iluminação mais rica e profundidade cinematográfica.
Clima: introspectivo, melancólico, psicologicamente poderoso, misterioso, documentário cinematográfico.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Create a powerful visual metaphor showing the difference between virtual progression and real-life stagnation.

The same male character is sitting motionless at his gaming desk in a dark room, holding the controller and staring at the monitor. His posture is tired and almost completely still.

On the large monitor, show his fictional video-game avatar standing in an enormous fantasy world after becoming extremely powerful. The virtual avatar wears impressive fictional armor, carries powerful equipment, stands on a high platform overlooking a vast world, surrounded by signs of progression: unlocked areas, treasure, achievements represented visually through symbols, defeated enemies and a glowing path leading forward.

The virtual avatar should look like a heroic representation of the player's potential, but remain clearly fictional and part of the game world.

Meanwhile, the real character's surroundings tell the opposite story:

— the same chair
— the same desk
— unfinished papers
— an untouched notebook
— an empty or half-full glass
— a dark room
— a clock showing late night
— no visible progress in his real environment

Create a strong visual contrast:

Inside the screen: movement, power, achievement, progression, adventure and an enormous world opening up.

Outside the screen: stillness, darkness, unfinished tasks and time passing.

The gaming monitor should almost feel like a portal into another life, with the vibrant fictional world contrasting against the quiet darkness surrounding the character.

The character himself should remain emotionally subtle. He is not crying or dramatically depressed. His expression should communicate a quiet realization that his virtual character is moving forward while his real life remains unchanged.

Composition: cinematic wide shot showing both the real character and the entire monitor clearly. The monitor should occupy a significant portion of the composition without hiding the character.

Lighting: cold blue light from the monitor illuminating the character, with the virtual world inside the screen containing richer cinematic light and depth.

Mood: introspective, melancholic, psychologically powerful, mysterious, cinematic documentary.

Mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, extremely detailed environment, professional visual storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, realistic human avatar, text, subtitles, logos, watermark.`,
    narrativeContext: 'O paradoxo existencial dos jogos: a facilidade com que o cérebro confunde o progresso digital do avatar fictício com realização na vida real, enquanto a realidade física permanece estagnada na penumbra.',
    cognitiveKeypoints: [
      'Plano aberto cinematográfico mostrando o monitor como portal e a imobilidade do quarto',
      'Avatar fictício imponente em armadura no topo do mundo virtual expansivo',
      'Fora da tela: caderno aberto intocado, papéis inacabados e relógio na madrugada',
      'Expressão calma de constatação melancólica sobre o tempo perdido',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Progressão vs Estagnação', 'Metáfora Poderosa', 'Portal Virtual', 'Estagnação Real', 'O Lado Mal', '16:9'],
  },
  {
    id: 'cartoon-gamer-reflexes-scene',
    title: 'Reflexos & Coordenação Motora: A Precisão em Milissegundos',
    subtitle: 'Ilustração Cartoon 16:9 • Rastros visuais de movimento nas mãos, controle e timing cirúrgico',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_reflexes_1790634894658.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico do avatar anexado.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado reagindo instantaneamente a um momento intenso em um videogame fictício.
Mostre-o segurando o controle com precisão, os dedos posicionados naturalmente nos botões e alavancas analógicas.
O monitor exibe vários elementos em movimento rápido que exigem uma reação imediata.
Crie rastros visuais sutis seguindo as mãos e os movimentos do controle, sugerindo velocidade, precisão e coordenação motora.
Seus olhos estão travados na tela enquanto suas mãos reagem com movimentos extremamente precisos.
A cena deve comunicar visualmente: reflexos rápidos, coordenação olho-mão, precisão, timing e habilidades motoras controladas.
Evite fazê-lo parecer sobre-humano. O efeito deve representar coordenação altamente treinada em vez de habilidades sobrenaturais.
Sala de jogos escura, forte iluminação azul do monitor, destaques brancos sutis ao redor do controle e das mãos, sombras dramáticas, composição cinematográfica.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, arte conceitual profissional, iluminação cinematográfica, texturas ricas, granulação sutil de filme, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo design de rosto, corte de cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico do avatar anexado.
Sem texto, sem legendas, sem logos, sem marca d'água, sem humano fotorrealista, sem pessoa real, sem anime, sem desenho infantil.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar.

Create a cinematic 16:9 digital illustration of the same male cartoon character reacting instantly to an intense moment in a fictional video game.

Show him gripping the controller with precision, fingers positioned naturally on the buttons and analog sticks.

The monitor displays several fast-moving elements requiring an immediate reaction.

Create subtle visual trails following his hands and controller movements, suggesting speed, precision and motor coordination.

His eyes are locked onto the screen while his hands react with extremely precise movements.

The scene should visually communicate:
fast reflexes, hand-eye coordination, precision, timing and controlled motor skills.

Avoid making him look superhuman. The effect should represent highly trained coordination rather than supernatural abilities.

Dark gaming room, strong blue monitor illumination, subtle white highlights around the controller and hands, dramatic shadows, cinematic composition.

High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, professional concept art, cinematic lighting, rich textures, subtle film grain, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same face design, hairstyle, beard, skin tone, age, body proportions, clothing and artistic style of the attached avatar.

No text.
No subtitles.
No logos.
No watermark.
No photorealistic human.
No real person.
No anime.
No childish cartoon.`,
    narrativeContext: 'A evidência neurocognitiva dos jogos: como a prática desenvolve a plasticidade sináptica, a precisão psicomotora e o tempo de reação fino em situações de alta exigência.',
    cognitiveKeypoints: [
      'Empunhadura precisa com dedos em posição natural nos analógicos e botões',
      'Rastros de luz sutis ao redor das mãos ilustrando velocidade e precisão motora',
      'Olhar focado e pupilas concentradas na leitura de elementos velozes na tela',
      'Sensação de coordenação humana treinada, sem poderes sobrenaturais',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Reflexos Rápidos', 'Coordenação Olho-Mão', 'Precisão Motora', 'Timing Cirúrgico', 'Neurociência', '16:9'],
  },
  {
    id: 'cartoon-gamer-mastery-scene',
    title: 'Da Frustração à Maestria: O Dodge Perfeito no Último Segundo',
    subtitle: 'Ilustração Cartoon 16:9 • Padrões decodificados, rastros de movimento e contra-ataque',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_mastery_1790634834404.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, características faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem durante sua mais recente tentativa contra o chefe fictício extremamente difícil.
Desta vez, ele está completamente focado e determinado. Sua postura é confiante, seus olhos estão fixos na tela e suas mãos se movem com precisão no controle.
O chefe fictício lança um ataque poderoso, enquanto o personagem do jogador esquiva por um triz no exato último segundo.
Crie rastros de movimento dinâmicos ao redor do personagem do jogador e ecos visuais sutis das tentativas fracassadas anteriores desvanecendo atrás dele, sugerindo que cada derrota lhe ensinou algo.
A composição deve comunicar visualmente que ele aprendeu os padrões do chefe, compreende o timing e está finalmente superando o desafio.
Ao fundo, a arena começa a clarear ligeiramente à medida que o personagem do jogador avança em direção ao chefe.
O sentimento emocional deve ser: "Eu perdi dezenas de vezes. Mas agora eu sei exatamente o que fazer."
Este é o momento onde a frustração se transforma em maestria.
Composição de ação cinematográfica, perspectiva dinâmica, iluminação dramática azul e quente, estética madura de graphic novel ilustrada, alto detalhe, narrativa poderosa.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform him into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same character during his latest attempt against the extremely difficult fictional boss.

This time, he is completely focused and determined. His posture is confident, his eyes are locked on the screen, and his hands move precisely on the controller.

The fictional boss launches a powerful attack, while the player's character narrowly dodges it at the exact last second.

Create dynamic motion trails around the player's character and subtle visual echoes of the previous failed attempts fading behind him, suggesting that every defeat taught him something.

The composition should visually communicate that he has learned the boss's patterns, understands the timing, and is finally overcoming the challenge.

In the background, the arena begins to brighten slightly as the player's character advances toward the boss.

The emotional feeling should be:

“Eu perdi dezenas de vezes. Mas agora eu sei exatamente o que fazer.”

This is the moment where frustration transforms into mastery.

Cinematic action composition, dynamic perspective, dramatic blue and warm lighting, mature illustrated graphic-novel aesthetic, high detail, powerful storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, text, subtitles, logos, watermark.`,
    narrativeContext: 'O clímax do aprendizado e da resiliência: a virada onde 50 derrotas culminam no domínio absoluto de reflexos e leitura de padrões. O momento onde a derrota vira vitória.',
    cognitiveKeypoints: [
      'Postura confiante e mãos com precisão cirúrgica no controle',
      'Esquiva impecável no último milissegundo de um ataque devastador',
      'Rastros de movimento dinâmicos e silhuetas antigas dissolvendo em glória',
      'Arena iluminando-se com luz dourada e azul no contra-ataque',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Maestria', 'Dodge Perfeito', 'Padrões Decodificados', 'Rastros de Movimento', 'Superação', '16:9'],
  },
  {
    id: 'cartoon-gamer-recomposed-scene',
    title: 'Compostura & Maestria: Falha → Reflexão → Aprendizado',
    subtitle: 'Ilustração Cartoon 16:9 • Silhuetas dissolvendo, caminho luminoso e rim light dourada',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_recomposed_1790634773248.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA do personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem momentos após outra derrota, mas agora ele parou de reagir emocionalmente.
Ele se senta ereto em sua cadeira gamer, fecha os olhos por um breve momento, respira fundo e lentamente recupera a compostura.
Seu controle repousa firmemente em ambas as mãos. Sua expressão muda de frustração para concentração calma e determinação.
No monitor, o mesmo chefe de fantasia fictício aguarda dentro de uma arena colossal e perigosa.
Atrás do personagem, crie ecos visuais cinematográficos sutis de suas tentativas anteriores fracassadas: silhuetas translúcidas de derrotas anteriores desvanecendo na escuridão, enquanto um único caminho mais brilhante conduz em direção à arena do chefe.
A metáfora visual deve comunicar: falha → reflexão → aprendizado → outra tentativa.
O personagem deve parecer mentalmente mais forte, não sobre-humano. A cena deve parecer humana, identificável e emocionalmente poderosa.
Luz azul fria de jogo misturada com uma sutil luz de contorno (rim light) quente ao redor do personagem, criando uma sensação de determinação renovada.
Plano médio cinematográfico, profundidade dramática, estética madura de graphic novel ilustrada, atmosfera escura sofisticada, ambiente altamente detalhado.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform him into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same character moments after another defeat, but now he has stopped reacting emotionally.

He sits upright in his gaming chair, closes his eyes for a brief moment, takes a deep breath and slowly regains his composure.

His controller rests firmly in both hands. His expression changes from frustration into calm concentration and determination.

On the monitor, the same fictional fantasy boss waits inside a massive dangerous arena.

Behind the character, create subtle cinematic visual echoes of his previous failed attempts: translucent silhouettes of previous defeats fading into darkness, while a single brighter path leads toward the boss arena.

The visual metaphor should communicate:

failure → reflection → learning → another attempt.

The character should look mentally stronger, not superhuman. The scene should feel human, relatable and emotionally powerful.

Cold blue gaming light mixed with a subtle warm rim light around the character, creating a feeling of renewed determination.

Cinematic medium shot, dramatic depth, mature illustrated graphic-novel aesthetic, sophisticated dark atmosphere, high-detail environment.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, text, subtitles, logos, watermark.`,
    narrativeContext: 'A representação visual do crescimento através do videogame: a transição do choque emocional para a frieza estratégica. A falha deixa de ser um fim e torna-se um degrau para o domínio.',
    cognitiveKeypoints: [
      'Postura ereta e respiração profunda com controle empunhado firmemente',
      'Expressão de concentração serena e determinação estoica',
      'Silhuetas de derrotas antigas dissolvendo nas sombras',
      'Caminho luminoso brilhante guiando o olhar até o chefe na tela',
      'Luz dourada de contorno (rim light) combinada com a luz azul do monitor',
    ],
    tags: ['Compostura', 'Falha → Aprendizado', 'Caminho Luminoso', 'Rim Light Dourada', 'Resiliência Estoica', '16:9'],
  },
  {
    id: 'cartoon-gamer-50th-loss-scene',
    title: 'A 50ª Derrota: Frustração Silenciosa & O Dilema de Continuar',
    subtitle: 'Ilustração Cartoon 16:9 • Chefe fictício triunfante, copos vazios e marcas no caderno',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_50th_loss_1790634704507.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA do personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico, traços faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o personagem sentado em sua mesa gamer imediatamente após perder uma luta contra um chefe extremamente difícil pelo que parece ser a quinquagésima vez.
Suas mãos ainda seguram o controle, mas sua pegada afrouxou. Seus ombros estão tensos, sua cabeça está ligeiramente abaixada e sua expressão mostra intensa frustração, decepção e exaustão.
No monitor, mostre um chefe de jogo de fantasia completamente fictício de pé, vitorioso ao longe, com o personagem do jogador derrotado no chão. O mundo do jogo deve parecer dramático e desafiador, mas NÃO conter personagens ou elementos protegidos por direitos autorais reconhecíveis.
A sala é escura, iluminada principalmente pela luz azul fria do monitor. Pequenos detalhes visuais sugerem tentativas repetidas: vários copos de bebida vazios, um caderno com marcas repetidas de contagem e ecos tênues como fantasmas de tentativas fracassadas anteriores ao redor da tela.
O foco emocional NÃO é raiva ou fúria. É o momento calmo em que alguém está frustrado, respira fundo e decide entre desistir ou tentar novamente.
Composição cinematográfica, plano médio, sombras dramáticas, estilo ilustrado maduro de graphic novel, narrativa emocional, alto detalhe.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform him into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the character sitting at his gaming desk immediately after losing an extremely difficult boss fight for what feels like the fiftieth time.

His hands are still holding the controller, but his grip has loosened. His shoulders are tense, his head is slightly lowered, and his expression shows intense frustration, disappointment and exhaustion.

On the monitor, show a completely fictional fantasy game boss standing victorious in the distance, with the player's character defeated on the ground. The game world should look dramatic and challenging, but contain NO recognizable copyrighted characters or game elements.

The room is dark, illuminated primarily by the cold blue light of the monitor. Small visual details suggest repeated attempts: several empty drink glasses, a notebook with repeated marks, and subtle ghost-like echoes of previous failed attempts around the screen.

The emotional focus is NOT anger or rage. It is the quiet moment where someone is frustrated, takes a breath, and decides whether to give up or try again.

Cinematic composition, medium shot, dramatic shadows, mature illustrated graphic-novel style, emotional storytelling, high detail.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, text, subtitles, logos, watermark.`,
    narrativeContext: 'O teste definitivo de perseverança: o instante de respiração profunda após a 50ª derrota, onde a frustração não vira ódio, mas sim o dilema silencioso entre a desistência e a maestria.',
    cognitiveKeypoints: [
      'Pegada afrouxada no controle e cabeça baixa em respiração profunda',
      'Chefe de fantasia fictício triunfante ao longe na tela do monitor',
      'Copos vazios acumulados e caderno com marcas repetidas de tentativas',
      'Ecos fantasmagóricos translúcidos ao redor da tela sugerindo ciclos de repetição',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['A 50ª Derrota', 'Chefe de Fantasia', 'Copos Vazios', 'Marcas no Caderno', 'Resiliência Silenciosa', '16:9'],
  },
  {
    id: 'cartoon-gamer-4am-wide-scene',
    title: '4:00 AM Plano Médio-Aberto: O Isolamento & A Vida Negligenciada',
    subtitle: 'Ilustração Cartoon 16:9 • Caderno aberto, laptop afastado, copo intocado e relógio às 4 AM',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_cartoon_4am_wide_1790634589779.jpg',
    isOriginalPrompt: true,
    promptPt: `Crie uma cena cinematográfica usando a imagem do avatar anexada como referência EXATA de personagem.
O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo ao estilo artístico exato, características faciais, cabelo, barba, tom de pele, proporções, estilo de roupa e estética madura de graphic novel do avatar anexado.
NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action, fotografia ou humano realista.
Mostre o mesmo personagem masculino sentado sozinho em sua mesa gamer aproximadamente às 4:00 da manhã. Ele parece física e emocionalmente exausto, ligeiramente curvado em sua cadeira, ombros caídos, olhos cansados fixos no monitor, ainda segurando o controle do jogo.
O monitor do computador é a fonte de luz mais brilhante da sala, projetando uma luz azul fria em seu rosto e mãos.
Ao redor do quarto, mostre sinais sutis de que sua vida real foi negligenciada:
— um relógio de parede mostrando claramente aproximadamente 4:00 AM
— papéis de trabalho ou estudo inacabados espalhados na mesa
— um caderno aberto com tarefas inacabadas
— um laptop fechado empurrado para o lado
— um smartphone com várias notificações não lidas
— um copo de água deixado intocado
— uma janela escura mostrando que ainda é noite lá fora
O ambiente do jogo deve parecer imersivo e visualmente atraente, contrastando com o ambiente negligenciado do mundo real ao seu redor.
Adicione narrativa visual sutil sugerindo a passagem do tempo: reflexos tênues do relógio, páginas inacabadas e a sala se tornando cada vez mais escura e vazia.
O personagem não deve parecer exagerado ou caricaturalmente miserável. Sua expressão deve comunicar exaustão silenciosa, isolamento emocional e a sensação de ter perdido a noção do tempo.
Composição: plano médio-aberto cinematográfico, personagem claramente visível, monitor de um lado e responsabilidades negligenciadas visíveis ao redor.
Iluminação: forte luz azul fria do monitor, sombras profundas, luz quente muito sutil de uma lâmpada pequena ou reflexo, criando contraste entre o mundo digital e a vida real.
Clima: solitário, introspectivo, desconfortável, psicologicamente tenso, atmosfera de documentário cinematográfico.
SEM TEXTO, SEM LEGENDAS, SEM LOGOS, SEM MARCAS D'ÁGUA.`,
    promptEn: `Create a cinematic scene using the attached avatar image as the EXACT character reference.

The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, matching the exact artistic style, facial features, hair, beard, skin tone, proportions, clothing style and mature graphic-novel aesthetic of the attached avatar.

Do NOT transform the character into a real human, photorealistic person, live-action actor, photograph, or realistic human.

Show the same male character sitting alone at his gaming desk at approximately 4:00 AM. He looks physically and emotionally exhausted, slightly slouched in his chair, shoulders lowered, tired eyes fixed on the monitor, still holding the game controller.

The computer monitor is the brightest source of light in the room, casting cold blue light across his face and hands.

Around the room, show subtle signs that his real life has been neglected:

— a wall clock clearly showing approximately 4:00 AM
— unfinished work or study papers scattered on the desk
— an open notebook with unfinished tasks
— a closed laptop pushed aside
— a smartphone with several unread notifications
— a glass of water left untouched
— a dark window showing that it is still night outside

The gaming environment should feel immersive and visually attractive, contrasting with the neglected real-world environment around him.

Add subtle visual storytelling suggesting the passage of time: faint translucent clock reflections, pages left unfinished, and the room becoming increasingly dark and empty.

The character should not look exaggerated or cartoonishly miserable. His expression should communicate quiet exhaustion, emotional isolation and the feeling that he has lost track of time.

Composition: cinematic medium-wide shot, character clearly visible, gaming monitor on one side and neglected real-life responsibilities visible around him.

Lighting: strong cold blue monitor light, deep shadows, very subtle warm light coming from a distant window or small lamp, creating a visual contrast between the digital world and real life.

Mood: lonely, introspective, uncomfortable, psychologically tense, cinematic documentary atmosphere.

High visual quality, detailed illustrated environment, dramatic composition, mature dark aesthetic, professional cinematic storytelling.

NO TEXT, NO SUBTITLES, NO LOGOS, NO WATERMARKS.

NEGATIVE PROMPT: photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign, different face, different hairstyle, different beard, different clothing, distorted hands, extra fingers, text, subtitles, logos, watermark.`,
    narrativeContext: 'O enquadramento documental em plano médio-aberto: evidencia o contraste gritante entre o espetáculo colorido do jogo e a solidão silenciosa do quarto às 4:00 AM, com o copo d\'água intocado, o laptop encostado e as responsabilidades acumuladas.',
    cognitiveKeypoints: [
      'Plano médio-aberto mostrando tanto o jogador quanto a desordem silenciosa da sala',
      'Copo de água intocado e caderno aberto com tarefas pendentes',
      'Laptop fechado jogado para o lado na penumbra',
      'Relógio de parede marcando 4:00 AM e janela com noite profunda',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Plano Médio-Aberto', '4:00 AM', 'Copo Intocado', 'Caderno Aberto', 'Laptop Afastado', 'O Lado Mal', '16:9'],
  },
  {
    id: 'cartoon-gamer-immersion-scene',
    title: 'Imersão Épica: O Mundo dos Games se Expandindo',
    subtitle: 'Ilustração Cartoon 16:9 • Montanhas, ruínas antigas e o fascínio da exploração',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_immersion_1790634470209.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico do avatar anexado. NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado completamente imerso em uma aventura épica de videogame fictício.
Mostre o personagem em sua mesa gamer, enquanto o mundo do monitor se expande visualmente ao seu redor em uma vasta paisagem fictícia: montanhas colossais, ruínas antigas, florestas, cidades distantes, céus dramáticos e caminhos misteriosos esperando para serem explorados.
O personagem permanece no mundo real, segurando o controle, enquanto a aventura fictícia surge ao redor da tela como uma imaginação visual.
A cena deve comunicar exploração, descoberta, curiosidade, aventura e imersão.
Torne o mundo fictício visualmente impressionante e expansivo, com uma sensação de escala e maravilhamento.
Ambiente escuro e cinematográfico com iluminação azul vibrante e toques sutis de dourado vindos do mundo do jogo.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, iluminação dramática, profundidade de campo cinematográfica, texturas ricas, granulação sutil de filme, arte conceitual profissional, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo design de rosto, cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico do avatar anexado.
Sem texto, sem legendas, sem logos, sem marca d'água, sem personagens de videogame existentes reconhecíveis, sem design de jogo protegido por direitos autorais, sem anime, sem fotorrealismo.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar. DO NOT transform him into a real human, photorealistic person, live-action actor, or photograph.

Create a cinematic 16:9 digital illustration of the same male cartoon character completely immersed in an epic fictional video game adventure.

Show the character at his gaming desk, while the world from the monitor visually expands around him into a vast fictional landscape: enormous mountains, ancient ruins, forests, distant cities, dramatic skies and mysterious paths waiting to be explored.

The character remains in the real world, holding the controller, while the fictional adventure appears around the screen as a visual imagination.

The scene should communicate exploration, discovery, curiosity, adventure and immersion.

Make the fictional world visually impressive and expansive, with a sense of scale and wonder.

Dark cinematic environment with vibrant blue and subtle golden lighting coming from the game world.

High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dramatic lighting, cinematic depth of field, rich textures, subtle film grain, professional concept art, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same face design, hair, beard, skin tone, age, body proportions, clothing and artistic style of the attached avatar.

No text.
No subtitles.
No logos.
No watermark.
No recognizable existing video game characters.
No copyrighted game design.
No anime.
No photorealism.`,
    narrativeContext: 'O ápice do poder narrativo dos games: a capacidade de transcender quatro paredes e despertar a imaginação, a curiosidade pelo desconhecido e o senso de maravilhamento que poucos meios alcançam.',
    cognitiveKeypoints: [
      'Expansão visual do mundo do jogo para fora do monitor',
      'Montanhas colossais, ruínas antigas e caminhos iluminados',
      'Contraste entre o personagem no quarto real e o universo fantástico',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['Imersão Épica', 'Exploração', 'Maravilhamento', 'Mundo Expandido', 'O Lado Bom', '16:9'],
  },
  {
    id: 'cartoon-gamer-neglect-scene',
    title: '4:00 AM: Sono Perdido & Responsabilidades Negligenciadas',
    subtitle: 'Ilustração Cartoon 16:9 • Cadernos intactos, laptop fechado e relógio às 4 AM',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_cartoon_neglect_1790634284681.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA para o personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico do avatar anexado. NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado sentado sozinho em sua mesa gamer durante a madrugada.
O personagem parece exausto. Sua postura é ligeiramente curvada, seus olhos estão cansados, mas ele permanece focado no monitor de jogos brilhante.
A sala deve mostrar visualmente tudo o que ele está negligenciando.
De um lado da mesa, há um caderno intocado e vários papéis de estudo. Por perto, um laptop fechado e trabalhos inacabados são cobertos por sombras.
Um smartphone está sobre a mesa com várias luzes sutis de notificação.
Ao fundo, um relógio de parede indica claramente por volta das 4:00 da manhã.
Através de uma janela, o mundo exterior está completamente escuro.
O monitor de jogos é o objeto mais brilhante da sala, tornando visualmente claro que o mundo virtual se tornou mais importante do que tudo ao seu redor.
O personagem NÃO deve mais parecer feliz. Sua expressão deve comunicar exaustão, isolamento e a sensação de que o tempo desapareceu.
A imagem deve comunicar: sono perdido, responsabilidades negligenciadas, isolamento, exaustão e o tempo passando despercebido.
Atmosfera cinematográfica psicológica sombria, iluminação predominantemente azul fria, sombras profundas, destaques vermelhos sutis do monitor, composição dramática, profundidade de campo cinematográfica, texturas ricas, granulação sutil de filme.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, iluminação cinematográfica dramática, arte conceitual profissional, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo: design de rosto, cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico geral do avatar anexado.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, retrato realista, pessoa hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.
Sem texto, sem legendas, sem logos, sem marca d'água, sem personagens de videogame existentes reconhecíveis.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference for the character.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar. DO NOT transform him into a real human, photorealistic person, live-action actor, or photograph.

Create a cinematic 16:9 digital illustration of the same male cartoon character sitting alone at his gaming desk during the very early hours of the morning.

The character looks exhausted. His posture is slightly slouched, his eyes are tired, but he remains focused on the glowing gaming monitor.

The room should visually show everything he is neglecting.

On one side of the desk, there is an untouched notebook and several study papers. Nearby, a closed laptop and unfinished work are covered by shadows.

A smartphone lies on the desk with several subtle notification lights.

In the background, a wall clock clearly indicates around 4:00 AM.

Through a window, the outside world is completely dark.

The gaming monitor is the brightest object in the room, making it visually clear that the virtual world has become more important than everything around him.

The character should NOT look happy anymore. His expression should communicate exhaustion, isolation and the feeling that time has disappeared.

The image should communicate:
lost sleep, neglected responsibilities, isolation, exhaustion and time passing unnoticed.

Dark psychological cinematic atmosphere, predominantly cold blue lighting, deep shadows, subtle red highlights from the monitor, dramatic composition, cinematic depth of field, rich textures, subtle film grain.

STYLE:
High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dramatic cinematic lighting, professional concept art, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same:
face design,
hair,
beard,
skin tone,
age,
body proportions,
clothing,
and overall artistic style of the attached avatar.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, realistic portrait, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign.

No text.
No subtitles.
No logos.
No watermark.
No recognizable existing video game characters.`,
    narrativeContext: 'O retrato visual do custo invisível: sono trocado, faculdade e prazos de trabalho intocados nas sombras, enquanto a madrugada se esvai diante do brilho azul hipnótico.',
    cognitiveKeypoints: [
      'Caderno e papéis intocados na beirada da mesa',
      'Laptop de trabalho fechado sob as sombras',
      'Smartphone piscando com notificações de mensagens e ligações perdidas',
      'Relógio de parede marcando 4:00 AM e janela com escuridão total',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['4:00 AM', 'Responsabilidades Negligenciadas', 'Sono Perdido', 'Laptop Fechado', 'Isolamento', '16:9'],
  },
  {
    id: 'cartoon-gamer-trap-scene',
    title: 'A Armadilha Invisível: Perda de Controle & Isolamento',
    subtitle: 'Ilustração Cartoon 16:9 • Correntes sutis e vazio emocional tarde da noite',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_cartoon_trap_1790634043890.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA para o personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico do avatar anexado. NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado sentado sozinho em sua mesa gamer tarde da noite.
A atmosfera é visivelmente mais sombria do que nas cenas anteriores.
O personagem ainda está jogando, completamente absorvido pelo monitor brilhante. Seu rosto é iluminado pela luz fria e azul da tela, mas sua expressão mudou de empolgação para exaustão e vazio emocional.
A sala ao seu redor está quase completamente escura.
Correntes transparentes e sutis e formas semelhantes a sombras cercam o personagem e se conectam visualmente ao monitor de jogos. Elas devem parecer simbólicas e quase invisíveis, sugerindo que o jogo está lentamente se tornando uma armadilha psicológica.
Atrás do personagem, o restante do quarto está desaparecendo na escuridão, enquanto o monitor se torna a única fonte de luz brilhante.
Um relógio digital ao fundo indica sutilmente que é muito tarde da noite.
A imagem deve comunicar: tentação, perda de controle, isolamento, exaustão e uma armadilha invisível.
A transição das cenas positivas anteriores deve ser clara: o mesmo hobby que antes representava amizade e diversão agora está começando a dominar a vida do personagem.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, atmosfera psicológica sombria, iluminação cinematográfica dramática, sombras profundas, luz azul fria do monitor, detalhes vermelhos sutis, profundidade de campo cinematográfica, texturas ricas, granulação sutil de filme, arte conceitual profissional, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo: design de rosto, cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico geral do avatar anexado.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, retrato realista, pessoa hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.
Sem texto, sem legendas, sem logos, sem marca d'água, sem personagens de videogame existentes reconhecíveis.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference for the character.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar. DO NOT transform him into a real human, photorealistic person, live-action actor, or photograph.

Create a cinematic 16:9 digital illustration of the same male cartoon character sitting alone at his gaming desk late at night.

The atmosphere is noticeably darker than in the previous scenes.

The character is still playing, completely absorbed by the glowing monitor. His face is illuminated by cold blue screen light, but his expression has changed from excitement to exhaustion and emotional emptiness.

The room around him is almost completely dark.

Subtle transparent chains and shadow-like shapes surround the character and connect visually to the gaming monitor. They must look symbolic and almost invisible, suggesting that the game is slowly becoming a psychological trap.

Behind the character, the rest of the room is disappearing into darkness, while the monitor becomes the only bright source of light.

A digital clock in the background subtly indicates that it is very late at night.

The image should communicate:
temptation, loss of control, isolation, exhaustion and an invisible trap.

The transition from the previous positive scenes should be clear: the same hobby that previously represented friendship and enjoyment is now beginning to dominate the character's life.

STYLE:
High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dark psychological atmosphere, dramatic cinematic lighting, deep shadows, cold blue monitor light, subtle red accents, cinematic depth of field, rich textures, subtle film grain, professional concept art, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same:
face design,
hair,
beard,
skin tone,
age,
body proportions,
clothing,
and overall artistic style of the attached avatar.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, realistic portrait, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign.

No text.
No subtitles.
No logos.
No watermark.
No recognizable existing video game characters.`,
    narrativeContext: 'A virada dramática para "O Lado Mal": o instante em que a diversão se transforma em compulsão e isolamento, com correntes invisíveis e a escuridão engolindo o quarto.',
    cognitiveKeypoints: [
      'Expressão de vazio emocional e cansaço perante a luz azul gélida',
      'Correntes e sombras translúcidas sugerindo aprisionamento psicológico',
      'O quarto desaparece nas trevas, isolando o jogador do mundo real',
      'Estilo estritamente cartoon ilustrado 2D maduro, sem fotorrealismo',
    ],
    tags: ['A Armadilha', 'Perda de Controle', 'Correntes Invisíveis', 'Vazio Emocional', 'O Lado Mal', '16:9'],
  },
  {
    id: 'cartoon-gamer-cooperation-scene',
    title: 'Cooperação & Pertencimento: Conexão Humana nos Games',
    subtitle: 'Ilustração Cartoon 16:9 • Trabalho em equipe e amizade à distância',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_cooperation_1790633970130.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA para o personagem principal.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo artístico do avatar anexado. NÃO o transforme em um humano real, pessoa fotorrealista, ator em live-action ou fotografia.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado sentado em sua mesa gamer à noite, jogando um videogame cooperativo online com outros jogadores.
O personagem principal está focado no monitor, mas desta vez sua expressão é ligeiramente mais relaxada e positiva. Ele tem um sorriso sutil e genuíno enquanto se comunica com seus companheiros de equipe.
No grande monitor à sua frente, mostre um ambiente de jogo cooperativo completamente fictício com vários personagens de jogadores fictícios diferentes trabalhando juntos.
Ao redor do monitor, visualize sutilmente a conexão entre os jogadores usando linhas brilhantes e elegantes que conectam seus personagens, sugerindo trabalho em equipe e amizade através da distância.
A atmosfera deve comunicar: amizade, cooperação, pertencimento, trabalho em equipe e conexão humana.
A sala permanece escura e cinematográfica, iluminada pelo brilho azul do monitor, mas o clima geral é mais caloroso e positivo do que nas cenas anteriores.
Mostre que, embora os jogadores estejam fisicamente separados, eles estão compartilhando a mesma experiência juntos.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, iluminação cinematográfica dramática, texturas ricas, granulação sutil de filme, sombras profundas, arte conceitual profissional, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo: design de rosto, cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico geral do avatar anexado.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, retrato realista, pessoa hiper-realista, humano 3D, anime, desenho infantil, personagem genérico, redesign de personagem.
Sem texto, sem legendas, sem logos, sem marca d'água, sem personagens de videogame existentes reconhecíveis, sem interface de jogo protegida por direitos autorais.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference for the main character.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar. DO NOT transform him into a real human, photorealistic person, live-action actor, or photograph.

Create a cinematic 16:9 digital illustration of the same male cartoon character sitting at his gaming desk at night, playing an online cooperative video game with other players.

The main character is focused on the monitor, but this time his expression is slightly more relaxed and positive. He has a subtle genuine smile while communicating with his teammates.

On the large monitor in front of him, show a completely fictional cooperative game environment with several different fictional player characters working together.

Around the monitor, subtly visualize the connection between the players using elegant glowing lines connecting their characters, suggesting teamwork and friendship across distance.

The atmosphere should communicate:
friendship, cooperation, belonging, teamwork and human connection.

The room remains dark and cinematic, illuminated by the blue glow of the monitor, but the overall mood is warmer and more positive than the previous scenes.

Show that although the players are physically separated, they are sharing the same experience together.

STYLE:
High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dramatic cinematic lighting, rich textures, subtle film grain, deep shadows, professional concept art, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same:
face design,
hair,
beard,
skin tone,
age,
body proportions,
clothing,
and overall artistic style of the attached avatar.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, realistic portrait, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign.

No text.
No subtitles.
No logos.
No watermark.
No recognizable existing video game characters.
No copyrighted game interface.`,
    narrativeContext: 'O contraponto fundamental ao mito do isolamento: os games cooperativos como ambiente de formação de amizades, trabalho em equipe e conexão social genuína além de fronteiras físicas.',
    cognitiveKeypoints: [
      'Expressão calorosa e relaxada com sorriso sutil e foco na comunicação',
      'Linhas luminosas conectando os jogadores através da distância',
      'Ambiente de jogo fictício demonstrando cooperação em equipe',
      'Estilo estritamente cartoon ilustrado 2D, consistente com o avatar',
    ],
    tags: ['Cooperação', 'Amizade Online', 'Pertencimento', 'Linhas Conectadas', 'Trabalho em Equipe', '16:9'],
  },
  {
    id: 'cartoon-gamer-resilience-scene',
    title: 'Derrota & Resiliência: Frustração vs Persistência',
    subtitle: 'Ilustração Cartoon 16:9 • Silhuetas de tentativas anteriores e determinação',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_resilience_1790633823592.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA para o personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo visual do avatar anexado. NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action ou fotografia realista.
Crie uma ilustração digital cinematográfica 16:9 do mesmo personagem masculino de desenho animado sentado em sua mesa gamer tarde da noite após perder um desafio de videogame extremamente difícil.
O personagem está visivelmente frustrado, mas controlado. Seus ombros estão ligeiramente tensos, suas mãos ainda seguram o controle e ele olha intensamente para a tela do jogo.
No monitor, mostre um ambiente escuro de jogo fictício sugerindo que ele acabou de falhar contra um chefe poderoso. Não use nenhum personagem de videogame existente, logotipo ou design protegido por direitos autorais.
O personagem respira fundo, mostrando determinação em vez de desistir.
Narrativa visual sutil: atrás dele, várias silhuetas translúcidas e tênues de tentativas anteriores fracassadas aparecem como ecos, enquanto um caminho mais brilhante à frente sugere que ele tentará novamente.
A atmosfera deve comunicar: fracasso, frustração, persistência, determinação e resiliência.
Ambiente escuro e cinematográfico, luz azul do monitor iluminando o personagem, sombras profundas, destaques vermelhos sutis da tela do jogo, composição dramática.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, iluminação cinematográfica dramática, texturas ricas, granulação sutil de filme, sombras profundas, arte conceitual profissional, 16:9.
O resultado final DEVE parecer claramente um PERSONAGEM DESENHADO / ANIMADO, NÃO uma fotografia de uma pessoa real.
Mantenha exatamente o mesmo: design do rosto, cabelo, barba, tom de pele, idade, proporções corporais, roupas e estilo artístico geral do avatar anexado.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, retrato realista, humano 3D, pessoa hiper-realista, anime, desenho infantil, personagem genérico, redesign do personagem.
Sem texto, sem legendas, sem logos, sem marca d'água.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference for the character.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the artistic style of the attached avatar. DO NOT transform the character into a real human, photorealistic person, live-action actor, or photograph.

Create a cinematic 16:9 digital illustration of the same male cartoon character sitting at his gaming desk late at night after losing an extremely difficult video game challenge.

The character is visibly frustrated but controlled. His shoulders are slightly tense, his hands still hold the controller, and he looks intensely at the game screen.

On the monitor, show a dark fictional game environment suggesting that he has just failed against a powerful boss. Do not use any existing video game character, logo or copyrighted game design.

The character takes a deep breath, showing determination rather than giving up.

Subtle visual storytelling: behind him, several faint translucent silhouettes of previous failed attempts appear like echoes, while one brighter path ahead suggests that he is going to try again.

The atmosphere should communicate:
failure, frustration, persistence, determination and resilience.

Dark cinematic environment, blue monitor light illuminating the character, deep shadows, subtle red highlights from the game screen, dramatic composition.

STYLE:
High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dramatic cinematic lighting, rich textures, subtle film grain, deep shadows, professional concept art, 16:9.

The final result MUST clearly look like a DRAWN / ANIMATED CHARACTER, NOT a photograph of a real person.

Keep exactly the same:
face design,
hair,
beard,
skin tone,
age,
body proportions,
clothing,
and overall artistic style of the attached avatar.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, realistic portrait, hyperrealistic person, 3D human, anime, childish cartoon, generic character, character redesign.

No text.
No subtitles.
No logos.
No watermark.`,
    narrativeContext: 'Cena crucial do roteiro explorando a resiliência psicológica e a tolerância à frustração: como os jogos treinam o cérebro a aprender com derrotas sucessivas através de tentativas e persistência.',
    cognitiveKeypoints: [
      'Narrativa visual: silhuetas translúcidas atrás representando tentativas anteriores',
      'Caminho brilhante à frente simbolizando a determinação em tentar de novo',
      'Expressão de frustração controlada e respiração profunda com controle na mão',
      'Estilo 100% ilustrado cartoon maduro, sem fotorrealismo',
    ],
    tags: ['Resiliência', 'Persistência', 'Tentativas Anteriores', 'Cartoon Maduro', 'Luz Azul & Vermelha', '16:9'],
  },
  {
    id: 'cartoon-gamer-focus-scene',
    title: 'O Lado BEM: Hiperfoco Ilustrado & Elementos Holográficos',
    subtitle: 'Ilustração 16:9 em estilo Cartoon Maduro (Estritamente Desenho)',
    side: 'good',
    imageUrl: '/src/assets/images/scene_cartoon_gamer_focus_1790633665781.jpg',
    isOriginalPrompt: true,
    promptPt: `Use a imagem do avatar anexada como referência visual EXATA para o personagem.
IMPORTANTE: O personagem DEVE permanecer um PERSONAGEM DE DESENHO / CARTOON ILUSTRADO, correspondendo exatamente ao estilo visual do avatar anexado. NÃO transforme o personagem em um humano real, pessoa fotorrealista, ator em live-action ou fotografia realista.
Crie uma ilustração cinematográfica 16:9 do mesmo personagem masculino de desenho animado sentado em uma mesa gamer tarde da noite, intensamente focado enquanto joga um videogame complexo.
O personagem deve ter a mesma aparência ilustrada, design facial, corte de cabelo, barba, tom de pele, proporções, roupas e estilo artístico geral do avatar anexado.
Ele é iluminado pela luz azul fria que vem do monitor. Sua expressão mostra extrema concentração enquanto as duas mãos seguram naturalmente o controle.
Ao redor do personagem, integre elementos holográficos ilustrados sofisticados representando sua mente processando informações em alta velocidade: mapas complexos, rotas estratégicas, padrões geométricos, alvos em movimento, pontos de luz interconectados e linhas fluidas.
Esses elementos devem sugerir estratégia, consciência espacial, rápida tomada de decisão, reflexos e coordenação.
NÃO mostre um cérebro humano literal.
A sala é escura, atmosférica e cinematográfica, com sombras profundas e iluminação azul-branca.
ESTILO: Ilustração digital cinematográfica de alta qualidade, cartoon maduro sofisticado, ilustração detalhada de graphic novel, personagem de animação estilizada, composição dramática, iluminação cinematográfica, texturas ricas, granulação sutil de filme, sombras profundas, arte conceitual profissional, 16:9.
O resultado final DEVE parecer um personagem animado/desenhado, NÃO uma fotografia de uma pessoa real.
PROMPT NEGATIVO: humano fotorrealista, pessoa real, live action, fotografia, rosto humano realista, ator real, pele fotográfica, retrato realista, humano 3D, pessoa hiper-realista, anime, desenho infantil, personagem genérico, redesign do personagem.
Sem texto, sem legendas, sem logos, sem marca d'água.`,
    promptEn: `Use the attached avatar image as the EXACT visual reference for the character.

IMPORTANT: The character MUST remain a DRAWN / ILLUSTRATED CARTOON CHARACTER, exactly matching the visual style of the attached avatar. DO NOT transform the character into a real human, photorealistic person, live-action actor, or realistic photograph.

Create a cinematic 16:9 illustration of the same male cartoon character sitting at a gaming desk late at night, intensely focused while playing a complex video game.

The character must have the same illustrated appearance, facial design, hairstyle, beard, skin tone, proportions, clothing and overall artistic style as the attached avatar.

He is illuminated by the cool blue light from the monitor. His expression shows intense concentration while both hands naturally hold the controller.

Around the character, integrate sophisticated illustrated holographic elements representing his mind processing information at high speed: complex maps, strategic routes, geometric patterns, moving targets, interconnected points of light and flowing lines.

These elements should suggest strategy, spatial awareness, rapid decision-making, reflexes and coordination.

Do NOT show a literal human brain.

The room is dark, atmospheric and cinematic, with deep shadows and blue-white lighting.

STYLE:
High-quality cinematic digital illustration, sophisticated mature cartoon, detailed graphic-novel illustration, stylized animated character, dramatic composition, cinematic lighting, rich textures, subtle film grain, deep shadows, professional concept art, 16:9.

The final result MUST look like an animated/drawn character, NOT a photograph of a real person.

NEGATIVE PROMPT:
photorealistic human, real person, live action, photography, realistic human face, real actor, photographic skin, realistic portrait, 3D human, hyperrealistic person, anime, childish cartoon, generic character, character redesign.

No text.
No subtitles.
No logos.
No watermark.`,
    narrativeContext: 'Cena principal do vídeo explicando a aceleração cognitiva e a plasticidade cerebral em jogos de estratégia, mantendo a identidade ilustrada (cartoon) do canal.',
    cognitiveKeypoints: [
      'Estilo 100% ilustrado / cartoon estilizado (fiel ao avatar do canal)',
      'Mapas táticos e vetores geométricos desenhados ao redor do personagem',
      'Iluminação azul fria emanando do monitor de forma dramática',
      'Postura e anatomia consistentes com o design do avatar',
    ],
    tags: ['Estilo Cartoon', 'Ilustração 16:9', 'Hiperfoco', 'Luz Azul Fria', 'Hologramas Vetoriais', 'YouTube Video'],
  },
  {
    id: 'cartoon-gamer-exhaustion-scene',
    title: 'O Lado MAL: Exaustão Noturna Ilustrada (4:00 AM)',
    subtitle: 'Ilustração em estilo Cartoon mostrando o desgaste do vício',
    side: 'bad',
    imageUrl: '/src/assets/images/scene_cartoon_gamer_exhaustion_1790633677317.jpg',
    promptPt: `Ilustração digital cinematográfica 16:9 em estilo cartoon maduro do mesmo personagem masculino de desenho animado curvado na cadeira gamer às 4 da manhã, exausto, com olheiras desenhadas e cabelo desalinhado. Iluminação dramática com brilho avermelhado e âmbar refletindo nas superfícies ilustradas. Partículas holográficas vermelhas de alerta se dissolvendo nas sombras. Estilo desenho 2D maduro, arte conceitual, 16:9, sem fotografia, sem fotorrealismo.`,
    promptEn: `A high-quality cinematic 16:9 digital illustration of the same stylized mature male cartoon character sitting slumped in his gaming chair at 4 AM, representing digital exhaustion and burnout. Stylized drawn cartoon aesthetic, tired dark circles under eyes, slightly disheveled hair and beard. Dark room with sickly red and amber monitor glare casting harsh illustrated shadows, faint glitchy red geometric alert particles dissolving into the shadows. Mature graphic novel illustration style, dramatic low-key lighting, concept art, 16:9. NOT a photograph, NOT photorealistic, no text, no watermark, no anime.`,
    narrativeContext: 'Momento em que o roteiro aborda o excesso de estímulos digitais e a privação do sono, em perfeita harmonia estilística com a cena de foco.',
    cognitiveKeypoints: [
      'Representação visual ilustrada da fadiga mental e dopaminérgica',
      'Contraste de cor: vermelho e âmbar contra a escuridão do quarto',
      'Preservação estrita dos traços ilustrados do personagem',
    ],
    tags: ['Estilo Cartoon', 'O Lado Mal', 'Exaustão 4 AM', 'Luz Vermelha', 'Arte Conceitual'],
  },
  {
    id: 'cartoon-dual-split',
    title: 'Dualidade Ilustrada: O Bem vs O Mal (Key Art / Thumbnail)',
    subtitle: 'Capa e B-roll estilizado com divisão 50/50 em desenho digital',
    side: 'dual',
    imageUrl: '/src/assets/images/thumbnail_cartoon_split_1790633695983.jpg',
    promptPt: `Ilustração digital cinematográfica 16:9 com o personagem cartoon no centro: à esquerda o azul do foco cognitivo e vetores holográficos, à direita o vermelho escuro da exaustão e sombras dramáticas. Estilo cartoon maduro, arte conceitual de animação, alto contraste, sem texto.`,
    promptEn: `A high-quality cinematic 16:9 digital illustration split key art for a YouTube video essay: stylized mature male cartoon character in the center, split lighting concept: left side cool glowing blue with strategic vector nodes and focus, right side deep crimson red and dark shadows with exhaustion, dramatic graphic-novel illustration, concept art, clean line work, no text, no watermark, NOT a photograph, NOT photorealistic.`,
    narrativeContext: 'Arte de capa e abertura do canal Bem ou Mal, sintetizando os dois lados em um estilo de desenho coeso.',
    cognitiveKeypoints: [
      'Equilíbrio conceitual em formato 16:9 para YouTube',
      'Dualidade visual: Luz Azul (Bem) vs Vermelho (Mal)',
      'Identidade artística consistente para a marca do canal',
    ],
    tags: ['Dualidade', 'Cartoon Split', 'Thumbnail 16:9', 'Arte de Abertura'],
  },
  {
    id: 'semi-realistic-gamer-focus',
    title: 'Versão Alternativa: Semi-realista Graphic Novel',
    subtitle: 'Variação alternativa com renderização semi-realista',
    side: 'good',
    imageUrl: '/src/assets/images/scene_gamer_focus_1790633218127.jpg',
    promptPt: `Versão alternativa semi-realista com iluminação volumétrica e sombras profundas.`,
    promptEn: `A cinematic 16:9 scene of a mature male character intensely focused while playing a complex video game with cool blue lighting and floating holographic interfaces.`,
    narrativeContext: 'Versão renderizada com profundidade de campo cinematográfica para criadores que desejam comparar estilos artísticos.',
    cognitiveKeypoints: [
      'Renderização semi-realista para comparação de estilo',
      'Luz azulada e interfaces holográficas volumétricas',
    ],
    tags: ['Alternativo', 'Semi-realista', 'Luz Azul'],
  }
];

export const VIDEO_SCRIPT_BEATS: ScriptBeat[] = [
  {
    timestamp: '00:00 - 01:25',
    title: '1. O Gancho: O Paradoxo dos Jogos Digitais',
    side: 'intro',
    narrationSnippet: '"Você já se pegou às 3 da manhã jogando mais uma partida e se perguntou: isso está deixando o meu cérebro mais ágil ou simplesmente destruindo a minha rotina? Bem-vindo ao Bem ou Mal."',
    visualDirection: 'Arte de Destaque Cartoon com divisão visual entre luz azul e escuridão vermelha.',
    recommendedSceneId: 'cartoon-dual-split',
  },
  {
    timestamp: '01:26 - 03:40',
    title: '2. O Lado BEM: Neuroplasticidade, Estratégia e Agilidade',
    side: 'good',
    narrationSnippet: '"Estudos de neurociência mostram que jogos estratégicos ativam o córtex pré-frontal, melhorando a tomada de decisão rápida, a visão espacial e os reflexos motores finos."',
    visualDirection: 'Cena Principal Cartoon: Personagem ilustrado com luz azul do monitor e hologramas de rotas estratégicas flutuando ao redor.',
    recommendedSceneId: 'cartoon-gamer-focus-scene',
  },
  {
    timestamp: '03:41 - 05:30',
    title: '3. Imersão Épica: O Mundo que se Expande além da Tela',
    side: 'good',
    narrationSnippet: '"Poucas mídias conseguem despertar tanto a curiosidade e o senso de aventura. Sem sair da cadeira, somos transportados para universos colossais, ruínas esquecidas e montanhas misteriosas."',
    visualDirection: 'Cena da Imersão Épica: O mundo do jogo expandindo-se para fora do monitor em montanhas majestosas e luz dourada.',
    recommendedSceneId: 'cartoon-gamer-immersion-scene',
  },
  {
    timestamp: '05:31 - 07:15',
    title: '4. A Resiliência: Aprendendo a Falhar e Tentar de Novo',
    side: 'good',
    narrationSnippet: '"Perder faz parte do jogo. Diferente da vida real onde o erro é punido, nos games o erro gera aprendizado imediato. Cada morte é apenas um eco para a próxima vitória."',
    visualDirection: 'Cena da Resiliência: Personagem frustrado mas determinado, silhuetas translúcidas de tentativas passadas e caminho brilhante à frente.',
    recommendedSceneId: 'cartoon-gamer-resilience-scene',
  },
  {
    timestamp: '06:16 - 08:00',
    title: '4. Conexão Humana: Cooperação e Amizade à Distância',
    side: 'good',
    narrationSnippet: '"Ao contrário do mito do jogador solitário no porão, os jogos cooperativos conectam milhões de pessoas. Eles criam laços de confiança, colaboração e pertencimento através de oceanos."',
    visualDirection: 'Cena da Cooperação: Personagem sorrindo e comunicando-se com a equipe, com linhas luminosas conectando jogadores pelo monitor.',
    recommendedSceneId: 'cartoon-gamer-cooperation-scene',
  },
  {
    timestamp: '08:01 - 09:45',
    title: '5. A Virada Sombria: A Armadilha Invisível e o Isolamento',
    side: 'bad',
    narrationSnippet: '"A transição é sutil. O que antes era diversão e amizade começa a preencher todos os vazios. O jogador não percebe, mas o quarto se apaga e as correntes da dopamina começam a prender sua rotina."',
    visualDirection: 'Cena da Armadilha: Personagem absorvido pela tela com vazio emocional, sombras e correntes translúcidas conectando-o ao monitor.',
    recommendedSceneId: 'cartoon-gamer-trap-scene',
  },
  {
    timestamp: '09:46 - 11:15',
    title: '6. 4:00 AM: Sono Perdido & Responsabilidades Negligenciadas',
    side: 'bad',
    narrationSnippet: '"Cadernos intocados, trabalhos adiados e mensagens não respondidas. O mundo real fica em segundo plano enquanto a tela se torna o único centro gravitacional da sua vida."',
    visualDirection: 'Cena das 4 AM: Personagem curvado na penumbra com cadernos intactos, laptop fechado sob sombras e relógio marcando 4:00 AM.',
    recommendedSceneId: 'cartoon-gamer-neglect-scene',
  },
  {
    timestamp: '11:16 - 12:40',
    title: '7. O Lado MAL: Sobrecarga Dopaminérgica e Insônia Extrema',
    side: 'bad',
    narrationSnippet: '"Por outro lado, o design dos jogos modernos foi esculpido por psicólogos comportamentais para sequestrar o sistema de recompensa. O resultado? Desgaste mental e perda de foco na vida real."',
    visualDirection: 'Cena da Exaustão Cartoon: Personagem ilustrado às 4 AM, olhos cansados, iluminação avermelhada/âmbar e postura curvada.',
    recommendedSceneId: 'cartoon-gamer-exhaustion-scene',
  },
  {
    timestamp: '12:41 - 14:30',
    title: '8. O Veredito: É o Hábito ou a Dose?',
    side: 'conclusion',
    narrationSnippet: '"Videogame não é o vilão e nem o salvador da pátria: é um multiplicador da sua disciplina. Use como academia para a mente, não como anestésico para a realidade."',
    visualDirection: 'Transição suave entre a cena de foco e a arte de dualidade.',
    recommendedSceneId: 'cartoon-dual-split',
  },
];
