// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // In a real implementation, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} soon.`);

        // Reset form
        contactForm.reset();
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        header.style.background = 'rgba(255,255,255,0.95)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255,255,255,1)';
    }
});

// Product card animation on load
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        // Add a slight delay for each card
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            // Animate in
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});

// Mobile menu toggle (for small screens)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-menu');
}

// Add a subtle animation to the hero section
const heroSection = document.querySelector('.hero');
if (heroSection) {
    setTimeout(() => {
        heroSection.style.opacity = '0';
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1s ease';
            heroSection.style.opacity = '1';
        }, 100);
    }, 500);
}

// Image loading for product images
function preloadImages() {
    const images = [
        'wreath1.jpg',
        'wreath2.jpg',
        'wreath3.jpg',
        'wreath4.jpg',
        'hero-bg.jpg'
    ];

    images.forEach(img => {
        const image = new Image();
        image.src = img;
    });
}

// Preload images on page load
window.addEventListener('load', preloadImages);