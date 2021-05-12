const startrecord = document.getElementById("startrecord");


let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;

startrecord.addEventListener("click", () => {
    startrecord.classList.add("dicipar_shadow");
    recognition.start();
    micro.removeAttribute('src','img/bxs-microphone-off.svg');
    micro.setAttribute("src","img/bxs-microphone.svg")
});




