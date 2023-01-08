//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

function encriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtCifrado = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto.charAt(i)) {
            case 'a':
                txtCifrado = txtCifrado + "ai";
              break;
            case 'e':
                txtCifrado = txtCifrado + "enter";
                break;
            case 'i':
                txtCifrado = txtCifrado + "imes";
                break;
            case 'o':
                txtCifrado = txtCifrado + "ober";
                break;
            case 'u':
                txtCifrado = txtCifrado + "ufat";
                break;
            default:
              txtCifrado = txtCifrado + texto.charAt(i);
          }
    }

    document.getElementById("doll").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("input-texto").value = "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/igm, "e");
    txtCifrado = txtCifrado.replace(/ober/igm, "o");
    txtCifrado = txtCifrado.replace(/imes/igm, "i");
    txtCifrado = txtCifrado.replace(/ai/igm, "a");
    txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("doll").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("input-texto").value = "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("texto2").innerHTML = null;
    alert("¡Se copió!")
}