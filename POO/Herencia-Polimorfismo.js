// Inheritance - Herencia
    class Persona {
        _nombre
        _edad
        constructor(nombre, edad){
            this._nombre = nombre
            this._edad = edad
        }

        saludo(){
            console.log(`Hola, mi nombre es ${this._nombre} y mi edad es ${this._edad}`);
        }
    }

    class Desarrollador extends Persona {

        
        constructor(nombre, edad, lenguaje){
            super(nombre, edad) // llamando al constructor padre 
            this.lenguaje = lenguaje
        }

        saludo(){ //Override
            super.saludo()
            console.log(`Y soy desarrollador de ${this.lenguaje}`);
        }

    }

const nuevoDev = new Desarrollador("Owen", 20, "JavaScript")
console.log(nuevoDev);
nuevoDev.saludo()

// Polimorfismo => varias formas