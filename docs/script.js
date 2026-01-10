// Design Patterns Examples - JavaScript

// Language Toggle Functionality
let currentLang = 'en';

const langToggle = document.getElementById('langToggle');
const langFlag = document.querySelector('.lang-flag');
const langText = document.querySelector('.lang-text');

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    
    // Update button
    if (currentLang === 'pt') {
        langFlag.textContent = '🇧🇷';
        langText.textContent = 'Português';
    } else {
        langFlag.textContent = '🇺🇸';
        langText.textContent = 'English';
    }
    
    // Update all translatable elements
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-en][data-pt]');
    
    elements.forEach(element => {
        if (currentLang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-pt');
        }
    });
}

if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.language-card, .pattern-card, .contribute-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--primary-color)';
                } else {
                    link.style.color = '';
                }
            });
        }
    });
});

// Add click tracking (optional, for analytics)
document.querySelectorAll('.pattern-card').forEach(card => {
    card.addEventListener('click', () => {
        const patternName = card.querySelector('h4').textContent;
        console.log(`Pattern clicked: ${patternName}`);
        // You can add analytics tracking here
    });
});

// Responsive navigation menu for mobile (if needed)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        if (!nav.classList.contains('mobile-optimized')) {
            nav.classList.add('mobile-optimized');
        }
    }
};

window.addEventListener('resize', createMobileMenu);
window.addEventListener('DOMContentLoaded', createMobileMenu);

// Add search functionality (future enhancement placeholder)
const enableSearch = () => {
    // Placeholder for future search functionality
    console.log('Search functionality can be added here');
};

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when ready to implement PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
