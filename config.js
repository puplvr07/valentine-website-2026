// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Dan Rodrick Soriano",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 🩵",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🩵', '💙', '🩵', '💙', '🩵'],  // Heart emojis
        bears: ['💙', '🩵']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            subtext: "",                                                // Optional subtext (leave empty if not needed)
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
        },
        second: {
            text: "On a scale of 1 to 10,000...",                      // Main question text
            subtext: "how much do you 💙 me?",                         // Subtext (appears below main text)
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next "                                         // Text for the next button
        },
        third: {
            text: "One final question...\nWill you be my Valentine on February 14th, 2026? 😇",                             // Main question text
            subtext: "Will you be my Valentine on February 14th, 2026? 😇", // Subtext (the actual question)
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },
    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "weh???",
        high: "leget? ☺️",  // Shows when they go past 5000%
        normal: "lamat boi",
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "thankssomuch",
        message: "kunin m na gift m😍",
        emojis: "🩵🩵🩵🩵🩵🩵",
              // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#89cff0",      
        backgroundEnd: "#FFFDF1",        
        buttonHover: "#9CCFFF",         
        textColor: "#0992C2",            

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5,         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/db6yyiiqp/video/upload/v1770889859/magnets_bj9zkx.mp4", // Music streaming URL
        startText: "🎵",        // Button text to start music
        stopText: "🔇",         // Button text to stop music
        volume: 0.5 ,                       // Volume level (0.0 to 1.0)
    }
}
}
// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;