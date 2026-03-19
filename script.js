const extendedFeatures = [
  'Personalised itinerary builder',
  'Price alerts & deal notifications',
  'Offline mode for maps and bookings',
  'AR navigation for landmarks',
  'Social sharing & trip collaboration',
  'Weather and local events integration',
  'Expense tracking against budget',
  'AI-powered language translator',
  'Sustainability scoring',
  'Emergency assistance hub'
];

const techStack = [
  ['Frontend', 'React Native or native mobile apps with Mapbox / Google Maps SDK for immersive mapping experiences.'],
  ['Backend', 'Node.js (Express) or Python (FastAPI) microservices for auth, orchestration, maps, and notifications.'],
  ['AI / LLM', 'Hosted OpenAI, Claude, or Llama models with orchestration for conversational travel flows.'],
  ['MCP Layer', 'Custom MCP server in TypeScript or Python exposing flight, hotel, and booking tools with schemas.'],
  ['Data', 'PostgreSQL for users and bookings, MongoDB for chat and itineraries, Redis for cache and sessions.'],
  ['Cloud & DevOps', 'Docker, Kubernetes, GitHub Actions, and AWS / GCP / Azure deployment pipelines.'],
  ['Integrations', 'Amadeus, Skyscanner, Booking.com, Stripe, Twilio, Firebase, and other provider adapters.']
];

const phases = [
  {
    phase: 'Phase 1 · MVP',
    title: 'Foundation and product validation',
    body: 'Authentication, profile management, static map POIs, basic chat recommendations, one flight API integration, and a core relational schema.'
  },
  {
    phase: 'Phase 2 · AI + MCP',
    title: 'Conversational travel search',
    body: 'Introduce the LLM orchestration layer, MCP tools for flights and hotels, price alerts, and richer chat cards for results.'
  },
  {
    phase: 'Phase 3 · Experience depth',
    title: 'Trip building and richer utility',
    body: 'Itinerary planning, offline content, collaboration, weather/event integrations, and in-app booking payments.'
  },
  {
    phase: 'Phase 4 · Scale and intelligence',
    title: 'Advanced product expansion',
    body: 'AR navigation, sustainability insights, localisation, personalised recommendation systems, and large-scale infrastructure.'
  }
];

const screens = [
  ['Home screen', 'Quick actions, map preview, and chat entry point for immediate planning.'],
  ['Chat screen', 'Conversation UI with rich travel cards, route snippets, and booking actions.'],
  ['Map screen', 'Full-screen map with markers, route overlays, and interactive place details.'],
  ['Itinerary screen', 'Day-by-day plan builder with editable activities and sharing controls.'],
  ['Booking confirmation', 'Booking summary, QR code, calendar support, and itinerary linkage.'],
  ['Profile & settings', 'Payment methods, preferences, alerts, and localisation settings.']
];

const security = [
  'OAuth2 / JWT authentication with refresh tokens and optional biometrics.',
  'Encryption in transit with TLS 1.3 and encryption at rest for sensitive user data.',
  'PCI-conscious payment flows using tokenisation through Stripe or equivalent providers.',
  'API rate limiting and abuse prevention for expensive provider integrations.',
  'Privacy controls and user consent for training or analytics use of chat data.'
];

const challenges = [
  'API rate limits and provider costs mitigated through response caching and fallback vendors.',
  'LLM hallucinations reduced by grounding responses through MCP tool schemas and live API results.',
  'Offline capability delivered through local storage and sync workflows once connectivity resumes.',
  'Cross-platform consistency managed with shared UI systems and mobile QA coverage.',
  'Regulatory compliance addressed through data residency options and GDPR-aware design.'
];

function populateList(targetId, items, formatter) {
  const target = document.getElementById(targetId);
  items.forEach((item) => {
    const element = formatter(item);
    target.appendChild(element);
  });
}

populateList('pill-grid', extendedFeatures, (feature) => {
  const pill = document.createElement('div');
  pill.className = 'pill';
  pill.textContent = feature;
  return pill;
});

populateList('stack-table', techStack, ([label, description]) => {
  const row = document.createElement('div');
  row.className = 'stack-row';
  row.innerHTML = `<strong>${label}</strong><span>${description}</span>`;
  return row;
});

populateList('timeline', phases, ({ phase, title, body }) => {
  const card = document.createElement('article');
  card.className = 'timeline-card';
  card.innerHTML = `<span class="phase">${phase}</span><h3>${title}</h3><p>${body}</p>`;
  return card;
});

populateList('screen-grid', screens, ([title, description]) => {
  const card = document.createElement('article');
  card.className = 'screen-card';
  card.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
  return card;
});

populateList('security-list', security, (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});

populateList('challenge-list', challenges, (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});

document.getElementById('scroll-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

Array.from(document.querySelectorAll('.primary-btn, .secondary-btn')).forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.textContent.includes('Architecture') ? 'architecture' : 'roadmap';
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});
