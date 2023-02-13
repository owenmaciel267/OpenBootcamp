// Clases

class Persona {
    
    // Metodo constructor
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`);
    }
}

const nuevaPersona = new Persona("Owen", 20, true)
console.log(nuevaPersona);
console.log(nuevaPersona.saludo());



let numero = 60 //inicializacion

const persona_2 = new Persona ("Gallo", 20, false)
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);

// instaceof => similar a typeof pero para clases