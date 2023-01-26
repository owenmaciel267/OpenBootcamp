// Comparaciones 

// Igualdad
if(5 == 5){
    console.log("5 es igual que 5");
}

if(5 == 5){
    console.log("5 es muy igual a 5");
}


let a = 5
let b = 5


// == Solo compara el valor 
// === Compara el tipo

if(a == b){
    console.log("A es igual que B - debil");
}

if(a === b){
    console.log("A es igual que B - fuerte");
}

// _____________________________________

let c = 4
let d = "4"

if(c != d){
    console.log("C es diferente es D -Debil");
}

if(c !== d){
    console.log("c es diferente a d- Fuerte");
}


// _________________

// Comparacioenes mayor que y menor que
let max = 10
let min = 5

// Mayor y mayor que
if(max>min){
    console.log("Max es mayor que min");
}
if(max >= min){
    console.log("Max es mayor o igual que min");
}

// Menor y menor que

if(min < max){
    console.log("Min es meno que max");
}

if(min <= max){
    console.log("Min es menor o igual que max");
}