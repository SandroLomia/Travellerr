const destinationData = {
  Paris: {
    country: 'France',
    coords: { left: '71%', top: '32%' },
    weather: { temp: '18°C', condition: 'Partly cloudy', bestTime: 'Afternoon museum walk' },
    events: ['Louvre late-night entry', 'Seine river jazz cruise', 'Montmartre street art tour'],
    emergency: { number: '112', embassy: 'Nearest embassy lookup available', insurance: 'Global travel line +33 1 88 88 88 88' },
    phrases: {
      hello: 'Bonjour',
      thanks: 'Merci',
      where: 'Où est la gare ?',
      vegetarian: 'Avez-vous des options végétariennes ?'
    },
    hotels: [
      { name: 'Maison Lumière', price: 240, rating: 4.8, tags: ['Boutique', 'Central', 'Breakfast'] },
      { name: 'Left Bank Suites', price: 185, rating: 4.5, tags: ['Family', 'Metro nearby'] },
      { name: 'Canal View Stay', price: 145, rating: 4.2, tags: ['Budget', 'Romantic'] }
    ],
    activities: [
      { name: 'Sunrise Eiffel photo walk', price: 35, duration: '2h', carbon: 'Low' },
      { name: 'Louvre highlights with guide', price: 75, duration: '3h', carbon: 'Low' },
      { name: 'Versailles day trip', price: 120, duration: '7h', carbon: 'Medium' }
    ]
  },
  Tokyo: {
    country: 'Japan',
    coords: { left: '86%', top: '41%' },
    weather: { temp: '21°C', condition: 'Clear', bestTime: 'Evening skyline and food crawl' },
    events: ['Shibuya night food tour', 'Cherry blossom forecast watch', 'Asakusa cultural festival'],
    emergency: { number: '110 / 119', embassy: 'Embassy district quick links', insurance: 'Global travel line +81 3 77 77 77 77' },
    phrases: {
      hello: 'Konnichiwa',
      thanks: 'Arigatou gozaimasu',
      where: 'Eki wa doko desu ka?',
      vegetarian: 'Bejitarian menyuu wa arimasu ka?'
    },
    hotels: [
      { name: 'Shinjuku Sky Hotel', price: 280, rating: 4.9, tags: ['Premium', 'City view'] },
      { name: 'Tokyo Capsule Plus', price: 90, rating: 4.1, tags: ['Budget', 'Solo'] },
      { name: 'Asakusa Family Inn', price: 170, rating: 4.4, tags: ['Family', 'Temple district'] }
    ],
    activities: [
      { name: 'Tsukiji food tasting', price: 55, duration: '3h', carbon: 'Low' },
      { name: 'Mt. Fuji coach tour', price: 140, duration: '10h', carbon: 'High' },
      { name: 'Akihabara gaming crawl', price: 45, duration: '4h', carbon: 'Low' }
    ]
  },
  Rome: {
    country: 'Italy',
    coords: { left: '74%', top: '40%' },
    weather: { temp: '24°C', condition: 'Sunny', bestTime: 'Morning historic district walk' },
    events: ['Colosseum twilight access', 'Roman street food market', 'Trastevere music night'],
    emergency: { number: '112', embassy: 'Embassy info centre in app', insurance: 'Global travel line +39 06 66 66 66 66' },
    phrases: {
      hello: 'Ciao',
      thanks: 'Grazie',
      where: 'Dov’è la stazione?',
      vegetarian: 'Avete opzioni vegetariane?'
    },
    hotels: [
      { name: 'Forum Grand Hotel', price: 215, rating: 4.7, tags: ['Historic', 'Premium'] },
      { name: 'Trastevere Loft', price: 155, rating: 4.3, tags: ['Neighbourhood', 'Romantic'] },
      { name: 'Roma Metro Hub', price: 120, rating: 4.0, tags: ['Budget', 'Transit'] }
    ],
    activities: [
      { name: 'Ancient Rome guided pass', price: 80, duration: '4h', carbon: 'Low' },
      { name: 'Pasta-making workshop', price: 65, duration: '3h', carbon: 'Low' },
      { name: 'Tivoli gardens excursion', price: 110, duration: '6h', carbon: 'Medium' }
    ]
  },
  Dubai: {
    country: 'UAE',
    coords: { left: '80%', top: '47%' },
    weather: { temp: '31°C', condition: 'Hot and clear', bestTime: 'Night market and skyline views' },
    events: ['Desert camp evening', 'Dubai Marina boat party', 'Old Souk culture walk'],
    emergency: { number: '999', embassy: 'Consular listings by district', insurance: 'Global travel line +971 4 55 55 55 55' },
    phrases: {
      hello: 'Marhaba',
      thanks: 'Shukran',
      where: 'Ayn al-mahata?',
      vegetarian: 'Hal ladaykum khiyarat nabatiyya?'
    },
    hotels: [
      { name: 'Marina Palm Resort', price: 320, rating: 4.8, tags: ['Luxury', 'Beach'] },
      { name: 'City Stop Downtown', price: 140, rating: 4.2, tags: ['Budget', 'Central'] },
      { name: 'Desert Pearl Suites', price: 210, rating: 4.5, tags: ['Family', 'Pool'] }
    ],
    activities: [
      { name: 'Burj Khalifa sunset slot', price: 95, duration: '2h', carbon: 'Low' },
      { name: 'Desert safari', price: 130, duration: '6h', carbon: 'Medium' },
      { name: 'Museum of the Future', price: 50, duration: '2h', carbon: 'Low' }
    ]
  }
};

const flights = [
  { id: 1, origin: 'London', destination: 'Paris', airline: 'Air France', price: 190, duration: '1h 15m', stops: 0, carbon: 82 },
  { id: 2, origin: 'London', destination: 'Paris', airline: 'EuroSky', price: 140, duration: '1h 25m', stops: 0, carbon: 78 },
  { id: 3, origin: 'London', destination: 'Rome', airline: 'Italia Air', price: 240, duration: '2h 35m', stops: 0, carbon: 129 },
  { id: 4, origin: 'New York', destination: 'Tokyo', airline: 'ANA Connect', price: 980, duration: '14h 10m', stops: 0, carbon: 420 },
  { id: 5, origin: 'New York', destination: 'Tokyo', airline: 'Pacific Cloud', price: 760, duration: '17h 30m', stops: 1, carbon: 390 },
  { id: 6, origin: 'New York', destination: 'Dubai', airline: 'Emirates', price: 890, duration: '12h 20m', stops: 0, carbon: 401 },
  { id: 7, origin: 'Berlin', destination: 'Rome', airline: 'Lufthansa', price: 205, duration: '2h 5m', stops: 0, carbon: 118 },
  { id: 8, origin: 'Berlin', destination: 'Paris', airline: 'Sky Europe', price: 155, duration: '1h 50m', stops: 0, carbon: 88 },
  { id: 9, origin: 'Sydney', destination: 'Tokyo', airline: 'JAL', price: 720, duration: '9h 35m', stops: 0, carbon: 280 },
  { id: 10, origin: 'Sydney', destination: 'Dubai', airline: 'Oceanic Air', price: 870, duration: '14h 50m', stops: 1, carbon: 410 }
];

const origins = ['London', 'New York', 'Berlin', 'Sydney'];
const destinations = Object.keys(destinationData);
const translationPhrases = {
  'hello': 'hello',
  'thank you': 'thanks',
  'where is the train station?': 'where',
  'do you have vegetarian options?': 'vegetarian'
};

const state = {
  currentSearch: {
    origin: 'London',
    destination: 'Paris',
    budget: 1200,
    preferences: [],
    departDate: '',
    returnDate: ''
  },
  selectedFlight: null,
  selectedHotel: null,
  selectedActivities: [],
  alerts: JSON.parse(localStorage.getItem('travellerr-alerts') || '[]'),
  expenses: JSON.parse(localStorage.getItem('travellerr-expenses') || '[]'),
  itinerary: JSON.parse(localStorage.getItem('travellerr-itinerary') || '[]'),
  chat: [],
  routeVisible: true,
  selectedMapCity: 'Paris'
};

const els = {
  origin: document.getElementById('origin'),
  destination: document.getElementById('destination'),
  departDate: document.getElementById('departDate'),
  returnDate: document.getElementById('returnDate'),
  budget: document.getElementById('budget'),
  budgetOutput: document.getElementById('budget-output'),
  searchForm: document.getElementById('search-form'),
  recommendationCard: document.getElementById('recommendation-card'),
  quickStats: document.getElementById('quick-stats'),
  flightResults: document.getElementById('flight-results'),
  hotelResults: document.getElementById('hotel-results'),
  activityResults: document.getElementById('activity-results'),
  tripOverview: document.getElementById('trip-overview'),
  chatThread: document.getElementById('chat-thread'),
  chatForm: document.getElementById('chat-form'),
  chatInput: document.getElementById('chat-input'),
  mapStage: document.getElementById('map-stage'),
  mapDetails: document.getElementById('map-details'),
  toggleRoute: document.getElementById('toggle-route'),
  itineraryForm: document.getElementById('itinerary-form'),
  itineraryTitle: document.getElementById('itinerary-title'),
  itineraryDay: document.getElementById('itinerary-day'),
  itineraryTime: document.getElementById('itinerary-time'),
  itineraryBoard: document.getElementById('itinerary-board'),
  alertForm: document.getElementById('alert-form'),
  alertRoute: document.getElementById('alert-route'),
  alertPrice: document.getElementById('alert-price'),
  alertsList: document.getElementById('alerts-list'),
  weatherCard: document.getElementById('weather-card'),
  eventsList: document.getElementById('events-list'),
  expenseForm: document.getElementById('expense-form'),
  expenseLabel: document.getElementById('expense-label'),
  expenseAmount: document.getElementById('expense-amount'),
  expenseList: document.getElementById('expense-list'),
  budgetSummary: document.getElementById('budget-summary'),
  translatorForm: document.getElementById('translator-form'),
  translatorLanguage: document.getElementById('translator-language'),
  translatorInput: document.getElementById('translator-input'),
  translatorOutput: document.getElementById('translator-output'),
  safetyCard: document.getElementById('safety-card')
};

function seedDefaults() {
  const now = new Date();
  const depart = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const ret = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
  els.departDate.value = depart.toISOString().slice(0, 10);
  els.returnDate.value = ret.toISOString().slice(0, 10);
  state.currentSearch.departDate = els.departDate.value;
  state.currentSearch.returnDate = els.returnDate.value;
}

function populateSelect(select, items) {
  select.innerHTML = items.map((item) => `<option value="${item}">${item}</option>`).join('');
}

function currency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function saveState() {
  localStorage.setItem('travellerr-alerts', JSON.stringify(state.alerts));
  localStorage.setItem('travellerr-expenses', JSON.stringify(state.expenses));
  localStorage.setItem('travellerr-itinerary', JSON.stringify(state.itinerary));
}

function getSearchResults() {
  const { origin, destination, budget, preferences } = state.currentSearch;
  let flightMatches = flights.filter((flight) => flight.origin === origin && flight.destination === destination && flight.price <= budget);

  if (preferences.includes('direct')) {
    flightMatches = flightMatches.filter((flight) => flight.stops === 0);
  }

  if (preferences.includes('eco')) {
    flightMatches = [...flightMatches].sort((a, b) => a.carbon - b.carbon || a.price - b.price);
  } else {
    flightMatches = [...flightMatches].sort((a, b) => a.price - b.price);
  }

  const cityData = destinationData[destination];
  let hotelMatches = [...cityData.hotels].filter((hotel) => hotel.price <= budget / 2 || preferences.includes('luxury'));

  if (preferences.includes('family')) {
    hotelMatches = hotelMatches.filter((hotel) => hotel.tags.some((tag) => /family/i.test(tag)) || hotel.rating >= 4.3);
  }

  hotelMatches = hotelMatches.sort((a, b) => b.rating - a.rating || a.price - b.price);
  const activityMatches = [...cityData.activities].sort((a, b) => a.price - b.price);

  return {
    flights: flightMatches,
    hotels: hotelMatches,
    activities: activityMatches,
    destinationData: cityData
  };
}

function chooseRecommendations(results) {
  state.selectedFlight = results.flights[0] || null;
  state.selectedHotel = results.hotels[0] || null;
  if (!state.selectedActivities.length) {
    state.selectedActivities = results.activities.slice(0, 2);
  }
}

function renderRecommendation() {
  if (!state.selectedFlight || !state.selectedHotel) {
    els.recommendationCard.className = 'recommendation-card empty-state';
    els.recommendationCard.textContent = 'No complete trip recommendation yet. Try a route with more inventory or a higher budget.';
    els.quickStats.innerHTML = '';
    renderTripOverview();
    return;
  }

  const activitiesCost = state.selectedActivities.reduce((sum, item) => sum + item.price, 0);
  const total = state.selectedFlight.price + state.selectedHotel.price + activitiesCost;
  const sustainability = Math.max(20, 100 - Math.round(state.selectedFlight.carbon / 5));

  els.recommendationCard.className = 'recommendation-card';
  els.recommendationCard.innerHTML = `
    <h3>${state.currentSearch.origin} → ${state.currentSearch.destination}</h3>
    <p>${state.selectedFlight.airline} · ${state.selectedFlight.duration} · ${state.selectedFlight.stops === 0 ? 'Direct' : `${state.selectedFlight.stops} stop`}</p>
    <p>Stay at <strong>${state.selectedHotel.name}</strong> and pair it with ${state.selectedActivities.map((a) => a.name).join(' + ')}.</p>
    <div class="result-actions">
      <button class="mini-btn" id="book-trip-btn">Book suggested trip</button>
      <button class="mini-btn" id="add-all-itinerary-btn">Add to itinerary</button>
    </div>
  `;

  els.quickStats.innerHTML = [
    ['Trip total', currency(total)],
    ['Carbon score', `${sustainability}/100`],
    ['Best fit', state.currentSearch.preferences.includes('eco') ? 'Eco smart' : 'Value pick']
  ].map(([label, value]) => `<div class="stat-card"><strong>${value}</strong><p>${label}</p></div>`).join('');

  document.getElementById('book-trip-btn').addEventListener('click', () => {
    addChat('ai', `Booked a demo trip to ${state.currentSearch.destination}. Confirmation added to your itinerary and budget forecast.`);
    state.itinerary.push(
      { id: crypto.randomUUID(), day: 1, time: '08:00', title: `Flight to ${state.currentSearch.destination}` },
      { id: crypto.randomUUID(), day: 1, time: '15:00', title: `Check in at ${state.selectedHotel.name}` }
    );
    renderItinerary();
    saveState();
  });

  document.getElementById('add-all-itinerary-btn').addEventListener('click', () => {
    state.selectedActivities.forEach((activity, index) => {
      state.itinerary.push({ id: crypto.randomUUID(), day: index + 1, time: `${10 + index}:00`, title: activity.name });
    });
    renderItinerary();
    saveState();
    addChat('ai', `Added your selected activities in ${state.currentSearch.destination} to the itinerary builder.`);
  });

  renderTripOverview();
}

function renderTripOverview() {
  const flight = state.selectedFlight;
  const hotel = state.selectedHotel;
  els.tripOverview.innerHTML = `
    <div class="trip-mini-card">
      <strong>${state.currentSearch.origin} → ${state.currentSearch.destination}</strong>
      <p class="muted">${state.currentSearch.departDate || 'Choose dates'}${state.currentSearch.returnDate ? ` → ${state.currentSearch.returnDate}` : ''}</p>
      <p class="muted">Budget ${currency(state.currentSearch.budget)}</p>
      <p>${flight ? `${flight.airline} · ${currency(flight.price)}` : 'No flight selected yet'}</p>
      <p>${hotel ? `${hotel.name} · ${currency(hotel.price)}` : 'No hotel selected yet'}</p>
    </div>
  `;
}

function resultCardHTML(title, subtitle, price, tags = []) {
  return `
    <h4>${title}</h4>
    <p>${subtitle}</p>
    <strong>${price}</strong>
    <div>${tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
  `;
}

function renderResults() {
  const results = getSearchResults();
  chooseRecommendations(results);

  if (!results.flights.length) {
    els.flightResults.innerHTML = '<div class="empty-copy">No flights match this route and budget. Try increasing the budget or changing preferences.</div>';
  } else {
    els.flightResults.innerHTML = '';
    results.flights.forEach((flight) => {
      const card = document.createElement('article');
      card.className = 'result-card';
      card.innerHTML = resultCardHTML(
        `${flight.airline} · ${flight.origin} → ${flight.destination}`,
        `${flight.duration} · ${flight.stops === 0 ? 'Direct' : `${flight.stops} stop`} · Carbon ${flight.carbon}kg`,
        currency(flight.price),
        [flight.stops === 0 ? 'Direct' : 'Flexible', flight.carbon < 100 ? 'Low carbon' : 'Standard']
      ) + `<div class="result-actions"><button class="mini-btn">Select flight</button></div>`;
      card.querySelector('button').addEventListener('click', () => {
        state.selectedFlight = flight;
        renderRecommendation();
        addChat('ai', `Selected ${flight.airline} for ${currency(flight.price)}. Want me to optimize the hotel and activities next?`);
      });
      els.flightResults.appendChild(card);
    });
  }

  els.hotelResults.innerHTML = '';
  results.hotels.forEach((hotel) => {
    const card = document.createElement('article');
    card.className = 'result-card';
    card.innerHTML = resultCardHTML(
      hotel.name,
      `Rating ${hotel.rating} · ${results.destinationData.country}`,
      `${currency(hotel.price)} / night`,
      hotel.tags
    ) + `<div class="result-actions"><button class="mini-btn">Choose hotel</button></div>`;
    card.querySelector('button').addEventListener('click', () => {
      state.selectedHotel = hotel;
      renderRecommendation();
    });
    els.hotelResults.appendChild(card);
  });

  els.activityResults.innerHTML = '';
  results.activities.forEach((activity) => {
    const card = document.createElement('article');
    card.className = 'result-card';
    const chosen = state.selectedActivities.some((item) => item.name === activity.name);
    card.innerHTML = resultCardHTML(
      activity.name,
      `${activity.duration} · Carbon ${activity.carbon}`,
      currency(activity.price),
      [activity.carbon]
    ) + `<div class="result-actions"><button class="mini-btn">${chosen ? 'Added' : 'Add activity'}</button></div>`;
    card.querySelector('button').addEventListener('click', () => {
      if (!state.selectedActivities.some((item) => item.name === activity.name)) {
        state.selectedActivities.push(activity);
        renderResults();
        renderRecommendation();
      }
    });
    els.activityResults.appendChild(card);
  });

  renderRecommendation();
  renderWeather();
  renderMap();
  renderTranslator();
  renderSafety();
}

function addChat(role, text) {
  state.chat.push({ role, text });
  const template = document.getElementById('chat-message-template');
  const node = template.content.firstElementChild.cloneNode(true);
  node.classList.add(role);
  node.querySelector('.message-bubble').innerHTML = text;
  els.chatThread.appendChild(node);
  els.chatThread.scrollTop = els.chatThread.scrollHeight;
}

function handleChat(input) {
  const lower = input.toLowerCase();
  addChat('user', input);

  const { destination } = state.currentSearch;
  if (lower.includes('cheaper')) {
    const cheaper = getSearchResults().flights[0];
    addChat('ai', cheaper ? `Cheapest current option is <strong>${cheaper.airline}</strong> at ${currency(cheaper.price)}.` : 'I could not find a cheaper option on this route with the current budget.');
    return;
  }

  if (lower.includes('itinerary')) {
    const plan = destinationData[destination].activities.slice(0, 3)
      .map((item, idx) => `Day ${idx + 1}: ${item.name}`)
      .join('<br />');
    addChat('ai', `Here is a quick 3-day itinerary for ${destination}:<br />${plan}`);
    return;
  }

  if (lower.includes('hotel')) {
    const hotel = state.selectedHotel || getSearchResults().hotels[0];
    addChat('ai', hotel ? `Best stay match is <strong>${hotel.name}</strong> at ${currency(hotel.price)} per night.` : 'I do not have a matching hotel yet.');
    return;
  }

  if (lower.includes('weather')) {
    const weather = destinationData[destination].weather;
    addChat('ai', `${destination} is currently ${weather.condition.toLowerCase()} at ${weather.temp}. Best suggestion: ${weather.bestTime}.`);
    return;
  }

  if (lower.includes('translate')) {
    addChat('ai', 'Open the Translator tab in Insights and I will help with common travel phrases for your destination.');
    return;
  }

  if (lower.includes('budget')) {
    const total = state.expenses.reduce((sum, item) => sum + item.amount, 0);
    addChat('ai', `You have logged ${currency(total)} in trip expenses so far.`);
    return;
  }

  addChat('ai', `I can help compare flights, build itineraries, explain weather, recommend hotels, and watch prices for ${destination}. Try asking for a cheaper option or a 3-day itinerary.`);
}

function renderMap() {
  els.mapStage.innerHTML = '';
  if (state.routeVisible) {
    els.mapStage.classList.add('route-on');
  } else {
    els.mapStage.classList.remove('route-on');
  }

  destinations.forEach((city) => {
    const point = document.createElement('button');
    point.type = 'button';
    point.className = `map-point${state.selectedMapCity === city ? ' active' : ''}`;
    point.style.left = destinationData[city].coords.left;
    point.style.top = destinationData[city].coords.top;
    point.textContent = city.slice(0, 2).toUpperCase();
    point.addEventListener('click', () => {
      state.selectedMapCity = city;
      state.currentSearch.destination = city;
      els.destination.value = city;
      renderMap();
      renderMapDetails();
      renderWeather();
      renderTranslator();
      renderSafety();
    });
    els.mapStage.appendChild(point);
  });

  renderMapDetails();
}

function renderMapDetails() {
  const city = state.selectedMapCity;
  const data = destinationData[city];
  els.mapDetails.innerHTML = `
    <h3>${city}, ${data.country}</h3>
    <p>${data.weather.condition} · ${data.weather.temp}</p>
    <p>Upcoming events: ${data.events.join(', ')}</p>
    <div class="result-actions">
      <button class="mini-btn" id="focus-search-btn">Search this destination</button>
      <button class="mini-btn" id="alert-map-btn">Create price alert</button>
    </div>
  `;

  document.getElementById('focus-search-btn').addEventListener('click', () => {
    state.currentSearch.destination = city;
    els.destination.value = city;
    renderResults();
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('alert-map-btn').addEventListener('click', () => {
    els.alertRoute.value = `${state.currentSearch.origin} → ${city}`;
    document.querySelector('[data-tab="alerts"]').click();
    document.getElementById('insights').scrollIntoView({ behavior: 'smooth' });
  });
}

function renderItinerary() {
  const days = [1, 2, 3];
  els.itineraryBoard.innerHTML = '';
  days.forEach((day) => {
    const column = document.createElement('section');
    column.className = 'day-column';
    column.innerHTML = `<h4>Day ${day}</h4><p>Drag items here or add your own plan.</p><div class="day-dropzone" data-day="${day}"></div>`;
    const zone = column.querySelector('.day-dropzone');
    zone.addEventListener('dragover', (event) => event.preventDefault());
    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      const itemId = event.dataTransfer.getData('text/plain');
      const item = state.itinerary.find((entry) => entry.id === itemId);
      if (item) {
        item.day = day;
        renderItinerary();
        saveState();
      }
    });

    state.itinerary.filter((item) => Number(item.day) === day).sort((a, b) => a.time.localeCompare(b.time)).forEach((item) => {
      const entry = document.createElement('div');
      entry.className = 'itinerary-item';
      entry.draggable = true;
      entry.innerHTML = `<div><strong>${item.time}</strong><p>${item.title}</p></div><div class="stack-actions"><button class="mini-btn" data-action="up">↑</button><button class="mini-btn" data-action="down">↓</button><button class="mini-btn" data-action="delete">Delete</button></div>`;
      entry.addEventListener('dragstart', (event) => {
        entry.classList.add('dragging');
        event.dataTransfer.setData('text/plain', item.id);
      });
      entry.addEventListener('dragend', () => entry.classList.remove('dragging'));
      entry.querySelector('[data-action="delete"]').addEventListener('click', () => {
        state.itinerary = state.itinerary.filter((entryItem) => entryItem.id !== item.id);
        renderItinerary();
        saveState();
      });
      entry.querySelector('[data-action="up"]').addEventListener('click', () => shiftItinerary(item.id, -1));
      entry.querySelector('[data-action="down"]').addEventListener('click', () => shiftItinerary(item.id, 1));
      zone.appendChild(entry);
    });

    els.itineraryBoard.appendChild(column);
  });
}

function shiftItinerary(id, direction) {
  const index = state.itinerary.findIndex((item) => item.id === id);
  if (index < 0) return;
  const target = index + direction;
  if (target < 0 || target >= state.itinerary.length) return;
  [state.itinerary[index], state.itinerary[target]] = [state.itinerary[target], state.itinerary[index]];
  renderItinerary();
  saveState();
}

function renderAlerts() {
  if (!state.alerts.length) {
    els.alertsList.innerHTML = '<div class="empty-copy">No alerts saved yet. Add one to monitor a route and target price.</div>';
    return;
  }

  els.alertsList.innerHTML = '';
  state.alerts.forEach((alert, index) => {
    const card = document.createElement('div');
    card.className = 'stack-item';
    const activeMatch = flights.find((flight) => `${flight.origin} → ${flight.destination}` === alert.route && flight.price <= alert.target);
    card.innerHTML = `
      <h4>${alert.route}</h4>
      <p>Notify me at or below ${currency(alert.target)}</p>
      <p>${activeMatch ? `Deal available now: ${activeMatch.airline} at ${currency(activeMatch.price)}` : 'No deal yet — watching this route.'}</p>
      <div class="stack-actions"><button class="mini-btn">Delete</button></div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      state.alerts.splice(index, 1);
      saveState();
      renderAlerts();
    });
    els.alertsList.appendChild(card);
  });
}

function renderWeather() {
  const data = destinationData[state.currentSearch.destination];
  els.weatherCard.innerHTML = `
    <div class="weather-box">
      <strong>${state.currentSearch.destination}</strong>
      <p>${data.weather.condition}</p>
      <p>${data.weather.temp}</p>
    </div>
    <div class="weather-box">
      <strong>Best local moment</strong>
      <p>${data.weather.bestTime}</p>
    </div>
  `;

  els.eventsList.innerHTML = data.events.map((event) => `<div class="stack-item"><h4>${event}</h4><p>Recommended while you are in ${state.currentSearch.destination}.</p></div>`).join('');
}

function renderBudget() {
  const tripForecast = (state.selectedFlight?.price || 0) + (state.selectedHotel?.price || 0) + state.selectedActivities.reduce((sum, item) => sum + item.price, 0);
  const spent = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = Math.max(0, state.currentSearch.budget - spent);

  els.budgetSummary.innerHTML = `
    <div class="budget-pill"><strong>${currency(state.currentSearch.budget)}</strong><p>Trip budget</p></div>
    <div class="budget-pill"><strong>${currency(spent)}</strong><p>Logged spend</p></div>
    <div class="budget-pill"><strong>${currency(tripForecast)}</strong><p>Forecasted trip cost</p></div>
    <div class="budget-pill"><strong>${currency(remaining)}</strong><p>Remaining budget</p></div>
  `;

  if (!state.expenses.length) {
    els.expenseList.innerHTML = '<div class="empty-copy">No expenses logged yet.</div>';
    return;
  }

  els.expenseList.innerHTML = '';
  state.expenses.forEach((expense, index) => {
    const row = document.createElement('div');
    row.className = 'stack-item';
    row.innerHTML = `<h4>${expense.label}</h4><p>${currency(expense.amount)}</p><div class="stack-actions"><button class="mini-btn">Remove</button></div>`;
    row.querySelector('button').addEventListener('click', () => {
      state.expenses.splice(index, 1);
      saveState();
      renderBudget();
    });
    els.expenseList.appendChild(row);
  });
}

function renderTranslator() {
  const city = state.currentSearch.destination;
  const keys = Object.keys(destinationData[city].phrases);
  const existing = els.translatorLanguage.value || city;
  els.translatorLanguage.innerHTML = destinations.map((name) => `<option value="${name}">${name}</option>`).join('');
  els.translatorLanguage.value = destinations.includes(existing) ? existing : city;
  els.translatorOutput.innerHTML = `
    <strong>${els.translatorLanguage.value} phrasebook</strong>
    <p>Hello: ${destinationData[els.translatorLanguage.value].phrases[keys[0]]}</p>
    <p>Thank you: ${destinationData[els.translatorLanguage.value].phrases[keys[1]]}</p>
    <p>Where is the station?: ${destinationData[els.translatorLanguage.value].phrases[keys[2]]}</p>
  `;
}

function renderSafety() {
  const data = destinationData[state.currentSearch.destination].emergency;
  const score = state.selectedFlight ? Math.max(45, 100 - Math.round(state.selectedFlight.carbon / 6)) : 72;
  els.safetyCard.innerHTML = `
    <div class="safety-box">
      <strong>Emergency</strong>
      <p>Call ${data.number}</p>
      <p>${data.embassy}</p>
    </div>
    <div class="safety-box">
      <strong>Insurance</strong>
      <p>${data.insurance}</p>
      <p>Sustainability score: ${score}/100</p>
    </div>
  `;
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

function initChat() {
  addChat('ai', 'Welcome to Travellerr. Search a route, then ask for cheaper options, hotels, weather, budget, or a 3-day itinerary.');
}

function bindEvents() {
  els.budget.addEventListener('input', () => {
    els.budgetOutput.textContent = currency(Number(els.budget.value));
  });

  els.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    state.currentSearch = {
      origin: els.origin.value,
      destination: els.destination.value,
      departDate: els.departDate.value,
      returnDate: els.returnDate.value,
      budget: Number(els.budget.value),
      preferences: Array.from(document.querySelectorAll('.pref:checked')).map((input) => input.value)
    };
    state.selectedActivities = [];
    state.selectedMapCity = state.currentSearch.destination;
    renderResults();
    renderBudget();
    addChat('ai', `Searching ${state.currentSearch.origin} to ${state.currentSearch.destination} for ${currency(state.currentSearch.budget)} with preferences: ${state.currentSearch.preferences.join(', ') || 'none'}.`);
  });

  els.chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = els.chatInput.value.trim();
    if (!value) return;
    handleChat(value);
    els.chatInput.value = '';
  });

  els.toggleRoute.addEventListener('click', () => {
    state.routeVisible = !state.routeVisible;
    renderMap();
  });

  els.itineraryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = els.itineraryTitle.value.trim();
    if (!title) return;
    state.itinerary.push({ id: crypto.randomUUID(), title, day: Number(els.itineraryDay.value), time: els.itineraryTime.value });
    els.itineraryTitle.value = '';
    renderItinerary();
    saveState();
  });

  els.alertForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const route = els.alertRoute.value.trim();
    const target = Number(els.alertPrice.value);
    if (!route || !target) return;
    state.alerts.push({ route, target });
    els.alertRoute.value = '';
    els.alertPrice.value = '';
    saveState();
    renderAlerts();
  });

  els.expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const label = els.expenseLabel.value.trim();
    const amount = Number(els.expenseAmount.value);
    if (!label || !amount) return;
    state.expenses.push({ label, amount });
    els.expenseLabel.value = '';
    els.expenseAmount.value = '';
    saveState();
    renderBudget();
  });

  els.translatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = els.translatorLanguage.value;
    const phraseKey = translationPhrases[els.translatorInput.value.trim().toLowerCase()];
    if (!phraseKey) {
      els.translatorOutput.innerHTML = `<strong>${city}</strong><p>Try one of these phrases: “hello”, “thank you”, “where is the train station?”, or “do you have vegetarian options?”</p>`;
      return;
    }
    els.translatorOutput.innerHTML = `
      <strong>${city}</strong>
      <p>${els.translatorInput.value}</p>
      <p><strong>Translation:</strong> ${destinationData[city].phrases[phraseKey]}</p>
    `;
  });

  els.translatorLanguage.addEventListener('change', renderTranslator);

  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function init() {
  populateSelect(els.origin, origins);
  populateSelect(els.destination, destinations);
  els.origin.value = state.currentSearch.origin;
  els.destination.value = state.currentSearch.destination;
  els.budget.value = state.currentSearch.budget;
  els.budgetOutput.textContent = currency(state.currentSearch.budget);
  seedDefaults();
  setupTabs();
  bindEvents();
  initChat();
  renderResults();
  renderItinerary();
  renderAlerts();
  renderBudget();
}

init();
