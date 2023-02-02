// Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua
for(let i = 0; i<array.length;i++){
    console.log(array[i]);
}

// Forma ES6 (Mas eficiente) .forEach()

let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]

arrayNums.forEach(valor =>{
    suma+=valor
    console.log(valor);
})
console.log(suma);


// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90

const variable = array.find(valor =>{
    if(valor === 90){
        return true
    }
})
console.log(variable);

const listaObjetos = [
    {nombre:"leire", edad:24},
    {nombre:"gorka", edad:25},
    {nombre:"miguel", edad:20},
    {nombre:"gallo", edad:20},
    {nombre: "lucia", edad:21}
]

const objeto = listaObjetos.find(o =>{
    if(o.nombre === "miguel"){
        return true
    }
})
console.log(objeto);


// Forma mas eficiente
const objeto1 = listaObjetos.find(o =>{
    return o.nombre === "leire"
})
console.log(objeto1);


// Forma aun mas eficiente
const objeto2 = listaObjetos.find(o => o.nombre === "lucia")
console.log(objeto2);


