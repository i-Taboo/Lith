var nombre = "";
var str;
var micro = document.getElementById("micro");
var meta = document.getElementById("redirigir");
var url;
var repetir;
var numerorandom = Math.floor(Math.random() * 11);
var audio = document.getElementById("audio");
var chistes = [
    "Hola, ¿está Agustín?.. No, estoy incomodín.", 
    "¿Cuál es la fruta más divertida?.. La naranja ja ja ja ja",
    " Buenos días, me gustaría alquilar Batman Forever.. No es posible, tiene que devolverla tomorrow.",
    "¡Camarero! Este filete tiene muchos nervios..  Normal, es la primera vez que se lo comen.",
    "¿Qué le dice un techo a otro?.. Techo de menos.",
    "Buenos días, quería una camiseta de un personaje inspirador..¿Ghandi?..No, mediani.",
    "¿Qué le dice una iguana a su hermana gemela?.. Somos iguanitas",
    "Buenos días. Busco trabajo.. ¿Le interesa de jardinero?.. ¿Dejar dinero? ¡Si lo que busco es trabajo!",
    " Abuelo, ¿por qué estás delante del ordenador con los ojos cerrados?.. Es que Windows me ha dicho que cierre las pestañas.",
    "Hola, soy paraguayo y quiero pedirle la mano de su hija para casarme con ella.. ¿Para qué?. Paraguayo."
]