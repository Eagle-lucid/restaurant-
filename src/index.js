
import  generateContent from "./home.js";
generateContent();

// Function to scroll to section by ID (global function)
window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};