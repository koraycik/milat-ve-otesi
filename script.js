document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById('lang-btn');
    const langList = document.getElementById('lang-list');
    const langDropdown = document.getElementById('lang-dropdown');

    // Hafızadan mevcut dili al, yoksa 'tr' seç
    let currentLang = localStorage.getItem('site-lang') || 'tr';

    applyLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const expanded = langBtn.getAttribute('aria-expanded') === 'true';
            langBtn.setAttribute('aria-expanded', String(!expanded));
            if (langList) langList.hidden = expanded;
        });
    }

    if (langList) {
        langList.addEventListener('click', (e) => {
            const li = e.target.closest('[data-lang]');
            if (!li) return;
            const lang = li.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('site-lang', currentLang);
            applyLanguage(currentLang);
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
            langList.hidden = true;
        });
    }

    document.addEventListener('click', (e) => {
        if (!langDropdown) return;
        if (!langDropdown.contains(e.target)) {
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
            if (langList) langList.hidden = true;
        }
    });

    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-tr]');

        elements.forEach(el => {
            const targetText = el.getAttribute(`data-${lang}`);
            if (targetText) {
                el.textContent = targetText;
            }
        });

        if (langBtn) {
            langBtn.textContent = (lang === 'tr') ? 'TR' : 'EN';
        }

        if (langList) {
            const options = langList.querySelectorAll('[data-lang]');
            options.forEach(opt => {
                const is = opt.getAttribute('data-lang') === lang;
                opt.setAttribute('aria-selected', String(is));
            });
        }

        document.documentElement.lang = lang;
    }

    // ============ HEM ÜSTTEN HEM ALTTAN BÖLGENİ KORUYAN ANİMASYON ============
    const elements = document.querySelectorAll('.photo, .dyn-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Eleman üst menü ile ekran altı arasındaki görünür alandaysa sınıfı ekle
                entry.target.classList.add('visible');
            } else {
                // Eleman üst menünün altına girdiğinde VEYA ekranın en altından çıktığında sınıfı kaldır (bulanıklaşsın/gizlensin)
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.15, 
        /* 
           -72px: Üst sabit menünün tam yüksekliği kadardır. 
           Böylece kart menünün sınırına girdiği an yok olma efekti devreye girer.
        */
        rootMargin: "-72px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));

    // ============ HAMBURGER MENÜ ============
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============ EASTER EGG ============
    const yazi = document.getElementById('ozel-yazi');
    if (yazi) {
        yazi.addEventListener('click', (event) => {
            if (event.detail === 20) {
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'; 
            }
        });
    }
});