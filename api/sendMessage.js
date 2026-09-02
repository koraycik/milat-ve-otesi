const TO_ADDRESS = 'milatveotesi@gmail.com'; 

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Yalnızca POST istekleri kabul edilir.' });
    }

    const { email, message } = req.body || {};

    if (!email || !message) {
        return res.status(400).json({ error: 'E-posta ve mesaj alanları zorunludur.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Geçersiz e-posta adresi.' });
    }

    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return res.status(500).json({ error: 'RESEND_API_KEY bulunamadı (Environment Variable eksik).' });
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
            return res.status(502).json({ error: 'Resend servisi hatası.', details: errText });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ error: 'Sunucu hatası oluştu.', details: err.message });
    }
}