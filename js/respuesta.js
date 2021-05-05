recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    cmd = cmd.toLowerCase();
    var respuesta = "";
    console.log(cmd);
    

    micro.removeAttribute('src','img/bxs-microphone.svg');
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    
    //comandos
    if (cmd.indexOf('hola') > -1) {
        respuesta = 'Hola como estas';
    }
    else if (cmd.indexOf('cómo estás') > -1) {
        respuesta = '¡Muy bien! ¡Gracias por preguntar!, ¿Y tu?';
    } 
    else if (cmd.indexOf('mal') > -1 && cmd.indexOf("Me") >-1 || cmd.indexOf('mal.') > -1){
        respuesta = 'Oh, como es posible que alguien como tu se pueda encontrar mal?';
    }
    else if (cmd.indexOf('bien') > -1 && cmd.indexOf("Me") >-1 || cmd.indexOf('bien.') > -1) {
        respuesta = '¡Me alegro bastante de que estes bien!';
    }
    else if (cmd.indexOf('mi nombre es') > -1) {
        nombre = cmd;
        str = nombre;
        nombre = str.replace("mi nombre es", "");
        respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
    }
    else if (cmd.indexOf('¿quieres ser mi oni chan?') > -1 || cmd.indexOf("quieres ser mi onii Chan") > -1) {
        respuesta = "Usted es marica compadre";
        meta.setAttribute("content", "2;url=https://www.youtube.com/watch?v=4pa6Fht97pk")
    }
    else if (cmd.indexOf('música') > -1 && cmd.indexOf('relajante.') > -1) {
        respuesta = "Buscando musica lofi de la epoca";
        meta.setAttribute("content", "2;url=https://www.youtube.com/watch?v=c1dy_VMCVvY");     
    }

    else if (cmd. indexOf('busca en Google') > -1){
        url = cmd;
        str = url;
        url = str.replace("busca en Google", "");
        respuesta = "¡Ok"+nombre+"! buscando en google"+url;
        meta.setAttribute("content", "2;url=https://www.google.com/search?q="+url);   
    }
    else if (cmd. indexOf('busca en youtube') > -1 || cmd.indexOf("Busca en YouTube") > -1){
        url = cmd;
        str = url;
        url = str.replace("busca en youtube", ""); 
        respuesta = "¡Ok"+nombre+"! buscando en Youtube"+url;
        meta.setAttribute("content", "2;url=https://www.youtube.com/results?search_query="+url);   
    }
    else if (cmd. indexOf('quién eres') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd. indexOf("mi nombre") > -1){
        respuesta = "Tu nombre es "+nombre+" ¿Se te ha olvidado?"
    }
    else if (cmd. indexOf("nada.") > -1 || cmd. indexOf("no te preocupes") > -1  ){
        respuesta = "De acuerdo, disculpe las molestias"
    }

    else if (cmd.indexOf("abrir whatsapp") > -1){
        meta.setAttribute("content", "2;url=https://web.whatsapp.com/");
        respuesta = "¡Ok"+nombre+"! Abriendo Whatsapp Web.";

    }
    else if (cmd.indexOf("abrir facebook") > -1){
        meta.setAttribute("content", "2;url=https://es-la.facebook.com/");
        respuesta = "¡Ok"+nombre+"! Abriendo Facebook.";

    }
    else if (cmd.indexOf("abrir instagram") > -1){
        meta.setAttribute("content", "2;url=https://www.instagram.com/");
        respuesta = "¡Ok"+nombre+"! Abriendo Instagram.";

    }
    else if (cmd.indexOf("abrir twitter") > -1){
        meta.setAttribute("content", "2;url=https://twitter.com/?lang=es");
        respuesta = "¡Ok"+nombre+"! Abriendo Twitter.";

    }
    else if (cmd.indexOf("abrir discord") > -1) {
        meta.setAttribute("content", "2;url=https://discord.com/");
        respuesta = "¡Ok"+nombre+"! Abriendo Discord.";

    }
    
    else if (cmd.indexOf("modo escritura") > -1){
        meta.setAttribute("content", "2;url=voz a texto.html");
        respuesta = "¡Ok"+nombre+"! iniciando el modo escritura.";

    }





    
    // buscar lo que el usuario diga sin necesidad de google
    else if (respuesta.indexOf("") > -1){
        url = cmd;
        meta.setAttribute("content", "2;url=https://www.google.com/search?q="+url);
        respuesta = "Buscando en Google"+cmd;
    }
    // repetir por si acaso
    // if (respuesta === "lo siento, parece que no e entendido, podrias repetirlo?") {
    //     recognition.start();
    //     micro.removeAttribute('src','img/bxs-microphone-off.svg');
    //     micro.setAttribute("src","img/bxs-microphone.svg")
    // }
    // Bot Habla

    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
}