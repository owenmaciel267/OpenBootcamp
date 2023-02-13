const persona ={
    nombre: "owen",
    edad: 20,
    isDeveloper: true,

    saludo: function(){
        console.log("Hola");
    }
}

// console.log(persona);
persona.saludo()

const otraPersona = {
    nombre: "Gallo",
    edad: 19,
    isDeveloper: false,
    saludo: function(){
        console.log("Hello");
    }
}


// Con esto podemos agregar los objetos que querramos sin necesidad de ir copiando toda la extructura del objeto 1 x 1

// funciones factoris
const creaPersona = (nombre, edad, isDeveloper) =>{
    return {
        nombre:nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function(){
            console.log("Hola");
        }   
    }
}

// Y asi cada vez que queramos crear una persona solo tenemos que tirar de la funcion
const personaX = creaPersona("Axel", 19, false)
console.log(personaX);

const nuevaPersona = creaPersona("Gabi", 20, false)
console.log(nuevaPersona);