const hTexto = document.getElementById("h-texto")
console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail)

    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiaTexto1(nuevoTxt,color){
    const evento = new CustomEvent("cambioTexto1",{
        detail:{
            texto: nuevoTxt,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}



// _______________




const p = document.getElementById("parrafo")
console.log(p);



p.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail)

    p.innerText = evento.detail.texto
    p.style.color = evento.detail.color
})

function cambiaTexto(nuevoTxt,color){
    const evento = new CustomEvent("cambioTexto",{
        detail:{
            texto: nuevoTxt,
            color
        }
    })
    p.dispatchEvent(evento)
}