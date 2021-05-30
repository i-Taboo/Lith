function comandos(cmd, frase) {
    if (cmd.indexOf('hola') === 0 && cmd.length < 15|| cmd.indexOf('que onda') > -1 && cmd.length < 30 || cmd.indexOf('que hay') > -1 && cmd.length < 20) {
        respuesta = 'Hola como estas';
    }
    else if (cmd.indexOf('como estas') > -1 && cmd.length < 25|| cmd.indexOf('que tal estas') > -1 && cmd.length < 25 || cmd.indexOf('como te encuentras') > -1 && cmd.length < 25 || cmd.indexOf('como andas') > -1 && cmd.length < 25) {
        respuesta = '¡Muy bien! ¡Gracias por preguntar';
    } 
    else if (cmd.indexOf('mi nombre') > -1 || cmd.indexOf('me llamo') > -1){
            nombre = cmdSimplifyToName(cmd);
            haynombre = "si";
            localStorage.setItem("haynombre", haynombre)
            localStorage.setItem("name",(nombre));
            respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
            guiñar(this);
       
    }
    else if (cmd. indexOf('quien eres') > -1  || cmd.indexOf('que eres') > -1 || cmd.indexOf('presentate') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd.indexOf('di un chiste') > -1 || cmd.indexOf('cuenta un chiste') > -1  || cmd.indexOf('tira un chiste') > -1  || cmd.indexOf('sacate un chiste') > -1) {
        respuesta = chistes[numero_aleatorio(10)];
        guiñar(this);
        repitechiste = chistes;
    }
            // else if (cmd. indexOf("cuentalo de nuevo") > -1 || cmd. indexOf("dilo de nuevo") > -1) {
            //    respuesta = repitechiste; 
            // }
     else if (cmd.indexOf("repite despues de mi") > -1 || cmd.indexOf('di despues de mi') === 0) {
        repetir = cmd;
        repetir = repetir.replace("repite despues de mi","");
        respuesta = repetir;
        guiñar(this);
        repetirdenuevo = repetir;
    }
            else if (cmd.indexOf("repite de nuevo") === 0 || cmd. indexOf("repite eso") === 0 || cmd.indexOf('dilo de nuevo') > -1 ) {
             respuesta = repetirdenuevo;  
             guiñar(this);
            }

      

    //comandos de utilidades
                    //configuracion de usuario
    else if (cmd.includes("desactiva") && cmd.includes("visualizacion") && cmd.length < 50 || cmd.includes("quita") && cmd.includes("visualizacion") && cmd.length < 50 || cmd.includes("inactiva") && cmd.includes("visualizacion") && cmd.length < 50) {
        vdtxt = 1;
        console.log(cmd.length)
        document.getElementById("cuadrotexto").classList.add("oculto2");
        localStorage.setItem("visualizaciondetexto",(vdtxt));
        guiñar(this);
        respuesta = "Visualizaciòn de texto desactivada correctamente"
    }
    else if (cmd.includes("activa") && cmd.includes("visualizacion") && cmd.length < 50 || cmd.includes("reactiva") && cmd.includes("visualizacion") && cmd.length < 50 ) {
        vdtxt = 0;
        document.getElementById("cuadrotexto").classList.remove("oculto2");
        localStorage.setItem("visualizaciondetexto", (vdtxt));
        guiñar(this);
        respuesta = "Visualizaciòn de texto activada correctamente"
    }
    if (cmd.includes("quita") && cmd.includes("tutorial") && cmd.length < 40|| cmd.includes("desactiva") && cmd.includes("tutorial") && cmd.length < 40 || cmd.includes("inactiva") && cmd.includes("tutorial") && cmd.length < 50) {
        firstime = "no";
        localStorage.setItem("tutorial", firstime);
        guiñar(this);
        respuesta = 'tutorial desactivado';
    }
                      
                    //buscar en diversas plataformas
    else if (cmd. indexOf('lista de comandos') > -1 || cmd.indexOf('guia de comandos') > -1 || cmd.indexOf('buscar') > -1 &&  cmd.indexOf('guia') > -1){
        // window.open('https://www.google.com/search?q='+url);   
        respuesta = "por ahora el soporte no esta disponible, lamento las molestias"
    }
    else if (cmd. indexOf('contactar') > -1 && cmd.indexOf('soporte') > -1 || cmd.indexOf('buscar') > -1 && cmd.indexOf('soporte') > -1){
        window.open('https://www.facebook.com/Para.que.me.lees/');   
        respuesta = "de acuerdo, redirigiendo al contacto de soporte, lamento las molestias"
    }
    else if (cmd. indexOf('busca en google') > -1 || cmd.indexOf('buscar en google') > -1){
        url = cmd;
        guiñar(this);
        url = url.replace("busca en google", "");
        url = url.replace("buscar en google", "");
        respuesta = "¡Ok"+username+"! buscando en google"+url;
        window.open('https://www.google.com/search?q='+url);   
    }
    else if (cmd. indexOf('busca en youtube') > -1){
        url = cmd;
        guiñar(this);
        url = url.replace("busca en youtube", ""); 
        respuesta = "¡Ok"+username+"! buscando en Youtube"+url;
        window.open('https://www.youtube.com/results?search_query='+url);   
    }
    else if (cmd.indexOf("busca en la pagina de los testigos de jehova") > -1){
        url = cmd;
        guiñar(this);
        url = url.replace("busca en la pagina de los testigos de jehova", ""); 
        url = url.replace(".", ""); 
        respuesta = "¡Ok"+username+"! buscando en la J doble v"+url;
        window.open('https://www.jw.org/es/b%C3%BAsquedas/?q='+url);   
    }
    else if (cmd. indexOf('busca en la tienda de facebook') > -1){
        url = cmd;
        guiñar(this);
        url = url.replace("busca en la tienda de facebook", ""); 
        respuesta = "¡Ok"+username+"! buscando en facebook market place"+url;
        window.open('https://www.facebook.com/marketplace/103740209665322/search/?query='+url);   
    }
                    //habrir aplicaciones y redes sociales
    else if (cmd.indexOf("abrir google") > -1 || cmd.indexOf('abre google') > -1 || cmd.indexOf('busca google') > -1 || cmd.indexOf('ir a google') > -1){
        window.open('https://google.com/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }                
    else if (cmd.indexOf("abrir youtube") > -1 || cmd.indexOf('abre youtube') > -1 || cmd.indexOf('busca youtube') > -1 || cmd.indexOf('ir a youtube') > -1 ){
        window.open('https://www.youtube.com/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }
    else if (cmd.indexOf("abrir whatsapp") > -1 || cmd.indexOf('abre whatsapp') > -1 || cmd.indexOf('busca whatsapp') > -1 || cmd.indexOf('ir a whatsapp') > -1){
        window.open('https://web.whatsapp.com/');
        guiñar(this); 
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }
    else if (cmd.indexOf("abrir facebook") > -1 || cmd.indexOf('abre facebook') > -1 || cmd.indexOf('busca facebook') > -1 || cmd.indexOf('ir a facebook') > -1){
        window.open('https://www.facebook.com/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Facebook.";

    }
    else if (cmd.indexOf("abrir instagram") > -1 || cmd.indexOf('abre instagram') > -1 || cmd.indexOf('busca instagram') > -1 || cmd.indexOf('ir a instagram') > -1){
        window.open('https://www.instagram.com/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Instagram.";

    }
    else if (cmd.indexOf("abrir twitter") > -1 || cmd.indexOf('abre twitter') > -1 || cmd.indexOf('busca twitter') > -1 || cmd.indexOf('ir a twitter') > -1){
        window.open('https://twitter.com/?lang=es'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Twitter.";

    }
    else if (cmd.indexOf("abrir discord") > -1 || cmd.indexOf('abre discord') > -1 || cmd.indexOf('busca discord') > -1 || cmd.indexOf('ir a discord') > -1) {
        window.open('https://discord.com/app'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo Discord.";
    }
    else if (cmd.indexOf("abre") > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('abrir') > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('ir') > -1 && cmd.indexOf('testigos de jehova') > -1) {
        window.open('https://www.jw.org/es/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo la página principal de los Testigos de Jehova.";

    
    
    }
                        //recordar eventos
    else if (cmd.indexOf("mi recordatorio") > -1 || cmd.indexOf('lee mi agenda') > -1 || cmd.indexOf('que hay') > -1 && cmd.indexOf('agenda') > -1) {
        if (remember === "") {
            respuesta = "estas libre, no hay nada en la agenda"
        }else{
        respuesta = "Actualmente en tu agenda hay que "+remember;
        }
    }
    else if (cmd.indexOf("borrar recordatorio") > -1 || cmd.indexOf('eliminar recordatorio') > -1 || cmd.indexOf('limpia') > -1 && cmd.indexOf('agenda') > -1 || cmd.indexOf('eliminar') > -1 && cmd.indexOf('agenda') > -1) {
        localStorage.removeItem("cuandorec");
        localStorage.removeItem("hcuandorec")
        remember = remember.replace("no se te olvide que", "")
        respuesta = "De acuerdo, eliminando el recordatorio"+remember;
        guiñar(this);
        remember = "";
        localStorage.setItem("remember", remember);
    }                    

    else if (cmd.indexOf("recuerdame") > -1 || cmd.indexOf('agendame') > -1 || cmd.indexOf('agenda') > -1 || cmd.indexOf('recuerda') > -1) {
         recuerdo = cmd;
         recuerdo = recuerdo.replace("recuerdame", "");
         recuerdo = recuerdo.replace("agendame", "");
         recuerdo = recuerdo.replace("recuerda", "");
         recuerdo = recuerdo.replace("agenda", "");
         recuerdo = recuerdo.replace("que", "");
         recuerdo = recuerdo.replace("tengo", "tienes");
         recuerdo = recuerdo.replace("mi", "tu");
         recuerdo = recuerdo.replace("yo", "tu");
         recuerdo = recuerdo.replace("a ti", "a mi");
         recordar = "no se te olvide que"+recuerdo;
         respuesta = "de acuerdo, entre hoy y en una semana cuando quieres que te lo recuerde?";
         localStorage.setItem("remember",recordar);
        recordatorio(this);
         


         
    }   
    
                    //modos y extras de Lith 
    
    else if (cmd.indexOf("modo escritura") > -1 || cmd.indexOf('modo escribir') > -1 || cmd.indexOf('modo voz a texto') > -1 ){
        meta.setAttribute("content", "2;url=voz a texto.html");
        guiñar(this);
        respuesta = "¡Ok"+username+"! iniciando el modo escritura.";

    }
    else if (cmd.indexOf("tema") > -1 || cmd.indexOf('cambia a tema') > -1 ) {
        teme = cmd;
        teme = teme.replace("tema", "")
        teme = teme.replace("cambia a tema", "")
        localStorage.setItem("temas",teme)
        tema = localStorage.getItem("temas");
        guiñar(this);
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
       respuesta = "Aparentemente no tengo respuesta a tu comando, asi que lo buscare en google";
       window.open('https://www.google.com/search?q='+cmd);  
    }
    let rmrmr = respuesta.length;
    rmrmr = rmrmr / 4 ;
    new SpeechSynthesisUtterance(respuesta).onstart = animacion_hablar(this, rmrmr);
    
}

