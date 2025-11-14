// ========================================
// MAP PAGE SCRIPT
// ========================================

// Configuration
const OSIJEK_COORDS = [45.554962, 18.695514];
const EUROPE_CENTER = [50.0, 10.0];
const EUROPE_ZOOM = 4;

// Initialize Map
const map = L.map('map', {
    center: EUROPE_CENTER,
    zoom: EUROPE_ZOOM,
    zoomControl: true,
    scrollWheelZoom: true
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
    minZoom: 3
}).addTo(map);

// Custom Marker Icon
const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `
        <div style="
            position: relative;
            width: 50px;
            height: 50px;
        ">
            <div style="
                position: absolute;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #FDB515, #FF8C00);
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                box-shadow: 0 6px 20px rgba(253, 181, 21, 0.6);
            "></div>
            <div style="
                position: absolute;
                top: 10px;
                left: 10px;
                width: 30px;
                height: 30px;
                background: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                z-index: 1;
            ">📍</div>
        </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

// Add Marker
const marker = L.marker(OSIJEK_COORDS, {
    icon: customIcon,
    title: 'Click to explore Osijek'
}).addTo(map);

// Loading overlay
const loadingOverlay = document.getElementById('loadingOverlay');

// Open Home page on Marker Click
marker.on('click', function() {
    // Smooth zoom animation before redirect
    map.flyTo(OSIJEK_COORDS, 13, {
        duration: 1.5
    });

    setTimeout(function() {
        window.location.href = 'home/index.html';
    }, 1600);
});

// Hide Loading Overlay
map.whenReady(function() {
    setTimeout(function() {
        loadingOverlay.classList.add('hidden');
    }, 500);
});

// Responsive Zoom
if (window.innerWidth < 768) {
    map.setZoom(3.5);
}

window.addEventListener('resize', function() {
    map.invalidateSize();
});
