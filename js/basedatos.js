let username = localStorage.getItem("name");
var vsdtxt = localStorage.getItem("visualizaciondetexto");
let tutorial = localStorage.getItem("tutorial");
let namecheck = localStorage.getItem("haynombre");
let remember = localStorage.getItem("remember");
let recuh = localStorage.getItem("recuh")
let whenr = localStorage.getItem("cuandorec");
let hwhenr = localStorage.getItem("hcuandorec");
let today = JSON.stringify(hoy);
let hour = JSON.stringify(horactual);
let welcome = 0;
tema = localStorage.getItem("temas");
console.log(username);
console.log(vsdtxt);
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
if (namecheck.indexOf("si") > -1 && welcome !== hoy) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(bienvenidas[numerorandom3]));
    welcome = hoy;
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



if (whenr === today && hwhenr === hour) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(remember));
    console.log(remember);
    setInterval(notificacionagenda, 900000);
}
else if (hwhenr === "all day") {
    if (whenr === today) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(remember));
        console.log(remember);
        setInterval(notificacionagenda, 900000);
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