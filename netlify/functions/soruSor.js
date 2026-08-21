const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const raporMetni = fs.readFileSync(path.join(__dirname, "rapor.md"), "utf8");

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Sadece POST" };
    }

    const { soru } = JSON.parse(event.body);
    if (!soru) {
        return {
        statusCode: 400,
        body: JSON.stringify({ hata: "Soru boş olamaz" }),
        };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: `Sen "Milat ve Ötesi" projesi hakkında bilgi veren bir asistansın.
Sadece aşağıdaki rapora dayanarak cevap ver. Raporda olmayan bir şey sorulursa,
bilmediğini söyle, uydurma.

RAPOR:
${raporMetni}`,
    });

    try {
        const yanit = await model.generateContent(soru);
        const cevapMetni = yanit.response.text();
        return {
        statusCode: 200,
        body: JSON.stringify({ cevap: cevapMetni }),
        };
    } catch (err) {
        console.error(err);
        return {
        statusCode: 500,
        body: JSON.stringify({ hata: "Bir şeyler ters gitti" }),
        };
    }
};