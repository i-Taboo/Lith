const startrecord = document.getElementById("startrecord");

document.body.addEventListener("click", () => {
    startrecord.classList.add("dicipar_shadow");
    recognition.start();
});

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;

startrecord.addEventListener("click", () => {
    startrecord.classList.add("dicipar_shadow");
    recognition.start();
});
recognition.addEventListener("start", () => {
 startrecord.setAttribute("src","img/bx-circle_w.svg");
 startrecord.classList.add("circulo");

})

let recognitionDiadere = new webkitSpeechRecognition();
recognitionDiadere.lang = 'es-ES';
recognitionDiadere.continuous = false;
recognitionDiadere.interResults = false;
recognitionDiadere.addEventListener("start", () => {
    startrecord.setAttribute("src","img/bx-circle_w.svg");
    startrecord.classList.add("circulo");

})

let recognitionHoradere = new webkitSpeechRecognition();
recognitionHoradere.lang = 'es-ES';
recognitionHoradere.continuous = false;
recognitionHoradere.interResults = false;
recognitionHoradere.addEventListener("start", () => {
    startrecord.setAttribute("src","img/bx-circle_w.svg");
    startrecord.classList.add("circulo");
})






