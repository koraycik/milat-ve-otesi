import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).send("Sadece POST");
  }

  const { soru, lang } = req.body || {};
  if (!soru) {
    return res.status(400).json({ hata: "Soru boş olamaz" });
  }

  const dilTalimati = lang === "en"
    ? "Please answer strictly in English, regardless of the language of the question."
    : "Soru hangi dilde sorulursa sorulsun, lütfen cevabı Türkçe ver.";

  try {
    const raporMetni = fs.readFileSync(path.join(process.cwd(), "rapor.md"), "utf8");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: `Sen "Milat ve Ötesi" projesi hakkında bilgi veren bir asistansın.
Sadece aşağıdaki rapora dayanarak cevap ver. Raporda olmayan bir şey sorulursa,
bilmediğini söyle, uydurma.

${dilTalimati}

RAPOR:
${raporMetni}`,
    });

    const yanit = await model.generateContent(soru);
    const cevapMetni = yanit.response.text();

    return res.status(200).json({ cevap: cevapMetni });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ hata: "Bir şeyler ters gitti", detay: err.message });
  }
}