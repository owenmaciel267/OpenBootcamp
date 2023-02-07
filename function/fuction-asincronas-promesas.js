// fuctions asincronas - promesas

function miAsic(){
    // Hace una llamada a una base de datos externa}
    // Puede darno algun error
}

const miPromesa = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random()*2)
    // Si esta todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

// Como consumir las promesas
// .then() => Consumir la promesa
// .catch() => tengo entendido que es para atrapar errores
// .finally() => Se ejecuta siempre
miPromesa
    .then(()=> console.log("se ha ejecutado de forma correcta"))
    .catch(()=> console.log("error"))
    .finally(()=> console.log("Yo me ejecuto siempre"))

