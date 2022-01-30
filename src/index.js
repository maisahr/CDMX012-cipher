import cipher from './cipher.js';

// Se muestra secCifrar
function desplegarCifrar(){
    document.getElementById("secDescifrar").style.display = "none";
    document.getElementById("secCifrar").style.display = "block";
}

let btnParaCifrar = document.getElementById("btnParaCifrar"); 
btnParaCifrar.addEventListener("click", desplegarCifrar);

// Se muestra secDescifrar
function desplegarDescifrar(){
    document.getElementById("secCifrar").style.display = "none";
    document.getElementById("secDescifrar").style.display = "block";
}

let btnParaDescifrar = document.getElementById("btnParaDescifrar");
btnParaDescifrar.addEventListener("click", desplegarDescifrar);

// Cifrar mensaje
function cifrar(){ 
    let mensajeCifrar = document.getElementById("mensajeCifrar").value.toUpperCase();
    let numDesplaza = Number(document.getElementById("desplazaC").value);

    document.getElementById("msjCifrado").innerHTML = cipher.encode(numDesplaza, mensajeCifrar);  
}

let btnCifrar = document.getElementById("cifrar");
btnCifrar.addEventListener("click", cifrar);

// Descifrar mensaje
function descifrar(){
    let mensajeDescifrar = document.getElementById("mensajeDescifrar").value.toUpperCase();
    let numDesplaza = Number(document.getElementById("desplazaD").value);

    document.getElementById("msjDescifrado").innerHTML = cipher.decode(numDesplaza, mensajeDescifrar);
}

let btnDescifrar = document.getElementById("descifrar");
btnDescifrar.addEventListener("click", descifrar);

// Copiar mensaje cifrado
function copiar(){
    let texto = document.getElementById("msjCifrado").value;
    navigator.clipboard.writeText(texto);
    document.getElementById("avisoCopiado").innerHTML = "¡Mensaje copiado!";
}

let btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click", copiar);