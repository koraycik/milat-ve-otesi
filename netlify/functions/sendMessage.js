// netlify/functions/sendMessage.js

const ALLOWED_ORIGINS = [
    'https://milat-ve-otesi.web.app',
    'https://milat-ve-otesi.firebaseapp.com',
    'https://koraycik.github.io',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3000'
];

const TO_ADDRESS = 'bakiikoray@gmail.com';

function corsHeaders(origin) {
    const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    return {
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
}

exports.handler = async (event) => {
    const origin = event.headers.origin || event.headers.Origin || '';
    const headers = corsHeaders(origin);

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Yalnızca POST istekleri kabul edilir.' }) };
    }

    let email, message;
    try {
        ({ email, message } = JSON.parse(event.body || '{}'));
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Geçersiz istek gövdesi.' }) };
    }

    if (!email || !message) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'E-posta ve mesaj alanları zorunludur.' }) };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Geçersiz e-posta adresi.' }) };
    }
    if (message.length > 5000) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Mesaj çok uzun.' }) };
    }

    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('HATA: Netlify paneline RESEND_API_KEY eklenmemiş!');
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Sunucu yapılandırma hatası (API Key eksik).' }) };
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Milat ve Otesi Site <onboarding@resend.dev>',
                to: [TO_ADDRESS],
                reply_to: email,
                subject: 'Web Sitesinden Yeni Mesaj — Milat ve Otesi',
                text: `Gönderen e-posta: ${email}\n\nMesaj:\n${message}`
            })
        });

        if (!resendResponse.ok) {
            const errText = await resendResponse.text();
            console.error('Resend API hatası:', errText);
            return { statusCode: 502, headers, body: JSON.stringify({ error: 'Mesaj gönderilemedi, lütfen tekrar deneyin.' }) };
        }

        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } catch (err) {
        console.error('sendMessage fonksiyon hatası:', err);
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Sunucu hatası oluştu.' }) };
    }
};