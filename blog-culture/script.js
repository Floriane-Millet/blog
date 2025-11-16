// ========================================
// HERO SLIDER FUNCTIONALITY
// ========================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-nav.prev');
const nextBtn = document.querySelector('.slider-nav.next');

let currentSlide = 0;
let slideInterval;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto play slider
function startSlider() {
    slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Event listeners for navigation buttons
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider(); // Restart auto-play
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });
}

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        stopSlider();
        startSlider();
    });
});

// Start auto-play when page loads
if (slides.length > 0) {
    startSlider();
}

// Pause slider when user hovers over it
const sliderContainer = document.querySelector('.hero-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
}

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
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// ========================================
// DROPDOWN MENU FUNCTIONALITY
// ========================================
dropdownItems.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('.nav-link');

    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();

                dropdownItems.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('active');
                    }
                });

                dropdown.classList.toggle('active');
            }
        });
    }
});

// ========================================
// CLOSE MENU ON LINK CLICK
// ========================================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
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
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';

            dropdownItems.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }, 250);
});

// ========================================
// ACTIVE PAGE HIGHLIGHTING
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        link.classList.remove('active');

        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
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
window.addEventListener('load', function() {
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd -
                        window.performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});