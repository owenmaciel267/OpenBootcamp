// Ambito de las clases, metodos y atributos publicos, privados y protegidos

class Persona {
    //Private => #
    // Private => Solo se puede acceder desde dentro de la clases
    #nombre
    #edad
    

    // Protected => _
    // Protected => Solo se puede acceder desde dentro de la clases y desde clases descendientes
    _idDeveloper = true


    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`);
    }

    obtenNombre(){ //Funcion Getter => Nos permite acceder (de forma controlada )a algun atributo protegido
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }


    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const personaX = new Persona ("Owen", 20)
// console.log(personaX);
// console.log(personaX.nombre);
// console.log(personaX.saludo());


// Getter => metodos que nos permiten obtener atributos/metodos privados o protegidos 
console.log(personaX.obtenNombre());
console.log(personaX.getEdad());
console.log(personaX._idDeveloper);

// Setter => metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos 
// Quiero cambiar el nombre de la persona
personaX.setEdad(18)
console.log(personaX.getEdad());