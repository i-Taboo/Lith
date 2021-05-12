recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    var numerorandom = Math.floor(Math.random() * 11);
    var numerorandom2 = Math.floor(Math.random() * 4);
    cmd = cmd.toLowerCase();
    var respuesta = "";
// quitar acentos
    cmd = cmd.replace("á", "a");
    cmd = cmd.replace("jehová", "jehova");
    cmd = cmd.replace("é", "e");
    cmd = cmd.replace("í", "i");
    cmd = cmd.replace("ó", "o");
    cmd = cmd.replace("ú", "u");
    cmd = cmd.replace("à", "a");
    cmd = cmd.replace("è", "e");
    cmd = cmd.replace("ì", "i");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ù", "u");
console.log(cmd);
    

    micro.removeAttribute('src','img/bxs-microphone.svg');
   
    
    //comandos:

    // comandos interactivos
    
    if (cmd.indexOf('hola') > -1) {
        respuesta = 'Hola como estas';
    }
    else if (cmd.indexOf('como estas') > -1) {
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
        nombre = nombre.replace("mi nombre es", "");
        respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
    }
    else if (cmd. indexOf('quien eres') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd. indexOf("mi nombre") > -1){
        respuesta = "Tu nombre es "+nombre+" ¿Se te ha olvidado?"
    }
    else if (cmd.indexOf('di un chiste') > -1 || cmd.indexOf('cuenta un chiste') > -1) {
        respuesta = chistes[numerorandom];
        repitechiste = chistes; 
     }
            // else if (cmd. indexOf("cuentalo de nuevo") > -1 || cmd. indexOf("dilo de nuevo") > -1) {
            //    respuesta = repitechiste; 
            // }
     else if (cmd.indexOf("repite despues de mi") > -1) {
        repetir = cmd;
        repetir = repetir.replace("repite despues de mi","");
        respuesta = repetir;
        repetirdenuevo = repetir;
    }
            else if (cmd.indexOf("repite de nuevo") === 0 || cmd. indexOf("repite eso") === 0) {
             respuesta = repetirdenuevo;   
            }

      

    //comandos de utilidades
                    //buscar en diversas plataformas
    else if (cmd. indexOf('busca en google') > -1){
        url = cmd;
        url = url.replace("busca en google", "");
        respuesta = "¡Ok"+nombre+"! buscando en google"+url;
        window.open('https://www.google.com/search?q='+url);   
    }
    else if (cmd. indexOf('busca en youtube') > -1){
        url = cmd;
        url = url.replace("busca en youtube", ""); 
        respuesta = "¡Ok"+nombre+"! buscando en Youtube"+url;
        window.open('https://www.youtube.com/results?search_query='+url);   
    }
    else if (cmd.indexOf("busca en la pagina de los testigos de jehova") > -1){
        url = cmd;
        url = url.replace("busca en la pagina de los testigos de jehova", ""); 
        url = url.replace(".", ""); 
        respuesta = "¡Ok"+nombre+"! buscando en la J doble v"+url;
        window.open('https://www.jw.org/es/b%C3%BAsquedas/?q='+url);   
    }
    else if (cmd. indexOf('busca en la tienda de facebook') > -1){
        url = cmd;
        url = url.replace("busca en la tienda de facebook", ""); 
        respuesta = "¡Ok"+nombre+"! buscando en facebook market place"+url;
        window.open('https://www.facebook.com/marketplace/103740209665322/search/?query='+url);   
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
    else if (cmd.indexOf("abre") > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('abrir') > -1 && cmd.indexOf("testigos de jehova") > -1 ) {
        window.open('https://www.jw.org/es/'); 
        respuesta = "¡Ok"+nombre+"! Abriendo la página principal de los Testigos de Jehova.";

    
    
    }

    
                    //modos y extras de Lith 
    
    else if (cmd.indexOf("modo escritura") > -1){
        meta.setAttribute("content", "2;url=voz a texto.html");
        respuesta = "¡Ok"+nombre+"! iniciando el modo escritura.";

    }
    else if (cmd.indexOf("tema") === 0) {
        tema = cmd;
        tema = tema.replace("tema", "")
        respuesta = "cambiando al tema visuál"+tema;
 }
            switch (tema){
    case " por defecto." :       
        document.body.removeAttribute("class"," ")
        startrecord.classList.remove("opacidad_menor");
        break;
        case " por defecto" :       
        document.body.removeAttribute("class"," ")
        startrecord.classList.remove("opacidad_menor");
        break;
    case " oscuro.":
        document.getElementById("cuerpo").classList.add("theme_night");
        startrecord.classList.add("opacidad_menor");
        break;
        case " oscuro":
            document.getElementById("cuerpo").classList.add("theme_night");
            startrecord.classList.add("opacidad_menor");
            break;
    case ", lluvia de rosas.":
        document.getElementById("cuerpo").classList.add("theme_rose_rain");
        startrecord.classList.remove("opacidad_menor");
        break;
        case " lluvia de rosas":
            document.getElementById("cuerpo").classList.add("theme_rose_rain");
            startrecord.classList.remove("opacidad_menor");
            break;
    case ", hierro.":
        document.getElementById("cuerpo").classList.add("theme_iron");
        startrecord.classList.remove("opacidad_menor");
        break;
        case " hierro":
            document.getElementById("cuerpo").classList.add("theme_iron");
            startrecord.classList.remove("opacidad_menor");
            break;
    case " naturaleza.":
        document.getElementById("cuerpo").classList.add("theme_natural");
        startrecord.classList.remove("opacidad_menor");
        break;
        case " naturaleza":
            document.getElementById("cuerpo").classList.add("theme_natural");
            startrecord.classList.remove("opacidad_menor");
            break;
    default:
        break;
}


    
    
// buscar lo que el usuario diga sin necesidad de google
   if (respuesta === ""){
       respuesta = respuestarandom[numerorandom2];
    }
    
    // Bot Habla
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    console.log(respuesta);



}