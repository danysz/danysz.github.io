// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // Dynamically set the copyright year in the footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
