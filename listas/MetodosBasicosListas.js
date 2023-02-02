// Como trabajar con listas/array/vectores

let array = new Array


let var1 = 45

let array3 = [1, "hola", false, {id:5}, null, undefined, var1]
console.log(array3);

// Acceder a los valores de un array a traves de su posicion
// array[indice]=> 0,1,2,3,4,5...
console.log(array3[1]);


// Metodos para introduccir nuevos valores en nuestros arrays
// .push() .unshift() => agregan valores a nuestro array
// .push() => agrega el valores al final
array3.push("final")
console.log(array3);


array3.unshift("inicio")
console.log(array3);



// Metodos para eliminar valores de nuestro array
// .pop() .shift() => Mutan valores de nuestro array
let array2 = [11,22,33,44,55,66]
// .pop() => Elimina valores al final
array2.pop()
console.log(array2);

// .shift() Eliminan valores del inicio
array2.shift()
console.log(array2);

// Metodo para eliminar modificar o añadir valores a nuestro array
// .splice(x, y, z)

let arraySplice = [1,2,3,4,5,6]

// Eliminar valores .splice(indice, numValoresAEliminar)
arraySplice.splice(0, 2,) // Elimando los valores del indice 0 hasta el siguiente que seria 1 => indice 0 y 1
console.log(arraySplice);


// Añadir valores .splice(indice, 0, valores)
arraySplice.splice(0, 0, 1, "Hola") //Agregando los valores 1 y "Hola"
console.log(arraySplice);


// Modificar valores .splice(indice, 1, valores)
arraySplice.splice(1, 1, 2) // Aca lo que estoy modificando es el "Hola" por 2
console.log(arraySplice);

