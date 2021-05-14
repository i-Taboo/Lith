var nombre = "Anonimo";
var haynombre = "no";
var whenrmb;
const fecha = new Date();
var hoy = fecha.getDate();
console.log(hoy);
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
var respuestarandom = [
    "De acuerdo, empezare a buscar el.. espera.. ¿que me dijiste?, no estaba prestando atencion.. es que vi ese foco de luz que me dejo loca...",
    "Aparentemente no he entendido ni pio de lo que me acabaz de decir, que te parece si nos calmamos y antes de que me insultes, pruebas a repetir logicamente lo que acabas de decir.",
    "1.. 2 3.. ¿cuanto mas tengo que contar para que veas que no entendi lo que me dijiste?",
    "¡Ok! buscando AAAAAAA acabo de ver una mosca.. espera.. no tengo acceso a la camara.. ¿entonces como rayos vi la mosca?"
];