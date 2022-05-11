/*Objetos*/
var userText = document.querySelector(".mensaje-usuario");
var notFound = document.querySelector(".mensaje-no-encontrado");
var revealedMessage = document.querySelector(".mensaje-revelado");
var decrypted = document.querySelector(".mensaje-desencriptado");
var footer = document.querySelector("footer");

/*Botones*/
var copyButton = document.querySelector(".copiar");
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar")

/*Eventos*/
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
copyButton.addEventListener("click", copiarTexto);

/*Media Queries*/
var tablet = window.matchMedia("(min-width: 960px)")
var celular = window.matchMedia("(max-width: 402px)")

/*Funciones*/
function encriptar() {
    new_message = ''
    string = userText.value;
    for (let i = 0; i < string.length; i++) {
        replace = string[i]
        if (string[i] == 'e') {
            replace = "enter";
        } else if (string[i] == 'i') {
            replace = 'imes';
        } else if (string[i] == 'a') {
            replace = 'ai';
        } else if (string[i] == 'o') {
            replace = 'ober';
        } else if (string[i] == 'u') {
            replace = 'ufat';
        }
        new_message = new_message + replace;
    }
    notFound.style.display = "none";
    revealedMessage.style.display = "inline-block";
    decrypted.textContent = new_message;
    if (tablet.matches) {
        footer.style.marginTop = "63%";
    } else if (celular.matches) {
        footer.style.marginTop = "180%";
    }
    
    return new_message;
}

function desencriptar() {
    original_message = userText.value;
    while (original_message.includes("enter")) {
        original_message = original_message.replace("enter", "e");
    }
    while (original_message.includes("imes")) {
        original_message = original_message.replace("imes", "i");
    }
    while (original_message.includes("ai")) {
        original_message = original_message.replace("ai", "a");
    }
    while (original_message.includes("ober")) {
        original_message = original_message.replace("ober", "o");
    }
    while (original_message.includes("ufat")) {
        original_message = original_message.replace("ufat", "u");
    }
    notFound.style.display = "none";
    revealedMessage.style.display = "inline-block";
    console.log(original_message);
    decrypted.textContent = original_message;
    return original_message;
}

function copiarTexto() {
    if (typeof new_message !== 'undefined') {
        mensajeClipBoard = new_message;
    }
    if (typeof original_message !== 'undefined') {
        mensajeClipBoard = original_message;
    }
    navigator.clipboard.writeText(mensajeClipBoard);
    userText.value = "";
    alert("El texto se ha copiado en el portapapeles");
    userText.focus();   
}
