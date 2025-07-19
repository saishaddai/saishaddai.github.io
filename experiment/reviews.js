<script>
// Assuming your JSON array is stored in a variable called 'apiData'
const apiData = [
  {
    "title": "Weather Forecast API",
    "subtitle": "Real-time weather data integration",
    "description": "REST API that provides current weather conditions, forecasts, and historical data for any location worldwide. Supports Android location services integration.",
    "source": "https://api.weatherservice.com/v3"
  },
  // ... rest of your JSON items
];

// Function to generate the HTML cards
function renderAPICards(data) {
  const container = document.createElement('div'); // Or target an existing container
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'post-card project-card';
    
    card.innerHTML = `
      <h3><a href="${item.source}" target="_blank">${item.title}</a></h3>
      <p class="subtitle">${item.subtitle}</p>
      <p class="description">${item.description}</p>
    `;
    
    container.appendChild(card);
  });
  
  return container;
}

// Usage: Append the generated cards to a specific element
document.addEventListener('DOMContentLoaded', function() {
  const apiContainer = document.getElementById('api-container'); // You'll need this element in your HTML
  if (apiContainer) {
    apiContainer.appendChild(renderAPICards(apiData));
  }
});
</script>
