export interface MarkerData {
  id: string;
  title: string;
  description: string;
  position: [number, number];
  type: 'photo' | 'video' | '3d';
  content: ContentData;
  icon: string,
  iconSize: [number, number]
  requiredVisits: string[]; // IDs of markers that must be visited first
}

interface BaseContent {
  description: string;
}

interface PhotoContent extends BaseContent {
  type: 'photo';
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

interface VideoContent extends BaseContent {
  type: 'video';
  videoUrl: string;
  thumbnail: string;
}

interface ThreeDContent extends BaseContent {
  type: '3d';
  modelUrl: string;
  previewImage: string;
}

export type ContentData = PhotoContent | VideoContent | ThreeDContent;