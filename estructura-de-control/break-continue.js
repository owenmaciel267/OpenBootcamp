// Break y continue
// labels

// Con etiquetas 

let unidades = 0
let decenas = 0

bucleDecenas: while (true){
    buclesUnidades: while (true){
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades++
        if(unidades === 10) {
            unidades = 0
            break buclesUnidades
        }
        if(decenas === 2) {
            break bucleDecenas
        }
    }
    decenas++
}
