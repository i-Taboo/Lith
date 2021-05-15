const startrecord = document.getElementById("startrecord");


let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;

startrecord.addEventListener("click", () => {
    startrecord.classList.add("dicipar_shadow");
    recognition.start();
});
recognition.addEventListener("start", () => {
    micro.removeAttribute('src','img/bxs-microphone-off.svg');
    micro.setAttribute("src","img/bx-circle.svg")
    micro.classList.add("circulo");
    document.getElementById("lith").innerHTML = '';
})

let recognitionDiadere = new webkitSpeechRecognition();
recognitionDiadere.lang = 'es-ES';
recognitionDiadere.continuous = false;
recognitionDiadere.interResults = false;
recognitionDiadere.addEventListener("start", () => {
    micro.removeAttribute('src','img/bxs-microphone-off.svg');
    micro.setAttribute("src","img/bx-circle.svg")
    micro.classList.add("circulo");
    document.getElementById("lith").innerHTML = '';
})

let recognitionHoradere = new webkitSpeechRecognition();
recognitionHoradere.lang = 'es-ES';
recognitionHoradere.continuous = false;
recognitionHoradere.interResults = false;
recognitionHoradere.addEventListener("start", () => {
    micro.removeAttribute('src','img/bxs-microphone-off.svg');
    micro.setAttribute("src","img/bx-circle.svg")
    micro.classList.add("circulo");
    document.getElementById("lith").innerHTML = '';
})






