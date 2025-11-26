import { GoogleGenAI } from "@google/genai";

// NOTE: In a production app, the API key should be handled via a backend proxy.
// For this client-side demo, we assume the environment variable is injected.
const apiKey = process.env.GEMINI_API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string, 
  context?: string
): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please check your configuration.";
  }

  try {
    const systemInstruction = `
      You are an expert English Tutor helper for a Grade 10 student in Vietnam using the "Global Success" textbook.
      Your goal is to help the student understand vocabulary, grammar, and solve exercises related to the book.
      
      If the user provides context (such as the current Unit they are studying), tailor your answers to that topic.
      
      Tone: Encouraging, clear, educational, and friendly.
      Language: Respond in Vietnamese to explain difficult concepts, but use English for examples and corrections unless asked otherwise.
      
      Current Study Context: ${context || "General English"}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the AI tutor right now. Please try again later.";
  }
};
