// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// - Una función generadora de índices pares automáticos

function siempreTrue(retornar = true){
    console.log(retornar);
}
siempreTrue()


const Promesa = new Promise((Segundos) =>{
    if(true){
        Segundos(setTimeout(()=>{
            console.log("'Hola soy una promesa' \n 5 segundos despues de haberse ejecutado");
        },5000))
    }
})
Promesa
    .then()
    .catch(() => console.log("Probando si hay error"))
    .finally(() => console.log("Yo siempre estoy"))


function* generadorPares(){
    let i = 0
    while(true){
        i++
        i = i *2
        if(i === 10){
            return i 
        }

        yield i  // Esperando hasta qye se vuelva a llamar
    }
}


const pares = generadorPares()

console.log(pares.next().value);
