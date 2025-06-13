import { MarkerData } from './types';
import khorn1 from './assets/khorn1.png';
import khorn2 from './assets/khorn2.png';
import khorn3 from './assets/khorn3.png';
import Bridge from './assets/Bridge.png';

export const markers: MarkerData[] = [
  {
    id: 'khorn1',
    title: 'Crystal Bay',
    description: 'A serene bay with crystal-clear waters and hidden underwater treasures.',
    position: [25, 106],
    iconSize: [175 , 95],
    type: 'video',
    content: {
      type: 'video',
      description: 'Dive into the crystal-clear waters.',
      videoUrl: 'https://example.com/crystal-bay.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200'
    },
    icon: khorn1,
    requiredVisits: ['khorn1','123']
  },
  {
    id: 'khorn2',
    title: 'Mystic Isle',
    description: 'The starting point of your journey, filled with ancient mysteries.',
    position: [68, 133],
    iconSize: [112 , 60],
    type: 'photo',
    content: {
      type: 'photo',
      description: 'Ancient ruins tell stories of a forgotten civilization.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
          alt: 'Ancient ruins on Mystic Isle',
          width: 1200,
          height: 800
        },
        {
          src: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200',
          alt: 'Mystical forest',
          width: 1200,
          height: 800
        }
      ]
    },
    icon: khorn2,
    requiredVisits: ['123']
  },
  {
    id: 'bridge',
    title: 'Dragon Peak',
    description: 'A majestic mountain holding ancient dragon artifacts.',
    position: [60 , 184],
    iconSize: [107 , 60],
    type: '3d',
    content: {
      type: '3d',
      description: 'Explore the ancient dragon artifacts in 3D.',
      modelUrl: '/models/dragon-artifact.glb',
      previewImage: 'https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=1200'
    },
    icon: Bridge,
    requiredVisits: ['123']
  },
  {
    id: 'khorn3',
    title: 'Dragon Peak',
    description: 'A majestic mountain holding ancient dragon artifacts.',
    position: [41, 141],
    iconSize: [95 , 60],
    type: '3d',
    content: {
      type: '3d',
      description: 'Explore the ancient dragon artifacts in 3D.',
      modelUrl: '/models/dragon-artifact.glb',
      previewImage: 'https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=1200'
    },
    icon: khorn3,
    requiredVisits: ['khorn1', 'khorn2', '123']
  }
];