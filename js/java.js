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
    // save user preferences
    localStorage.setItem("theme",newTheme);

}

// ---- ---- ---- ---- ---- ---- ---- ---- ENCRYPT BUTTON ---- ---- ---- ---- ---- ----- ---- ----//
function encrypt() {
    document.getElementById("show-result1").style.display="none";
    document.getElementById("show-result2").style.display="flex";
}

let encryptKeys = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
const encrypBtn = document.getElementById("encrypt-btn");
let insertedText = document.getElementById("input-area");

encrypBtn.addEventListener("click",function(){

    insertedText.value = insertedText.value.toLowerCase();
    
    for (let i = 0; i < encryptKeys.length; i++) {
        if (insertedText.value.includes(encryptKeys[i][0])) {
            insertedText.value = insertedText.value.replaceAll(encryptKeys[i][0],encryptKeys[i][1]);
        }
        encryptedResult.textContent = insertedText.value
    }
    insertedText.value = "";
})

// ---- ---- ---- ---- ---- ---- ---- ---- DECRYPT BUTTON ---- ---- ---- ---- ---- ----- ---- ----//
const decryptBtn = document.getElementById("decrypt-btn");

decryptBtn.addEventListener("click",function(){

    for (let i = 0; i  < encryptKeys.length; i++) {
        if (encryptedResult.textContent.includes(encryptKeys[i][1])) {
            encryptedResult.textContent = encryptedResult.textContent.replaceAll(encryptKeys[i][1],encryptKeys[i][0]);
        }
        insertedText.value = encryptedResult.textContent;
    }
    encryptedResult.textContent = "";
})

// ---- ---- ---- ---- ---- ---- ---- ---- COPY BUTTON + PROMPT ---- ---- ---- ---- ---- ----- ---- ----//
let copyButton = document.getElementById("copy-button");
let encryptedResult = document.getElementById("encrypted-result");

copyButton.addEventListener("click",function() {
    navigator.clipboard.writeText(encryptedResult.value);

    document.getElementById("copied-prompt").style.opacity="90%";

    setTimeout(() => {
        document.getElementById("copied-prompt").style.opacity="0%";
    }, 1000);
})


