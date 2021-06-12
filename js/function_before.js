function recordatorio(e,recuerdo) {
    function nexrecognition() {
        new SpeechSynthesisUtterance(respuesta).onend = recognitionDiadere.start()

    }
    setTimeout(nexrecognition,4600);



     recognitionDiadere.onresult = (event) => {
        const results = event.results;
        const frase = results[results.length - 1][0].transcript;
        var cmd = frase;
        let userselectD;
        let userselectH;
        cmd = cmd.toLowerCase();
        var respuesta = "";

     // simplficar cmd
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
        cmd = cmd.replace("12", "doce");
        cmd = cmd.replace("11", "once");
        cmd = cmd.replace("10", "diez");
        cmd = cmd.replace("9", "nueve");
        cmd = cmd.replace("8", "ocho");
        cmd = cmd.replace("7", "siete");
        cmd = cmd.replace("6", "seis");
        cmd = cmd.replace("5", "cinco");
        cmd = cmd.replace("4", "cuatro");
        cmd = cmd.replace("3", "tres");
        cmd = cmd.replace("2", "dos");
        cmd = cmd.replace("1", "un");
        cmd = cmd.replace("00", "");
        cmd = cmd.replace(":", "");
        console.log(cmd);
    
        if (cmd.indexOf("hoy") > -1) {
            dwhenrmb = hoy;
            localStorage.setItem("cuandorec_hoy", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para hoy, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }else if (cmd.indexOf("mañana") > -1 || cmd.indexOf('un') > -1) {
            dwhenrmb = hoy+1;
            localStorage.setItem("cuandorec_mañana", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para mañana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }else if (cmd.indexOf("pasado mañana") > -1 || cmd.indexOf('dos') > -1) {
            dwhenrmb = hoy+2;
            localStorage.setItem("cuandorec_pasado_mañana", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para pasado mañana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else if (cmd.indexOf("tres dias") > -1 || cmd.indexOf('tres') > -1 || cmd.indexOf('pos pasado mañana') > -1) {
            dwhenrmb = hoy+3;
            localStorage.setItem("cuandorec_tres_dias", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para dentro de 3 dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else if (cmd.indexOf("cuatro dias") > -1 || cmd.indexOf('cuatro') > -1) {
            dwhenrmb = hoy+4;
            localStorage.setItem("cuandorec_cuatro_dias", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para dentro de 4 dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else if (cmd.indexOf("en cinco dias") > -1 || cmd.indexOf('cinco') > -1) {
            dwhenrmb = hoy+5;
            localStorage.setItem("cuandorec_cinco_dias", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para dentro de cinco dias, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else if (cmd.indexOf("en seis") > -1 || cmd.indexOf('seis') > -1) {
            dwhenrmb = hoy+6;
            localStorage.setItem("cuandorec_seis_dias", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para dentro de seis, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else if (cmd.indexOf("en una semana") > -1 || cmd.indexOf('siete') > -1) {
            dwhenrmb = hoy+7;
            localStorage.setItem("cuandorec_siete_dias", dwhenrmb)
            console.log(whenrmb);
            userselectD = 'si';
            respuesta = "almacenando en la agenda para dentro de una semana, ¿a que hora quieres que te lo recuerde?, o prefieres que te lo recuerde todo el dia?";
        }
        else{
            respuesta = "no e reconocido el dia, pruebe agendar de nuevo y sea directo, soy una asistente virtual, no necesito modestias."
        }

        speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
        console.log(respuesta);
        document.getElementById("textodicho").innerHTML = username+":"+frase;
        document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
        let rmrmr = respuesta.length;
        rmrmr = rmrmr / 4 ;
        new SpeechSynthesisUtterance(respuesta).onstart = animacion_hablar(this, rmrmr);
        
        
       if (userselectD === "si") {
        function nexrecognition2() {
            new SpeechSynthesisUtterance(respuesta).onend = recognitionHoradere.start()

        }
        setTimeout(nexrecognition2,6800);   
       }else if (userselectD === null) {
        }

        
        
        recognitionHoradere.onresult = (event) => {
            const results = event.results;
            const frase = results[results.length - 1][0].transcript;
            var cmd = frase;
            cmd = cmd.toLowerCase();
            var respuesta = "";
        // quitar acentos y puntos
            cmd = cmd.replace(",", "");
            cmd = cmd.replace(".", "");
            cmd = cmd.replace("b", "");
            cmd = cmd.replace("c", "");
            cmd = cmd.replace("f", "");
            cmd = cmd.replace("g", "");
            cmd = cmd.replace("h", "");
            cmd = cmd.replace("j", "");
            cmd = cmd.replace("k", "");
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
            cmd = cmd.replace("12", "doce");
            cmd = cmd.replace("11", "once");
            cmd = cmd.replace("10", "diez");
            cmd = cmd.replace("9", "nueve");
            cmd = cmd.replace("8", "ocho");
            cmd = cmd.replace("7", "siete");
            cmd = cmd.replace("6", "seis");
            cmd = cmd.replace("5", "cinco");
            cmd = cmd.replace("4", "cuatro");
            cmd = cmd.replace("3", "tres");
            cmd = cmd.replace("2", "dos");
            cmd = cmd.replace("1", "una");
            cmd = cmd.replace("00", "");
            cmd = cmd.replace(":", "");
            cmd = cmd.replace("de la", "");
            cmd = cmd.replace("por favor", "");
            cmd = cmd.replace("recuerdamelo", "");
            cmd = cmd.replace("en la", "");
            cmd = cmd.replace("por la", "");
            
        console.log(cmd);
        if (cmd.indexOf("todo el dia") > -1) {
            hwhenrmb = "todo el dia";
            localStorage.setItem("hr_all_day", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare hasta que se acabe el dia ";
            recordar += "programado para recordar a la hora :"+"todo el dia";
            localStorage.setItem("remember_all_day",recordar);
        }
        else if (cmd.indexOf("una") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('una') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "1";
            localStorage.setItem("hr_1", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a la una de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_1",recordar);
        }
        else if (cmd.indexOf("dos") > -1 && cmd.indexOf("mañana")  > -1 || cmd.indexOf('dos') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "2";
            localStorage.setItem("hr_2", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 2 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_2",recordar); 
        }
        else if (cmd.indexOf("tres") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('tres') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "3";
            localStorage.setItem("hr_3", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 3 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_3",recordar); 
        }
        else if (cmd.indexOf("cuatro") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('cuatro') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "4";
            localStorage.setItem("hr_4", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 4 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_4",recordar); 
        }
        else if (cmd.indexOf("cinco") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('cinco') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "5";
            localStorage.setItem("hr_5", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 5 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_5",recordar); 
        }
        else if (cmd.indexOf("seis") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('seis') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "6";
            localStorage.setItem("hr_6", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 6 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_6",recordar); 
        }
        else if (cmd.indexOf("siete") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('siete') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "7";
            localStorage.setItem("hr_7", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 7 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_7",recordar); 
        }
        else if (cmd.indexOf("ocho") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('ocho') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "8";
            localStorage.setItem("hr_8", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 8 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_8",recordar); 
        }
        else if (cmd.indexOf("nueve") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('nueve') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "9";
            localStorage.setItem("hr_9", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 9 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_9",recordar); 
        }
        else if (cmd.indexOf("diez") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('diez') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "10";
            localStorage.setItem("hr_10", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 10 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_10",recordar); 
        }
        else if (cmd.indexOf("once") > -1 && cmd.indexOf("mañana")  > -1  || cmd.indexOf('once') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "11";
            localStorage.setItem("hr_11", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 11 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_11",recordar); 
        }
        else if (cmd.indexOf("doce")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('doce') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "12";
            localStorage.setItem("hr_12", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 12 de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_12",recordar); 
        }
        else if (cmd.indexOf("una")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('una') > -1 && cmd.indexOf("pm")  > -1 ) {
            whenrmb = "13";
            localStorage.setItem("hr_13", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a la una de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_13",recordar); 
        }
        else if (cmd.indexOf("dos")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('dos') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "14";
            localStorage.setItem("hr_14", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 2 de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_14",recordar); 
        }
        else if (cmd.indexOf("tres")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('tres') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "15";
            localStorage.setItem("hr_15", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 3 de la tarde";
                        recordar += "programado para recordar:"+hwhenrmb;
            localStorage.setItem("remember_15",recordar); 
        }
        else if (cmd.indexOf("cuatro")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('cuatro') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "16";
            localStorage.setItem("hr_16", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 4 de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_16",recordar); 
        }
        else if (cmd.indexOf("cinco")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('cinco') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "17";
            localStorage.setItem("hr_17", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 5 de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_17",recordar); 
        }
        else if (cmd.indexOf("seis")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('seis') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "18";
            localStorage.setItem("hr_18", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 6 de la tarde";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_18",recordar); 
        }
        else if (cmd.indexOf("siete")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('siete') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "19";
            localStorage.setItem("hr_19", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 7 de la noche";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_19",recordar); 
        }
        else if (cmd.indexOf("ocho")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('ocho') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "20";
            localStorage.setItem("hr_20", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 8 de la noche";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_20",recordar); 
        }
        else if (cmd.indexOf("nueve")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('nueve') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "21";
            localStorage.setItem("hr_21", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 9 de la noche";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_21",recordar); 
        }
        else if (cmd.indexOf("diez")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('diez') > -1 && cmd.indexOf("pm")  > -1 ) {
            hwhenrmb = "22";
            localStorage.setItem("hr_22", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 10 de la noche";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_22",recordar); 
        }
        else if (cmd.indexOf("once")  > -1 && cmd.indexOf("tarde")  > -1  || cmd.indexOf('once') > -1 && cmd.indexOf("pm")  > -1 ) {
            whenrmb = "23";
            localStorage.setItem("hr_23", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 11 de la noche";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_23",recordar); 
        }
        else if (cmd.indexOf("doce")  > -1  && cmd.indexOf("mañana")  > -1  || cmd.indexOf('doce') > -1 && cmd.indexOf("am")  > -1 ) {
            hwhenrmb = "24";
            localStorage.setItem("hr_24", hwhenrmb);
            console.log(whenrmb);
            respuesta = "de acuerdo te lo recordare a las 12 de la mañana";
            recordar += "programado para recordar a la hora :"+hwhenrmb+"del dia";
            localStorage.setItem("remember_24",recordar); 
        }
        else {
            respuesta = "no he reconocido la hora, no se olvide de especificar la hora y si es pm o am, intente agendar de nuevo"
        }
      
        

        speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
        console.log(respuesta);
        document.getElementById("textodicho").innerHTML = username+":"+frase;
        document.getElementById("textoescuchado").innerHTML = "LITH:"+respuesta;
        let rmrmr = respuesta.length;
        rmrmr = rmrmr / 4 ;
        new SpeechSynthesisUtterance(respuesta).onstart = animacion_hablar(this, rmrmr);
        }

    
    }
}
function cmdSimplifyToName(cmd) {
    cmd = cmd.replace("como", "");
    cmd = cmd.replace("cómo", "");
    cmd = cmd.replace("estas", "");
    cmd = cmd.replace("bueno", "");
    cmd = cmd.replace("adios", "");
    cmd = cmd.replace("andas", "");
    cmd = cmd.replace("perdon", "");
    cmd = cmd.replace("nombre", "");
    cmd = cmd.replace("energia", "");
    cmd = cmd.replace("ilogica", "");
    cmd = cmd.replace("ilogico", "");
    cmd = cmd.replace("perfecto", "");
    cmd = cmd.replace("encuentras", "");
    cmd = cmd.replace("legendario", "");
    cmd = cmd.replace("identifico", "");
    cmd = cmd.replace("sabias", "");
    cmd = cmd.replace("sabes", "");
    cmd = cmd.replace("mucho", "");
    cmd = cmd.replace("gusto", "");
    cmd = cmd.replace("sepalo", "");
    cmd = cmd.replace("nombro", "");
    cmd = cmd.replace("dicen", "");
    cmd = cmd.replace("esto", "");
    cmd = cmd.replace("onda", "");
    cmd = cmd.replace("liz", "");
    cmd = cmd.replace("llamo", "");
    cmd = cmd.replace("hola", "");
    cmd = cmd.replace("lit", "");
    cmd = cmd.replace("lets", "");
    cmd = cmd.replace("tal", "");
    cmd = cmd.replace("que", "");
    cmd = cmd.replace("que", "");
    cmd = cmd.replace("era", "");
    cmd = cmd.replace("mal", "");
    cmd = cmd.replace("mi", "");
    cmd = cmd.replace("me", "");
    cmd = cmd.replace("tu", "");
    cmd = cmd.replace("es", "");
    cmd = cmd.replace("is", "");
    cmd = cmd.replace("te", "");
    cmd = cmd.replace("el", "");
    cmd = cmd.replace("es", "");
    cmd = cmd.replace("eh", "");
    cmd = cmd.replace("?", "");
    cmd = cmd.replace(" l", "");
    cmd = cmd.replace("¿", "");
    cmd = cmd.replace(".", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    
    return cmd
}

function numero_aleatorio(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n;
}