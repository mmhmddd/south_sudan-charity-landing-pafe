
document.addEventListener('DOMContentLoaded', function () {
  // Updated coordinates for Malakia, Juba
  var map = L.map('map').setView([4.8419, 31.5908], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  var customIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [12, 12],
  });

  L.marker([4.8419, 31.5908], { icon: customIcon })
    .addTo(map)
    .bindPopup('<b>Malakia, Juba</b><br>Our presence here supports local communities.')
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
