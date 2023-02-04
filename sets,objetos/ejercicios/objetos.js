// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


const misDatos ={
    nombre: "Owen",
    apellido: "Maciel",
    edad: 20,
    altura: 1.73,
    eresDesarrollador: true
}

let miEdad = misDatos.edad
console.log(miEdad);

const yoYMisAmigos = [{...misDatos},{
    nombre: "Gabriela",
    apellido: "Almiron",
    edad: 19,
    altura: 1.55,
    eresDesarrollador: false
},
{
    nombre: "Gaston",
    apellido: "Aguirre",
    edad: 19,
    altura: 1.80,
    eresDesarrollador: false
}]
console.log(yoYMisAmigos);

const ordenados = yoYMisAmigos.sort((a,b) => a.edad - b.edad)

console.log(ordenados);