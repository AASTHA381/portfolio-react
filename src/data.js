const RAW = 'https://raw.githubusercontent.com/AASTHA381'

export const LINKEDIN = 'https://www.linkedin.com/in/aastha-saini03/'
export const EMAIL = '381aastha@gmail.com'
export const GITHUB = 'https://github.com/AASTHA381'
export const RESUME = 'https://aastha381.github.io/portfolio/resume/Aastha-Saini-Resume.pdf'

export const capabilities = [
  { icon: '📊', title: 'Data Analytics & Visualization', desc: 'Turning raw data into dashboards & decisions.' },
  { icon: '✏️', title: 'UX Audits & Wireframing', desc: 'De-risking designs before a line of code.' },
  { icon: '🧭', title: 'Product Strategy & Roadmap', desc: 'Outcome-driven roadmaps tied to metrics.' },
  { icon: '🐍', title: 'Product Analytics (SQL / Python)', desc: 'Funnels, cohorts & instrumentation.' },
  { icon: '🔁', title: 'Agile / Jira', desc: 'Shipping in tight, iterative loops.' },
  { icon: '🏢', title: 'B2B Marketplaces', desc: 'Two-sided matching, trust & safety.' },
]

export const featured = [
  {
    n: '01', name: 'SmartCart', role: 'Product & Engineering · 0→1',
    blurb: "An AI decision engine that reasons over a user's budget, spending & goals to give an objective Buy / Wait / Don't-buy verdict — analytics + LLM reasoning over real data.",
    kpis: [[3, '', 'Feature phases'], [8, '', 'REST endpoints'], [100, '%', 'Reasoning shown']],
    tags: ['Node.js', 'Express', 'Groq LLM', 'Product Analytics', 'PWA'],
    img: RAW + '/SmartCart/main/docs/screenshots/01-landing.png',
    read: 'https://github.com/AASTHA381/SmartCart/blob/main/docs/PRD.md',
    live: 'https://smartcart-c2ci.onrender.com', code: 'https://github.com/AASTHA381/SmartCart',
    bg: 'linear-gradient(140deg,#eef2ff,#ecfeff)',
  },
  {
    n: '02', name: 'TeamMatch', role: 'Product Lead · Two-sided marketplace',
    blurb: 'A B2B-style matching platform ranking teammates by complementary skills, availability & goals — real-time sync with server-enforced ownership.',
    kpis: [[146, '', 'Users on live batch'], [39, '', 'Subjects modelled'], [100, '%', 'Owner-enforced']],
    tags: ['Firebase', 'Firestore', 'Auth', 'Matching Engine', 'B2B'],
    img: RAW + '/TeamMatch/main/docs/screenshots/01-signin.png',
    read: 'https://github.com/AASTHA381/TeamMatch/blob/main/docs/PRD.md',
    live: 'https://aastha381.github.io/TeamMatch/', code: 'https://github.com/AASTHA381/TeamMatch',
    bg: 'linear-gradient(140deg,#f0fdfa,#eef2ff)',
  },
  {
    n: '03', name: 'YatraYatri', role: 'Product for a real client · B2B tool',
    blurb: 'A live financial-planning cockpit for a trek-tourism founder: capital allocation, a 0–100 readiness score and real-time risk alerts on runway, margin & break-even.',
    kpis: [[7, '', 'Capital categories'], [100, '', 'Readiness score'], [50, 'L', 'Capital modelled ₹']],
    tags: ['Financial Modelling', 'Data Viz', 'Reactive UI', 'Client Work'],
    img: RAW + '/yatrayatri-planner/main/docs/screenshots/01-planner.png',
    read: 'https://github.com/AASTHA381/yatrayatri-planner/blob/main/docs/PRD.md',
    live: 'https://aastha381.github.io/yatrayatri-planner/', code: 'https://github.com/AASTHA381/yatrayatri-planner',
    bg: 'linear-gradient(140deg,#fef2f2,#f5f3ff)',
  },
  {
    n: '04', name: 'DayFlow', role: 'Product & Engineering · 0→1',
    blurb: "A scheduling engine computing the earliest safe bedtime from a user's real day, with photo-to-dismiss alarms verified on-device via ML — privacy-first.",
    kpis: [[8, 'h', 'Min sleep guaranteed'], [100, '%', 'On-device ML'], [3, '', 'Input signals']],
    tags: ['TensorFlow.js', 'Firebase', 'Rules Engine', 'PWA'],
    img: RAW + '/DayFlow-Sleep-Planner/main/docs/screenshots/02-planner.png',
    read: 'https://github.com/AASTHA381/DayFlow-Sleep-Planner/blob/main/docs/PRD.md',
    live: 'https://aastha381.github.io/DayFlow-Sleep-Planner/', code: 'https://github.com/AASTHA381/DayFlow-Sleep-Planner',
    bg: 'linear-gradient(140deg,#eff6ff,#f5f3ff)',
  },
]

export const more = [
  { name: 'FoodMatch', dom: 'Social · real-time', d: 'Tinder-style group restaurant matcher — everyone swipes, first mutual match wins.', img: RAW + '/tinder-style-restaurant-matcher/main/docs/screenshots/01-home.png', prd: 'https://github.com/AASTHA381/tinder-style-restaurant-matcher/blob/main/docs/PRD.md' },
  { name: 'PM Study Planner', dom: 'Habit · learning', d: 'Flexible daily study planner with streaks, progress grids and a monthly heatmap.', img: RAW + '/pm-study-planner/main/docs/screenshots/01-today.png', prd: 'https://github.com/AASTHA381/pm-study-planner/blob/main/docs/PRD.md' },
  { name: 'ClassTrack', dom: 'Analytics utility', d: "Attendance tracker that surfaces a live 'safe skips left' number per subject.", img: RAW + '/Attendence-Tracker-App/main/docs/screenshots/01-dashboard.png', prd: 'https://github.com/AASTHA381/Attendence-Tracker-App/blob/main/docs/PRD.md' },
  { name: 'LinkVault', dom: 'Productivity · AI', d: 'Chrome extension that saves links & docs with AI-generated summaries + search.', img: null, emoji: '🔗', prd: 'https://github.com/AASTHA381/link-vault-extension/blob/main/docs/PRD.md' },
]

export const experience = [
  {
    when: 'Apr 2026 — Jun 2026', title: 'Product Manager Intern', org: 'TradeIndia.com · Infocom Network Pvt Ltd',
    points: 'Authored 136 PRDs across buyer & seller journeys; ran end-to-end competitor benchmarking vs IndiaMART; surfaced 55 bugs & feature gaps in a structured app audit (Jira handoff); shaped a 1-year product roadmap and CTA optimisation across prod/pre-prod.',
  },
  {
    when: 'Jan 2026 — Feb 2026', title: 'CSR Intern', org: 'Prudent Corporate Advisory Services Ltd.',
    points: 'Built an MIS Excel dashboard from scratch (FY 2026–27) with head-wise, payment-mode & monthly-trend views; compiled a 5-year CSR impact report; drove college outreach & exhibition partnerships for Project Samarth.',
  },
  {
    when: 'Aug 2022 — May 2025', title: 'Analyst', org: 'HCLTech · Noida, India',
    points: 'Built automated financial reporting with Python & SQL (−60% manual cost); Power BI & Tableau dashboards tracking ROI & cost KPIs (+25% response time); improved ETL efficiency and built CI/CD pipelines.',
  },
]

export const certs = [
  '🤖 AI for Product Management', '📊 Power BI', '📉 Tableau',
  '🗄️ SQL', '🐍 Python', '🔍 Competitor Benchmarking', '🧪 App Audits', '🔁 Agile · Jira', '🧭 Product Strategy',
]
