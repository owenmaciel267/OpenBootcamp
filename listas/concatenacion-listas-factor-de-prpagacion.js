// Como unir dos listas .concat(lista2)

const lista1 = ["Hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2));


const lista3 = lista1.concat(lista2)
console.log(lista3);

// Como unir dos listas con el factor de propagacion 
console.log(...lista3);

const lista4 = [...lista1, ...lista2]
console.log(lista4);





// ERROR mal entendido el concepto de propagacion
const lista5 = [lista1,lista2] //Esto no estaria bien ya que se obtiene un array que contiene dos array

console.log(lista5);
