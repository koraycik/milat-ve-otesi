const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const raporMetni = fs.readFileSync(path.join(__dirname, "rapor.md"), "utf8");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  // Tarayıcının gönderdiği "preflight" isteğine cevap ver
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders, body: "Sadece POST" };
  }

  const { soru } = JSON.parse(event.body);
  if (!soru) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ hata: "Soru boş olamaz" }),
    };
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-3.6-flash",
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
      headers: corsHeaders,
      body: JSON.stringify({ cevap: cevapMetni }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ hata: "Bir şeyler ters gitti" }),
    };
  }
};