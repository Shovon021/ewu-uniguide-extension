// ============================================
// EWU UniGuide Chrome Extension - Content Script
// Injects floating chat widget into the page
// ============================================

(function () {
    'use strict';

    // Prevent multiple injections
    if (document.getElementById('ewu-uniguide-widget')) return;

    console.log('EWU UniGuide: Injecting widget...');

    // Get extension URL for images
    const extUrl = typeof chrome !== 'undefined' && chrome.runtime ? chrome.runtime.getURL('') : '';

    // Create floating chat button
    const chatButton = document.createElement('div');
    chatButton.id = 'ewu-chat-button';
    chatButton.innerHTML = `
        <img src="${extUrl}images/icon48.png" alt="Chat" onerror="this.style.display='none'; this.parentElement.querySelector('.ewu-btn-icon').innerHTML='💬';">
        <span class="ewu-btn-icon"></span>
        <span class="ewu-active-dot"></span>
    `;
    chatButton.title = 'Chat with EWU UniGuide';
    document.body.appendChild(chatButton);

    // Create chat widget container
    const chatWidget = document.createElement('div');
    chatWidget.id = 'ewu-uniguide-widget';
    chatWidget.innerHTML = `
        <div class="ewu-widget-header">
            <div class="ewu-header-left">
                <img src="${extUrl}images/icon48.png" alt="Logo" class="ewu-logo" onerror="this.style.display='none';">
                <div class="ewu-header-text">
                    <span class="ewu-title">EWU UniGuide</span>
                    <span class="ewu-subtitle">CSE Assistant</span>
                </div>
            </div>
            <div class="ewu-header-right">
                <button class="ewu-icon-btn" id="ewuDarkModeBtn" title="Toggle Dark Mode">🌙</button>
                <button class="ewu-lang-btn" id="ewuLangBtn">EN</button>
                <button class="ewu-close-btn" id="ewuCloseBtn">✕</button>
            </div>
        </div>
        <div class="ewu-chat-messages" id="ewuChatMessages">
            <!-- Messages will appear here -->
        </div>
        <div class="ewu-suggestions" id="ewuSuggestions">
            <!-- Quick suggestions -->
        </div>
        <div class="ewu-chat-input">
            <input type="text" id="ewuUserInput" placeholder="Ask me anything..." autocomplete="off">
            <button class="ewu-mic-btn" id="ewuMicBtn" title="Voice Input">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12 19V23M8 23H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <button id="ewuSendBtn">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
    document.body.appendChild(chatWidget);

    // Toggle chat widget
    chatButton.addEventListener('click', function () {
        chatWidget.classList.toggle('open');
        chatButton.classList.toggle('hidden');
        if (chatWidget.classList.contains('open')) {
            const input = document.getElementById('ewuUserInput');
            if (input) input.focus();
        }
    });

    // Close button
    const closeBtn = document.getElementById('ewuCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            chatWidget.classList.remove('open');
            chatButton.classList.remove('hidden');
        });
    }

    // Language toggle button
    const langBtn = document.getElementById('ewuLangBtn');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            if (typeof window.ewuToggleLanguage === 'function') {
                window.ewuToggleLanguage();
            }
        });
    }

    // Dark Mode toggle
    const darkModeBtn = document.getElementById('ewuDarkModeBtn');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function () {
            chatWidget.classList.toggle('dark-mode');
            darkModeBtn.textContent = chatWidget.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }

    // Voice Input (Speech Recognition)
    const micBtn = document.getElementById('ewuMicBtn');
    if (micBtn) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = function () {
                micBtn.classList.add('listening');
                micBtn.title = 'Listening...';
            };

            recognition.onresult = function (event) {
                const transcript = event.results[0][0].transcript;
                const input = document.getElementById('ewuUserInput');
                if (input) {
                    input.value = transcript;
                    // Auto-send after voice input
                    const sendBtn = document.getElementById('ewuSendBtn');
                    if (sendBtn) sendBtn.click();
                }
            };

            recognition.onend = function () {
                micBtn.classList.remove('listening');
                micBtn.title = 'Voice Input';
            };

            recognition.onerror = function () {
                micBtn.classList.remove('listening');
                micBtn.title = 'Voice Input';
            };

            micBtn.addEventListener('click', function () {
                // Toggle language based on current chat language
                if (typeof window.ewuState !== 'undefined' && window.ewuState.currentLanguage === 'bn') {
                    recognition.lang = 'bn-BD';
                } else {
                    recognition.lang = 'en-US';
                }
                recognition.start();
            });
        } else {
            micBtn.style.display = 'none'; // Hide if not supported
        }
    }

    console.log('EWU UniGuide: Widget injected successfully!');
})();
