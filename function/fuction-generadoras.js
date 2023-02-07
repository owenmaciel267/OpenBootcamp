// Fuction generadores

function* generaId(){
    let id = 0
    while(true){
        id++
        
        if(id === 10){
            return id
        }

        yield id  // Esperando hasta qye se vuelva a llamar
    }
}

const gen = generaId()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next().value);
console.log(gen.next());



