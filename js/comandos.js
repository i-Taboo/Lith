function comandos(cmd, frase) {
    // comandos interactivos
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
            localStorage.setItem("name"," "+(nombre));
            respuesta = 'Mucho gusto '+nombre+ ' yo soy Lith';
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
    
    else if (cmd.includes("enamorado") && cmd.length < 20 || cmd.includes("enamorada") && cmd.length < 20 || cmd.includes("te gusta alguien") && cmd.length < 19 || cmd.includes("te gusto") && cmd.length < 19 ) {
    respuesta = "El amor... segun la definicion de los humanos, consta de 4 cosas: Admiracion, Atraccion, Devocion y Respeto, En conclusion, estoy enamorada un 50%"
    }
    else if (cmd.includes("quien") && cmd.includes("creo") && cmd.length < 25 || cmd.includes("quien") && cmd.includes("creador") && cmd.length < 25) {
    respuesta = "Todo el mundo ha sido creado, formado y modificado, aca estoy yo, siendo solamente una maquina de comandos y ayudas. Mi creador solo es uno mas de todas las especies humanas, pero no me permite decir quien es, prefiere dejar que los que de verdad buscan sepan de el"
    // atenta mente Victor Varela
    }
    else if (cmd.includes("buenas") && cmd.includes("noches") && cmd.length < 25 || cmd.includes("hasta") && cmd.includes("mañana") && cmd.length < 25) {
        respuesta = "Buenas noches"+username+", que tengas una bonita noche"

        }
        else if (cmd.includes("buen") && cmd.includes("dia") && cmd.length < 25 || cmd.includes("buenos") && cmd.includes("dias") && cmd.length < 25) {
            respuesta = "Buenos dias"+username+", que tengas un dia productivo"
    
            }

    //comandos de utilidades
    else if (cmd.includes("tira") && cmd.includes("dado") && cmd.length < 15 || cmd.includes("lanza") && cmd.includes("dado") && cmd.length < 15) {
        respuesta = "De acuerdo, el dado revoto "+numero_aleatorio(7)+" veces y salio el numero "+numero_aleatorio(7);
    }
    else if (cmd.includes("que") && cmd.includes("hora") && cmd.length < 15 || cmd.includes("dime la") && cmd.includes("hora") && cmd.length < 15||cmd.includes("hora") && cmd.length < 15) {
        respuesta = "son las "+hour+" con "+minutes+" minutos"
    }
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
    // soporte
    
    else if (cmd. indexOf('lista de comandos') > -1 || cmd.indexOf('guia de comandos') > -1 || cmd.indexOf('buscar') > -1 &&  cmd.indexOf('guia') > -1){
        // window.open('https://www.google.com/search?q='+url);   
        respuesta = "por ahora la lista de comandos no esta disponible, lamento las molestias"
    }
    else if (cmd. indexOf('contactar') > -1 && cmd.indexOf('soporte') > -1 || cmd.indexOf('buscar') > -1 && cmd.indexOf('soporte') > -1){
        window.open('https://www.facebook.com/Para.que.me.lees/');   
        respuesta = "de acuerdo, redirigiendo al contacto de soporte, lamento las molestias"
    }
                    //buscar en diversas plataformas
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
        respuesta = "¡Ok"+username+"! Abriendo google.";
    }                
    else if (cmd.indexOf("abrir youtube") > -1 || cmd.indexOf('abre youtube') > -1 || cmd.indexOf('busca youtube') > -1 || cmd.indexOf('ir a youtube') > -1 ){
        window.open('https://www.youtube.com/'); 
        guiñar(this);
        respuesta = "¡Ok"+username+"! Abriendo YouTube.";
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
        localStorage.removeItem("remember_all_day"),
        localStorage.removeItem("remember_1"),
        localStorage.removeItem("remember_2"),
        localStorage.removeItem("remember_3"),
        localStorage.removeItem("remember_4"),
        localStorage.removeItem("remember_5"),
        localStorage.removeItem("remember_6"),
        localStorage.removeItem("remember_7"),
        localStorage.removeItem("remember_8"),
        localStorage.removeItem("remember_9"),
        localStorage.removeItem("remember_10"),
        localStorage.removeItem("remember_11"),
        localStorage.removeItem("remember_12"),
        localStorage.removeItem("remember_13"),
        localStorage.removeItem("remember_14"),
        localStorage.removeItem("remember_15"),
        localStorage.removeItem("remember_16"),
        localStorage.removeItem("remember_17"),
        localStorage.removeItem("remember_18"),
        localStorage.removeItem("remember_19"),
        localStorage.removeItem("remember_20"),
        localStorage.removeItem("remember_21"),
        localStorage.removeItem("remember_22"),
        localStorage.removeItem("remember_23"),
        localStorage.removeItem("remember_24"),
        localStorage.removeItem("cuandorec_hoy"),
        localStorage.removeItem("cuandorec_mañana"),
        localStorage.removeItem("cuandorec_pasado_mañana"),
        localStorage.removeItem("cuandorec_tres_dias"),
        localStorage.removeItem("cuandorec_cuatro_dias"),
        localStorage.removeItem("cuandorec_cinco_dias"),
        localStorage.removeItem("cuandorec_seis_dias"),
        localStorage.removeItem("hr_all_day"),
        localStorage.removeItem("hr_1"),
        localStorage.removeItem("hr_2"),
        localStorage.removeItem("hr_3"),
        localStorage.removeItem("hr_4"),
        localStorage.removeItem("hr_5"),
        localStorage.removeItem("hr_6"),
        localStorage.removeItem("hr_7"),
        localStorage.removeItem("hr_8"),
        localStorage.removeItem("hr_9"),
        localStorage.removeItem("hr_10"),
        localStorage.removeItem("hr_11"),
        localStorage.removeItem("hr_12"),
        localStorage.removeItem("hr_13"),
        localStorage.removeItem("hr_14"),
        localStorage.removeItem("hr_15"),
        localStorage.removeItem("hr_16"),
        localStorage.removeItem("hr_17"),
        localStorage.removeItem("hr_18"),
        localStorage.removeItem("hr_19"),
        localStorage.removeItem("hr_20"),
        localStorage.removeItem("hr_21"),
        localStorage.removeItem("hr_22"),
        localStorage.removeItem("hr_23"),
        localStorage.removeItem("hr_24"),
        respuesta = "De acuerdo limpiando agenda";
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
        recordatorio(this,recordar);
         


         
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
    rmrmr = rmrmr / 4.9 ;
    new SpeechSynthesisUtterance(respuesta).onstart = animacion_hablar(this, rmrmr);

    if (namecheck.includes("no")) {
        let i_dont_know_your_name = ", Por cierto, no se tu nombre todavìa, me gustaria saber como te llamas"
        guiñar(this);
            speechSynthesis.speak(new SpeechSynthesisUtterance(i_dont_know_your_name));
        }   
}

