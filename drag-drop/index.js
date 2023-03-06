const ps = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
// eventos 

// inicio de arrastre "dragstart"
// .dataTransfer 
ps.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
    
        parrafo.classList.toggle(".dragging")
        
    // Cambiando la imagen que se ve a la hora de arrastrar
        event.dataTransfer.setData("id" , parrafo.id)       
        const element_fantasma = document.getElementById("img-fanstasma")
        event.dataTransfer.setDragImage(element_fantasma, 2, 2)


    })


    parrafo.addEventListener("dragging", ()=>{
        console.log("He terminado de arrastrar");

        parrafo.classList.remove(".dragging")
    })
})


// dragover drop

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
        // console.log("Drag over");
        // 
    })
    
    seccion.addEventListener("drop", event=>{
        console.log("drop");

        // con esto podemos agregar el parrafo en la otra seccion 
       const id_parrafo = event.dataTransfer.getData("id")

        

        
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

// transferencia de datos