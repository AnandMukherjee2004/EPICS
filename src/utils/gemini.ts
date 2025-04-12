import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getChatResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(`
You are a water quality expert assistant.

Please provide helpful advice in clean, readable **plaintext only**.
- Do NOT use Markdown formatting
- Do NOT use asterisks (*), bold (**), or headings (###)
- Use regular spacing, line breaks, and punctuation for clarity

User question: ${prompt}

Respond in plain human language without special formatting.
    `);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
  }
}
