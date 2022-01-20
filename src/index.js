import cipher from './cipher.js';

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
    let offsetC = Number(document.getElementById("offset").value)

    let cipherCifrado = cipher.encode(offsetC, mensajeCifrar)

    document.getElementById("letra").innerHTML = cipherCifrado
        
}

let btnCifrar = document.getElementById("cifrar")
btnCifrar.addEventListener("click", cifrar)

function descifrar(){

    let mensajeDescifrar = document.getElementById("mensajeDescifrar").value
    let offsetD = Number(document.getElementById("offsetD").value)

    document.getElementById("letraD").innerHTML = cipher.decode(offsetD, mensajeDescifrar)
}

let btnDescifrar = document.getElementById("descifrar")

btnDescifrar.addEventListener("click", descifrar)