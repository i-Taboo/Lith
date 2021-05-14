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

let recognition2 = new webkitSpeechRecognition();
recognition2.lang = 'es-ES';
recognition2.continuous = false;
recognition2.interResults = false;
recognition2.addEventListener("start", () => {
    micro.removeAttribute('src','img/bxs-microphone-off.svg');
    micro.setAttribute("src","img/bx-circle.svg")
    micro.classList.add("circulo");
    document.getElementById("lith").innerHTML = '';
})






