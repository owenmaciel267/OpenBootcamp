var variable;
let variableLet_;

const constante = "owen";
console.log(constante);
// constante = "adios" esto nos da error


var a = 1;
console.log(a);
a=4;
console.log(a);



let b = 3;
console.log(b);
b=5;
console.log(b);

// diferencia entre var y let ==> var afeta a todo el codigo y let afecta a el bloque 

var variable = "Hola soy una variable VAR"

for(var i=0;i<3;i++){
    variable = "soy la segunda variable"
}
console.log(variable);


// _______________________

let variableLet = "Hola soy una variable Let";

for(let i=0;i<3;i++){
    let variableLet = "soy la segunda variable"
}
console.log(variableLet);


// Nos deice de que tipos son las varibles 
console.log(typeof 1); 