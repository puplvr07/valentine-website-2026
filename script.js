// Initialize configuration
const config = window.VALENTINE_CONFIG;

// ============================================
// VALIDATION FUNCTIONS
// ============================================
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Valentine";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#89cff0",
        backgroundEnd: "#FFFDF1",
        buttonBackground: "#0AC4E0",
        buttonHover: "#9CCFFF",
        textColor: "#0992C2"
    };
    return defaults[key];
}

// ============================================
// INITIALIZATION
// ============================================
document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration
    validateConfig();

    // Set page title
    document.getElementById('valentineTitle').textContent = `${config.valentineName}`;
    
    // ===== FIRST QUESTION =====
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    
    // ===== SECOND QUESTION =====
    document.getElementById('question2Text').textContent = config.questions.second.text;
    
    // Set subtext if element exists
    const q2Subtext = document.getElementById('question2Subtext');
    if (q2Subtext) {
        q2Subtext.textContent = config.questions.second.subtext || '';
    }
    
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // ===== THIRD QUESTION =====
    document.getElementById('question3Text').textContent = config.questions.third.text;
    
    // Set subtext if element exists
    const q3Subtext = document.getElementById('question3Subtext');
    if (q3Subtext) {
        q3Subtext.textContent = config.questions.third.subtext || '';
    }
    
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Create floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();

    // Initialize love meter
    initLoveMeter();
});

// ============================================
// FLOATING ELEMENTS
// ============================================
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;
    
    // Clear existing elements
    container.innerHTML = '';
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.fontSize = (1 + Math.random() * 2) + 'rem';
}

// ============================================
// NAVIGATION
// ============================================
function showNextQuestion(questionNumber) {
    // Hide all question sections
    document.querySelectorAll('.question-section').forEach(q => {
        q.classList.add('hidden');
    });
    
    // Show the requested question
    const nextQuestion = document.getElementById(`question${questionNumber}`);
    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
    }
}

// Make function globally available
window.showNextQuestion = showNextQuestion;

// ============================================
// RUNAWAY BUTTON
// ============================================
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 100);
    
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.style.zIndex = '9999';
}

// Make function globally available
window.moveButton = moveButton;

// ============================================
// LOVE METER
// ============================================
let loveMeter, loveValue, extraLove;

function initLoveMeter() {
    loveMeter = document.getElementById('loveMeter');
    loveValue = document.getElementById('loveValue');
    extraLove = document.getElementById('extraLove');
    
    if (!loveMeter || !loveValue || !extraLove) return;
    
    // Set initial value
    loveMeter.value = 100;
    loveValue.textContent = '100';
    extraLove.classList.add('hidden');
    
    // Add event listener
    loveMeter.addEventListener('input', updateLoveMeter);
}

function updateLoveMeter() {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        
        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
    }
}

// ============================================
// CELEBRATION
// ============================================
function celebrate() {
    // Hide all questions
    document.querySelectorAll('.question-section').forEach(q => {
        q.classList.add('hidden');
    });
    
    // Show celebration
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Create heart explosion
    createHeartExplosion();
}

// Make function globally available
window.celebrate = celebrate;

function createHeartExplosion() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            const hearts = config.floatingEmojis.hearts;
            const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
            
            heart.innerHTML = randomHeart;
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
            heart.style.animation = 'none';
            heart.style.position = 'fixed';
            heart.style.zIndex = '9999';
            
            document.body.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// ============================================
// MUSIC PLAYER
// ============================================
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Check if music is enabled and elements exist
    if (!config.music.enabled || !musicControls || !musicToggle || !bgMusic || !musicSource) {
        if (musicControls) musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Set initial button text
    musicToggle.textContent = config.music.startText;

    // Try autoplay if enabled
    if (config.music.autoplay) {
        bgMusic.play().catch(error => {
            console.log("Autoplay prevented by browser");
        });
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}

// ============================================
// HELPER FUNCTIONS
// ============================================
// Recreate floating elements if window is resized
window.addEventListener('resize', () => {
    // Optional: reposition floating elements
    document.querySelectorAll('.heart, .bear').forEach(element => {
        element.style.left = Math.random() * 100 + 'vw';
    });
});