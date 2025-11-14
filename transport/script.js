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
