// Bilingual support (ES/EN) — no fetch/JSON so the page keeps working from file://
const I18N = {
    es: {
        'meta.title': 'Carlos A. Leyva Proenza — Portfolio',
        'meta.desc': 'Carlos Alberto Leyva Proenza — Médico neonatólogo, docente ESPOCH y desarrollador. Portfolio multidisciplinario.',
        'skip.link': 'Saltar al contenido principal',
        'nav.pilares': 'Pilares',
        'nav.proyectos': 'Proyectos',
        'nav.stack': 'Stack',
        'nav.contacto': 'Contacto',
        'aria.theme': 'Cambiar tema',
        'aria.lang': 'Cambiar idioma',
        'aria.menu': 'Menú de navegación',
        'hero.eyebrow': 'Médico / Tecnología / Educación',
        'hero.role': 'Médico neonatólogo<br>Docente · <strong>ESPOCH</strong><br>Médico Tratante · <strong>Hospital General IESS Riobamba</strong>',
        'hero.cta.contacto': 'Contacto',
        'hero.cta.proyectos': 'Ver proyectos',
        'acerca.eyebrow': 'Acerca de',
        'acerca.p1': 'Médico neonatólogo con más de <strong>19 años de experiencia</strong> entre el sector público y la docencia universitaria. Actualmente soy Médico Tratante en el servicio de Neonatología del Hospital General IESS Riobamba y docente de la cátedra de Pediatría en la Facultad de Salud Pública, Escuela de Medicina de la ESPOCH.',
        'acerca.p2': 'En el hospital manejo directamente los casos más exigentes del recién nacido crítico, desde la reanimación avanzada hasta patologías complejas. En la universidad combino la docencia con la investigación: más de <strong>13 publicaciones</strong> en revistas indexadas sobre neonatología, pediatría, salud pública y epidemiología.',
        'acerca.p3': 'También desarrollo herramientas tecnológicas para uso clínico, pensadas para apoyar decisiones más precisas y una formación médica basada en evidencia.',
        'pilares.eyebrow': 'Lo que hago',
        'pilares.title': 'Medicina, tecnología y educación',
        'pilares.medicina.title': 'Medicina',
        'pilares.medicina.desc': 'Neonatología clínica en Hospital General IESS Riobamba. Reanimación neonatal (NRP 9.ª ed.), manejo del ductus arterioso permeable, cuidados del recién nacido.',
        'pilares.tech.title': 'Tecnología',
        'pilares.tech.desc': 'Construyo aplicaciones clínicas con Python, React, TypeScript, FastAPI y PostgreSQL. Automatización de procesos hospitalarios, IA generativa y análisis de datos.',
        'pilares.edu.title': 'Educación',
        'pilares.edu.desc': 'Docente en la Escuela de Medicina, Facultad de Salud Pública de la ESPOCH. Creación de infografías interactivas, videos educativos con TTS y material basado en evidencia.',
        'proyectos.eyebrow': 'Proyectos',
        'proyectos.title': 'Lo que he construido',
        'cat.medicina': 'Medicina',
        'cat.tech': 'Tecnología',
        'cat.educacion': 'Educación',
        'cat.privado': 'Próximamente',
        'aria.nrp': 'Ver NRP-Trainer',
        'aria.neocalc': 'Ver Neocalc IESS',
        'aria.docente': 'Ver Material Docente',
        'proyectos.nrp.desc': 'Guía interactiva de reanimación neonatal, NRP 9.ª edición. Diagrama SVG, simulador de casos clínicos, calculadora de dosis.',
        'proyectos.neocalc.desc': 'Hub de cálculos clínicos de precisión para neonatología y pediatría. Modo oscuro, responsive, sin dependencias externas.',
        'proyectos.historia.desc': 'Sistema web completo para registro y consulta de historias clínicas. Vacunación, desarrollo, curvas de crecimiento.',
        'proyectos.docente.desc': 'Infografías interactivas de neonatología, generación de audio con TTS, videos educativos con narración automatizada.',
        'proyectos.app.title': 'App Clínica',
        'proyectos.app.desc': 'Herramienta clínica en desarrollo. Diseñada para resolver problemas específicos del día a día en neonatología.',
        'proyectos.plataforma.title': 'Plataforma Educativa',
        'proyectos.plataforma.desc': 'Plataforma de educación médica interactiva. Próximamente disponible.',
        'tag.desarrollo': 'En desarrollo',
        'pub.eyebrow': 'Investigación',
        'pub.title': 'Publicaciones científicas',
        'pub.en.cta': 'Explora el listado completo de publicaciones en ORCID.',
        'pub.en.btn': 'Ver en ORCID',
        'stack.eyebrow': 'Stack',
        'stack.title': 'Herramientas y tecnologías',
        'stack.herramientas': 'Herramientas',
        'stack.clinico': 'Clínico',
        'stack.pill.ia': 'IA generativa',
        'stack.pill.curvas': 'Curvas de crecimiento',
        'stack.pill.neonatologia': 'Neonatología',
        'contacto.eyebrow': 'Contacto',
        'contacto.title': 'Hablemos',
        'contacto.text': '¿Colaboración, proyectos health-tech o simplemente conectar? Escríbeme.',
        'footer.built': '© 2026 Carlos Alberto Leyva Proenza. Construido con HTML, CSS y JavaScript vanilla.'
    },
    en: {
        'meta.title': 'Carlos A. Leyva Proenza — Portfolio',
        'meta.desc': 'Carlos Alberto Leyva Proenza — Neonatologist, ESPOCH professor, and developer. Multidisciplinary portfolio.',
        'skip.link': 'Skip to main content',
        'nav.pilares': 'Pillars',
        'nav.proyectos': 'Projects',
        'nav.stack': 'Stack',
        'nav.contacto': 'Contact',
        'aria.theme': 'Toggle theme',
        'aria.lang': 'Change language',
        'aria.menu': 'Navigation menu',
        'hero.eyebrow': 'Medicine / Technology / Education',
        'hero.role': 'Neonatologist<br>Professor · <strong>ESPOCH</strong><br>Attending Physician · <strong>Hospital General IESS Riobamba</strong>',
        'hero.cta.contacto': 'Contact',
        'hero.cta.proyectos': 'View projects',
        'acerca.eyebrow': 'About',
        'acerca.p1': 'Neonatologist with more than <strong>19 years of experience</strong> across public healthcare and university teaching. I currently work as an Attending Physician in the Neonatology service at Hospital General IESS Riobamba and teach Pediatrics at the School of Medicine, Faculty of Public Health, ESPOCH.',
        'acerca.p2': 'At the hospital I directly manage the most demanding cases of the critically ill newborn, from advanced resuscitation to complex pathologies. At the university I combine teaching with research: more than <strong>13 publications</strong> in indexed journals on neonatology, pediatrics, public health, and epidemiology.',
        'acerca.p3': 'I also develop technological tools for clinical use, designed to support more accurate decisions and evidence-based medical training.',
        'pilares.eyebrow': 'What I do',
        'pilares.title': 'Medicine, technology, and education',
        'pilares.medicina.title': 'Medicine',
        'pilares.medicina.desc': 'Clinical neonatology at Hospital General IESS Riobamba. Neonatal resuscitation (NRP 9th ed.), patent ductus arteriosus management, newborn care.',
        'pilares.tech.title': 'Technology',
        'pilares.tech.desc': 'I build clinical applications with Python, React, TypeScript, FastAPI, and PostgreSQL. Hospital process automation, generative AI, and data analysis.',
        'pilares.edu.title': 'Education',
        'pilares.edu.desc': 'Professor at the School of Medicine, Faculty of Public Health, ESPOCH. Creation of interactive infographics, educational videos with TTS, and evidence-based material.',
        'proyectos.eyebrow': 'Projects',
        'proyectos.title': 'What I have built',
        'cat.medicina': 'Medicine',
        'cat.tech': 'Technology',
        'cat.educacion': 'Education',
        'cat.privado': 'Coming soon',
        'aria.nrp': 'View NRP-Trainer',
        'aria.neocalc': 'View Neocalc IESS',
        'aria.docente': 'View Material Docente',
        'proyectos.nrp.desc': 'Interactive neonatal resuscitation guide, NRP 9th edition. SVG diagram, clinical case simulator, dose calculator.',
        'proyectos.neocalc.desc': 'Hub of precision clinical calculators for neonatology and pediatrics. Dark mode, responsive, no external dependencies.',
        'proyectos.historia.desc': 'Complete web system for recording and consulting medical records. Vaccination, development, growth charts.',
        'proyectos.docente.desc': 'Interactive neonatology infographics, audio generation with TTS, educational videos with automated narration.',
        'proyectos.app.title': 'Clinical App',
        'proyectos.app.desc': 'Clinical tool in development. Designed to solve specific day-to-day problems in neonatology.',
        'proyectos.plataforma.title': 'Educational Platform',
        'proyectos.plataforma.desc': 'Interactive medical education platform. Coming soon.',
        'tag.desarrollo': 'In development',
        'pub.eyebrow': 'Research',
        'pub.title': 'Scientific publications',
        'pub.en.cta': 'Browse the full list of publications on ORCID.',
        'pub.en.btn': 'View on ORCID',
        'stack.eyebrow': 'Stack',
        'stack.title': 'Tools and technologies',
        'stack.herramientas': 'Tools',
        'stack.clinico': 'Clinical',
        'stack.pill.ia': 'Generative AI',
        'stack.pill.curvas': 'Growth charts',
        'stack.pill.neonatologia': 'Neonatology',
        'contacto.eyebrow': 'Contact',
        'contacto.title': "Let's talk",
        'contacto.text': 'Collaboration, health-tech projects, or just connecting? Write to me.',
        'footer.built': '© 2026 Carlos Alberto Leyva Proenza. Built with vanilla HTML, CSS, and JavaScript.'
    }
};

function getDefaultLang() {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
    const nav = navigator.language || (navigator.languages && navigator.languages[0]) || 'es';
    return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function applyLang(lang) {
    const dict = I18N[lang] || I18N.es;

    document.documentElement.lang = lang;
    document.title = dict['meta.title'];

    document.querySelectorAll('[data-lang-meta]').forEach(meta => {
        meta.content = meta.dataset.langMeta === 'title' ? dict['meta.title'] : dict['meta.desc'];
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.dataset.i18nAria;
        if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    const pubList = document.querySelector('.pub-list');
    const pubEnCta = document.querySelector('.pub-en-cta');
    if (pubList) pubList.hidden = lang === 'en';
    if (pubEnCta) pubEnCta.hidden = lang !== 'en';

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

    localStorage.setItem('lang', lang);
}

applyLang(getDefaultLang());
