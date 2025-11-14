// ========================================
// CONFIGURATION
// ========================================
const OSIJEK_COORDS = [45.554962, 18.695514];
const EUROPE_CENTER = [50.0, 10.0];
const EUROPE_ZOOM = 4;

// ========================================
// DOM ELEMENTS
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

// ========================================
// HAMBURGER MENU TOGGLE
// ========================================
/**
 * Toggle mobile navigation menu
 * Adds/removes 'active' class to hamburger icon and nav menu
 */
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Add click event to hamburger button
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// ========================================
// DROPDOWN MENU FUNCTIONALITY
// ========================================
/**
 * Toggle dropdown menu on mobile devices
 * On desktop, dropdown works with CSS hover
 * On mobile, dropdown requires click/tap
 */
dropdownItems.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('.nav-link');

    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            // On mobile, toggle dropdown instead of navigating
            if (window.innerWidth <= 768) {
                e.preventDefault();

                // Close other dropdowns
                dropdownItems.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
    }
});

// ========================================
// CLOSE MENU ON LINK CLICK
// ========================================
/**
 * Close mobile menu when clicking on any nav link
 * Improves UX by automatically closing menu after navigation
 */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Don't close if it's a dropdown toggle
        const isDropdownToggle = this.parentElement.classList.contains('dropdown') &&
                                  window.innerWidth <= 768;

        if (!isDropdownToggle) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ========================================
// CLOSE MENU ON OUTSIDE CLICK
// ========================================
/**
 * Close mobile menu when clicking outside of it
 */
document.addEventListener('click', function(e) {
    const isClickInsideNav = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// CLOSE MENU ON ESC KEY
// ========================================
/**
 * Close mobile menu when pressing Escape key
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// HANDLE WINDOW RESIZE
// ========================================
/**
 * Reset menu state when resizing from mobile to desktop
 */
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state on desktop
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';

            // Remove active state from dropdowns
            dropdownItems.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }, 250);
});

// ========================================
// ACTIVE PAGE HIGHLIGHTING
// ========================================
/**
 * Highlight current page in navigation
 * Adds 'active' class to nav link matching current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // Remove active class from all links first
        link.classList.remove('active');

        // Add active class to current page link
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
setActiveNavLink();

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
/**
 * Enable smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId !== '#' && targetId !== '#!') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        }
    });
});

// ========================================
// LEAFLET MAP INITIALIZATION (for index.html only)
// ========================================
/**
 * Initialize Leaflet map on homepage
 * Only runs if map element exists in DOM
 */
function initializeMap() {
    const mapElement = document.getElementById('map');

    // Only initialize if map element exists
    if (!mapElement) return;

    // Create map centered on Europe
    const map = L.map('map', {
        center: EUROPE_CENTER,
        zoom: EUROPE_ZOOM,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        touchZoom: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 3
    }).addTo(map);

    // Create custom marker icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                position: relative;
                width: 40px;
                height: 40px;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #4A90E2, #2C5F8D);
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    animation: bounce 2s infinite;
                "></div>
                <div style="
                    position: absolute;
                    top: 8px;
                    left: 8px;
                    width: 24px;
                    height: 24px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #4A90E2;
                    font-size: 14px;
                    z-index: 1;
                ">📍</div>
            </div>
            <style>
                @keyframes bounce {
                    0%, 100% {
                        transform: rotate(-45deg) translateY(0);
                    }
                    50% {
                        transform: rotate(-45deg) translateY(-10px);
                    }
                }
            </style>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });

    // Add marker to Osijek
    const marker = L.marker(OSIJEK_COORDS, {
        icon: customIcon,
        title: 'Osijek, Croatia',
        riseOnHover: true
    }).addTo(map);

    // Create popup content
    const popupContent = `
        <div class="popup-content">
            <h3>🎓 Osijek, Croatia</h3>
            <p>
                A vibrant student city on the Drava River,
                perfect for your Erasmus adventure!
            </p>
            <a href="destination.html" class="popup-button">
                Explore Destination →
            </a>
        </div>
    `;

    marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
    });

    // Click event: zoom and redirect to destination page
    marker.on('click', function() {
        map.flyTo(OSIJEK_COORDS, 13, {
            duration: 1.5
        });

        setTimeout(function() {
            window.location.href = 'destination.html';
        }, 1600);
    });

    // Hover event: show popup
    marker.on('mouseover', function() {
        this.openPopup();
    });

    // Hide loading overlay when map is ready
    map.whenReady(function() {
        setTimeout(function() {
            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) {
                loadingOverlay.classList.add('hidden');
            }
        }, 500);
    });

    // Responsive zoom adjustment
    if (window.innerWidth < 768) {
        map.setZoom(3.5);
    }

    // Adjust map on window resize
    window.addEventListener('resize', function() {
        map.invalidateSize();
        if (window.innerWidth < 768) {
            map.setView(EUROPE_CENTER, 3.5);
        } else {
            map.setView(EUROPE_CENTER, EUROPE_ZOOM);
        }
    });
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', initializeMap);

// ========================================
// PAGE LOAD PERFORMANCE
// ========================================
/**
 * Log page load time for performance monitoring
 */
window.addEventListener('load', function() {
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd -
                        window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});
