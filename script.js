document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById('lang-btn');
    const langList = document.getElementById('lang-list');
    const langDropdown = document.getElementById('lang-dropdown');

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

        const placeholderElements = document.querySelectorAll('[data-tr-placeholder]');
        placeholderElements.forEach(el => {
            const targetPlaceholder = el.getAttribute(`data-${lang}-placeholder`);
            if (targetPlaceholder) {
                el.setAttribute('placeholder', targetPlaceholder);
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

    const elements = document.querySelectorAll('.photo, .dyn-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.15, 
        rootMargin: "-72px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));

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

    // ==== İLETİŞİM FORMU ====
const CONTACT_FUNCTION_URL = 'https://milat-ve-otesi.netlify.app/.netlify/functions/sendMessage';

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');
const contactSubmit = document.getElementById('contact-submit');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        contactStatus.textContent = '';
        contactStatus.className = 'contact-status';

        if (!email || !message) {
            contactStatus.textContent = (currentLang === 'tr')
                ? 'Lütfen tüm alanları doldurun.'
                : 'Please fill in all fields.';
            contactStatus.classList.add('error');
            return;
        }

        contactSubmit.disabled = true;
        const originalLabel = contactSubmit.textContent;
        contactSubmit.textContent = (currentLang === 'tr') ? 'Gönderiliyor...' : 'Sending...';

        try {
            const response = await fetch(CONTACT_FUNCTION_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message })
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.error || 'Gönderim başarısız oldu.');
            }

            contactStatus.textContent = (currentLang === 'tr')
                ? 'Mesajınız gönderildi, teşekkürler!'
                : 'Your message has been sent, thank you!';
            contactStatus.classList.add('success');
            contactForm.reset();
        } catch (err) {
            console.error('İletişim formu hatası:', err);
            contactStatus.textContent = (currentLang === 'tr')
                ? 'Mesaj gönderilemedi, lütfen tekrar deneyin.'
                : 'Message could not be sent, please try again.';
            contactStatus.classList.add('error');
        } finally {
            contactSubmit.disabled = false;
            contactSubmit.textContent = originalLabel;
        }
    });
}

    const yazi = document.getElementById('ozel-yazi');
    if (yazi) {
        yazi.addEventListener('click', (event) => {
            if (event.detail === 20) {
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'; 
            }
        });
    }
});