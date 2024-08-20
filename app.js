const mappings = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encryptText() {
    let textArea = document.getElementById("textArea").value;
    let encryptedText = textArea.replace(/[eioua]/g, function(match) {
        return mappings[match];
    });
    document.getElementById("salida").innerText = encryptedText;
    document.getElementById("botonCopiar").disabled = false;
}

function decryptText() {
    let textArea = document.getElementById("textArea").value;
    let decryptedText = textArea;
    for (let key in mappings) {
        let regex = new RegExp(mappings[key], "g");
        decryptedText = decryptedText.replace(regex, key);
    }
    document.getElementById("salida").innerText = decryptedText;
    document.getElementById("botonCopiar").disabled = false;
}

function copyToClipboard() {
    const outputText = document.getElementById("salida").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado");
    });
}