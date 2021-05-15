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
    cmd = cmd.replace("lith", "");
    cmd = cmd.replace("liz", "");
    cmd = cmd.replace("lin", "");
console.log(cmd);
    micro.removeAttribute('src','img/bxs-microphone.svg');

    //comandos:

    // comandos interactivos
    if (cmd.indexOf('hola') === 0 || cmd.indexOf('que onda') > -1 || cmd.indexOf('que hay') > -1) {
        respuesta = 'Hola como estas';
    }
    else if (cmd.indexOf('como estas') > -1 || cmd.indexOf('que tal estas') > -1  || cmd.indexOf('como te encuentras') > -1  || cmd.indexOf('como andas') > -1) {
        respuesta = '¡Muy bien! ¡Gracias por preguntar';
    } 
    else if (cmd.indexOf('mi nombre es') > -1 || cmd.indexOf('me llamo') > -1){
        nombre = cmd;
        nombre = nombre.replace("mi nombre es", "");
        nombre = nombre.replace("me llamo", "");
        nombre = nombre.replace(".", "");
        haynombre = "si";
        localStorage.setItem("haynombre", haynombre)
        localStorage.setItem("name",(nombre));
        respuesta = 'Mucho gusto'+nombre+ ' yo soy Lith';
    }
    else if (cmd. indexOf('quien eres') > -1  || cmd.indexOf('que eres') > -1 || cmd.indexOf('presentate') > -1){
        respuesta = "Soy un asistente por voz echo completamente en Html, Javascript y Css, y mi nombre es Lith, existo nada mas para ayudar y cumplir ciertas tareas"
    }
    else if (cmd. indexOf("mi nombre") > -1  || cmd.indexOf('como me llamo') > -1){
        respuesta = "Tu nombre es "+username+" ¿Se te ha olvidado?"
    }
    else if (cmd.indexOf('di un chiste') > -1 || cmd.indexOf('cuenta un chiste') > -1  || cmd.indexOf('tira un chiste') > -1  || cmd.indexOf('sacate un chiste') > -1) {
        respuesta = chistes[numerorandom];
        repitechiste = chistes; 
    }
            // else if (cmd. indexOf("cuentalo de nuevo") > -1 || cmd. indexOf("dilo de nuevo") > -1) {
            //    respuesta = repitechiste; 
            // }
     else if (cmd.indexOf("repite despues de mi") > -1 || cmd.indexOf('di despues de mi') === 0) {
        repetir = cmd;
        repetir = repetir.replace("repite despues de mi","");
        respuesta = repetir;
        repetirdenuevo = repetir;
    }
            else if (cmd.indexOf("repite de nuevo") === 0 || cmd. indexOf("repite eso") === 0 || cmd.indexOf('dilo de nuevo') > -1 ) {
             respuesta = repetirdenuevo;   
            }

      

    //comandos de utilidades
                    //configuracion de usuario
    else if (cmd.indexOf("desactiva la visualizacion de texto") > -1 || cmd.indexOf('quita la visualizacion de texto') > -1 ) {
        vdtxt = 1;
        document.getElementById("cuadrotexto").classList.add("oculto2");
        localStorage.setItem("visualizaciondetexto",(vdtxt));
        respuesta = "Visualizaciòn de texto desactivada correctamente"
    }
    else if (cmd.indexOf("activa la visualizacion de texto") > -1 || cmd.indexOf('pon la visualizacion de texto') > -1 ) {
        vdtxt = 0;
        document.getElementById("cuadrotexto").classList.remove("oculto2");
        localStorage.setItem("visualizaciondetexto", (vdtxt));
        respuesta = "Visualizaciòn de texto activada correctamente"
    }
    if (cmd.indexOf('quitar tutorial') === 0 || cmd.indexOf('desactivar tutorial') > -1) {
        firstime = "no";
        localStorage.setItem("tutorial", firstime);
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
    else if (cmd. indexOf('busca en google') > -1 || cmd.indexOf('busca') > -1 || cmd.indexOf('buscar en google') > -1){
        url = cmd;
        url = url.replace("busca en google", "");
        url = url.replace("buscar en google", "");
        url = url.replace("busca", "");
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
    else if (cmd.indexOf("abrir google") > -1 || cmd.indexOf('abre google') > -1 || cmd.indexOf('busca google') > -1 || cmd.indexOf('ir a google') > -1){
        window.open('https://google.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }                
    else if (cmd.indexOf("abrir youtube") > -1 || cmd.indexOf('abre youtube') > -1 || cmd.indexOf('busca youtube') > -1 || cmd.indexOf('ir a youtube') > -1 ){
        window.open('https://www.youtube.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }
    else if (cmd.indexOf("abrir whatsapp") > -1 || cmd.indexOf('abre whatsapp') > -1 || cmd.indexOf('busca whatsapp') > -1 || cmd.indexOf('ir a whatsapp') > -1){
        window.open('https://web.whatsapp.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Whatsapp Web.";
    }
    else if (cmd.indexOf("abrir facebook") > -1 || cmd.indexOf('abre facebook') > -1 || cmd.indexOf('busca facebook') > -1 || cmd.indexOf('ir a facebook') > -1){
        window.open('https://www.facebook.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Facebook.";

    }
    else if (cmd.indexOf("abrir instagram") > -1 || cmd.indexOf('abre instagram') > -1 || cmd.indexOf('busca instagram') > -1 || cmd.indexOf('ir a instagram') > -1){
        window.open('https://www.instagram.com/'); 
        respuesta = "¡Ok"+username+"! Abriendo Instagram.";

    }
    else if (cmd.indexOf("abrir twitter") > -1 || cmd.indexOf('abre twitter') > -1 || cmd.indexOf('busca twitter') > -1 || cmd.indexOf('ir a twitter') > -1){
        window.open('https://twitter.com/?lang=es'); 
        respuesta = "¡Ok"+username+"! Abriendo Twitter.";

    }
    else if (cmd.indexOf("abrir discord") > -1 || cmd.indexOf('abre discord') > -1 || cmd.indexOf('busca discord') > -1 || cmd.indexOf('ir a discord') > -1) {
        window.open('https://discord.com/app'); 
        respuesta = "¡Ok"+username+"! Abriendo Discord.";
    }
    else if (cmd.indexOf("abre") > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('abrir') > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('ir') > -1 && cmd.indexOf('testigos de jehova') > -1) {
        window.open('https://www.jw.org/es/'); 
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
         recordar = "no se te olvide que"+recuerdo;
         respuesta = "de acuerdo, entre hoy y en una semana cuando quieres que te lo recuerde?";
         localStorage.setItem("remember",recordar);
         new SpeechSynthesisUtterance(respuesta).onend = recognitionDiadere.start()
    

         recognitionDiadere.onresult = (event) => {
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
                respuesta = "almacenando en la agenda para hoy, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
                whenrmb = hoy;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
            }else if (cmd.indexOf("mañana") > -1 || cmd.indexOf('dentro de 1') > -1) {
                whenrmb = hoy+1;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para mañana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }else if (cmd.indexOf("pasado mañana") > -1 || cmd.indexOf('dentro de 2') > -1) {
                whenrmb = hoy+2;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para pasado mañana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }
            else if (cmd.indexOf("4 dias") > -1 || cmd.indexOf('dentro de 4') > -1 || cmd.indexOf('pos pasado mañana') > -1) {
                whenrmb = hoy+3;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de 3 dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }
            else if (cmd.indexOf("5 dias") > -1 || cmd.indexOf('dentro de 5') > -1) {
                whenrmb = hoy+4;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de 4 dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }
            else if (cmd.indexOf("en 6 dias") > -1 || cmd.indexOf('dentro de 6') > -1) {
                whenrmb = hoy+5;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de cinco dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }
            else if (cmd.indexOf("en una semana") > -1 || cmd.indexOf('dentro de una semana') > -1 || cmd.indexOf('7 dias') > -1) {
                whenrmb = hoy+6;
                localStorage.setItem("cuandorec", whenrmb)
                console.log(whenrmb);
                respuesta = "almacenando en la agenda para dentro de una semana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
            }
            else{
                respuesta = "no e reconocido el dia, pruebe agendar de nuevo y sea directo, soy una asistente virtual, no necesito modestias."
            }


            speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
            console.log(respuesta);
            document.getElementById("textodicho").innerHTML = username+":"+frase;
            document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
         
            new SpeechSynthesisUtterance(respuesta).onend = recognitionHoradere.start()
            
            
            recognitionHoradere.onresult = (event) => {
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
            // quitar acentos y puntos
                cmd = cmd.replace(",", "");
                cmd = cmd.replace(".", "");
                cmd = cmd.replace("b", "");
                cmd = cmd.replace("c", "");
                cmd = cmd.replace("f", "");
                cmd = cmd.replace("g", "");
                cmd = cmd.replace("h", "");
                cmd = cmd.replace("i", "");
                cmd = cmd.replace("j", "");
                cmd = cmd.replace("k", "");
                cmd = cmd.replace("l", "");
                cmd = cmd.replace("o", "");
                cmd = cmd.replace("p", "");
                cmd = cmd.replace("q", "")
                cmd = cmd.replace("s", "");
                cmd = cmd.replace("u", "");
                cmd = cmd.replace("v", "");
                cmd = cmd.replace("w", "");
                cmd = cmd.replace("x", "");
                cmd = cmd.replace("y", "");
                cmd = cmd.replace("z", "");
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
                cmd = cmd.replace("una", "1");
                cmd = cmd.replace("dos", "2");
                cmd = cmd.replace("tres", "3");
                cmd = cmd.replace("cuatro", "4");
                cmd = cmd.replace("cinco", "5");
                cmd = cmd.replace("seis", "6");
                cmd = cmd.replace("siete", "7");
                cmd = cmd.replace("ocho", "8");
                cmd = cmd.replace("nueve", "9");
                cmd = cmd.replace("diez", "10");
                cmd = cmd.replace("once", "11");
                cmd = cmd.replace("doce", "12");
                cmd = cmd.replace("00", "");
                cmd = cmd.replace(":", "");
                cmd = cmd.replace("de la", "");
                cmd = cmd.replace("por favor", "");
                cmd = cmd.replace("recuerdamelo", "");
                cmd = cmd.replace("en la", "");
                cmd = cmd.replace("por la", "");
                
            console.log(cmd);
            if (cmd.indexOf("todo el dia") > -1) {
                whenrmb = "all day";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare hasta que se acabe el dia ";
            }
            else if (cmd.indexOf("1") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('1') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "1";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a la una de la mañana";
            }
            else if (cmd.indexOf("2") > -1 && cmd.indexOf("mañana")  > -1 || cmd.indexOf('2') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "2";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 2 de la mañana"; 
            }
            else if (cmd.indexOf("3") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('3') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "3";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 3 de la mañana"; 
            }
            else if (cmd.indexOf("4") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('4') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "4";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 4 de la mañana"; 
            }
            else if (cmd.indexOf("5") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('5') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "5";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 5 de la mañana"; 
            }
            else if (cmd.indexOf("6") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('6') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "6";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 6 de la mañana"; 
            }
            else if (cmd.indexOf("7") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('7') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "7";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 7 de la mañana"; 
            }
            else if (cmd.indexOf("8") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('8') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "8";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 8 de la mañana"; 
            }
            else if (cmd.indexOf("9") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('9') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "9";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 9 de la mañana"; 
            }
            else if (cmd.indexOf("10") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('10') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "10";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 10 de la mañana"; 
            }
            else if (cmd.indexOf("11") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('11') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "11";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 11 de la mañana"; 
            }
            else if (cmd.indexOf("12")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('12') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "12";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 12 de la tarde"; 
            }
            else if (cmd.indexOf("1")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('1') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "13";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a la una de la tarde"; 
            }
            else if (cmd.indexOf("2")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('2') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "14";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 2 de la tarde"; 
            }
            else if (cmd.indexOf("3")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('3') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "15";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 3 de la tarde"; 
            }
            else if (cmd.indexOf("4")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('4') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "16";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 4 de la tarde"; 
            }
            else if (cmd.indexOf("5")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('5') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "17";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 5 de la tarde"; 
            }
            else if (cmd.indexOf("6")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('6') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "18";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 6 de la tarde"; 
            }
            else if (cmd.indexOf("7")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('7') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "19";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 7 de la noche"; 
            }
            else if (cmd.indexOf("8")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('8') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "20";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 8 de la noche"; 
            }
            else if (cmd.indexOf("9")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('9') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "21";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 9 de la noche"; 
            }
            else if (cmd.indexOf("10")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('10') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "22";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 10 de la noche"; 
            }
            else if (cmd.indexOf("11")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('11') > -1 && cmd.indexOf("pm")  > -1 ) {
                whenrmb = "23";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 11 de la noche"; 
            }
            else if (cmd.indexOf("12")  > -1  && cmd.indexOf("mañana")  > -1  || cmd.indexOf('12') > -1 && cmd.indexOf("am")  > -1 ) {
                whenrmb = "24";
                localStorage.setItem("hcuandorec", whenrmb);
                console.log(whenrmb);
                respuesta = "de acuerdo te lo recordare a las 12 de la mañana"; 
            }
            else {
                respuesta = "no he reconocido la hora, no se olvide de especificar la hora y si es pm o am, intente agendar de nuevo"
            }

            
    
                speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
                console.log(respuesta);
                document.getElementById("textodicho").innerHTML = username+":"+frase;
                document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
            }
        
        }


         
    }   
    
                    //modos y extras de Lith 
    
    else if (cmd.indexOf("modo escritura") > -1 || cmd.indexOf('modo escribir') > -1 || cmd.indexOf('modo voz a texto') > -1 ){
        meta.setAttribute("content", "2;url=voz a texto.html");
        respuesta = "¡Ok"+username+"! iniciando el modo escritura.";

    }
    else if (cmd.indexOf("tema") > -1 || cmd.indexOf('cambia a tema') > -1 ) {
        teme = cmd;
        teme = teme.replace("tema", "")
        teme = teme.replace("cambia a tema", "")
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
       respuesta = "Aparentemente no tengo respuesta a tu comando, asi que lo buscare en google";
       window.open('https://www.google.com/search?q='+cmd);  
    }
    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
    document.getElementById("textodicho").innerHTML = username+":"+frase;
    document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
}

recognition.onend = function () {
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    document.getElementById("lith").innerHTML = 'LITH';
    micro.classList.remove("circulo");
}
recognitionDiadere.onend = function () {
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    document.getElementById("lith").innerHTML = 'LITH';
    micro.classList.remove("circulo");
}
recognitionHoradere.onend = function () {
    micro.setAttribute("src","img/bxs-microphone-off.svg")
    document.getElementById("lith").innerHTML = 'LITH';
    micro.classList.remove("circulo");
}
