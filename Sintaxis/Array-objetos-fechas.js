// Listas, arrays o arreglos
const lista = [1, "hola", true, undefined, null] 
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3) 
lista3[0] = "soy el primer elemento , index 0"
const lista4 = [lista, lista2, lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "lg",
    isWhite: false,

    // array dentro de un objeto
    contacto: ["martin", "raul", "maria"],

    // objeto dentro de un objeto
    tarjeta: {
        marca:"sandisk",
        almacenamiento: 256,
    }
}

movil.año = 2019
movil.marca = "samsung"

console.log(movil);


// Fechas
// libreria de apoyo moment.js

const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10) // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date ("march 25 2020")
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15)
console.log(fecha_valores); 

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const año = ahora.getFullYear()

console.log(`Hoy es ${dia} del mes ${mes} en el año ${año}`);
