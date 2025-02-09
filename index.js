
// Fun fac this a script I am reusing that I submitted to the guy who lives on the fourth floor :)

const previewArea = document.getElementById("previewArea");
const previewAreaText =document.getElementById("previewAreaText");

// Array with all of the reviews in HTML
const reviews = [
    "Ojārs said that Zird is a good IT specialist and historian.",
    "Karo said that Zird is generous, sarcastic and helpful.",
    "Eduards said that Zird does not suck at the game VALORANT."
];
let currentReview = 0;

document.addEventListener("DOMContentLoaded", function() { // When webpage loaded

    setInterval( // every 5000ms ( 5 seconds)
        function cycleReviews() {
            previewAreaText.style.animation = "fadeOut 1s"; // Start fade out
            setTimeout(() => {
                previewAreaText.innerHTML = reviews[currentReview]; // Update text
                previewAreaText.style.animation = "fadeIn 1s"; // Start fade in
                
                currentReview++; // Move to next review
                if (currentReview >= reviews.length) {
                    currentReview = 0; // Loop back to start
                }
            }, 900); // Wait before changing text
        }
    ,5000);
});