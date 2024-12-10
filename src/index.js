//generate content and navigate globally
import  {generateContent, navigateToMenu} from "./home.js";
generateContent();
window.navigateToMenu = navigateToMenu;

// Function to scroll to section by ID (global function)
window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};