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

    let mensajeCifrar = document.getElementById("mensajeCifrar").value.toUpperCase()
    let offsetC = Number(document.getElementById("offset").value)

    document.getElementById("letra").innerHTML = cipher.encode(offsetC, mensajeCifrar)
        
}

let btnCifrar = document.getElementById("cifrar")
btnCifrar.addEventListener("click", cifrar)

function descifrar(){

    let mensajeDescifrar = document.getElementById("mensajeDescifrar").value.toUpperCase()
    let offsetD = Number(document.getElementById("offsetD").value)

    document.getElementById("letraD").innerHTML = cipher.decode(offsetD, mensajeDescifrar)
}

let btnDescifrar = document.getElementById("descifrar")

btnDescifrar.addEventListener("click", descifrar)

function copiar(){
    let texto = document.getElementById("letra")
    texto.select()
    navigator.clipboard.writeText(texto.value)
    document.getElementById("avisoCopiado").innerHTML = "¡Mensaje copiado!"
}

let btnCopiar = document.getElementById("copiar")
btnCopiar.addEventListener("click", copiar)