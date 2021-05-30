var frase;
var respuesta;
recognition.onresult = (event) => {
    const results = event.results;
    frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    respuesta = "";
    var numerorandom = Math.floor(Math.random() * 11);
    var numerorandom2 = Math.floor(Math.random() * 4);
    // simplificar comando
    cmd = cmd.toLowerCase();
    cmd = cmd.replace("á", "a");
    cmd = cmd.replace("jehová", "jehova");
    cmd = cmd.replace("é", "e");
    cmd = cmd.replace("í", "i");
    cmd = cmd.replace("ó", "o");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ú", "u");
    cmd = cmd.replace("à", "a");
    cmd = cmd.replace("è", "e");
    cmd = cmd.replace("ì", "i");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ù", "u");
    // ----
    console.log(cmd);

    //comandos:
    comandos(cmd, frase)
    // comandos interactivos
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
    document.getElementById("textodicho").innerHTML = username+":"+frase;
    document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
    

}

    recognition.onend = function () {
        voca.setAttribute("src","img/lith_face/Lith_voca.svg");
        ojo1.classList.remove("oculto");
        ojo2.classList.remove("oculto");
        voca.classList.remove("circulo");
        window.navigator.vibrate([55])
    }
    recognitionDiadere.onend = function () {
        voca.setAttribute("src","img/lith_face/Lith_voca.svg");
        ojo1.classList.remove("oculto");
        ojo2.classList.remove("oculto");
        voca.classList.remove("circulo");
        window.navigator.vibrate([55])
    }
    recognitionHoradere.onend = function () {
        voca.setAttribute("src","img/lith_face/Lith_voca.svg");
        ojo1.classList.remove("oculto");
        ojo2.classList.remove("oculto");
        voca.classList.remove("circulo");
        window.navigator.vibrate([55])
    }

