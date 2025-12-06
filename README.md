# EWU UniGuide - Chrome Extension

A bilingual (English/বাংলা) chatbot assistant for the East West University CSE Department.

## Features

- 💬 Floating chat widget (bottom-right corner)
- 🌐 Bilingual support (English & বাংলা)
- ⚡ Instant answers about admissions, fees, faculty, courses
- 🎯 Site-specific (only shows on EWU websites)
- 📱 Responsive design
- ⌨️ Typing animation effect

## Installation

### Method 1: Load as Unpacked Extension (Developer Mode)

1. Download/clone this folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select this `chrome-extension` folder
6. The extension icon will appear in your toolbar

### Method 2: Install from ZIP

1. Download the extension as a ZIP file
2. Extract to a folder
3. Follow steps 2-6 above

## Usage

1. Visit any EWU website:
   - https://fse.ewubd.edu/computer-science-engineering
   - https://ewubd.edu
   
2. A chat button (💬) will appear in the bottom-right corner

3. Click to open the chatbot

4. Select your language and start chatting!

## Files Structure

```
chrome-extension/
├── manifest.json      # Extension configuration
├── content.js         # Injects widget into pages
├── chatbot.js         # Chatbot logic
├── widget.css         # Widget styles
├── knowledge.js       # English knowledge base
├── knowledge_bn.js    # Bangla knowledge base
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## Supported Websites

- `fse.ewubd.edu/*`
- `ewubd.edu/*`
- `www.ewubd.edu/*`

## Sample Questions

**English:**
- "What is the tuition fee?"
- "Show me the faculty list"
- "How to apply for admission?"
- "What scholarships are available?"

**বাংলা:**
- "টিউশন ফি কত?"
- "শিক্ষক তালিকা দেখান"
- "ভর্তি প্রক্রিয়া কী?"
- "কী কী বৃত্তি আছে?"

## Developer

**Sarfaraz Ahamed Shovon**

## Version

1.0.0
