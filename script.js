// Dynamic typing configuration rules using specific id targeting hooks
var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Software + Hardware Engineer.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

// Mobile Hamburger Menu Toggle Functionality Matrix
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('#navMenu ul li a');

    // Click trigger to toggle menu state open/close
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Dynamically toggle icon paths between Bars (=) and Close (X)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Automatically close panel structure smoothly when any menu link anchor is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});