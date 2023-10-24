const pantalla=document.querySelector(".pantalla")
const botones=document.querySelectorAll(".botones")

botones.forEach(botones=>{
    botones.addEventListener("click",()=>{
        const botonon =botones.textContent;
        if (botones.id==="limpiar"){
            pantalla.textContent="0";
            return;
        }
        if (botones.id==="borra"){
           if( pantalla.textContent.length ===1 || pantalla.textContent==="!Error¡"){
            pantalla.textContent = "0";
           }else{
            pantalla.textContent=pantalla.textContent.slice(0,-1);
           }
            return;
        }
        if(botones.id==="igual"){
          try{  const calculo= pantalla.textContent;
            if(calculo.includes("//")){
              pantalla.textContent="¡ERROR!"
            }else{
              pantalla.textContent =eval(calculo);
            }
          }catch{
            pantalla.textContent="!Error¡";
          }
          return;
        }
          if(pantalla.textContent==="0"){
            pantalla.textContent= botonon;
        }else{
        pantalla.textContent += botonon;
        }
        
    })
})