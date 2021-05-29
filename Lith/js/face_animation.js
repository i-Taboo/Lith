let cara = document.getElementById("startrecord");
function animacion_hablar(e, veces_a_repetir) {
    let v = 0;
  let hablar = setInterval(() => {
     
       if (v < veces_a_repetir) {
         
           console.log(v)
       }else{
       clearInterval(hablar);
       }
        function hablar_1() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking1.svg") 
        }
        setTimeout(hablar_1,300);
        function hablar_2() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking2.svg") 
        }
        setTimeout(hablar_2,320);
        function hablar_3() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking3.svg") 
        }
        setTimeout(hablar_3,330);
        function hablar_4() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking4.svg") 
        }
        setTimeout(hablar_4,340);
        function hablar_5() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking5.svg") 
        }
        setTimeout(hablar_5,350);
        function hablar_6() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking6.svg") 
        }
        setTimeout(hablar_6,360);
        function hablar_7() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking7.svg") 
        }
        setTimeout(hablar_7,380);
        
        function hablar_8() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking8.svg") 
        }
        setTimeout(hablar_8,390);
        function hablar_9() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking9.svg") 
        }
        setTimeout(hablar_9,400);
        function hablar_10() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking10.svg") 
        }
        setTimeout(hablar_10,410);
        function hablar_11() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking11.svg") 
        }
        setTimeout(hablar_11,420);
        function hablar_12() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking12.svg") 
        }
            
        function hablar_14() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking12.svg") 
        }
        setTimeout(hablar_14,450);
        function hablar_15() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking11.svg") 
        }
        setTimeout(hablar_15,460);
        function hablar_16() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking10.svg") 
        }
        setTimeout(hablar_16,470);
        function hablar_17() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking9.svg") 
        }
        setTimeout(hablar_17,480);
        function hablar_18() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking8.svg") 
        }
        setTimeout(hablar_18,490);
        function hablar_19() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking7.svg") 
        }
        setTimeout(hablar_19,500);
        function hablar_20() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking6.svg") 
        }
        setTimeout(hablar_20,510);
        function hablar_21() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking5.svg") 
        }
        setTimeout(hablar_21,520);
        function hablar_22() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking4.svg") 
        }
        setTimeout(hablar_22,530);
        function hablar_23() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking3.svg") 
        }
        setTimeout(hablar_23,540);
        function hablar_24() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking2.svg") 
        }
        setTimeout(hablar_24,550);
        function hablar_25() {
            cara.setAttribute("src","img/lith_face/Lith_Face spiking1.svg") 
        }
        setTimeout(hablar_25,560);
        f = 0
        v++
    }, 300);
    
    setInterval(() => {
       if (f === 70) {
        console.log('hace 1.1m no se ha usado')
           f = 0
       }else{
           f++
       }
    }, 600);
   
    
}
function guiñar(e) {
    function guiño1() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño.svg") 
    }
    setTimeout(guiño1,300);
    function guiño2() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño1.svg") 
    }
    setTimeout(guiño2,320);
    function guiño3() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño2.svg") 
    }
    setTimeout(guiño3,340);
    function guiño4() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño3.svg") 
    }
    setTimeout(guiño4,360);
    function guiño5() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño4.svg") 
    }
    setTimeout(guiño4,380);
    function guiño6() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño5.svg") 
    }
    setTimeout(guiño6,400);
    function guiño7() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño6.svg") 
    }
    setTimeout(guiño7,420);
    function guiño8() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño7.svg") 
    }
    setTimeout(guiño8,440);
    function guiño9() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño6.svg") 
    }
    setTimeout(guiño9,460);
    function guiño10() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño5.svg") 
    }
    setTimeout(guiño10,480);
    function guiño11() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño4.svg") 
    }
    setTimeout(guiño11,500);
    function guiño12() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño3.svg") 
    }
    setTimeout(guiño12,520);
    function guiño13() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño2.svg") 
    }
    setTimeout(guiño13,540);
    function guiño14() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño1.svg") 
    }
    setTimeout(guiño14,560);
    function guiño15() {
        cara.setAttribute("src","img/lith_face/Lith_Face guiño.svg") 
    }
    setTimeout(guiño14,580);
    function guiño15() {
        cara.setAttribute("src","img/lith_face/Lith_Face normal.svg") 
    }
    setTimeout(guiño15,600);
    
}
function animar_chistes(respuesta) {

}

