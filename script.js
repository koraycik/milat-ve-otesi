document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById('lang-btn');
    const langList = document.getElementById('lang-list');
    const langDropdown = document.getElementById('lang-dropdown');

    // Tarayıcı hafızasında dil seçimi varsa onu al, yoksa varsayılan 'tr' yap
    let currentLang = localStorage.getItem('site-lang') || 'tr';

    // Sayfa ilk yüklendiğinde hafızadaki dile göre elementleri ayarla
    applyLanguage(currentLang);

    // Toggle list visibility
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            const expanded = langBtn.getAttribute('aria-expanded') === 'true';
            langBtn.setAttribute('aria-expanded', String(!expanded));
            if (langList) langList.hidden = expanded;
        });
    }

    // Seçim yapıldığında dili uygula
    if (langList) {
        langList.addEventListener('click', (e) => {
            const li = e.target.closest('[data-lang]');
            if (!li) return;
            const lang = li.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('site-lang', currentLang);
            applyLanguage(currentLang);
            // close
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
            langList.hidden = true;
        });
    }

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!langDropdown) return;
        if (!langDropdown.contains(e.target)) {
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
            if (langList) langList.hidden = true;
        }
    });

    // Dil değiştirme fonksiyonu
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-tr]');

        elements.forEach(el => {
            const targetText = el.getAttribute(`data-${lang}`);
            if (targetText) {
                el.textContent = targetText;
            }
        });

        // Butonun üzerindeki yazıyı güncelle (görünen dil adı)
        if (langBtn) {
            langBtn.textContent = (lang === 'tr') ? 'TR' : 'EN';
        }

        // Liste üzerindeki seçim durumunu güncelle
        if (langList) {
            const options = langList.querySelectorAll('[data-lang]');
            options.forEach(opt => {
                const is = opt.getAttribute('data-lang') === lang;
                opt.setAttribute('aria-selected', String(is));
            });
        }

        // HTML etiketinin dil özniteliğini güncelle
        document.documentElement.lang = lang;
    }
});

const elements = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // observer.unobserve(entry.target); // sadece 1 kere oynasın istersen aç
    }
});
}, {
    threshold: 0.2 // %20'si görünür olunca tetiklenir
});

elements.forEach(el => observer.observe(el));



const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // menüdeki bir linke tıklayınca otomatik kapansın
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============ OYUN DİNAMİKLERİ - Scroll Reveal ============
