document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    html.setAttribute('data-theme', savedTheme);
    themeSwitcher.checked = savedTheme === 'dark';
    
    // Theme switcher event listener
    themeSwitcher.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Projects Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Scroll Reveal Animations
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.section-title, .hero-title, .typed-text, .hero-description', { 
        origin: 'left',
        interval: 200
    });
    
    scrollReveal.reveal('.hero-buttons', { 
        origin: 'right',
        delay: 800
    });
    
    scrollReveal.reveal('.about-image, .skills-description, .contact-info', { 
        origin: 'left'
    });
    
    scrollReveal.reveal('.about-text, .skills-progress, .contact-form', { 
        origin: 'right'
    });
    
    scrollReveal.reveal('.project-item, .skill-item', { 
        interval: 200
    });
    
    // Initialize Typed.js
    const typed = new Typed('#typed', {
        strings: [
            'Web Developer',
            'Frontend Specialist',
            'React Developer',
            'Logo Designer',
            'UI/UX Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
    
    // Animate progress bars when they come into view
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress');
        
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
            }
        });
    };
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Run once on page load
});