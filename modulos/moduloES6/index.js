// ____________________Manera de importar por partes

// import { suma, factorial, nombre } from "./modulos/matematicas.js"
// const sum = suma(4,12)

// // console.log(nombre);
// const fact = factorial(5)
// console.log(fact);


// Como importar todo el archivo

import * as moduloMatematicas from "./modulos/matematicas.js"

// Exportando por defecto (uno por archivo)
import getAutor,{ libro } from "./modulos/literaturas.js";

const factorial = moduloMatematicas.factorial(5)
console.log(factorial);


console.log(getAutor());
console.log(libro);
