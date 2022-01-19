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
    let i = 0
    let mensajeCifrar = document.getElementById("mensajeCifrar").value
    let offset = Number(document.getElementById("offset").value)
    let acumulaMensaje = ""

    while(i < mensajeCifrar.length){
        let letra = mensajeCifrar.slice(i, i + 1)
        let letraASCII = Number(letra.charCodeAt())
        let formula = cipher.encode(letraASCII, offset)
        let letraNueva = String.fromCharCode(formula)
        acumulaMensaje += letraNueva
        i ++
        
        if(i == mensajeCifrar.length){
            document.getElementById("letra").innerHTML = acumulaMensaje
        }
    }
}

let btnCifrar = document.getElementById("cifrar")
btnCifrar.addEventListener("click", cifrar)

function descifrar(){
    let i = 0
    let mensajeDescifrar = document.getElementById("mensajeDescifrar").value
    let offsetD = Number(document.getElementById("offsetD").value)
    let acumulaMensaje = ""

    while(i < mensajeDescifrar.length){
        let letra = mensajeDescifrar.slice(i, i + 1)
        let letraASCII = Number(letra.charCodeAt())
        let formula = cipher.decode(letraASCII, offsetD)
        let letraNueva = String.fromCharCode(formula)
        acumulaMensaje += letraNueva
        i ++

        if(i == mensajeDescifrar.length){
            document.getElementById("letraD").innerHTML = /* "Letra ASCII = " + letraASCII
            + "\n Resultado formula = " + formula 
            + "\n Mensaje = " + */ acumulaMensaje
        }
    }
}

let btnDescifrar = document.getElementById("descifrar")

btnDescifrar.addEventListener("click", descifrar)