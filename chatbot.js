// ============================================
// EWU UniGuide Chrome Extension - Chatbot Logic
// ============================================

// Configuration
const EWU_CONFIG = {
    typingSpeed: 15,
    botDelay: 600
};

// State (global for voice input language detection)
window.ewuState = {
    currentLanguage: null,
    typingAnimationId: 0,
    extUrl: ''
};
const ewuState = window.ewuState;

// Set extension URL
if (typeof chrome !== 'undefined' && chrome.runtime) {
    ewuState.extUrl = chrome.runtime.getURL('');
}

// Language Config
const EWU_LANG = {
    en: {
        greeting: `Hello! I am <strong>EWU UniGuide</strong>. How can I help you today?<br><br>I can assist you with:<br>• Admission & Programs<br>• Fees & Scholarships<br>• Faculty & Contacts<br>• Lab Facilities`,
        placeholder: "Ask me anything...",
        fallback: `I can't find that information. Please visit: <a href="https://fse.ewubd.edu/computer-science-engineering" target="_blank">EWU CSE Website</a>`,
        outOfScope: "I'm designed to help only with EWU-related queries.",
        invalidCourse: "Course not found. Check if the code is correct (e.g., CSE103).",
        selectLang: "Please select your language:"
    },
    bn: {
        greeting: `হ্যালো! আমি <strong>EWU UniGuide</strong>। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?<br><br>আমি আপনাকে সাহায্য করতে পারি:<br>• ভর্তি ও প্রোগ্রাম<br>• ফি ও বৃত্তি<br>• ফ্যাকাল্টি ও যোগাযোগ<br>• ল্যাব সুবিধা`,
        placeholder: "আমাকে কিছু জিজ্ঞাসা করুন...",
        fallback: `তথ্য খুঁজে পাওয়া যায়নি। অনুগ্রহ করে দেখুন: <a href="https://fse.ewubd.edu/computer-science-engineering" target="_blank">EWU CSE ওয়েবসাইট</a>`,
        outOfScope: "আমি শুধুমাত্র EWU সম্পর্কিত প্রশ্নে সাহায্য করতে পারি।",
        invalidCourse: "কোর্স পাওয়া যায়নি। কোডটি সঠিক কিনা দেখুন (যেমন: CSE103)।",
        selectLang: "ভাষা নির্বাচন করুন:"
    }
};

const EWU_SUGGESTIONS = {
    en: ["B.Sc. Program", "Scholarships", "Faculty List", "Tuition Fee", "Contact"],
    bn: ["বি.এসসি. প্রোগ্রাম", "বৃত্তি", "শিক্ষক তালিকা", "টিউশন ফি", "যোগাযোগ"]
};

// Avatar HTML helpers
function getBotAvatar() {
    return `<img src="${ewuState.extUrl}images/bot-avatar.png" alt="Bot" class="ewu-avatar-img" onerror="this.style.display='none'; this.parentElement.innerHTML='🤖';">`;
}

function getUserAvatar() {
    return `<img src="${ewuState.extUrl}images/user-avatar.png" alt="User" class="ewu-avatar-img" onerror="this.style.display='none'; this.parentElement.innerHTML='👤';">`;
}

// Fix image paths for extension
function fixImagePaths(html) {
    if (!html || !ewuState.extUrl) return html;
    // Replace relative image paths with extension URLs
    return html.replace(/src=['"]images\//g, `src='${ewuState.extUrl}images/`);
}

// Make functions globally accessible
window.initEWUChatbot = function () {
    const input = document.getElementById('ewuUserInput');
    const sendBtn = document.getElementById('ewuSendBtn');

    if (!input || !sendBtn) {
        console.log('EWU UniGuide: Elements not found, retrying...');
        setTimeout(window.initEWUChatbot, 100);
        return;
    }

    sendBtn.addEventListener('click', ewuHandleMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') ewuHandleMessage();
    });

    // Show language selection
    ewuShowLanguageSelection();
    console.log('EWU UniGuide: Chatbot initialized!');
};

// Language selection
function ewuShowLanguageSelection() {
    const container = document.getElementById('ewuChatMessages');
    if (!container) return;
    container.innerHTML = '';

    const msg = document.createElement('div');
    msg.className = 'ewu-message bot';
    msg.innerHTML = `
        <div class="ewu-avatar">${getBotAvatar()}</div>
        <div class="ewu-bubble">
            <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">
                ✨ Hello there!
            </div>
            <div style="color: #64748b; margin-bottom: 12px;">
                I'm your <strong>EWU CSE Assistant</strong> — ready to help you explore programs, scholarships, faculty info, and more!
            </div>
            <div style="font-size: 13px; color: #94a3b8; margin-bottom: 10px;">
                Choose your preferred language to get started:
            </div>
            <div class="ewu-lang-selection">
                <button class="ewu-lang-select-btn" id="ewuLangEn">English</button>
                <button class="ewu-lang-select-btn" id="ewuLangBn">বাংলা</button>
            </div>
        </div>
    `;
    container.appendChild(msg);

    // Add click handlers after adding to DOM
    document.getElementById('ewuLangEn').addEventListener('click', () => window.ewuSelectLanguage('en'));
    document.getElementById('ewuLangBn').addEventListener('click', () => window.ewuSelectLanguage('bn'));
}

// Select language - make global
window.ewuSelectLanguage = function (lang) {
    ewuState.currentLanguage = lang;
    const langBtn = document.getElementById('ewuLangBtn');
    const input = document.getElementById('ewuUserInput');

    if (langBtn) langBtn.textContent = lang === 'en' ? 'EN' : 'বাং';
    if (input) input.placeholder = EWU_LANG[lang].placeholder;

    const container = document.getElementById('ewuChatMessages');
    if (container) container.innerHTML = '';

    ewuDisplayBotMessage(EWU_LANG[lang].greeting, []);
    ewuShowSuggestions(EWU_SUGGESTIONS[lang]);
};

// Toggle language
window.ewuToggleLanguage = function () {
    if (!ewuState.currentLanguage) return;
    const newLang = ewuState.currentLanguage === 'en' ? 'bn' : 'en';
    window.ewuSelectLanguage(newLang);
};

// Handle user message
function ewuHandleMessage() {
    const input = document.getElementById('ewuUserInput');
    const message = input.value.trim();

    if (!message || !ewuState.currentLanguage) return;

    // Complete any ongoing typing
    ewuCompleteTyping();
    ewuState.typingAnimationId++;

    ewuDisplayUserMessage(message);
    input.value = '';

    setTimeout(() => {
        ewuProcessQuery(message);
    }, EWU_CONFIG.botDelay);
}

// Process query
function ewuProcessQuery(query) {
    const lowerQuery = query.toLowerCase();
    const lang = ewuState.currentLanguage;
    const kb = lang === 'en' ?
        (typeof EXTENDED_KNOWLEDGE_BASE !== 'undefined' ? EXTENDED_KNOWLEDGE_BASE : []) :
        (typeof BANGLA_KNOWLEDGE_BASE !== 'undefined' ? BANGLA_KNOWLEDGE_BASE : []);

    console.log('EWU UniGuide: Processing query:', query, 'KB size:', kb.length);

    // Check out of scope
    const outOfScope = ["president", "prime minister", "weather", "news", "movie", "recipe"];
    if (outOfScope.some(k => lowerQuery.includes(k))) {
        ewuDisplayBotMessage(EWU_LANG[lang].outOfScope, []);
        return;
    }

    // Check course code
    const courseMatch = lowerQuery.match(/\b(cse|mat|eng|phy)\d{3}\b/i);
    if (courseMatch) {
        const code = courseMatch[0].toLowerCase();
        const found = kb.find(e => e.keywords && e.keywords.some(k => k.toLowerCase() === code));
        if (found) {
            ewuDisplayBotMessage(fixImagePaths(found.answer), found.related || []);
        } else {
            ewuDisplayBotMessage(EWU_LANG[lang].invalidCourse, []);
        }
        return;
    }

    // Find best match
    const match = ewuFindMatch(lowerQuery, kb);
    if (match) {
        ewuDisplayBotMessage(fixImagePaths(match.answer), match.related || []);
    } else {
        ewuDisplayBotMessage(EWU_LANG[lang].fallback, []);
    }
}

// Find match
function ewuFindMatch(query, kb) {
    let best = null;
    let highestScore = 0;

    for (const entry of kb) {
        if (!entry.keywords) continue;
        let score = 0;
        for (const keyword of entry.keywords) {
            const kw = keyword.toLowerCase();
            if (query.includes(kw)) {
                score += kw.length;
                try {
                    if (new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(query)) {
                        score += kw.length;
                    }
                } catch (e) { }
            }
        }
        if (score > highestScore) {
            highestScore = score;
            best = entry;
        }
    }

    return highestScore >= 3 ? best : null;
}

// Display user message
function ewuDisplayUserMessage(message) {
    const container = document.getElementById('ewuChatMessages');
    if (!container) return;

    const msg = document.createElement('div');
    msg.className = 'ewu-message user';
    msg.innerHTML = `
        <div class="ewu-bubble">${ewuEscapeHtml(message)}</div>
        <div class="ewu-avatar">${getUserAvatar()}</div>
    `;
    container.appendChild(msg);
    ewuScrollToBottom();
}

// Display bot message with typing effect
function ewuDisplayBotMessage(message, related) {
    const container = document.getElementById('ewuChatMessages');
    if (!container) return;

    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'ewu-message bot';
    typing.id = 'ewuTypingIndicator';
    typing.innerHTML = `
        <div class="ewu-avatar">${getBotAvatar()}</div>
        <div class="ewu-bubble">
            <div class="ewu-typing-indicator">
                <div class="ewu-typing-dot"></div>
                <div class="ewu-typing-dot"></div>
                <div class="ewu-typing-dot"></div>
            </div>
        </div>
    `;
    container.appendChild(typing);
    ewuScrollToBottom();

    setTimeout(() => {
        const typingEl = document.getElementById('ewuTypingIndicator');
        if (typingEl) typingEl.remove();

        const msg = document.createElement('div');
        msg.className = 'ewu-message bot';
        msg.innerHTML = `
            <div class="ewu-avatar">${getBotAvatar()}</div>
            <div class="ewu-bubble">
                <span class="ewu-typing-text"></span><span class="ewu-typing-cursor">|</span>
            </div>
        `;
        container.appendChild(msg);

        const textEl = msg.querySelector('.ewu-typing-text');
        const cursorEl = msg.querySelector('.ewu-typing-cursor');
        const bubble = msg.querySelector('.ewu-bubble');

        textEl.setAttribute('data-full-html', message);
        textEl.setAttribute('data-animation-id', ewuState.typingAnimationId);
        msg._callback = () => {
            if (cursorEl) cursorEl.style.display = 'none';

            // Add speak button for text-to-speech
            const speakBtn = document.createElement('button');
            speakBtn.className = 'ewu-speak-btn';
            speakBtn.title = 'Read Aloud';
            speakBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.33 16.48 14.6 15.54 15.54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.07 4.93C20.94 6.8 22 9.33 22 12C22 14.67 20.94 17.2 19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            speakBtn.addEventListener('click', function () {
                if ('speechSynthesis' in window) {
                    // Stop any current speech
                    speechSynthesis.cancel();

                    // Create text from HTML (strip tags)
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = message;
                    const textToSpeak = tempDiv.textContent || tempDiv.innerText;

                    const utterance = new SpeechSynthesisUtterance(textToSpeak);
                    utterance.lang = ewuState.currentLanguage === 'bn' ? 'bn-BD' : 'en-US';
                    utterance.rate = 0.9;

                    speakBtn.classList.add('speaking');
                    utterance.onend = () => speakBtn.classList.remove('speaking');
                    utterance.onerror = () => speakBtn.classList.remove('speaking');

                    speechSynthesis.speak(utterance);
                }
            });
            bubble.appendChild(speakBtn);

            if (related && related.length > 0) {
                const relatedHtml = `
                    <div class="ewu-related">
                        <div class="ewu-related-label">Related:</div>
                        <div class="ewu-related-chips">
                            ${related.map(q => `<button class="ewu-related-chip" data-question="${q}">${q}</button>`).join('')}
                        </div>
                    </div>
                `;
                bubble.insertAdjacentHTML('beforeend', relatedHtml);
                // Add event listeners
                bubble.querySelectorAll('.ewu-related-chip').forEach(btn => {
                    btn.addEventListener('click', () => window.ewuAskQuestion(btn.dataset.question));
                });
            }
            ewuScrollToBottom();
        };

        ewuTypeText(textEl, message, 0, msg._callback, ewuState.typingAnimationId);
        ewuScrollToBottom();
    }, EWU_CONFIG.botDelay);
}

// Typing animation
function ewuTypeText(element, html, index, callback, animId) {
    if (index === 0) element.innerHTML = '';

    if (parseInt(element.getAttribute('data-animation-id')) !== ewuState.typingAnimationId) {
        return;
    }

    if (index < html.length) {
        if (html[index] === '<') {
            const tagEnd = html.indexOf('>', index);
            if (tagEnd !== -1) {
                element.innerHTML += html.substring(index, tagEnd + 1);
                setTimeout(() => ewuTypeText(element, html, tagEnd + 1, callback, animId), 0);
                return;
            }
        }
        if (html[index] === '&') {
            const entityEnd = html.indexOf(';', index);
            if (entityEnd !== -1 && entityEnd - index < 10) {
                element.innerHTML += html.substring(index, entityEnd + 1);
                setTimeout(() => ewuTypeText(element, html, entityEnd + 1, callback, animId), EWU_CONFIG.typingSpeed);
                return;
            }
        }

        element.innerHTML += html[index];
        if (index % 15 === 0) ewuScrollToBottom();
        setTimeout(() => ewuTypeText(element, html, index + 1, callback, animId), EWU_CONFIG.typingSpeed);
    } else {
        element.removeAttribute('data-full-html');
        element.removeAttribute('data-animation-id');
        if (callback) callback();
    }
}

// Complete all typing
function ewuCompleteTyping() {
    document.querySelectorAll('.ewu-typing-text[data-full-html]').forEach(el => {
        el.innerHTML = el.getAttribute('data-full-html');
        el.removeAttribute('data-full-html');
        const cursor = el.parentElement.querySelector('.ewu-typing-cursor');
        if (cursor) cursor.style.display = 'none';
        const msg = el.closest('.ewu-message');
        if (msg && msg._callback) {
            msg._callback();
            msg._callback = null;
        }
    });
}

// Show suggestions
function ewuShowSuggestions(suggestions) {
    const container = document.getElementById('ewuSuggestions');
    if (!container) return;

    container.innerHTML = '';
    suggestions.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'ewu-suggestion-chip';
        btn.textContent = s;
        btn.addEventListener('click', () => window.ewuAskQuestion(s));
        container.appendChild(btn);
    });
}

// Quick ask - make global
window.ewuAskQuestion = function (question) {
    const input = document.getElementById('ewuUserInput');
    if (input) {
        input.value = question;
        ewuHandleMessage();
    }
};

// Utilities
function ewuScrollToBottom() {
    const container = document.getElementById('ewuChatMessages');
    if (container) container.scrollTop = container.scrollHeight;
}

function ewuEscapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(window.initEWUChatbot, 200);
    });
} else {
    setTimeout(window.initEWUChatbot, 200);
}

console.log('EWU UniGuide: Script loaded');
