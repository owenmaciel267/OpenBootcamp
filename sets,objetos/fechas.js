// Fechas en javascript

const fecha = new Date()
console.log(fecha);

// Atencion los meses inician en 0 (enero = 0 y diciembre = 11)
const fecha2 = new Date(1987, 10, 12, 22,22,22)
console.log(fecha2);

const fecha4 = new Date("Octuber 13 1979")
console.log(fecha4);

console.log( fecha > fecha2);

const fecha5 = new Date(1987, 10, 12, 22,22,22)

console.log(fecha5 === fecha2); // ERROR - no se puede comparar fechas asi


// Esta es la forma de comprar fechas
console.log(fecha2.getTime() === fecha5.getTime());


// Como obtener dia , mes, año y fecha
// obtener dia .getDate()
console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0 - enero y diciembre - 11)
console.log(fecha2.getMonth() + 1);

// Año .getFullYear()
console.log(fecha2.getFullYear());

// Truquito mostrar una fecha en un string
console.log(fecha2);

// .toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB"));