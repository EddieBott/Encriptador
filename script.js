const areaTexto = document.querySelector(".area_texto");
const mensaje = document.querySelector(".mensaje");
const muneco = document.querySelector(".muneco")
const mensajeInfo = document.querySelector(".mensaje__info")
const copiar = document.querySelector(".copiar")
const derecha = document.querySelector(".derecha")

    function btnEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    if (textoEncriptado != "") {
    mensaje.value = textoEncriptado
    areaTexto.value = "";
    muneco.classList.add("ocultar");
    mensajeInfo.style.display = "none";
    copiar.style.display = "block";
    derecha.classList.add("ajuste");
    mensaje.classList.add("ajustar");
    }
    else {
        alert("Por favor ingrese texto.");
}
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoDesencriptado = desencriptar(areaTexto.value);
    if (textoDesencriptado != ""){
    mensaje.value = textoDesencriptado
    areaTexto.value = "";
    muneco.classList.add("ocultar");
    mensajeInfo.style.display = "none";
    copiar.style.display = "block";
    derecha.classList.add("ajuste");
    mensaje.classList.add("ajustar");
    }
    else {
        alert("Por favor ingrese texto.")
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function btnCopiar(){
    let texto = mensaje;
    navigator.clipboard.writeText(texto.value);
    alert("El texto fue copiado correctamente.");
    mensaje.value = "";
    copiar.style.display = "none";
    mensajeInfo.style.display = "block";
    muneco.classList.remove("ocultar");
    derecha.classList.remove("ajuste");
    mensaje.classList.remove("ajustar");
    areaTexto.focus();
    
    
    

}