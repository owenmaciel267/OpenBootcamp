// Principales operaciones aritmeticas
let a = 3.5
let b = 4.8

// Suma
console.log(a+b);
// resta
console.log(a-b);
// Multiplicacion
console.log(a*b);
// Division
console.log(a/b);



// Representacion de los numeros en cadena de texto
console.log(typeof a);

let a_s = a.toString()
console.log(a_s);
console.log(typeof a_s);

// Redondeo de numeros decimales
let c = 3.3
let d = c * 3

console.log(d);

// .toFixed() limitar el valor de decimales => Esto nos convierte nuesta variable a string
console.log(d.toFixed(1));

let e = 1839.1232456789
let f =  1232423
console.log(e.toFixed(1));
console.log(f.toFixed(2));


// toPrecision(x) - Limita el numero de cifras significativas => esto nos devuelve un string
console.log(e.toPrecision(6));
