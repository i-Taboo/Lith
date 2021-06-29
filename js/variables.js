var nombre = "Anonimo";
var haynombre = "no";
var firstime = "si";
const whenrmb = "recordado";
var dwhenrmb;
var hwhenrmb
let v_anim;
var tuto = "Bienvenido usuario.. Yo soy LITH, una asistente virtual de navegacion, estoy completamente desarrollada para aligerar su experiencia de navegacion y mejorar su eficiencia en trabajo, soy capaz de hacer busquedas en varios sitios webs y habrir redes sociales y chats.. puedo hacer recordatorios hasta para una semana, y muchas mas cosas.. en palabras sencillas, soy una iA echa para servirle, si quiere usarme con la mejor eficiencia le recomiendo ver la pequeña guia de comandos de LITH para ello solo presione el boton que tiene mi nombre y diga: lista de comandos, o , guia de comandos.. recuerde. Lith es la asistenta virtual echa completamente para ALIGERAR el trabajo. si tiene algun problema o quiere contactar con el servicio solo digamelo con el comando: contactar con el soporte, o, buscar soporte, para que este mensaje no vuelva a aparecer solo diga: desactivar tutorial, o quitar tutorial , ¿Que esperamos para empezar a aligerar su navegacion? empezemos con un pequeño ¡hola!, presione el boton y ¡vamos a ello! ";
const fecha = new Date();
var hoy = fecha.getDate();
var horactual = fecha.getHours();
var minutos = fecha.getMinutes();
console.log("Que dia es hoy: "+hoy);
var recuerdo;
var vdtxt;
var str;
var micro = document.getElementById("micro");
var meta = document.getElementById("redirigir");
var url;
var repetir;
var audio = document.getElementById("audio");
var tema;
var repitechiste;
var repitedenuevo;
var ch2;
var chistes = [
    "Hola, ¿está Agustín?.. No.. estoy incomodín.", 
    "¿Cuál es la fruta más divertida?.. La naranja ja ja ja ja",
    " Buenos días, me gustaría alquilar Batman Para siempre.. No es posible. tiene que devolverla mañana.",
    "¡Camarero! Este filete tiene muchos nervios..  Normal. es la primera vez que se lo comen.",
    "¿Qué le dice un techo a otro?.. Techo de menos.",
    "Buenos días, quería una camiseta de un personaje inspirador..¿Ghandi?..No. mediani.",
    "¿Qué le dice una iguana a su hermana gemela?.. Somos iguanitas",
    "Buenos días. Busco trabajo.. ¿Le interesa de jardinero?.. ¿Dejar dinero?. ¡Si lo que busco es trabajo!",
    " Abuelo, ¿por qué estás delante del ordenador con los ojos cerrados?.. Es que Windows me ha dicho que cierre las pestañas.",
    "Hola. soy paraguayo y quiero pedirle la mano de su hija para casarme con ella.. ¿Para qué?. Paraguayo."
];



