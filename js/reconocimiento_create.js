const startrecord = document.body;
let voca = document.getElementById("voca");
let ojo1 = document.getElementById("ojo1");
let ojo2 = document.getElementById("ojo2");

document.body.addEventListener("click", () => {
    recognition.start();
});

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;


recognition.addEventListener("start", () => {
 voca.setAttribute("src","img/bx-circle_w.svg");
 voca.classList.add("circulo");
 ojo1.classList.add("oculto")
 ojo2.classList.add("oculto")

})

let recognitionDiadere = new webkitSpeechRecognition();
recognitionDiadere.lang = 'es-ES';
recognitionDiadere.continuous = false;
recognitionDiadere.interResults = false;
recognitionDiadere.addEventListener("start", () => {
    voca.setAttribute("src","img/bx-circle_w.svg");
    voca.classList.add("circulo");
    ojo1.classList.add("oculto")
    ojo2.classList.add("oculto")

})

let recognitionHoradere = new webkitSpeechRecognition();
recognitionHoradere.lang = 'es-ES';
recognitionHoradere.continuous = false;
recognitionHoradere.interResults = false;
recognitionHoradere.addEventListener("start", () => {
    voca.setAttribute("src","img/bx-circle_w.svg");
    voca.classList.add("circulo");
    ojo1.classList.add("oculto")
    ojo2.classList.add("oculto")
})





