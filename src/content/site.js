// Edit THIS file for all text on the one-page site.
// Anything in [brackets] is a fact to fill in.

export const site = {
  name: 'Piyamon Chuenpaew',
  eyebrow: 'Computer Engineering, Srinakharinwirot University, Class of 2027',
  // Hero title: two lines. The word inside {script} renders in the outlined script font.
  titleLine1: 'I design brands',
  titleLine2: 'and the {AI} that markets them.',
  year: '2026',
  bottomLabels: ['Brand building', 'AI marketing', 'Creator commerce', '3D and visual'],
  lede:
    'Computer engineering student who designs brands and builds the AI that does the marketing work. I built BrandCrew, a 7-agent AI marketing team, and used it to take a fashion-brand concept, The Tiny Bloom, from a one-page brief to positioning, pricing, budget and a 4-week content plan. Applying to the Shopee and Monee Graduate Development Program 2027.',
  ctaPrimary: { label: 'See the work', href: '#work' },
  ctaSecondary: null, // resume download removed on request
  stats: [
    { n: '7', t: 'AI agents built into one marketing team' },
    { n: '3', t: 'countries of AI programs: India, Japan, Malaysia' },
    { n: '257 THB', t: 'AI cost to produce one complete brand strategy pack' },
    { n: 'Lead', t: 'of a cross-university SDG AI team in Malaysia, in progress' },
  ],
  characterSrc: '/character.png', // transparent PNG, 2000px tall. Falls back to a placeholder if missing.
  // Optional: a .glb shown in the hero instead of the PNG (set to null to use the PNG). Your character .glb goes here later.
  heroModel: null, // null = no 3D object in the hero. Options: '/models/mascot.glb' (rotation [0,0,0], spin 'swing') or '/models/logo.glb' (rotation [Math.PI/2,0,0], spin true).
  heroModelRotation: [0, 0, 0],
  heroModelSpin: 'swing', // 'swing' = sways and keeps facing you (good for a character), true = full rotation (good for a logo)
  heroModelHide: [],
  // Decorative 3D object floating at the top-left of the hero (your yellow glass orbs). Set to null to fall back to nothing.
  decoModel: '/models/orbs.glb',
}

export const work = [
  {
    slug: 'brandcrew',
    label: 'AI x Marketing x Entrepreneurship',
    title: 'BrandCrew',
    one: 'A 7-agent AI marketing team I built, tested on a fashion-brand concept of my own: from brief to positioning, budget and content plan.',
    tags: ['Claude Agent SDK', 'FastAPI', 'React', 'three.js', 'Brand strategy', 'Budgeting'],
    cover: '/work/brandcrew-cover.jpg',
    status: 'Working prototype. Brand concept stage',
  },
  {
    slug: 'tictaxflow',
    label: 'Brand x Character x Motion',
    title: 'TicTaxFlow',
    one: 'Mascot and brand film for an AI tax agent: from pencil sketch to character sheet to a 35-second explainer.',
    tags: ['Character design', 'Brand identity', 'Motion graphics', 'AI video'],
    cover: '/work/tictax/cover.jpg',
    coverVideo: '/creative/tictax-mascot.mp4', // muted loop on the card; cover.jpg is the poster
    status: '[Month Year]',
  },
]

export const otherBuilds =
  'SilentVoice, real-time American Sign Language alphabet detection with speech output, presented at HTCON 2025 (MediaPipe pipeline, custom ML model). The Trio, a hotel staff-management web app with role-based access (UX/UI and database design, Nov 2024). PrecisionPGx, a pharmacogenomics prediction web app (backend in Next.js, led load testing with Locust, Oct 2025). Forecasting Global Inflation with Prophet (time-series pre-processing in Python, Dec 2025). Carefeine, a caffeine-intake recommendation app (UX/UI and graphic design). Pinyin Converter, an ML-powered Chinese-to-Pinyin API. A BeautifulSoup web-scraping and visualization project.'

export const international = [
  {
    country: 'India',
    title: 'Indo-Thailand Workshop on AI-Driven Innovations',
    where: 'IIT Gandhinagar, Gujarat, India. 24 to 28 March 2025.',
    body:
      'Received a scholarship to attend the five-day Indo-Thailand Workshop on AI-Driven Innovations, exploring AI applications across engineering disciplines through lectures and workshop sessions alongside researchers from IIT and students from Thailand and India.',
    photo: '/intl/india.jpg',
    link: { label: 'Watch the vlog', href: 'https://youtu.be/dtPujzeNN6A' },
  },
  {
    country: 'Japan',
    title: 'Short-term internship in image processing',
    where: 'University of Fukui, Japan. 22 June to 4 July 2026.',
    body:
      'Research internship at the Image Processing Laboratory on "Creating Panoramic Images by Eliminating Moving Objects": stitching a panorama so that people and cars passing through the frames disappear and only the static scene remains. Hands-on computer vision, Japanese lab culture, and friends I still talk to.',
    photo: '/intl/japan.jpg',
  },
  {
    country: 'Malaysia',
    title: 'AI for the Sustainable Development Goals',
    where: 'AIMS programme, Malaysia. Ongoing, final delivery 18 December 2026.',
    body:
      'Team lead of a cross-university team from International Islamic University Malaysia, Newcastle University, University of Leeds and Srinakharinwirot University, applying AI to a Sustainable Development Goal. I own the scope, the timeline and the communication between four universities in three time zones.',
    photo: '/intl/malaysia.jpg',
    status: 'In progress, due 18 Dec 2026',
  },
]

// type: 'image' | 'video' (muted loop) | 'youtube'
// label: 3D, Logo, Illustration, AI character, AI motion, UI, Video
export const creative = [
  // type 'glb' = interactive 3D (drag to rotate). heavy:true waits for a click before loading (use for files over ~2 MB).
  { label: '3D', type: 'glb', src: '/models/clock.glb', poster: '/creative/clock.jpg', caption: 'Clock tower building, modelled in Blender' },
  { label: '3D', type: 'glb', src: '/models/candle.glb', poster: '/creative/candle.jpg', caption: 'Candle with animated flame, Blender' },
  { label: '3D', type: 'glb', src: '/models/mascot.glb', poster: '/work/tictax/05-mascot.jpg', caption: 'TicTaxFlow mascot, 3D model from the character sheet (Meshy image-to-3D)' },
  { label: '3D', type: 'glb', src: '/models/swulogo.glb', poster: '/creative/swulogo.jpg', rotation: [Math.PI / 2, 0, 0], caption: 'SWU logo in 3D' },
  { label: '3D', type: 'glb', src: '/models/logo.glb', poster: '/creative/logo.jpg', rotation: [Math.PI / 2, 0, 0], caption: 'Srinakharinwirot University emblem, modelled in 3D' },
  // rotation: [x, y, z] in radians, applied before auto-rotate. hide: Blender object names to hide.
  // Flat ground planes / backdrops are hidden automatically; set hideGround: false on an item to keep them.
]

// Work experience: short, reverse chronological. Fill the SCG line.
export const experience = [
  { when: 'July to November 2026', org: 'SCG', role: 'Developed an AI chatbot for the Value Chain Improvement team to analyze financial statements across business units and products, managing end-to-end project development from gathering and clarifying user requirements to defining the project structure, developing the solution, testing, and deployment. Translated user needs into functional requirements to ensure alignment with business objectives. The chatbot provides automated YoY, MoM, and YTD comparisons, tables, and waterfall charts, reducing analysis time by approximately 96%, from 4 hours to 10 minutes per analysis, and freeing up FTE capacity for higher-value tasks.' },
  { when: 'June to July 2025', org: 'Ananda Development PCL', role: 'Contributed to the development of web applications in the IT department, focusing on backend services using C#, ASP.NET Core Web API, MediatR, the CQRS pattern, and dependency injection and Angular for frontend interfaces' },
  { when: 'March to June 2023, part-time', org: 'Independent insurance agent', role: 'Prepared client-facing insurance proposals in Excel (coverage comparison, premium and payout tables) and designed the presentation decks in Canva. My first taste of turning numbers into something a customer says yes to.' },
]

// Illustration section: several drawing projects, each with its own title, note and images.
// Add a project by copying one block. Image files live in /public/creative/<folder>/.
export const illustration = {
  title: 'Drawings',
  intro: 'Hand-drawn work, grouped by project.',
  projects: [
    {
      name: 'Chibi fan-art series',
      note: 'Nine characters, one style: flat color, soft blush, a different hair and accessory story for each.',
      // first item = cover. Reorder the numbers to change the cover or the order.
      items: [8, 1, 2, 3, 4, 5, 6, 7, 9].map((n) => ({ src: `/creative/stickers/${String(n).padStart(2, '0')}.jpg`, alt: `Chibi character ${n}` })),
    },
    {
      name: 'Star girl, original character',
      note: 'My own character: black curls, yellow stars, green sweater. Here on a train with a cat, a duck and a chick, and jumping through a field of ones and zeros.',
      wide: true, // landscape cover
      items: [
        { src: '/creative/scenes/01.jpg', alt: 'Star girl on the train' },
        { src: '/creative/scenes/02.jpg', alt: 'Star girl jumping among ones and zeros' },
      ],
    },
    {
      name: 'Two-point perspective study',
      note: 'A big-box store drawn in two-point perspective: vanishing lines, a sun behind the roofline, a paper plane for scale and mood.',
      wide: true,
      items: [{ src: '/creative/scenes/03.jpg', alt: 'Two-point perspective study of a store building' }],
    },
    {
      name: 'Illustration for application design',
      note: 'Asset set for a coffee and health app: top-down coffee cups, drink lineup, beans, and a cast of patient avatars showing conditions the app warns about. Drawn to read at icon size.',
      wide: true,
      items: [
        { src: '/creative/app/07.jpg', alt: 'Coffee person title card' },
        { src: '/creative/app/01.jpg', alt: 'Top-down coffee cups, seven drinks' },
        { src: '/creative/app/02.jpg', alt: 'Drink lineup: iced, espresso, latte art, cappuccino' },
        { src: '/creative/app/03.jpg', alt: 'Patient avatars with health conditions' },
        { src: '/creative/app/04.jpg', alt: 'Avatars in circles, set 1' },
        { src: '/creative/app/05.jpg', alt: 'Avatars in circles, set 2' },
        { src: '/creative/app/06.jpg', alt: 'Coffee beans, cups and warning badge' },
      ],
    },
    // {
    //   name: 'Original characters',
    //   note: 'Characters of my own design.',
    //   year: '2026',
    //   items: [
    //     { src: '/creative/original/01.jpg', alt: 'Character name' },
    //     { src: '/creative/original/02.jpg', alt: 'Character name' },
    //   ],
    // },
  ],
}

export const languages = [
  { name: 'Thai', lvl: 'Native' },
  { name: 'English', lvl: 'Professional working proficiency. TOEIC 790. Daily use in multinational teams in India, Japan and Malaysia.' },
  { name: 'Chinese', lvl: 'HSK 4 (268/300). Reading, writing and basic conversation.' },
]

export const contact = {
  line:
    'Open to the Shopee and Monee Graduate Development Program 2027 and to conversations about brand building, creator marketing and AI tools for small businesses.',
  email: 'piyamon.chuenpaew@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/piyamon-chuenpaew' },
    { label: 'GitHub', href: 'https://github.com/Piyamon-Bt' },
  ],
  footer: 'Piyamon Chuenpaew, 2026. Built with React, deployed on Vercel.',
}
