// function suma(a,b){
//     return a+b
// }

// function mult(a,b){
//     return a * b
// }

// function eleva(a,b){
//     return a**b
// }


// factorizando
// function factorial(a) {
//     // Factorial de 5: 5*4*3*2*1

//     let factorial = 1

//     for (let i = 2; i <= a; i++){
//         factorial *= i
//     }

//     return factorial
// }

// const fact = factorial(5)



// _________________________Forma de exportar/importar modulos
// 1. CommonJs - require
// Import ES6 - import

// //////////// IMPORTANDO CON  REQUIRE
const moduloMatematicas = require("./modulos-1/matematicas.js")
// const factorial = moduloMatematicas.factorial
// const suma = moduloMatematicas.

// ____________Manera mas facil y corta
const {factorial} = moduloMatematicas
const {suma} = moduloMatematicas

// uNA FORMA MAS CORTA, pero solo me permite usar los nombres que yo pida en la constante
// const {factorial, suma} = require("./modulos-1/matematicas.js")

// console.log(moduloMatematicas);

const fact = factorial(5)
console.log(fact);

const sum = suma(5,2)
console.log(sum);
