// ---- ---- ---- ---- ---- ---- ---- ---- DARK/LIGHT MODE ---- ---- ---- ---- ---- ----- ---- ----//

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

// ---- ---- ---- ---- ---- ---- ---- ---- COPY BUTTON + PROMPT ---- ---- ---- ---- ---- ----- ---- ----//

let copyButton = document.getElementById("copy-button");
let encryptedResult = document.getElementById("encrypted-result");

copyButton.addEventListener("click",function() {
    let selection = window.getSelection();
    selection.selectAllChildren(encryptedResult);
    document.execCommand("copy");

    document.getElementById("copied-prompt").style.opacity="90%";

    setTimeout(() => {
        document.getElementById("copied-prompt").style.opacity="0%";
    }, 1000);
})
