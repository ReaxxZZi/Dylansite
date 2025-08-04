// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling functionality
const scrollArrow = document.getElementById('scrollArrow');
const container = document.getElementById('container');

// Click to scroll
scrollArrow.addEventListener('click', () => {
    container.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        container.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
});

// Touch/swipe support for mobile
let startY = 0;
let endY = 0;

container.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

container.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    const diff = startY - endY;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            container.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    }
});

// Scroll reveal animation for all elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements that need animation
const animateElements = [
    '.hero-title',
    '.hero-subtitle', 
    '.hero-description',
    '.scroll-arrow',
    '.section-title',
    '.about-content',
    '.services-list li',
    '.portfolio-item',
    '.cta-button'
];

// Initialize animations
function initializeAnimations() {
    // Hero section animations (trigger immediately)
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('animate');
    }, 100);
    
    setTimeout(() => {
        document.querySelector('.hero-subtitle')?.classList.add('animate');
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.hero-description')?.classList.add('animate');
    }, 500);
    
    setTimeout(() => {
        document.querySelector('.scroll-arrow')?.classList.add('animate');
    }, 700);
    
    // Observe other elements for scroll animations
    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            observer.observe(element);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
    initializeAnimations();
} 