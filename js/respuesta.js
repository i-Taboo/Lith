recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    var respuesta = "lo siento, parece que no e entendido";
    console.log(frase);
    
    //comandos
    if (cmd.indexOf('Hola') > -1) {
        respuesta = 'Hola como estas';
    }
    else if (cmd.indexOf('¿Cómo estás?') > -1) {
        respuesta = '¡Muy bien! ¡Gracias por preguntar!, ¿Y tu?';
    } 
    else if (cmd.indexOf('mal') > -1 || cmd.indexOf('Mal.') > -1){
        respuesta = 'Oh, como es posible que alguien como tu se pueda encontrar mal?';
    }
    else if (cmd.indexOf('bien') > -1) {
        respuesta = '¡Me alegro bastante de que estes bien!';
    }
    else if (cmd.indexOf('Mi nombre es') > -1) {
        nombre = cmd;
        str = nombre;
        nombre = str.replace("Mi nombre es", "");
        respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
    }

    

    // Bot Habla

    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
}