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

// ---- ---- ---- ---- ---- ---- ---- ---- ENCRYPT BUTTON ---- ---- ---- ---- ---- ----- ---- ----//
let encryptKeys = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
const encrypBtn = document.getElementById("encrypt-btn");
let insertedText = document.getElementById("input-area");

encrypBtn.addEventListener("click",function(){

    insertedText.value = insertedText.value.toLowerCase();
    
    for (let i = 0; i < encryptKeys.length; i++) {
        if (insertedText.value.includes(encryptKeys[i][0])) {
            encryptedResult.textContent = insertedText.value.replaceAll(encryptKeys[i][0],encryptKeys[i][1]);
        }        
    }
    
    insertedText.value = "";
})

// ---- ---- ---- ---- ---- ---- ---- ---- DECRYPT BUTTON ---- ---- ---- ---- ---- ----- ---- ----//
const decryptBtn = document.getElementById("decrypt-btn");

decryptBtn.addEventListener("click",function(){

    for (let i = 0; i  < encryptKeys.length; i++) {
        if (encryptedResult.textContent.includes(encryptKeys[i][1])) {
            insertedText.value = encryptedResult.textContent.replaceAll(encryptKeys[i][1],encryptKeys[i][0]);
        }
    }
})

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


