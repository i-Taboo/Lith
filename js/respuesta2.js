recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    cmd = cmd.toLowerCase();
    var respuesta = "";
    console.log(cmd);
    

    micro.removeAttribute('src','img/bxs-microphone.svg');
   
    
    //comandos
    switch(cmd) {
      case cmd.indexOf("hola") > -1:
            console.log("wiiika");
       break;
     }
  


    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
     micro.setAttribute("src","img/bxs-microphone-off.svg")
}