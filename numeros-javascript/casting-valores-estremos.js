// Operador .valueOf() - obtener valores numericos a partir de literales
let a = 2
let b = new Number(3)

console.log(a);
console.log(b);
console.log(a + b);

console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

// NaN - infinity
let n = Number("adios")
console.log(n);
console.log(isNaN(n));

let numerador = 19
let divisor = 0

console.log(numerador / divisor);


// Como convertir los string a valores con Number, parseInt y parseFloat
let numero = "5.89"
let num = 17.2

console.log(typeof numero);
console.log(numero + num); // error de concepto

// Number 
console.log(Number(numero) + num);

// ParseInt
console.log(parseInt(numero) + num);
// ParseFloat
console.log(parseFloat(numero) + num );


// Numeros hexadecimal(16)
let numHex = "0x3a5b7"
console.log(parseInt(numHex, 16));

// Obtener los valores maximo y minimo en Javascript
let minPrecision = Number.EPSILON
let min_valor_js = Number.MIN_VALUE
let max_valor_js = Number.MAX_VALUE

console.log(minPrecision);
console.log(min_valor_js);
console.log(max_valor_js + 1);
