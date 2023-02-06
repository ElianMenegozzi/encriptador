    //funcion de encriptación
    function encriptador(texto) {
        return texto.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
    }

    //desencriptar
    function desencriptador(texto) {
        return texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    }

    //Boton de copiar
    function copyToClipBoard() {

        let content = document.getElementById('texto-encriptado');
        
        content.select();
        document.execCommand('copy');
        
        }

    // Obtenemos los elementos
    const textoAencriptar = document.getElementById("texto-a-encriptar");
    const encriptadoTexto = document.getElementById("texto-encriptado");
    const encriptarButton = document.getElementById("boton-encriptado");
    const desencriptarButton = document.getElementById("desencriptar-button");

    // Agregamos listeners a los botones
    encriptarButton.addEventListener("click", () => {
    // Al hacer clic en el botón de encriptar, encriptamos el texto y lo mostramos en el campo de texto encriptado
    encriptadoTexto.value = encriptador(textoAencriptar.value);
    encriptadoTexto.style.backgroundImage ="none"
    });

    // Agregamos listeners a los botones
    desencriptarButton.addEventListener("click", () => {
    // Al hacer clic en el botón de desencriptar, desencriptamos el texto y lo mostramos en el campo de texto desencriptado
    encriptadoTexto.value = desencriptador(textoAencriptar.value);
    });
