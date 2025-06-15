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
import blackRocks4 from './assets/Black rocks 4.png';
import stars from './assets/stars.jpg';
import dune5 from './assets/Dune5.png';
import beach from './assets/beach.jpg';
import match1 from './assets/match1.jpg';
import match2 from './assets/match2.jpg';
import senzilia3 from './assets/Senzilia3.jpg';
import senzilia2 from './assets/Senzilia 2.png';
import amiHouse from './assets/AmiHouse.png';
import amiHome from './assets/AmiHome.jpg';
import amiHome2 from './assets/AmiHome2.jpg';
import amiHome3 from './assets/AmiHome3.jpg';
import arcwood from './assets/arcwood.png';
import senzilia6 from './assets/Senzilia6.png';
import waterSenzilia from './assets/waterSenzilia.jpg';
import senzilia1 from './assets/Senzilia1.jpg';
import senzilia2photo from './assets/Senzilia2photo.jpg';
import prison from './assets/prison.png';
import jail1 from './assets/jail1.jpg';
import jail2 from './assets/jail2.jpg';
import jail3 from './assets/jail3.jpg';
import jail4 from './assets/jail4.jpg';
import jail5 from './assets/jail5.jpg';
import ship from './assets/ship.jpg';
import waters from './assets/waters.png';
import mlechny from './assets/mlechny.jpg';
import plemyWater from './assets/plemyWater.jpg';
import hoshka from './assets/hoshka.png';


export const markers: MarkerData[] = [
  {
    id: 'khorn1',
    title: 'Кхорн',
    position: [26, 111],
    iconSize: [170, 95],
    type: 'mixed',
    content: {
      type: 'mixed',
      types: ['text', 'photo'],
      contents: [
        {
          type: 'text',
          paragraphs: [
            "Рыбак\nЯ ловлю этих мелких, скользких существ, а потом их жарят наверху. Мне остаётся запах — и соль на пальцах. Иногда я думаю: может, я тоже рыба. Пойманный, разделанный, поданный в нужный час. Но потом вспоминаю: я ещё жив. А я ведь не живу, я просто еще не умер."
          ],
        },
        {
          type: 'photo',
          images: [
            {
              src: Ami1,
              alt: 'Ami1',
              width: 1200,
              height: 800,
              description: 'Меня всё больше и больше занимали мысли о чём-то другом, отстранённом от всего этого…',
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
        }
      ]
    },
    icon: khorn1,
    requiredVisits: ['khorn3', 'khorn2']
  },
  {
    id: 'khorn2',
    title: 'Кхорн',
    position: [68, 137],
    iconSize: [108, 65],
    type: 'text',
    content: {
      type: 'text',
      paragraphs: [
        "Чиновник\nПорядок — это не зло. Это необходимость. Если мы не будем следить за течением, всё утонет. Да, снизу трудно видеть перспективу. Но мы здесь, наверху, не потому что выше. А потому что несём груз"
      ]
    },
    icon: khorn2,
    requiredVisits: []
  },
  {
    id: 'khorn3',
    title: 'Кхорн',
    position: [40, 145],
    iconSize: [91, 51],
    type: 'text',
    content: {
      type: 'text',
      paragraphs: [
        "Торговец\nЖить между этажей — значит уметь лавировать. Слушать, кланяться, не думать. На вершине гнилое золото, внизу — гниль без золота. А я между ними, как сандалия в болоте: всё ещё сухая, но уже тонет."
      ]
    },
    icon: khorn3,
    requiredVisits: ['khorn2']
  },
  {
    id: 'bridge',
    title: 'Мост',
    position: [61, 187],
    iconSize: [108, 59],
    type: 'text',
    content: {
      type: 'text',
      paragraphs: [
        'Замерла у основания моста',
        'Я стою на краю. Позади — город, где всё знакомо и невыносимо. Впереди — мост, куда не ступала раньше. Ноги дрожат. Не от страха. От того, что я всё ещё здесь…',
        'Делает первый шаг',
        'Что, если ничего не изменится? Если с другой стороны — те же улицы, те же взгляды? Но я всё равно сделаю шаг. Потому что хуже, чем остаться, быть не может.',
        'Остановилась посреди моста',
        'Ветер срывает капюшон. Я слышу, как город шепчет за спиной. "Ты вернёшься. Все возвращаются." А я молчу. Потому что не уверена, что не вернусь. Я помню, как в детстве я бросала камни в воду и загадывала желания. И ни одно не сбылось. Но может быть, всё дело в том, что я загадывала — оставаться.',
        'Подходит к концу моста',
        'Хочется развернуться. Но это не голос разума — это голос клеток, приученных к страху. Страх — не враг. Он просто просит остаться живой. Но я хочу начать жить по-другому. Я вижу вершины деревьев. Это не город. Там нет криков, нет лестниц. Только дыхание земли. Не рай. Но и не Кхорн…'
      ]
    },
    icon: Bridge,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1']
  },
  {
    id: 'illumina2',
    title: 'Берега Иллюмины',
    position: [74, 267],
    type: 'video',
    content: {
      type: 'video',
      description: ', но наклонясь к голове девушки, он лишь дотронулся языком до её носа…',
      videoUrl: illumina2_video,
      thumbnail: illumina2
    },
    icon: illumina2,
    iconSize: [90, 49],
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge']
  },
  {
    id: 'arcwood',
    title: 'Арквуд',
    position: [47, 339],
    iconSize: [113, 63],
    type: 'text',
    icon: arcwood,
    content: {
      type: 'text',
      paragraphs: [
        "Деревня Арквуд, поздний вечер. Костёр потрескивает. Керн сидит у огня, рядом — копчёная рыба, жестяная кружка с настоем и потрёпанная кожаная книга. Ами садится напротив.",
        "",
        "Керн (не поднимая глаз):\n Ты идёшь завтра дальше, да?",
        "Ами (медленно кивает, глядя на огонь):\n Да. Мне нужно идти. Здесь слишком спокойно.\n А у меня ещё далеко не всё внутри пришло в движение.",
        "Керн (кивает, задумчиво покручивая чашу в ладонях):\n Я знал. Ты не из тех, кто остаётся. Ты будто ветка, что легла на реку. Не тонешь, но и не плывёшь по воле других. Только вперёд, по-своему.",
        "Ами (улыбается):\n Ты тоже такой был?",
        "Керн (вздыхает):\n Когда-то. Пока однажды не оступился. И не решил, что лучше остаться в месте, которое хоть и не зовёт, но и не требует. Так и стал частью этих лесов.",
        "",
        "Пауза. Тишина. Только потрескивание огня и далёкий ночной крик птицы.",
        "Ами:\n Мне жаль, что мы не встретимся снова.\n С тобой тихо, как в глубоком колодце, где вода знает всё, что случилось до тебя и после.",
        "Керн (смотрит на неё впервые за вечер, долго):\n Это ты — особенная. Не из-за силы. Из-за чуткости. Ты слышишь, когда лес говорит. Когда зверь молчит, но кричит глазами. Когда человек — это не просто тело, а история.",
        "",
        "Он протягивает ей книгу — потрёпанную, толстую, в кожаном переплёте, с запахом мха и дыма.",
        "",
        "Керн: Возьми. Я писал её всю жизнь, рассказал о всём зверинце, что видел вживую. Сначала — чтобы помнить. Потом — чтобы понять. Теперь — чтобы кто-то другой услышал этих существ так же, как я когда-то.",
        "Ами (берёт книгу осторожно):\n Это самое ценное, что у тебя есть.",
        "Керн (кивает):\n Вот поэтому и дарю. Не потому что ты — гостья. А потому что ты — та, кто сохранит. И, может, допишет.",
        "",
        "Пауза. Они оба смотрят в огонь.",
        "Ами (тихо):\n Спасибо. Я… не знаю, куда именно иду.\n Но ты — останешься со мной.\n Этой книгой. Этим вечером.",
        "Керн (тихо, почти шёпотом):\n А ты — со мной. Я запомню, как ты смотрела на ночь. Не как на тьму. А как на возможность.",
        "",
        "Она встаёт. Книга прижата к груди. Костёр трещит. Ветер приносит запах леса.",
        "",
        "Керн:\n Береги себя, Ами. Лес — не всегда ласков. Но ты умеешь слушать.",
        "Ами:\n А ты — умеешь молчать так, что из этого рождаются смыслы.\n Прощай, Керн.",
        "Керн (кивает, снова опуская взгляд к огню):\n Прощай, пусть твой путь будет странным. Это самое лучшее, что может быть."
      ]
    },
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2'],
  },
  {
    id: 'blackRocks1',
    title: 'У подножия Чёрных скал',
    position: [119, 287],
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
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood']
  },
  {
    id: 'blackRocks4',
    title: 'Чёрные скалы',
    position: [147, 267],
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
          description: 'Теперь Кхорн внутри меня смеётся. Мол, я предупреждал…',

        }
      ]
    },
    icon: blackRocks4,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1']
  },
  {
    id: 'dune5',
    title: 'Дюна Забвения',
    position: [130, 429],
    iconSize: [124, 70],
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
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4']
  },
  {
    id: 'senzilia6',
    title: 'Сензилия',
    position: [225, 514],
    iconSize: [116, 63],
    type: 'mixed',
    content: {
      type: 'mixed',
      types: ['photo', 'text', 'photo'],
      contents: [
        {
          type: 'photo',
          images: [
            {
              src: waterSenzilia,
              alt: 'waterSenzilia',
              width: 800,
              height: 600,
              description: 'И вся жизнь — это пальцы времени, лепящие тебя снова и снова.',
            },
          ],
        },
        {
          type: 'text',
          paragraphs: [
            "Центральная площадь с фонтаном",
            "",
            "Вода льётся тихо, почти шепчет. Вокруг неё сидят люди и слушают. Никто не говорит. Они просто чувствуют. Мне хочется тоже закрыть глаза и раствориться. Но что-то внутри — как заноза. Я чувствую тревогу, и не знаю почему.",
            "\n",
            "Мост через цветущую реку",
            "",
            "Мост переливается цветами, как дыхание живого существа. Ни один лепесток не повторяется. Ни один взгляд не осуждает. Но мои шаги кажутся чужими здесь. Как будто я иду по чужому сну.",
            "\n",
            "Открытая мастерская художников",
            "",
            "Краски здесь не просто цвета. Это — эмоции. Один мужчина рисует боль, женщина — первую любовь. Ребёнок рисует пустоту — и улыбается.\nЯ спрашиваю: «Что ты нарисовал?» Он отвечает: «Тебя.»",
            "\n",
            "Аллея воспоминаний",
            "",
            "На каждом дереве — символ. Маленькие амулеты, письма, обрывки. Люди приносят сюда то, что боятся забыть. Может, я тоже боюсь забыть себя? Или боюсь, что забудут меня…",
            "\n",
            "Улица запахов",
            "",
            "Лавки, усыпанные травами. Сладкая выпечка. Ладан. Цветочные масла. Всё пахнет безопасностью. Но внутри меня — запах гари. Я стараюсь не дышать глубоко.",
          ]
        },
        {
          type: 'photo',
          images: [
            {
              src: senzilia1,
              alt: 'senzilia1',
              width: 800,
              height: 600,
              description: 'И чувства не ушли, они разрослись, отяжелели и стали густыми.',
            },
            {
              src: senzilia2photo,
              alt: 'senzilia2',
              width: 800,
              height: 600,
              description: 'Но всё чаще — не изнутри, а потому что так было принято.',
            },
          ],
        },
      ]
    },
    icon: senzilia6,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5'],
  },
  {
    id: 'senzilia2',
    title: 'Сензилия',
    position: [209, 582],
    iconSize: [123, 66],
    type: 'mixed',
    content: {
      type: 'mixed',
      types: ['photo', 'dialog'],
      contents: [
        {
          type: 'photo',
          images: [
            {
              src: senzilia3,
              alt: 'Senzilia3',
              width: 800,
              height: 600,
              description: 'Положила его на камень у дороги. И ушла.',
            },
          ],
        },
        {
          type: 'dialog',
          start: 'intro',
          nodes: [
            {
              id: 'intro',
              text: 'Именно там на лесной дороге, где не растут указатели и не живут звери, я впервые почувствовала — кто-то рядом. Не шаги. Не взгляд. Что-то другое. Она сидела у дерева, как будто ждала.',
              options: [
                {
                  text: 'Молча присесть рядом.',
                  nextId: 'resp1'
                },
                {
                  text: 'Спросить: «Ты потерялась?»',
                  nextId: 'resp2'
                },
                {
                  text: 'Сказать: «Здесь опасно быть одной.»',
                  nextId: 'resp3'
                }
              ]
            },
            {
              id: 'resp1',
              text: 'Девочка не смотрит. Только рисует круг.\n— Ты долго шла.',
              options: [{ text: 'Продолжить', nextId: 'start' }] // Переход к основному диалогу, например
            },
            {
              id: 'resp2',
              text: 'Девочка пожимает плечами.\n— Я просто осталась. Все остальные ушли.',
              options: [{ text: 'Продолжить', nextId: 'start' }]
            },
            {
              id: 'resp3',
              text: '— Здесь меньше опасно, чем там, где шумно.',
              options: [{ text: 'Продолжить', nextId: 'start' }]
            },

            {
              id: 'start',
              text: 'Девочка: Ты странно смотришь. Как будто узнаешь меня.',
              options: [
                { text: 'Ты напоминаешь кого-то, но не могу понять кого.', nextId: 'q1' },
                { text: 'Твои глаза… они будто из сна.', nextId: 'q1' },
                { text: 'Нет. Просто — ты одна, как и я.', nextId: 'q1' }
              ]
            },
            {
              id: 'q1',
              text: 'Девочка: Ты всегда так быстро уходишь?',
              options: [
                { text: 'Я просто ищу место, где останусь.', nextId: 'final' },
                { text: 'Иногда. Но сейчас — нет.', nextId: 'q2' },
                { text: 'А ты хочешь, чтобы я осталась?', nextId: 'q3' }
              ]
            },
            {
              id: 'q2',
              text: 'Девочка: А от чего ты убегаешь?',
              options: [
                { text: 'Пока сама не поняла.', nextId: 'final' },
                { text: 'Мне не хочется об этом говорить сейчас…', nextId: 'final' },
                { text: 'От себя другой.', nextId: 'final' }
              ]
            },
            {
              id: 'q3',
              text: 'Девочка: Ты когда-нибудь бросала что-то важное?',
              options: [
                { text: 'Наверное. Только я об этом потом жалею.', nextId: 'final' },
                { text: 'А ты?', nextId: 'final' },
                { text: 'Не помню. Я давно перестала считать.', nextId: 'final' }
              ]
            },
            {
              id: 'final',
              text: 'Девочка: Если бы я пошла с тобой… ты бы не бросила меня?',
              options: [
                { text: 'Я не знаю. Но сейчас — нет.', nextId: 'ending' },
                { text: 'Я сама не уверена, куда иду.', nextId: 'ending' },
                { text: 'Ты ведь не настоящая…', nextId: 'ending' }
              ]
            },
            {
              id: 'ending',
              text: 'Они шли долго. Девочка не спрашивала куда. Ами не давала ответов. Они просто шли — будто следуя внутренней интуиции, без карт, без планов, с тёплым ощущением, что нужное место само найдёт их, как находят семя плодородную почву.',
              options: []
            }
          ]
        },
      ],
    },
    icon: senzilia2,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5', 'senzilia6'],
  },
  {
    id: 'amiHome',
    title: 'Убежище Ами',
    position: [120, 636],
    iconSize: [82, 43],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: amiHome,
          alt: 'amiHome',
          width: 1200,
          height: 800,
          description: 'А теперь лес учит меня понимать, не спрашивать и не объяснять, просто быть.',

        },
        {
          src: amiHome2,
          alt: 'amiHome2',
          width: 1200,
          height: 800,
          description: '…и в эти мгновения тишины всё кажется совершенным…',

        },
        {
          src: amiHome3,
          alt: 'amiHome3',
          width: 1200,
          height: 800,
          description: '…как воспоминание, к которому нельзя вернуться, но которое всегда будет жить внутри, в рассветах, в закатах и в темноте.',

        }
      ]
    },
    icon: amiHouse,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5', 'senzilia6', 'senzilia2']
  },
  {
    id: 'prison',
    title: 'Каторн',
    position: [316, 503],
    iconSize: [132, 77],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: ship,
          alt: 'ship',
          width: 1200,
          height: 800,
          description: 'Она смотрела в никуда, ничего не чувствовала и ощущала себя никем…',

        },
        {
          src: jail1,
          alt: 'jail1',
          width: 1200,
          height: 800,
          description: 'Или тоже - сон, созданный, чтобы спасти меня от чего-то страшного внутри?',

        },
        {
          src: jail2,
          alt: 'jail2',
          width: 1200,
          height: 800,
          description: 'Вонзались в кожу, проходили через сердце, выходили сквозь глаза.',

        },
        {
          src: jail3,
          alt: 'jail3',
          width: 1200,
          height: 800,
          description: 'Но она знала: легенды здесь не выживают.',

        },
        {
          src: jail4,
          alt: 'jail4',
          width: 1200,
          height: 800,
          description: 'И пока что — этого было достаточно. Пока что.',

        },
        {
          src: jail5,
          alt: 'jail5',
          width: 1200,
          height: 800,
          description: 'Море было чёрным, как её мысли. Но оно двигалось. И она тоже. Одна.',

        },
      ]
    },
    icon: prison,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5', 'senzilia6', 'senzilia2', 'amiHome']
  },
  {
    id: 'waters',
    title: 'Каторн',
    position: [368, 350],
    iconSize: [167, 96],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: mlechny,
          alt: 'mlechny',
          width: 1200,
          height: 800,
          description: 'И это был знак: ночь — уходит. Ами гребла. И море вело её.',

        },
        {
          src: plemyWater,
          alt: 'plemy water',
          width: 1200,
          height: 800,
          description: 'Ты многое несёшь. Много мёртвого. Мы берём не вещи, а то, что оставляют.',

        }
      ]
    },
    icon: waters,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5', 'senzilia6', 'senzilia2', 'amiHome', 'prison']
  },
  {
    id: 'hoshka',
    title: 'Хошка',
    position: [276, 75],
    iconSize: [182, 104],
    type: 'photo',
    content: {
      type: 'photo',
      images: [
        {
          src: mlechny,
          alt: 'mlechny',
          width: 1200,
          height: 800,
          description: 'И это был знак: ночь — уходит. Ами гребла. И море вело её.',

        }
      ]
    },
    icon: hoshka,
    requiredVisits: ['khorn3', 'khorn2', 'khorn1', 'bridge', 'illumina2', 'arcwood', 'blackRocks1', 'blackRocks4', 'dune5', 'senzilia6', 'senzilia2', 'amiHome', 'prison', 'waters']
  },
];