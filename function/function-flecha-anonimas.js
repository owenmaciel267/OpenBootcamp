// Funciones de tipo flecha - Funciones anonimas

const array = [1, 5, 6, 7, 12, 8, 92]

const array2 = array.map((valor) =>{
    return valor * 2
})
console.log(array2);

// Para usar las funciones tipo flecha, lo mas comun es usarlas en las const o variables

// Las fuction tipo flecha solo se puede acceder despues de ser iniciadas
const dobleValor = valor => valor * 2  // ES anonima

const array3 = array.map(dobleValor)
console.log(array3);





// las Fuction Classic -> se pueden acceder de cualquier parte del script
function doble(valor){
    return valor * 2
}
console.log(doble(6));