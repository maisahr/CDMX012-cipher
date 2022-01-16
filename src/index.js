import cipher from './cipher.js';

console.log(cipher);

function displayCifrar(){
    document.getElementById("secDescifrar").style.display = "none"
    document.getElementById("secCifrar").style.display = "block"
}

let btnParaCifrar = document.getElementById("btnParaCifrar")

btnParaCifrar.addEventListener("click", displayCifrar)

function displayDescifrar(){
    document.getElementById("secCifrar").style.display = "none"
    document.getElementById("secDescifrar").style.display = "block"
}

let btnParaDescifrar = document.getElementById("btnParaDescifrar")

btnParaDescifrar.addEventListener("click", displayDescifrar)

function cifrar(){
    let mensajeCifrar = document.getElementById("mensajeCifrar").value
    let offset = Number(document.getElementById("offset").value)
    let letraASCII = Number(mensajeCifrar.charCodeAt())
    let formula = ((letraASCII - 65) + offset) % 26 + 65
    let letraNueva = String.fromCharCode(formula)
    document.getElementById("letra").innerHTML = letraNueva
}

let btnCifrar = document.getElementById("cifrar")

btnCifrar.addEventListener("click", cifrar)