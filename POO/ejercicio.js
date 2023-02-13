// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// - Crea una nueva instancia de "Estudiante"
// - Haz la llamada al método obtenDatos

class Estudiantes {
    constructor(nombre, Asignaturas){
        this.nombre = nombre
        this.Asignaturas = Asignaturas
    }


    obtenDatos(){
        console.log(`Hola, me llamo ${this.nombre} y soy desarrollador en ${this.Asignaturas}`);
    }

}

const newEstudiante = new Estudiantes("Owen", "JavaScript, Html, Css")

console.log(newEstudiante);
console.log(newEstudiante.obtenDatos());
