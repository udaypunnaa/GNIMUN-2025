// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initNavigation();
    initTabs();
    initScrollEffects();
    initMobileMenu();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Tab switching functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.feature-card, .secretariat-card, .pricing-card, .info-card');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function () {
    // Register buttons
    const registerButtons = document.querySelectorAll('.btn-primary');
    registerButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Scroll to registration section
            const registerSection = document.getElementById('register');
            if (registerSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = registerSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Download brochure button
    const downloadBtn = document.querySelector('.btn-secondary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            alert('Brochure download will be available soon!');
        });
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card, .secretariat-card, .pricing-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Countdown timer (static for demo)
function updateCountdown() {
    const countdownNumbers = document.querySelectorAll('.countdown-number');

    // For demo purposes, we'll keep the static values
    // In a real implementation, you would calculate the actual time difference
    countdownNumbers[0].textContent = '12';
    countdownNumbers[1].textContent = '05';
    countdownNumbers[2].textContent = '30';
}

// Initialize countdown
document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();
    // Update every second (for demo purposes)
    setInterval(updateCountdown, 1000);
});
const cards = document.querySelectorAll(".who-for-card");
let currentIndex = 1; // start with 2nd card as active

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove("prev", "active", "next");

        if (index === currentIndex) {
            card.classList.add("active");
        } else if (index === currentIndex - 1) {
            card.classList.add("prev");
        } else if (index === currentIndex + 1) {
            card.classList.add("next");
        }
    });
}

// Buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
});

// Init
updateCards();


const targetDate = new Date("October 10, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".countdown-timer").innerHTML =
            "<h3>Registration Closed</h3>";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update immediately + every second
updateCountdown();
setInterval(updateCountdown, 1000);