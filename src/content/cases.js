// Case pages. Each section: { id, h, blocks: [ {p}, {ul:[]}, {ol:[]}, {media, alt}, {callout}, {sources:[{label,href}]} ] }

export const cases = {
  brandcrew: {
    title: 'BrandCrew',
    one: 'A 7-agent AI marketing team I built, and tested end to end on a fashion-brand concept of my own, \nThe Tiny Bloom.',
    facts: [
      ['Role', 'Brand Concept Creator, Developer'],
      ['Status', 'Working prototype, runs locally.\nThe Tiny Bloom is a concept used to test it; launch is a plan, not a promise'],
      ['Stack', 'Python FastAPI, SQLite, Claude Agent SDK, React, three.js'],
    ],
    hero: { type: 'video', src: '/work/brandcrew-demo.mp4', poster: '/work/brandcrew-office.jpg', controls: true }, // 3 min silent screen recording, 6.5 MB
    sections: [
      {
        id: 'problem', h: 'The problem', blocks: [
          { p: 'I had a fashion-brand idea, The Tiny Bloom: embroidered-floral pieces with a "winter look you can wear in Thai heat," sold to Thai customers through Facebook, Instagram and TikTok, closing in IG DMs and LINE OA. I had not built a brand before, and I wanted to see how far a well-designed AI team could take the planning before a single baht was spent.' },
          { p: 'A first collection needs a positioning, a price, a cost model, a sourcing plan, a 4-week content plan and a KOL seeding list. Done alone, that is weeks of work before a single post goes out. Hiring an agency was out of budget: the whole launch budget is 20,000 baht.' },
        ]
      },
      {
        id: 'built', h: 'What I built', blocks: [
          { p: 'BrandCrew is a team of seven AI agents, each with a marketing role, coordinated by a CMO agent that takes my brief, splits the work, routes it, and merges the results.' },
          {
            team: [
              { img: '/work/brandcrew/agent-01.jpg', color: '#E8623A', role: 'CMO', title: 'Chief Marketing Officer', text: 'Team lead. Takes the founder\'s brief, breaks it into tasks, hands them to the team, and combines the results into one proposal.' },
              { img: '/work/brandcrew/agent-02.jpg', color: '#2F6BD6', role: 'Research', title: 'Trend and Market Researcher', text: 'Researches Thai competitor brands, trends, price ranges and gaps in the market, using a capped number of web searches.' },
              { img: '/work/brandcrew/agent-03.jpg', color: '#2E8B7A', role: 'Sourcing', title: 'Sourcing', text: 'Finds fabric suppliers, trims and small garment factories in Thailand, with contact channels, MOQs and prices.' },
              { img: '/work/brandcrew/agent-04.jpg', color: '#E0A82E', role: 'Finance', title: 'Costing and Budget', text: 'Works out cost per piece, selling price, margin and break-even, and proposes how to split the budget. Numbers come from code, not the AI, and export to Excel.' },
              { img: '/work/brandcrew/agent-05.jpg', color: '#7A4FC9', role: 'Brand', title: 'Brand Strategist', text: 'Builds brand positioning, naming, tone of voice, brand story and moodboard prompts.' },
              { img: '/work/brandcrew/agent-06.jpg', color: '#D94C9C', role: 'Content', title: 'Content Creator', text: 'Plans 4 weeks of pre-launch content, plus TikTok scripts, captions and image prompts.' },
              { img: '/work/brandcrew/agent-07.jpg', color: '#3E9B4F', role: 'KOL Scout', title: 'KOL Scout', text: 'Finds micro and nano influencers, plans product seeding, and drafts outreach messages for the founder to send.' },
            ]
          },
          { credit: 'Character reference: the mouse mascots take their proportions and clay-toy finish from a reference piece in the ', link: { label: 'nuanque.com mascot gallery', href: 'https://www.nuanque.com/gallery/mascot/92016.html' }, after: '. The seven color variants, poses, props and rooms are my own.' },
          { media: '/work/brandcrew-office.jpg', alt: 'The 3D office: each agent has a room, and its mascot moves according to its real state' },
          { p: 'The main workflow, the Brand Strategy Pack:' },
          {
            ol: [
              'I fill in a brief.',
              'The CMO plans.',
              'Researcher and Sourcing run in parallel.',
              'Costing finds the price range that is actually profitable.',
              'Brand Strategist proposes three positionings. I pick one. It is saved to the Brand Bible.',
              'Content Creator and KOL Scout run in parallel. I approve or send back.',
            ]
          },
        ]
      },
      {
        id: 'rules', h: 'Rules I designed in from day one', blocks: [
          {
            ul: [
              'Agents think and propose. Every output waits for my approval.',
              'Agents never contact anyone, never spend money, never post.',
              'Agents review each other\'s work for up to two rounds, then escalate to me.',
              'Each agent\'s model (Opus, Sonnet, Haiku) is switchable from the UI, so cost is a dial, not a surprise.',
            ]
          },
          { p: 'The interface has nine tabs. The ones that matter most: a live Dashboard with team status, AI spend and timeline; a 3D office where each agent\'s mascot moves based on its real state (working, in a meeting, waiting for approval, resting); Work Cards where every deliverable can be approved, revised with comments, or discarded; a Budget tab that tracks the 20,000 baht through four stages (total, planned split, committed, actually paid) with a 10 to 15 percent reserve; and the Brand Bible, a shared document every agent reads before working and that only changes with my approval.' },
        ]
      },
      {
        id: 'results', h: 'What it has produced so far', blocks: [
          {
            ul: [
              'The brand name The Tiny Bloom and a chosen positioning, "warm-cool," priced at 990 baht for customers aged 25 to 40.',
              'A Brand Bible and a launch budget plan, "test the market first," within 20,000 baht.',
              'A complete 4-week content plan, now in my approval queue.',
              'One full Brand Strategy Pack costs about 257 baht in AI usage. Most of that is the CMO running on Opus.',
            ]
          },
        ]
      },
      {
        id: 'limits', h: 'What it cannot do yet', blocks: [
          { callout: 'KOL names are not verified: the agent can only web-search and cannot open real IG or TikTok profiles, so I shortlist by hand. Material costs are mostly assumptions: real quotes are required before any money moves. No image generation: agents write prompts, I generate images myself. No ads, no Meta or TikTok integration: posting is still a human job, on purpose.' },
        ]
      },
      {
        id: 'learned', h: 'What I learned', blocks: [
          { p: 'Building the tool taught me more marketing than any course: that positioning is a decision, not an output; that a content calendar is only as good as the brand rules behind it; and that the most important feature in an AI marketing system is the approval button.' },
          { p: 'The system is designed to grow in phases: Marketing (with Sourcing and Costing) first, then Operations, Product Management, Sales and Business Intelligence. Whether The Tiny Bloom launches depends on the real quotes and the test-market plan the agents produced. What is real today is the tool, and what it produced.' },
        ]
      },
    ],
  },

  shopee: {
    title: 'How Shopee Thailand turns a date into a national shopping day',
    one: 'A marketing teardown of the 9.9 and 11.11 playbook, and two things a small brand should copy.',
    facts: [
      ['Type', 'Independent analysis from public sources'],
      ['Written', 'October 2026'],
      ['Scope', 'Shopee Thailand, 2024 to 2025 campaigns'],
    ],
    hero: { type: 'image', src: '/work/shopee-cover.jpg' },
    sections: [
      {
        id: 'why', h: 'Why I looked at this', blocks: [
          { p: 'I am launching a small fashion label and building an AI marketing team to plan it. Every Thai seller eventually asks the same question: should I be on Shopee, and if so, how do the big campaign days actually work? I wanted to understand the machine before deciding how to use it.' },
        ]
      },
      {
        id: 'answer', h: 'The one-line answer', blocks: [
          { callout: 'Shopee\'s double-date campaigns are not discounts. They are a scheduled, platform-wide attention event that bundles four levers at once: price urgency (vouchers, flash sales, free shipping), live commerce (Shopee Live), short video (Shopee Video), and a creator army paid on commission (Shopee Affiliate). Sellers who plug into all four see order spikes measured in multiples, not percentages.' },
        ]
      },
      {
        id: 'numbers', h: 'What the numbers say (9.9 2025)', blocks: [
          {
            ul: [
              'Over 1 million orders in under 30 minutes on 9 September 2025, Shopee Thailand\'s 10th anniversary campaign.',
              'Up to 2 billion baht of discount codes offered across Shopee and ShopeeFood that day.',
              'Orders using free-shipping and fast-shipping codes rose about 13 times.',
              'Local seller orders rose more than 9 times versus a normal day. A first-time campaign seller saw orders rise more than 42 times.',
              'Shopee Live and Shopee Video together drew more than 300 million views. Live sellers sold more than 100,000 items within one minute.',
              'A local jewelry shop grew sales about 800 times through Shopee Affiliate creators.',
              'Year on year (Shopee Summit, Nov 2025): Affiliate KOL content-driven sales up more than 70 percent, Live orders up more than 65 percent, Video sales up more than 400 percent.',
            ]
          },
        ]
      },
      {
        id: 'levers', h: 'How the machine works, lever by lever', blocks: [
          {
            ol: [
              'Price urgency is the hook, not the strategy. Shop vouchers, minimum-spend vouchers, follow vouchers and collect-voucher mechanics all exist to raise basket size and repeat visits. Flash sales usually require at least 10 to 20 percent off and slots must be submitted 2 to 4 weeks before a mega campaign. Free shipping remains the single biggest conversion driver.',
              'Live is the conversion room. Shopee Live works best 2 to 3 times a week in the 19:00 to 22:00 window, with live-only deals. On campaign day it compresses a week of selling into minutes.',
              'Video is the discovery engine and the fastest-growing lever, up more than 400 percent year on year. Short video is where a new brand gets seen by people who were not searching for it.',
              'Creators are the distribution layer. Shopee Affiliate pays on commission, so the platform gets a national salesforce at zero fixed cost. Shopee now matchmakes sellers with KOLs and has plugged YouTube and Meta into the program. Thailand has an estimated 9 million content creators; supply is not the constraint, finding the right 20 is.',
              'Operations are a marketing lever too. A 25-minute delivery record, same-day and 4-hour delivery expansion, and Preferred Seller thresholds (chat response 90 percent or more, on-time shipping 95 percent or more, cancellations 2 percent or less, rating 4.5 or higher) all feed visibility. Shopee\'s 2026 fashion plan is explicitly continuous new collections with brands and KOLs, plus express delivery.',
            ]
          },
        ]
      },
      {
        id: 'small', h: 'What this means for a small fashion brand', blocks: [
          { p: 'A 990-baht embroidered-fashion label like the one I am building does not win on voucher depth. It cannot. It wins on the two levers where a small brand has an unfair advantage: a founder who can go live with a story, and a product that creators actually want to wear on camera.' },
        ]
      },
      {
        id: 'recs', h: 'Two recommendations', blocks: [
          { p: '1. Treat campaign days as a content calendar, not a discount calendar. Work backwards from 9.9, 10.10, 11.11 and 12.12. Four weeks out, seed 10 to 20 nano and micro creators on Affiliate with the campaign piece. Two weeks out, submit flash-sale slots for one hero item only. Campaign week, go live every night 19:00 to 22:00 with a live-only bundle. The discount is the smallest part of the plan. The content is the plan. This is exactly the structure BrandCrew\'s Content Creator and KOL Scout agents now produce, and this analysis is why they are built that way.' },
          { p: '2. For Shopee itself: give small fashion sellers a Campaign Kit that bundles the four levers into one workflow. Today a seller sets vouchers, flash-sale slots, Live schedule and Affiliate commission in four different places. A single guided flow ("you are joining 11.11 as a fashion seller, here is your 4-week plan, your creator shortlist, your live slots and your voucher set, approve each step") would move thousands of small sellers from using one lever to using all four. The 400 percent Video growth and the new KOL matchmaking program say Shopee already knows the levers compound. The kit makes the compounding the default.' },
        ]
      },
      {
        id: 'measure', h: 'What I would measure', blocks: [
          { p: 'Per campaign, per seller: share of GMV from Live, Video and Affiliate versus search; creators activated; live hours; voucher cost as a percent of GMV; new buyers acquired. The goal is not the biggest spike. It is the highest share of campaign GMV coming from content rather than discount, because that share is what survives after the campaign ends.' },
        ]
      },
      {
        id: 'limits', h: 'Limits of this analysis', blocks: [
          { p: 'All figures are Shopee\'s own press numbers, which highlight best cases rather than medians. I have not seen seller-level data. Commission rates, ad costs and Affiliate payout tiers vary by category and were not available in detail. Treat the multiples as directional.' },
          {
            sources: [
              { label: 'THE STANDARD, 17 Sep 2025: Shopee 9.9 passes one million orders in 30 minutes', href: 'https://thestandard.co/shopee-9-9-million-first-30-mins/' },
              { label: 'Marketing Oops, Sep 2025: Shopee 9.9 discounts and local seller growth', href: 'https://www.marketingoops.com/pr-news/shopee-9-9-2/' },
              { label: 'THE STANDARD, 11 Sep 2024: Shopee 9.9 Live, Video and Affiliate results', href: 'https://thestandard.co/shopee-9-9-record-breaking-sales/' },
              { label: 'Techoffside, 14 Nov 2025: Shopee Summit 2025, 10 years in Thailand', href: 'https://www.techoffside.com/2025/11/shopee-10-years-digital-bridge-thailand/' },
              { label: 'Sphere Agency: Shopee Seller Guide Thailand 2026', href: 'https://sphereagency.com/articles/shopee-seller-guide-thailand' },
            ]
          },
        ]
      },
    ],
  },

  tictaxflow: {
    title: 'TicTaxFlow',
    one: 'Brand identity, mascot and product explainer for an AI agent that handles personal tax deductions, from a pencil sketch to a finished film.',
    facts: [
      ['Role', 'Character Designer & Motion Graphics Designer'],
      ['Type', 'Startup Competition'],
      ['When', 'September 2026'],
      ['Tools', 'ChatGPT, Kling, Claude'],
    ],
    hero: { type: 'video', src: '/creative/tictax-explainer.mp4', poster: '/work/tictax/06-explainer.jpg', controls: true },
    sections: [
      {
        id: 'brief', h: 'The brief', blocks: [
          { p: 'TicTaxFlow is an AI agent for personal tax deductions: you hand it your receipts and documents, it finds the deductions and prepares the summary. Tax is dry and slightly scary, so the brand needed to feel the opposite: warm, quick and a little playful. The one-word brief for the mascot was "monkey".' },
        ]
      },
      {
        id: 'process', h: 'How the mascot was designed', blocks: [
          { p: 'I like to show the whole path, not just the final render, because the decisions are the work.' },
          {
            steps: [
              { img: '/work/tictax/01-sketch.jpg', title: '1. Pencil first', text: 'Front, side and back on lined paper. The silhouette was decided here: a rounded cone body, oversized ears, a curled tail. Everything after this is execution.' },
              { img: '/work/tictax/02-reference.jpg', title: '2. Reference', text: 'A simple red face with a white mask shape and blush dots. I borrowed the readability of the face, not the character.' },
              { img: '/work/tictax/03-logo.jpg', title: '3. Brand colors from the logo', text: 'The TicTaxFlow mark set the palette: violet to pink to orange, with warm yellow as the accent. The mascot had to live inside it.' },
              { img: '/work/tictax/04-character-sheet.jpg', title: '4. 3D character sheet', text: 'Six orthographic views, a 360 turnaround, detail crops and the five swatches (#8B5CF6, #F647A4, #FFBA3D, #FFD166, #FFEBD5). This is the handoff document: anyone can animate or print the character consistently from it.' },
              { model: '/models/mascot.glb', poster: '/work/tictax/05-mascot.jpg', title: '5. From sheet to 3D model', text: 'The character sheet was turned into a textured 3D model (Meshy image-to-3D), then cleaned up and compressed for the web. Drag to rotate: this is the same model floating on the home page.' },
              { img: '/work/tictax/05-mascot.jpg', title: '6. Bring it to life', text: 'A 5-second AI-generated animation (Kling) from the sheet, used as the logo reveal.' },
              { img: '/work/tictax/06-explainer.jpg', title: '7. The explainer', text: 'A 35-second product film with voiceover: upload receipts, the agent reads and classifies them, a chat summary of the deductions, done. The mascot opens and closes it.' },
            ]
          },
        ]
      },
      {
        id: 'decisions', h: 'Decisions worth noting', blocks: [
          {
            ul: [
              'Why a monkey that reads as a mouse: the brief said monkey, the test audience said "cute mouse". I kept the ambiguity. Recognition beats zoological accuracy for a mascot.',
              'Why gradient skin: the logo is a gradient; a flat-colored mascot looked like it belonged to a different brand.',
              'Why a character sheet before animating: AI video tools drift. A strict sheet gave the generator something to stay faithful to, and it shows HR and clients that the character is production-ready, not a one-off image.',
            ]
          },
        ]
      },
      {
        id: 'learned', h: 'What I learned', blocks: [
          { p: 'A mascot is a marketing system, not a drawing: sketch, reference, palette, sheet, motion and film all have to agree. [Add one sentence about the outcome: where it was shown, feedback, or results.]' },
        ]
      },
    ],
  },

  silentvoice: {
    title: 'SilentVoice',
    one: 'Real-time American Sign Language alphabet detection with speech output.',
    facts: [
      ['Role', 'Data pipeline, model training, real-time detection'],
      ['Presented', 'HTCON 2025, KMUTNB, November 2025'],
      ['Stack', 'Python, MediaPipe, custom ML classifier, text-to-speech'],
    ],
    hero: { type: 'video', src: '/work/silentvoice-demo.mp4' },
    sections: [
      {
        id: 'problem', h: 'The problem', blocks: [
          { p: 'Fingerspelling is how ASL users spell names and words that have no sign. A hearing person who does not know ASL cannot read it. I wanted a tool that watches a hand and speaks the letter.' },
        ]
      },
      {
        id: 'built', h: 'What I built', blocks: [
          { p: 'A machine-learning program that detects ASL alphabet letters from a webcam in real time and reads them out with text-to-speech. I built the data pre-processing pipeline on MediaPipe hand landmarks, trained a custom classification model, and implemented live detection.' },
          { media: '/work/silentvoice-htcon.jpg', alt: 'Presenting at HTCON 2025' },
        ]
      },
      {
        id: 'went', h: 'Where it went', blocks: [
          { p: 'I delivered an oral presentation on this work at HTCON 2025 at King Mongkut\'s University of Technology North Bangkok, framed as healthcare-focused accessible communication.' },
          { p: 'It is the project that taught me to present technical work to a non-technical room: one problem, one demo, one takeaway.' },
        ]
      },
    ],
  },
}
