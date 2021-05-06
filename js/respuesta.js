recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    cmd = cmd.toLowerCase();
    var respuesta = "";
    console.log(cmd);
    

    micro.removeAttribute('src','img/bxs-microphone.svg');
   
    
    //comandos:

    // comandos interactivos
    
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
    else if (cmd. indexOf('quién eres') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd. indexOf("mi nombre") > -1){
        respuesta = "Tu nombre es "+nombre+" ¿Se te ha olvidado?"
    }
    else if (cmd. indexOf("nada.") > -1 || cmd. indexOf("no te preocupes") > -1  ){
        respuesta = "De acuerdo, disculpe las molestias"
    }



    //comandos de utilidades
                    //buscar en diversas plataformas
    else if (cmd. indexOf('busca en google') > -1){
        url = cmd;
        str = url;
        url = str.replace("busca en google", "");
        respuesta = "¡Ok"+nombre+"! buscando en google"+url;
        window.open('https://www.google.com/search?q='+url);   
    }
    else if (cmd. indexOf('busca en youtube') > -1){
        url = cmd;
        str = url;
        url = str.replace("busca en youtube", ""); 
        respuesta = "¡Ok"+nombre+"! buscando en Youtube"+url;
        window.open('https://www.youtube.com/results?search_query='+url);   
    }

                    //habrir aplicaciones y redes sociales

    else if (cmd.indexOf("abrir whatsapp") > -1 || cmd.indexOf('abre whatsapp') > -1){
        window.open('https://web.whatsapp.com/'); 
        respuesta = "¡Ok"+nombre+"! Abriendo Whatsapp Web.";

    }
    else if (cmd.indexOf("abrir facebook") > -1 || cmd.indexOf('abre facebook') > -1){
        window.open('https://www.facebook.com/'); 
        respuesta = "¡Ok"+nombre+"! Abriendo Facebook.";

    }
    else if (cmd.indexOf("abrir instagram") > -1 || cmd.indexOf('abre instagram') > -1){
        window.open('https://www.instagram.com/'); 
        respuesta = "¡Ok"+nombre+"! Abriendo Instagram.";

    }
    else if (cmd.indexOf("abrir twitter") > -1 || cmd.indexOf('abre twitter') > -1){
        window.open('https://twitter.com/?lang=es'); 
        respuesta = "¡Ok"+nombre+"! Abriendo Twitter.";

    }
    else if (cmd.indexOf("abrir discord") > -1 || cmd.indexOf('abre discord') > -1) {
        window.open('https://discord.com/app'); 
        respuesta = "¡Ok"+nombre+"! Abriendo Discord.";
    }
    else if (cmd.indexOf("abre la página web de los testigos de jehová.") > -1 || cmd.indexOf('abre la jw') > -1) {
        window.open('https://www.jw.org/es/'); 
        respuesta = "¡Ok"+nombre+"! Abriendo la pagina principal de los Testigos de Jehova.";

    
    
    }

    
                    //modos escritura voz a texto
    
    else if (cmd.indexOf("modo escritura") > -1){
        meta.setAttribute("content", "2;url=voz a texto.html");
        respuesta = "¡Ok"+nombre+"! iniciando el modo escritura.";

    }
     
                    //repite despues de mi

    else if (cmd.indexOf("repite despues de mi") > -1) {
        repetir = cmd;
        str = repetir;
        repetir = str.replace("repite después de mí","");
        respuesta = repetir;
    }


    
    
    
    
    
    
    
    
    
    
    
    
    
    // buscar lo que el usuario diga sin necesidad de google
    else if (respuesta.indexOf("") > -1){
        url = cmd;
        window.open('https://www.google.com/search?q='+url);
        respuesta = "Buscando en Google"+cmd;
    }
    // Bot Habla
    
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    console.log(respuesta);
}