// - Replica el ejercicio completo del vídeo
// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine



const ps = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const basura = document.querySelectorAll(".seccion-remove")
// eventos 


ps.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
    
        parrafo.classList.toggle(".dragging")
        
        event.dataTransfer.setData("id" , parrafo.id)       
        const element_fantasma = document.getElementById("img-fantasma")
        event.dataTransfer.setDragImage(element_fantasma, 0, 0)


    })


    parrafo.addEventListener("dragging", ()=>{
        console.log("He terminado de arrastrar");

        parrafo.classList.remove(".dragging")
    })
})



secciones.forEach(seccion =>{
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
    })
    
    seccion.addEventListener("drop", event=>{
        console.log("drop");

       const id_parrafo = event.dataTransfer.getData("id")

        

        
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)

        // seccion.removeChild(parrafo)
    })
})


basura.forEach(bsr =>{
    bsr.addEventListener("dragover",event=>{
        event.preventDefault()
    })
    bsr.addEventListener("drop", event=>{
        console.log("drop");

       const id_parrafo = event.dataTransfer.getData("id")

        

        
        const parrafo = document.getElementById(id_parrafo)
        bsr.appendChild(parrafo)

        bsr.removeChild(parrafo)
    })
})