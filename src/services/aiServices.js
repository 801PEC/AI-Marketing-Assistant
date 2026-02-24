/**
 * ============================
 *  GenAI-MarketAssist Services
 *  Human-Quality Multilingual Engine
 * ============================
 */

/**
 * Simulated Speech-to-Text
 */
export const speechToText = async () => {
    console.log("🎤 Starting voice recognition simulation...");

    await new Promise(resolve => setTimeout(resolve, 800));

    const recognizedText = "bakery pongal offer caption venum funny ah irukanum";
    console.log("✅ Recognized Speech:", recognizedText);

    return recognizedText;
};

/**
 * Prompt Builder (for debugging + future AI integration)
 */
export const buildPrompt = (params) => {
    const { businessType, language, tone, platform, offerDescription } = params;

    const prompt = `
User wants content for:
Business Type: ${businessType}
Language: ${language}
Tone: ${tone}
Platform: ${platform}
Offer Description: ${offerDescription}

Task:
1. Generate a culturally relevant marketing caption.
2. Generate 5 seo-friendly hashtags.
3. Generate an image prompt for a matching poster.
  `.trim();

    console.log("📝 buildPrompt():\n", prompt);
    return prompt;
};

/**
 * ====================================
 * MULTILINGUAL NATURAL TONE DICTIONARY
 * ====================================
 */

const toneEmojis = {
    Festive: "🎉✨",
    Funny: "😄😂",
    Trendy: "🔥✨",
    Professional: "📘💼"
};

const tamilTone = {
    Festive: "இந்த பண்டிகை நேரத்தை இன்னும் special ஆக்குங்க! 🎉",
    Funny: "டீ குடுத்தா தான் brain on ஆகும்! 😂☕",
    Trendy: "இப்போ trending vibes! 🔥",
    Professional: "உங்கள் busy நாளுக்கு ஒரு perfect break. ☕"
};

const hindiTone = {
    Festive: "इस त्यौहार को और खास बनाइए! 🎉",
    Funny: "चाय पियो, टेंशन छोड़ो! 😄☕",
    Trendy: "अभी trending vibes! 🔥",
    Professional: "आपके बिज़ी दिन के लिए एक perfect break. ☕"
};

const teluguTone = {
    Festive: "ఈ పండుగను మరింత special చేద్దాం! 🎉",
    Funny: "టీ తాగితేనే brain on అవుతుంది! 😂☕",
    Trendy: "ఇప్పుడు trending vibes! 🔥",
    Professional: "మీ busy రోజుకు ఒక perfect break. ☕"
};

/**
 * ====================================
 * BUSINESS-WISE CAPTION TEMPLATES
 * Clean, Human-quality, Realistic
 * ====================================
 */

const templates = {
    Bakery: ({ tone, offerDescription }) => ({
        en: `Celebrate sweetness this season! 🍰 ${offerDescription}.`,
        ta: `${tamilTone[tone]}\nஇனிப்பு நிறைந்த புது கேக்குகள் & pastries! ${offerDescription}.`,
        hi: `${hindiTone[tone]}\nस्वाद से भरा fresh केक आज ही! ${offerDescription}.`,
        te: `${teluguTone[tone]}\nతాజా కేకులు & స్వీట్స్ మీ కోసం! ${offerDescription}.`
    }),

    Boutique: ({ tone, offerDescription }) => ({
        en: `New arrivals for the season! 👗 ${offerDescription}.`,
        ta: `${tamilTone[tone]}\nபுதிய சேலை & fashion wear launch! ${offerDescription}.`,
        hi: `${hindiTone[tone]}\nनई ट्रेंडी कलेक्शन! ${offerDescription}.`,
        te: `${teluguTone[tone]}\nకొత్త ట్రెండీ డ్రెస్సులు అందుబాటులో! ${offerDescription}.`
    }),

    "Tea Shop": ({ tone, offerDescription }) => ({
        en: `Hot tea & snacks for the perfect break! ☕ ${offerDescription}.`,
        ta: `${tamilTone[tone]}\nசூடான டீ & تازா ஸ்நாக்ஸ்! ${offerDescription}.`,
        hi: `${hindiTone[tone]}\nगरमा-गरम चाय और ताज़ा स्नैक्स! ${offerDescription}.`,
        te: `${teluguTone[tone]}\nహాట్ టీ & తాజా స్నాక్స్ మీ కోసం! ${offerDescription}.`
    }),

    Salon: ({ tone, offerDescription }) => ({
        en: `Refresh your style this season! 💇‍♀️ ${offerDescription}.`,
        ta: `${tamilTone[tone]}\nபுதிய hairstyle & grooming offers! ${offerDescription}.`,
        hi: `${hindiTone[tone]}\nनया लुक पाएं! ${offerDescription}.`,
        te: `${teluguTone[tone]}\nకొత్త స్టైల్ తో మెరిసిపోండి! ${offerDescription}.`
    }),

    "Electronics Shop": ({ tone, offerDescription }) => ({
        en: `Exciting deals on electronics! 🔌 ${offerDescription}.`,
        ta: `${tamilTone[tone]}\nமின்னணு பொருட்களுக்கு சிறப்பு சலுகை! ${offerDescription}.`,
        hi: `${hindiTone[tone]}\nइलेक्ट्रॉनिक्स पर शानदार ऑफ़र्स! ${offerDescription}.`,
        te: `${teluguTone[tone]}\nఎలక్ట్రానిక్స్‌పై అదిరిపోయే డీల్స్! ${offerDescription}.`
    })
};

/**
 * ====================================
 * HASHTAGS
 * ====================================
 */
const tags = {
    Bakery: "#BakeryDeals #SweetCravings #FreshBakes #LocalBusiness",
    Boutique: "#FashionSale #TrendyWear #NewArrivals #BoutiqueStyle",
    "Tea Shop": "#ChaiLovers #TeaTime #LocalFlavours #FreshSnacks",
    Salon: "#SalonCare #NewLook #BeautyDeals #StyleRefresh",
    "Electronics Shop": "#TechDeals #SmartBuys #ElectronicsSale #GadgetStore"
};

/**
 * ====================================
 * IMAGE PROMPT TEMPLATES
 * ====================================
 */
const imagePrompts = {
    Bakery: (offerDescription, tone) =>
        `A bright bakery poster with cakes, warm colors, ${tone} theme, text: "${offerDescription}"`,

    Boutique: (offerDescription, tone) =>
        `A modern boutique poster, pastel colors, elegant ${tone} theme, text: "${offerDescription}"`,

    "Tea Shop": (offerDescription, tone) =>
        `A cozy tea shop poster with steaming cups, warm earthy tones, ${tone} vibe, text: "${offerDescription}"`,

    Salon: (offerDescription, tone) =>
        `A stylish salon poster, soft lighting, ${tone} theme, text: "${offerDescription}"`,

    "Electronics Shop": (offerDescription, tone) =>
        `A tech store poster with gadgets, neon ${tone} lighting, text: "${offerDescription}"`
};

/**
 * ====================================
 * MAIN AI LOGIC
 * ====================================
 */
import Groq from "groq-sdk";
import { HfInference } from "@huggingface/inference";

// Initialize Groq Client
const groqClient = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

/**
 * FINAL HYBRID FUNCTION:
 * - Tries Groq LLM first
 * - If it fails → falls back to rule engine
 */
export async function generateMarketingContent(data) {
    console.log("⚙ generateMarketingContent INPUT:", data);

    const { businessType, language, tone, offerDescription } = data;

    const prompt = `
Generate marketing content for a small Indian business.
Return ONLY JSON in this exact structure:

{
  "caption": "",
  "hashtags": "",
  "imagePrompt": "",
  "multiLanguageCaptions": {
      "tamil": "",
      "hindi": "",
      "telugu": "",
      "english": ""
  }
}

BUSINESS TYPE: ${businessType}
LANGUAGE: ${language}
TONE: ${tone}
OFFER: ${offerDescription}

Make sure to use use BUSINESS TYPE and LANGUAGE and TONE and OFFER given in the output.
Make sure to use BUSINESS TYPE and LANGUAGE and TONE and OFFER in image prompt and the image prompt should be like a poster.

Make captions natural, local, and culturally realistic.
Include emojis only when relevant.
    `;

    try {
        console.log("🚀 Sending request to Groq LLM...");

        const response = await groqClient.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "user", content: prompt }
            ],
            temperature: 0.7
        });

        const content = response.choices[0].message.content;
        console.log("🤖 Groq Response:", content);

        // Parse JSON output safely
        const parsed = JSON.parse(content);

        console.log("✅ Using Groq LLM output.");
        return parsed;

    } catch (error) {
        console.error("❌ Groq API failed — using fallback rules engine.", error);
    }

    // -------------------------
    // FALLBACK RULE ENGINE
    // -------------------------
    const fn = templates[businessType];

    if (!fn) {
        console.warn("⚠ Unknown business type, falling back to Bakery.");
    }

    const captions = fn({ tone, offerDescription });

    const selectedCaption = captions[{
        Tamil: "ta", Hindi: "hi", Telugu: "te", English: "en"
    }[language] || "en"];

    return {
        caption: selectedCaption,
        hashtags: tags[businessType] || "#LocalBusiness #Deal",
        imagePrompt: imagePrompts[businessType](offerDescription, tone),
        multiLanguageCaptions: captions
    };
}

/**
 * POSTER SIMULATION
 */

function sanitizePrompt(prompt) {
    return prompt
        .replace(/["'()]/g, "")       // remove quotes & brackets
        .replace(/[|]/g, "")          // remove pipes
        .replace(/\s+/g, " ")         // remove extra spaces
        .trim()
        .slice(0, 180);               // Pollinations safe limit
}

export async function generatePoster(prompt) {
    console.log("🎨 POSTER GENERATION START...");

    try {
        console.log("📡 Attempting Hugging Face via official JS SDK (FLUX Model)...");

        // The official Serverless Inference SDK automatically handles routing, provider selection, and CORS.
        const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);

        // We use black-forest-labs/FLUX.1-schnell as it is fully supported by the free tier 
        // without requiring pre-paid credits (unlike stable-diffusion endpoints which now route to Fal.ai)
        const blob = await hf.textToImage({
            model: 'black-forest-labs/FLUX.1-schnell',
            inputs: prompt,
            parameters: {
                guidance_scale: 3.5,
                num_inference_steps: 4,
            }
        });

        const url = URL.createObjectURL(blob);
        console.log("✅ SUCCESS: Image generated via Hugging Face Serverless");
        return url;

    } catch (error) {
        console.warn("⚠️ Hugging Face failed, trying Pollinations fallback...", error);

        try {
            const safePrompt = sanitizePrompt(prompt);
            const seed = Math.floor(Math.random() * 999999);
            const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(safePrompt)}?width=768&height=1024&seed=${seed}&model=flux&nologo=true`;

            console.log("✅ SUCCESS: Using Fallback URL:", url);
            return url;
        } catch (fallbackError) {
            console.error("❌ CRITICAL: All methods failed.", fallbackError);
            return `https://placehold.co/800x1200?text=AI+Service+Busy+Try+Again`;
        }
    }
}