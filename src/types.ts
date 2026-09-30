export type ChannelSide = 'good' | 'bad' | 'dual' | 'custom';

export interface SceneItem {
  id: string;
  title: string;
  subtitle: string;
  side: ChannelSide;
  imageUrl: string;
  promptEn: string;
  promptPt: string;
  narrativeContext: string;
  cognitiveKeypoints: string[];
  tags: string[];
  isOriginalPrompt?: boolean;
}

export interface CharacterProfile {
  name: string;
  age: string;
  role: string;
  referenceImageUrl: string;
  appearanceSummary: string;
  traits: string[];
  customUploadedUrl?: string | null;
}

export interface ScriptBeat {
  timestamp: string;
  title: string;
  side: 'good' | 'bad' | 'intro' | 'conclusion';
  narrationSnippet: string;
  visualDirection: string;
  recommendedSceneId: string;
}

export interface CompositorSettings {
  scale: number;
  posX: number;
  posY: number;
  opacity: number;
  blendMode: 'source-over' | 'screen' | 'overlay' | 'lighten';
  featherEdge: boolean;
  mirrored: boolean;
  showSafeZone: boolean;
  showCinematicBars: boolean;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  tagline: string;
  question: string;
  coverImageUrl: string;
  fullScriptText: string;
  scriptBeats: ScriptBeat[];
  defaultSceneId: string;
}

