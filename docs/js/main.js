const toggleButton = document.getElementById("toggle-theme");
const themeStyle = document.getElementById("theme-style");

toggleButton.addEventListener("click", function() {
    if (themeStyle.getAttribute("href") === "style.css") {
        themeStyle.href = "styles-dark.css";
        document.body.classList.add("dark-mode");
    } else {
        themeStyle.href = "style.css";
        document.body.classList.remove("dark-mode");
    }
});