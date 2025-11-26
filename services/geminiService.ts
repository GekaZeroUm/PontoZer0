import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedCopy } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingCopy = async (niche: string, productType: string): Promise<GeneratedCopy[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Gere 3 ideias de copy (Headline, Subheadline e CTA) para uma landing page de alta conversão.
      
      Nicho: ${niche}
      Tipo de Produto: ${productType}
      
      O tom deve ser persuasivo, urgente e profissional. Focado em quebrar objeções de iniciantes ou compradores impulsivos via tráfego direto.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING, description: "Uma manchete curta e impactante" },
              subheadline: { type: Type.STRING, description: "Uma descrição complementar que gera desejo" },
              cta: { type: Type.STRING, description: "Texto curto para o botão de ação" }
            },
            required: ["headline", "subheadline", "cta"]
          }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    return JSON.parse(jsonText) as GeneratedCopy[];
  } catch (error) {
    console.error("Erro ao gerar copy:", error);
    return [];
  }
};