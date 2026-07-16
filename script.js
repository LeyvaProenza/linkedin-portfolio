// Obfuscated email — prevents basic email harvesters
const user = 'carlos.leyva';
const domain = 'espoch.edu.ec';
const email = user + '@' + domain;

const emailLink = document.getElementById('email-link');
const emailText = document.getElementById('email-text');
if (emailLink && emailText) {
    emailLink.href = 'mailto:' + email;
    emailText.textContent = email;
}

// Theme toggle
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = toggle.querySelector('i');
    icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
}

setTheme(getPreferredTheme());

toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.pilar, .project-card, .stack-group, .hero-actions, .contacto-links');

fadeElements.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeElements.forEach(el => observer.observe(el));

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    observer.disconnect();
}

// Scroll-spy: highlight active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
    let current = '';
    sections.forEach(s => {
        const top = s.offsetTop - 100;
        if (window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'var(--text-primary)'
            : 'var(--text-secondary)';
    });
}

window.addEventListener('scroll', highlightNav, { passive: true });
