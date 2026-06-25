# 🚀 GenAI Local Business

### AI-Powered Marketing Assistant for Local Businesses

GenAI Local Business is an AI-powered marketing assistant that helps small businesses create professional marketing campaigns within seconds.

The application generates posters, social media captions, SEO-friendly hashtags, multilingual marketing content, and image prompts using Large Language Models (LLMs) and AI image generation models.

Designed for local shops, restaurants, cafés, and small businesses, the platform reduces the time and cost required to create engaging promotional content.

---

# 🌍 Problem Statement

Many local businesses struggle to create high-quality marketing content because they lack:

* Professional designers
* Marketing expertise
* Time to create promotional campaigns
* Multi-language support for local audiences

As a result, many businesses fail to maintain an active online presence.

---

# 💡 Solution

GenAI Local Business enables business owners to generate complete marketing campaigns with a single prompt.

Users simply describe their business, choose a campaign tone, and the AI generates:

* Marketing posters
* Social media captions
* SEO-friendly hashtags
* Localized translations
* Image generation prompts

allowing businesses to create promotional content within seconds.

---

# ✨ Features

## 🎨 AI Poster Generation

Generate visually appealing campaign posters using AI image generation models.

---

## ✍️ AI Marketing Copy

Generate engaging:

* Instagram captions
* Facebook posts
* WhatsApp promotional text
* Print-ready campaign descriptions

---

## 📢 SEO-Friendly Hashtags

Automatically generates context-aware hashtags designed to improve discoverability and engagement.

---

## 🌐 Multi-Language Support

Marketing content can be generated in:

* English
* Tamil
* Hindi
* Telugu

making campaigns accessible to diverse local audiences.

---

## 🧠 AI Image Prompt Generation

The application creates optimized prompts that are used by image generation models to produce campaign posters.

---

## ⚡ Smart Fallback Engine

If API keys are unavailable, the application automatically switches to a built-in cultural dictionary and rule-based generation system, ensuring the application remains functional.

---

# 🏗️ Application Workflow

```text
Business Details
        │
        ▼
Campaign Goal
        │
        ▼
Groq Llama 3.1
        │
        ▼
Generate

• Marketing Caption
• Hashtags
• Poster Prompt
• Multi-language Copy

        │
        ▼
FLUX Image Generation
        │
        ▼
Marketing Poster
```

---

# 🛠️ Tech Stack

## Frontend

* React 19
* Vite
* Vanilla CSS
* Glassmorphism UI

---

## AI Models

### Text Generation

* Groq API
* Llama 3.1 8B Instant

### Image Generation

* Hugging Face Serverless Inference
* FLUX.1 Schnell

### Fallback

* Pollinations AI FLUX Engine

---

# 📂 Project Structure

```text
GenAI-Local-Business
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── services/
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 📸 Screenshots

## Home Page

> <img width="694" height="662" alt="image" src="https://github.com/user-attachments/assets/22005840-6ef3-4724-98a6-571e29a131e9" />


---

## Input Page

> <img width="644" height="853" alt="image" src="https://github.com/user-attachments/assets/fa1e1527-5462-4519-bff9-b165474a35a5" />

---

## Output

> <img width="973" height="834" alt="image" src="https://github.com/user-attachments/assets/af473eeb-8082-4184-9fbc-046488908ddf" />

> <img width="970" height="957" alt="image" src="https://github.com/user-attachments/assets/0286942d-e35f-432f-81da-15c3480e7957" />


# ▶️ Installation

Clone the repository

```bash
git clone https://github.com/801PEC/GenAI-Local-Business.git
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```text
http://localhost:5173
```

---

# 📚 AI Workflow

The application uses multiple AI services to build a complete marketing campaign.

1. User enters business details.

2. Groq Llama 3.1 generates:

* Marketing captions
* Campaign descriptions
* Hashtags
* Localized content

3. The generated prompt is sent to FLUX image generation.

4. A marketing poster is created.

5. If AI services are unavailable, the system automatically falls back to a rule-based cultural dictionary.

---

# 🎯 What I Learned

Building this project helped me gain experience with:

* Large Language Models (LLMs)
* Prompt Engineering
* AI Image Generation
* React Application Development
* API Integration
* Multi-language Content Generation
* AI Workflow Design
* Frontend UI Development

---

# 🔮 Future Improvements

* Business Logo Generation
* Brand Color Detection
* Video Advertisement Generation
* Campaign Scheduling
* Social Media Publishing
* User Accounts & Saved Campaigns
* Analytics Dashboard

---

# 👨‍💻 Author

**Mohamed Ansari**

🎓 B.E Computer Science & Engineering

📚 IIT Madras BS Degree in Programming & Data Science

GitHub: https://github.com/801PEC

---

⭐ If you found this project useful, consider giving it a star.
