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
        nombre = nombre.replace(".", "");
        haynombre = "si";
        localStorage.setItem("haynombre", haynombre)
        localStorage.setItem("name",(nombre));
        respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
    }
    else if (cmd. indexOf('quien eres') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd. indexOf("mi nombre") > -1){
        respuesta = "Tu nombre es "+username+" ¿Se te ha olvidado?"
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
                    //configuracion de usuario
    else if (cmd.indexOf("desactiva la visualizacion de texto") > -1) {
        vdtxt = 1;
        document.getElementById("cuadrotexto").classList.add("oculto2");
        localStorage.setItem("visualizaciondetexto",(vdtxt));
        respuesta = "Visualizaciòn de texto desactivada correctamente"
    }
    else if (cmd.indexOf("activa la visualizacion de texto") > -1) {
        vdtxt = 0;
        document.getElementById("cuadrotexto").classList.remove("oculto2");
        localStorage.setItem("visualizaciondetexto", (vdtxt));
        respuesta = "Visualizaciòn de texto activada correctamente"
    }
                      
                    //buscar en diversas plataformas
    else if (cmd. indexOf('busca en google') > -1){
        url = cmd;
        url = url.replace("busca en google", "");
        respuesta = "¡Ok"+username+"! buscando en google"+url;
        window.open('https://www.google.com/search?q='+url);   
    }
    else if (cmd. indexOf('busca en youtube') > -1){
        url = cmd;
        url = url.replace("busca en youtube", ""); 
        respuesta = "¡Ok"+username+"! buscando en Youtube"+url;
        window.open('https://www.youtube.com/results?search_query='+url);   
    }
    else if (cmd.indexOf("busca en la pagina de los testigos de jehova") > -1){
        url = cmd;
        url = url.replace("busca en la pagina de los testigos de jehova", ""); 
        url = url.replace(".", ""); 
        respuesta = "¡Ok"+username+"! buscando en la J doble v"+url;
        window.open('https://www.jw.org/es/b%C3%BAsquedas/?q='+url);   
    }
    else if (cmd. indexOf('busca en la tienda de facebook') > -1){
        url = cmd;
        url = url.replace("busca en la tienda de facebook", ""); 
        respuesta = "¡Ok"+username+"! buscando en facebook market place"+url;
        window.open('https://www.facebook.com/marketplace/103740209665322/search/?query='+url);   
    }
                    //habrir aplicaciones y redes sociales

    else if (cmd.indexOf("abrir whatsapp") > -1 || cmd.indexOf('abre whatsapp') > -1){
        window.open('https://web.whatsapp.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }
    else if (cmd.indexOf("abrir facebook") > -1 || cmd.indexOf('abre facebook') > -1){
        window.open('https://www.facebook.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Facebook.";

    }
    else if (cmd.indexOf("abrir instagram") > -1 || cmd.indexOf('abre instagram') > -1){
        window.open('https://www.instagram.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Instagram.";

    }
    else if (cmd.indexOf("abrir twitter") > -1 || cmd.indexOf('abre twitter') > -1){
        window.open('https://twitter.com/?lang=es'); 
        respuesta = "¡Ok"+username+"! Abriendo Twitter.";

    }
    else if (cmd.indexOf("abrir discord") > -1 || cmd.indexOf('abre discord') > -1) {
        window.open('https://discord.com/app'); 
        respuesta = "¡Ok"+username+"! Abriendo Discord.";
    }
    else if (cmd.indexOf("abre") > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('abrir') > -1 && cmd.indexOf("testigos de jehova") > -1 ) {
        window.open('https://www.jw.org/es/'); 
        respuesta = "¡Ok"+username+"! Abriendo la página principal de los Testigos de Jehova.";

    
    
    }
                        //recordar eventos
    else if (cmd.indexOf("mis recordatorios") > -1 || cmd.indexOf('lee mi agenda') > -1 || cmd.indexOf('que hay') > -1 && cmd.indexOf('agenda') > -1) {
        if (remember === "") {
            respuesta = "estas libre, no hay nada en la agenda"
        }else{
        respuesta = "Actualmente en tu agenda hay que "+remember;
        }
    }
    else if (cmd.indexOf("borrar recordatorio") > -1 || cmd.indexOf('eliminar recordatorio') > -1 || cmd.indexOf('limpia') > -1 && cmd.indexOf('agenda') > -1 || cmd.indexOf('eliminar') > -1 && cmd.indexOf('agenda') > -1) {
        localStorage.removeItem("cuandorec");
        remember = remember.replace("no se te olvide que", "")
        respuesta = "De acuerdo, eliminando el recordatorio"+remember;
        remember = "";
        localStorage.setItem("remember", remember);
    }                    

    else if (cmd.indexOf("recuerdame") > -1 || cmd.indexOf('agrega en la agenda') > -1) {
         recuerdo = cmd;
         recuerdo = recuerdo.replace("recuerdame", "");
         recuerdo = recuerdo.replace("que", "");
         recuerdo = recuerdo.replace("tengo", "tienes");
         recuerdo = recuerdo.replace("mi", "tu");
         recordar = "no se te olvide que"+recuerdo;
         respuesta = "de acuerdo, entre hoy y en una semana cuando quieres que te lo recuerde?";
         localStorage.setItem("remember",recordar);
    recognition2.start();
    

         recognition2.onresult = (event) => {
            const results = event.results;
            const frase = results[results.length - 1][0].transcript;
            var cmd = frase;
            cmd = cmd.toLowerCase();
            var respuesta = "";
            micro.setAttribute("src","img/bxs-microphone-off.svg")
             document.getElementById("lith").innerHTML = 'LITH';
             document.getElementById("textodicho").innerHTML = username+":"+frase;
             document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
             micro.classList.remove("circulo");
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
        
            if (cmd.indexOf("hoy") > -1) {
                respuesta = "almacenando en la agenda para hoy";
                whenrmb = hoy;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
            }else if (cmd.indexOf("mañana") > -1) {
                whenrmb = hoy+1;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para mañana";
            }else if (cmd.indexOf("pasado mañana") > -1 || cmd.indexOf('dentro de 2') > -1) {
                whenrmb = hoy+2;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para pasado mañana";
            }
            else if (cmd.indexOf("en 4 dias") > -1 || cmd.indexOf('dentro de 4') > -1) {
                whenrmb = hoy+3;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de 3 dias";
            }
            else if (cmd.indexOf("en 5 dias") > -1 || cmd.indexOf('dentro de 5') > -1) {
                whenrmb = hoy+4;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de 4 dias";
            }
            else if (cmd.indexOf("en 6 dias") > -1 || cmd.indexOf('dentro de 6') > -1) {
                whenrmb = hoy+5;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de cinco dias";
            }
            else if (cmd.indexOf("en una semana") > -1 || cmd.indexOf('dentro de una semana') > -1) {
                whenrmb = hoy+6;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de una semana";
            }


            speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
            micro.setAttribute("src","img/bxs-microphone-off.svg")
            console.log(respuesta);
            document.getElementById("lith").innerHTML = 'LITH';
            document.getElementById("textodicho").innerHTML = username+":"+frase;
            document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
            micro.classList.remove("circulo");
         }
    }   
    
                    //modos y extras de Lith 
    
    else if (cmd.indexOf("modo escritura") > -1){
        meta.setAttribute("content", "2;url=voz a texto.html");
        respuesta = "¡Ok"+username+"! iniciando el modo escritura.";

    }
    else if (cmd.indexOf("tema") === 0) {
        teme = cmd;
        teme = teme.replace("tema", "")
        localStorage.setItem("temas",teme)
        tema = localStorage.getItem("temas");
        respuesta = "cambiando al tema visuál"+tema+" si no se aplica de inmediato, pruebe recargar la pagina";
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
    document.getElementById("lith").innerHTML = 'LITH';
    document.getElementById("textodicho").innerHTML = username+":"+frase;
    document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
    micro.classList.remove("circulo");
    



}