import { MarkerData } from './types';

export const markers: MarkerData[] = [
  {
    id: 'island1',
    title: 'Mystic Isle',
    description: 'The starting point of your journey, filled with ancient mysteries.',
    position: [300, 400],
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
    requiredVisits: []
  },
  {
    id: 'island2',
    title: 'Crystal Bay',
    description: 'A serene bay with crystal-clear waters and hidden underwater treasures.',
    position: [46, 64],
    type: 'video',
    content: {
      type: 'video',
      description: 'Dive into the crystal-clear waters.',
      videoUrl: 'https://example.com/crystal-bay.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200'
    },
    requiredVisits: ['island1']
  },
  {
    id: 'island3',
    title: 'Dragon Peak',
    description: 'A majestic mountain holding ancient dragon artifacts.',
    position: [400, 500],
    type: '3d',
    content: {
      type: '3d',
      description: 'Explore the ancient dragon artifacts in 3D.',
      modelUrl: '/models/dragon-artifact.glb',
      previewImage: 'https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=1200'
    },
    requiredVisits: ['island1', 'island2']
  }
];