// Simple JavaScript for interactive features

document.addEventListener('DOMContentLoaded', function() {
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
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // In a real implementation, this would send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }

    // Simple image hover effect enhancement
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Function to simulate adding to cart (for demo purposes)
function addToCart(productName) {
    alert(`${productName} added to cart!`);
}

// Function to handle contact form submission
function submitContactForm() {
    alert('Thank you for your message! We will get back to you soon.');
}