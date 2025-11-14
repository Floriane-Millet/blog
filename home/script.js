// Toggle Pre-Departure Guide
const preDepartureItem = document.getElementById('preDepartureItem');
const expandableHeader = preDepartureItem.querySelector('.expandable-header');

expandableHeader.addEventListener('click', function() {
    preDepartureItem.classList.toggle('expanded');
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && preDepartureItem.classList.contains('expanded')) {
        preDepartureItem.classList.remove('expanded');
    }
});
