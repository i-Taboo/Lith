
let v_an1 = document.getElementById("a_vh1");
let v_an2 = document.getElementById("a_vh2");
let v_an3 = document.getElementById("a_vh3");
let v_an4 = document.getElementById("a_vh4");
let v_an5 = document.getElementById("a_vh5");
let v_an6 = document.getElementById("a_vh6");
let v_an7 = document.getElementById("a_vh7");
let v_an8 = document.getElementById("a_vh8");
let f;
function animacion_hablar(e, veces_a_repetir) {
    let v = 0;
  let hablar = setInterval(() => {
     
       if (v < veces_a_repetir) {
         
           console.log(v)
       }else{
       clearInterval(hablar);
       }
        function hablar_1() {
            voca.classList.remove("cara","voca")
            voca.classList.add("oculto")
            v_an1.classList.remove("oculto");
            v_an1.classList.add("cara","voca");
        }
        setTimeout(hablar_1,300);
        function hablar_2() {
            v_an1.classList.remove("cara","voca")
            v_an1.classList.add("oculto")
            v_an2.classList.remove("oculto");
            v_an2.classList.add("cara","voca");
        }
        setTimeout(hablar_2,400)
        function hablar_3() {
            v_an2.classList.remove("cara","voca")
            v_an2.classList.add("oculto")
            v_an3.classList.remove("oculto");
            v_an3.classList.add("cara","voca");
        }
        setTimeout(hablar_3,500)
        function hablar_4() {
            v_an3.classList.remove("cara","voca")
            v_an3.classList.add("oculto")
            v_an4.classList.remove("oculto");
            v_an4.classList.add("cara","voca");
        }
        setTimeout(hablar_4,600)
        function hablar_5() {
            v_an4.classList.remove("cara","voca")
            v_an4.classList.add("oculto")
            v_an5.classList.remove("oculto");
            v_an5.classList.add("cara","voca"); 
        }
        setTimeout(hablar_5,700)
        function hablar_6() {
            v_an5.classList.remove("cara","voca")
            v_an5.classList.add("oculto")
            v_an6.classList.remove("oculto");
            v_an6.classList.add("cara","voca"); 
        }
        setTimeout(hablar_6,800)
        function hablar_7() {
            v_an6.classList.remove("cara","voca")
            v_an6.classList.add("oculto")
            v_an7.classList.remove("oculto");
            v_an7.classList.add("cara","voca"); 
        }
        setTimeout(hablar_7,900)
        function hablar_8() {
            v_an7.classList.remove("cara","voca")
            v_an7.classList.add("oculto")
            v_an8.classList.remove("oculto");
            v_an8.classList.add("cara","voca"); 
        }
        setTimeout(hablar_8,1000)
        function hablar_9() {
            v_an8.classList.remove("cara","voca")
            v_an8.classList.add("oculto")
            v_an8.classList.remove("oculto");
            v_an8.classList.add("cara","voca"); 
        }
        setTimeout(hablar_9,1100)
        function hablar_10() {
            v_an8.classList.remove("cara","voca")
            v_an8.classList.add("oculto")
            v_an7.classList.remove("oculto");
            v_an7.classList.add("cara","voca"); 
        }
        setTimeout(hablar_10,1200)
        function hablar_11() {
            v_an7.classList.remove("cara","voca")
            v_an7.classList.add("oculto")
            v_an6.classList.remove("oculto");
            v_an6.classList.add("cara","voca"); 
        }
        setTimeout(hablar_11,1300)
        function hablar_12() {
            v_an6.classList.remove("cara","voca")
            v_an6.classList.add("oculto")
            v_an5.classList.remove("oculto");
            v_an5.classList.add("cara","voca"); 
        }
        setTimeout(hablar_12,1400)
        function hablar_13() {
            v_an5.classList.remove("cara","voca")
            v_an5.classList.add("oculto")
            v_an4.classList.remove("oculto");
            v_an4.classList.add("cara","voca"); 
        }
        setTimeout(hablar_13,1500)
        function hablar_14() {
            v_an4.classList.remove("cara","voca")
            v_an4.classList.add("oculto")
            v_an3.classList.remove("oculto");
            v_an3.classList.add("cara","voca"); 
        }
        setTimeout(hablar_14,1600)
        function hablar_15() {
            v_an2.classList.remove("cara","voca")
            v_an2.classList.add("oculto")
            v_an1.classList.remove("oculto");
            v_an1.classList.add("cara","voca"); 
        }
        setTimeout(hablar_15,1700)
        function hablar_16() {
            v_an1.classList.remove("cara","voca")
            v_an1.classList.add("oculto")
            voca.classList.remove("oculto");
            voca.classList.add("cara","voca"); 
        }
        setTimeout(hablar_16,1800);

        f = 0
        v++
    }, 300);
    

   
    
}
function guiñar(e) {
    function guiño1() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar1.svg") 
    }
    setTimeout(guiño1,300);
    function guiño2() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar2.svg") 
    }
    setTimeout(guiño2,320);
    function guiño3() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar3.svg") 
    }
    setTimeout(guiño3,340);
    function guiño4() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar4.svg") 
    }
    setTimeout(guiño4,360);
    function guiño5() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar5.svg") 
    }
    setTimeout(guiño5,380);
    function guiño6() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar6.svg") 
    }
    setTimeout(guiño6,400);
    function guiño7() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar7.svg") 
    }
    setTimeout(guiño7,420);
    function guiño8() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar8.svg") 
    }
    setTimeout(guiño8,440);
    function guiño9() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar9.svg") 
    }
    setTimeout(guiño9,460);
    function guiño10() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar10.svg") 
    }
    setTimeout(guiño10,480);
    function guiño11() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar9.svg") 
    }
    setTimeout(guiño11,500);
    function guiño12() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar8.svg") 
    }
    setTimeout(guiño12,520);
    function guiño13() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar7.svg") 
    }
    setTimeout(guiño13,540);
    function guiño14() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar6.svg") 
    }
    setTimeout(guiño14,560);
    function guiño15() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar5.svg") 
    }
    setTimeout(guiño15,580);
    function guiño16() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar4.svg") 
    }
    setTimeout(guiño16,600);
    function guiño17() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar3.svg") 
    }
    setTimeout(guiño17,620);
    function guiño18() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar2.svg") 
    }
    setTimeout(guiño18,640);
    
    function guiño19() {
        ojo2.setAttribute("src","img/lith_face/Lith_ojo_cerrar1.svg") 
    }
    setTimeout(guiño19,660);
    
}

