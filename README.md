# EWU UniGuide - Chrome Extension

[![GitHub release](https://img.shields.io/github/v/release/Shovon021/ewu-uniguide-extension?include_prereleases&label=version)](https://github.com/Shovon021/ewu-uniguide-extension/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?logo=googlechrome)](https://github.com/Shovon021/ewu-uniguide-extension)

A bilingual (English/বাংলা) chatbot assistant for the East West University CSE Department.

---

## 📥 Quick Download

**[⬇️ Download Extension (ZIP)](https://github.com/Shovon021/ewu-uniguide-extension/archive/refs/heads/main.zip)**

Or clone via Git:
```bash
git clone https://github.com/Shovon021/ewu-uniguide-extension.git
```

---

## ✨ Features

- 💬 Floating chat widget (bottom-right corner)
- 🌐 Bilingual support (English & বাংলা)
- ⚡ Instant answers about admissions, fees, faculty, courses
- 🎯 Site-specific (only shows on EWU websites)
- 📱 Responsive design
- ⌨️ Typing animation effect

## 🚀 Installation

### Step 1: Download the Extension

- **Option A:** Click the **[Download ZIP](https://github.com/Shovon021/ewu-uniguide-extension/archive/refs/heads/main.zip)** button above
- **Option B:** Clone using `git clone https://github.com/Shovon021/ewu-uniguide-extension.git`

### Step 2: Extract the ZIP (if downloaded)

Extract the downloaded `ewu-uniguide-extension-main.zip` to a folder on your computer.

### Step 3: Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the extracted `ewu-uniguide-extension-main` folder
5. ✅ The extension is now installed!

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
