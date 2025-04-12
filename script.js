
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map centered on South Sudan (approx. coordinates: 4.85, 31.58)
    var map = L.map('map').setView([4.85, 31.58], 6);

    // Add OpenStreetMap tiles with a custom style
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom marker icon
    var customIcon = L.divIcon({
      className: 'custom-marker',
      iconSize: [12, 12],
    });

    // Add a marker for South Sudan (e.g., Juba)
    L.marker([4.85, 31.58], { icon: customIcon })
      .addTo(map)
      .bindPopup('<b>Our Work in South Sudan</b><br>Supporting flood-affected communities.')
      .openPopup();
  });



  // Function to toggle navbar transparency on scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
