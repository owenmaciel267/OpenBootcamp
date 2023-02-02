// Metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San Sebastian", "Curuzu Cuatia", "Corrientes", "Barcelona", "Bilbao"]

const val = array.forEach(v =>{
    console.log(v);
})

// .map()
const newArray = array.map((valor, indice) =>`${indice + 1} - ${valor}`)
console.log(newArray);



// filter()
const listaObjetos = [
    {nombre:"leire", edad:34},
    {nombre:"gorka", edad:35},
    {nombre:"miguel", edad:20},
    {nombre:"gallo", edad:20},
    {nombre: "lucia", edad:21}
]

const personaMayores = listaObjetos.filter(obj => obj.edad>30)
console.log(personaMayores);



const nuevaLista = listaObjetos.filter(obj =>obj.nombre !== "miguel")
console.log(nuevaLista);


// .reduce()
const valores = [3, 56, 23, 5, 90, 100]


const suma = valores.reduce( (acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);

    return acumulado + cur
})
console.log(suma);