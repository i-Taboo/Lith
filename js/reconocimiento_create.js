const startrecord = document.getElementById("startrecord");
let voca = document.getElementById("voca");
let ojo1 = document.getElementById("ojo1");
let ojo2 = document.getElementById("ojo2");
let microfono = document.getElementById("microfono_boton");

startrecord.addEventListener("click", () => {
    recognition.start();
});

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;


recognition.addEventListener("start", () => {
 document.getElementById("audio").setAttribute("src","audio/sra.mp3");
 document.getElementById("audio").setAttribute("autoplay","true");
 microfono.setAttribute("src","img/bx-circle_w.svg");
 microfono.classList.add("circulo");
})

let recognitionDiadere = new webkitSpeechRecognition();
recognitionDiadere.lang = 'es-ES';
recognitionDiadere.continuous = false;
recognitionDiadere.interResults = false;
recognitionDiadere.addEventListener("start", () => {
    document.getElementById("audio").setAttribute("src","audio/sra.mp3");
    document.getElementById("audio").setAttribute("autoplay","true");
    microfono.setAttribute("src","img/bx-circle_w.svg");
    microfono.classList.add("circulo");


})

let recognitionHoradere = new webkitSpeechRecognition();
recognitionHoradere.lang = 'es-ES';
recognitionHoradere.continuous = false;
recognitionHoradere.interResults = false;
recognitionHoradere.addEventListener("start", () => {
    document.getElementById("audio").setAttribute("src","audio/sra.mp3");
    document.getElementById("audio").setAttribute("autoplay","true");
    microfono.setAttribute("src","img/bx-circle_w.svg");
    microfono.classList.add("circulo");

})





