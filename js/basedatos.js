let username = localStorage.getItem("name");
var vsdtxt = localStorage.getItem("visualizaciondetexto");
let tutorial = localStorage.getItem("tutorial");
let namecheck = localStorage.getItem("haynombre");
let remember = [
    localStorage.getItem("remember_all_day"),
    localStorage.getItem("remember_1"),
    localStorage.getItem("remember_2"),
    localStorage.getItem("remember_3"),
    localStorage.getItem("remember_4"),
    localStorage.getItem("remember_5"),
    localStorage.getItem("remember_6"),
    localStorage.getItem("remember_7"),
    localStorage.getItem("remember_8"),
    localStorage.getItem("remember_9"),
    localStorage.getItem("remember_10"),
    localStorage.getItem("remember_11"),
    localStorage.getItem("remember_12"),
    localStorage.getItem("remember_13"),
    localStorage.getItem("remember_14"),
    localStorage.getItem("remember_15"),
    localStorage.getItem("remember_16"),
    localStorage.getItem("remember_17"),
    localStorage.getItem("remember_18"),
    localStorage.getItem("remember_19"),
    localStorage.getItem("remember_20"),
    localStorage.getItem("remember_21"),
    localStorage.getItem("remember_22"),
    localStorage.getItem("remember_23"),
    localStorage.getItem("remember_24"),
]
let recuh = localStorage.getItem("recuh")
let whenr = [
    localStorage.getItem("cuandorec_hoy"),
    localStorage.getItem("cuandorec_mañana"),
    localStorage.getItem("cuandorec_pasado_mañana"),
    localStorage.getItem("cuandorec_tres_dias"),
    localStorage.getItem("cuandorec_cuatro_dias"),
    localStorage.getItem("cuandorec_cinco_dias"),
    localStorage.getItem("cuandorec_seis_dias"),
]
let hwhenr = [
    localStorage.getItem("hr_all_day"),
    localStorage.getItem("hr_1"),
    localStorage.getItem("hr_2"),
    localStorage.getItem("hr_3"),
    localStorage.getItem("hr_4"),
    localStorage.getItem("hr_5"),
    localStorage.getItem("hr_6"),
    localStorage.getItem("hr_7"),
    localStorage.getItem("hr_8"),
    localStorage.getItem("hr_9"),
    localStorage.getItem("hr_10"),
    localStorage.getItem("hr_11"),
    localStorage.getItem("hr_12"),
    localStorage.getItem("hr_13"),
    localStorage.getItem("hr_14"),
    localStorage.getItem("hr_15"),
    localStorage.getItem("hr_16"),
    localStorage.getItem("hr_17"),
    localStorage.getItem("hr_18"),
    localStorage.getItem("hr_19"),
    localStorage.getItem("hr_20"),
    localStorage.getItem("hr_21"),
    localStorage.getItem("hr_22"),
    localStorage.getItem("hr_23"),
    localStorage.getItem("hr_24"),
]
let today = JSON.stringify(hoy);
let hour = JSON.stringify(horactual);
let welcome = 0;
let ya_hubo_bienvenida = localStorage.getItem("ya_hubo_welcome");
tema = localStorage.getItem("temas");
console.log("Nombre de usuario:"+username);
console.log("visualizacion de texto:"+vsdtxt);
// quitar tutorial 
if (tutorial === null) {
speechSynthesis.speak(new SpeechSynthesisUtterance(tuto));
}else if (tutorial === "no") {
    
}
// greetings
let numerorandom3 = Math.floor(Math.random() * 6);
    var bienvenidas = [
    "Bienvenido"+username,
    "Es hora de emplear mis conocimientos ya llego "+username,
    "Inserte mensaje de bienvenida generico",
    "9648. 9649, ah,"+username+" bienvenido, solo estaba contando los codigos necesarios para ser un niño de verdad",
    "¿En que trabajaremos el dia de hoy?"
]
if (namecheck.indexOf("si") > -1 && ya_hubo_bienvenida !== today) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(bienvenidas[numerorandom3]));
    welcome = hoy;
    localStorage.setItem("ya_hubo_welcome",welcome);
    // animacion_hablar(this, 20);
}
// base de configuraciones
    //   visualizacion de texto
    if (vsdtxt.indexOf("1") > -1) {
        document.getElementById("cuadrotexto").classList.add("oculto2");
    }
    else {
        document.getElementById("cuadrotexto").classList.remove("oculto2");
    }
// temas
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

        break;
        case " naturaleza":
            document.getElementById("cuerpo").classList.add("theme_natural");
            startrecord.classList.remove("opacidad_menor");
            break;
    default:
        break;
}



if (whenr.includes(today) && hwhenr.includes(hour)) { 
        speechSynthesis.speak(new SpeechSynthesisUtterance(remember[hour]));
        console.log(remember);
        setInterval(notificacionagenda, 600000); 
}
else if (hwhenr.includes("todo el dia")) {
    if (whenr.includes(today)) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(remember[0]));
            console.log(remember);
            setInterval(notificacionagenda, 600000); 

  
    }
}
Notification.requestPermission();
function notificacionagenda() {
    var notification = null;

    if (!('Notification' in window)) {
    // el navegador no soporta la API de notificaciones
        alert('Su navegador no soporta la API de Notificaciones :(');
        return;
    } else if (Notification.permission === "granted") {
    notification = new Notification(
                        "Recordatorio",                                       {
                            body: remember,
                            dir: 'ltr'
                        });
    
    } else if (Notification.permission !== 'denied') {
        Notification
                .requestPermission(function(permission) {
            if (permission === "granted") {
                notification = new Notification(
                        "Recordatorio",                                       {
                            body: remember,
                            dir: 'ltr'
                        });
            }
        });
    }
    
    }