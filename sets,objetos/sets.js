// Sets o conjuntos

const array = [1,2,3,4,5,6,1,2,5, "Hola", {id:5}, {id:5},"hola"]

console.log(array);

const miSet = new Set(array)
console.log(miSet);

// .add() agregar 

miSet.add(9)
console.log(miSet);


// .delete() eliminar elementos

miSet.delete("hola")
console.log(miSet);

// Vaciar nuestro set .clear()
// miSet.clear()
// console.log(miSet);

// has() si un elememento existe en nuestro set
console.log(miSet.has(1))


// .size ver cuantos valores tiene mi set => valores unicos
console.log(miSet.size);

// Recorrer
miSet.forEach(valores=>{
    console.log(valores);
})

// objeto iterator
const el_set = miSet.values()
console.log(el_set);

// convertir set a un array => de forma propagada
const ar_miset = [...miSet]
console.log(ar_miset);