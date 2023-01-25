const lightModeBtn = document.querySelector("#sun-icon");
const darkModeBtn = document.querySelector("#moon-icon");

lightModeBtn.addEventListener("click", setDarkMode);
darkModeBtn.addEventListener("click", setLightMode);

function setDarkMode () {
    setUserTheme("dark");
}

function setLightMode () {
    setUserTheme("light");
}

function setUserTheme(newTheme) {
    document.documentElement.setAttribute("data-theme",newTheme);
}