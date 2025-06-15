export interface MarkerData {
  id: string;
  title: string;
  position: [number, number];
  type: 'photo' | 'video' | 'text' | 'dialog' | 'mixed';
  content: ContentData;
  icon: string,
  iconSize: [number, number]
  requiredVisits: string[]; // IDs of markers that must be visited first
}

interface BaseContent {
  type: string
}

interface PhotoContent extends BaseContent {
  type: 'photo';
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  description: string;
  }[];
}

interface VideoContent extends BaseContent {
  type: 'video';
  videoUrl: string;
  thumbnail: string;
  description: string;

}

interface TextContent extends BaseContent {
  type: 'text';
  paragraphs: string[];
}

interface DialogContent extends BaseContent {
  type: 'dialog';
  start: string;
  nodes: DialogNode[];
}

interface DialogNode {
  id: string;
  text: string;
  options: DialogOption[];
}

interface DialogOption {
  text: string;
  nextId: string | null;
}

interface MixedContent extends BaseContent {
  type: 'mixed';
  types: string[];
  contents: ContentData[];
}

export type ContentData = PhotoContent | VideoContent | TextContent | DialogContent | MixedContent;