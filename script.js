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
    icon.setAttribute('aria-hidden', 'true');
    const metaTheme = document.getElementById('theme-color');
    if (metaTheme) {
        metaTheme.content = theme === 'dark' ? '#0c1615' : '#f6faf9';
    }
}

setTheme(getPreferredTheme());

toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Language toggle (i18n.js provides applyLang)
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const current = document.documentElement.lang || 'es';
        applyLang(current === 'es' ? 'en' : 'es');
    });
}

// Project links (URLs for the cards with arrows)
const projectLinks = {
    'nrp-trainer': 'https://github.com/LeyvaProenza',
    'neocalc': 'https://github.com/LeyvaProenza/Neocalc',
    'material-docente': 'https://github.com/LeyvaProenza/voice-tts-gateway'
};

document.querySelectorAll('[data-project]').forEach(link => {
    const url = projectLinks[link.dataset.project];
    if (url) link.href = url;
});

// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    let menuOpen = false;

    function setMenu(open) {
        menuOpen = open;
        navLinks.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.className = open ? 'ph ph-x' : 'ph ph-list';
            icon.setAttribute('aria-hidden', 'true');
        }
        if (open) {
            const firstLink = navLinks.querySelector('a');
            if (firstLink) firstLink.focus();
        } else if (navLinks.contains(document.activeElement)) {
            menuToggle.focus();
        }
    }

    menuToggle.addEventListener('click', () => setMenu(!menuOpen));

    navLinks.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOpen) setMenu(false);
    });

    window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
        if (e.matches) setMenu(false);
    });
}

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
const navLinkEls = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinkEls.forEach(a => {
                    a.style.color = a.getAttribute('href') === '#' + entry.target.id
                        ? 'var(--text-primary)'
                        : 'var(--text-secondary)';
                });
            }
        });
    },
    { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
);

sections.forEach(s => navObserver.observe(s));
