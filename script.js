document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById('lang-btn');

    // Tarayıcı hafızasında dil seçimi varsa onu al, yoksa varsayılan 'tr' yap
    let currentLang = localStorage.getItem('site-lang') || 'tr';

    // Sayfa ilk yüklendiğinde hafızadaki dile göre elementleri ayarla
    applyLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Dil değiştir
            currentLang = (currentLang === 'tr') ? 'en' : 'tr';

            // Hafızaya kaydet (Sayfa yenilense de dil kaybolmaz)
            localStorage.setItem('site-lang', currentLang);

            // Dili sayfaya uygula
            applyLanguage(currentLang);
        });
    }

    // Dil değiştirme fonksiyonu
    function applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-tr]');

        elements.forEach(el => {
            const targetText = el.getAttribute(`data-${lang}`);
            if (targetText) {
                el.textContent = targetText;
            }
        });

        // Butonun üzerindeki yazıyı güncelle
        if (langBtn) {
            langBtn.textContent = (lang === 'tr') ? 'EN' : 'TR';
        }

        // HTML etiketinin dil özniteliğini güncelle
        document.documentElement.lang = lang;
    }
});