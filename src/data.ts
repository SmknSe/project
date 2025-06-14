import { MarkerData } from './types';
import khorn1 from './assets/khorn1.png';
import khorn2 from './assets/khorn2.png';
import khorn3 from './assets/khorn3.png';
import Bridge from './assets/Bridge.png';
import Ami1 from './assets/Ami1.jpg';
import Ami2 from './assets/Ami2.jpg';
import Ami3 from './assets/Ami3.jpg';
import Ami4 from './assets/Ami4.jpg';
import Ami5 from './assets/Ami5.jpg';
import illumina2 from './assets/Illumina2.png'
import illumina2_video from './assets/SON hd.mov';
import blackRocks1 from './assets/Black rocks 1.png';
import blackRocks3 from './assets/Black rocks 3.png';
import blackRocks4 from './assets/Black rocks 4.png';
import stars from './assets/stars.jpg';
import dune5 from './assets/Dune5.png';
import beach from './assets/beach.jpg';
import match1 from './assets/match1.jpg';
import match2 from './assets/match2.jpg';

export const markers: MarkerData[] = [
  {
    id: 'khorn1',
    title: 'Кхорн',
    position: [25, 106],
    iconSize: [173, 95],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: Ami1,
          alt: 'Ami1',
          width: 1200,
          height: 800,
          description: 'Меня всё больше и больше занимали мысли о чём-то другом, отстранённом от всего этого...',
        },
        {
          src: Ami2,
          alt: 'Ami2',
          width: 1200,
          height: 800,
          description: 'Это было последней каплей в чаше моих сомнений.',
        },
        {
          src: Ami3,
          alt: 'Ami3',
          width: 1200,
          height: 800,
          description: '… мне постепенно стало ясно, что я погибла и что корабль, на котором я плыла среди Кхорнской жизни, разлетелся в щепы..',
        },
        {
          src: Ami4,
          alt: 'Ami4',
          width: 1200,
          height: 800,
          description: '… мне постепенно стало ясно, что я погибла и что корабль, на котором я плыла среди Кхорнской жизни, разлетелся в щепы..',
        },
      ]
    },
    icon: khorn1,
    requiredVisits: []
  },
  {
    id: 'bridge',
    title: 'Dragon Peak',
    position: [61, 184],
    iconSize: [107, 64],
    type: '3d',
    content: {
      type: '3d',
      description: 'A majestic mountain holding ancient dragon artifacts. Explore the ancient dragon artifacts in 3D.',
      modelUrl: '/models/dragon-artifact.glb',
      previewImage: 'https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=1200'
    },
    icon: Bridge,
    requiredVisits: []
  },
  {
    id: 'khorn2',
    title: 'Mystic Isle',
    position: [66, 133],
    iconSize: [112, 61],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
          alt: 'Ancient ruins on Mystic Isle',
          width: 1200,
          height: 800,
          description: 'The starting point of your journey, filled with ancient mysteries. Ancient ruins tell stories of a forgotten civilization.',

        },
        {
          src: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200',
          alt: 'Mystical forest',
          width: 1200,
          height: 800,
          description: 'The starting point of your journey, filled with ancient mysteries. Ancient ruins tell stories of a forgotten civilization.',

        }
      ]
    },
    icon: khorn2,
    requiredVisits: []
  },
  {
    id: 'khorn3',
    title: 'Dragon Peak',
    position: [39, 141],
    iconSize: [95, 50],
    type: '3d',
    content: {
      type: '3d',
      description: 'A majestic mountain holding ancient dragon artifacts. Explore the ancient dragon artifacts in 3D.',
      modelUrl: '/models/dragon-artifact.glb',
      previewImage: 'https://images.unsplash.com/photo-1585089858717-f4378c2031d8?w=1200'
    },
    icon: khorn3,
    requiredVisits: []
  },
  {
    id: 'illumina2',
    title: 'Берега Иллюмины',
    position: [74, 265],
    type: 'video',
    content: {
      type: 'video',
      description: ', но наклонясь к голове девушки, он лишь дотронулся языком до её носа...',
      videoUrl: illumina2_video,
      thumbnail: illumina2
    },
    icon: illumina2,
    iconSize: [90, 53],
    requiredVisits: []
  },
  {
    id: 'blackRocks1',
    title: 'У подножия Чёрных скал',
    position: [118, 284],
    iconSize: [116, 65],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: stars,
          alt: 'Stars',
          width: 1200,
          height: 800,
          description: '… и наконец мне удалось уснуть, точнее я не заметила этого и просто отключилась.',

        }
      ]
    },
    icon: blackRocks1,
    requiredVisits: []
  },
  {
    id: 'blackRocks4',
    title: 'Чёрные скалы',
    position: [146, 265],
    iconSize: [132, 71],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: Ami5,
          alt: 'Ami5',
          width: 1200,
          height: 800,
          description: 'Теперь Кхорн внутри меня смеётся. Мол, я предупреждал...',

        }
      ]
    },
    icon: blackRocks4,
    requiredVisits: []
  },
  {
    id: 'dune5',
    title: 'Дюна Забвения',
    position: [130, 418],
    iconSize: [154, 70],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: beach,
          alt: 'beach',
          width: 1200,
          height: 800,
          description: 'Всё внутри затихало, будто готовясь к новой пустоте.',

        },
        {
          src: match1,
          alt: 'match1',
          width: 1200,
          height: 800,
          description: 'Здесь, в этой петле — времени не существовало. И это было лекарством. На короткое время.',

        },
        {
          src: match2,
          alt: 'match2',
          width: 1200,
          height: 800,
          description: 'И не оглянулась.',

        }
      ]
    },
    icon: dune5,
    requiredVisits: []
  },
];