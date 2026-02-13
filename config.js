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
            text: "One final question... Will you be my Valentine on February 14th, 2026? 😇", // Combined text
            yesBtn: "Yes!",                                             
            noBtn: "No"                                                 
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
   // Color scheme for the website
colors: {
    backgroundStart: "#89cff0",      
    backgroundEnd: "#FFFDF1",        
    buttonHover: "#9CCFFF", 
    buttonBackground: "#4ab5fd",
    textColor: "#ffffff",  // Changed from white to blue so text is visible
},
// ^^^ REMOVE THE EXTRA CLOSING BRACE HERE

// Animation settings
animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5,
},

// Background Music
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/db6yyiiqp/video/upload/v1770889859/magnets_bj9zkx.mp4",
    startText: "🎵",
    stopText: "🔇",
    volume: 0.5,
}
// Remove the extra closing brace here too
}

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;