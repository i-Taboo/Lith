recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    cmd = cmd.toLowerCase();
    var respuesta = "";
    console.log(cmd);
    

    micro.removeAttribute('src','img/bxs-microphone.svg');
   
    let textoBuscado = "hola";
    
    textoBuscado = "adios";
    //comandos
    let posicion = cmd.indexOf(textoBuscado);
    switch(cmd.indexOf("hola")) {
      case -1:
           //no lo encuentra
            console.log("wiiika");
       break;
      case 0:
           //lo encuentra al inicio
      default:
           //està en cualquier parte del texto

     }

     switch (cmd) {
          case "hola":
               
               break;
     
          default:
               break;
     }
  


    speechSynthesis.speak(new SpeechSynthesisUtterance(respuesta));
    console.log(respuesta);
     micro.setAttribute("src","img/bxs-microphone-off.svg")
}