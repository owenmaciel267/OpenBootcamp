// Trabajando con objetos

const obj ={
    id:4,
    nombre: "juan" ,
    apellido: "Gonzalez" ,
    isDeveloper: false ,
    libros_favoritos: ["ele metodo", "el codigo de la manifestacion"] ,
    "4-juegos": [1,2,4,5] 
}

console.log(obj.id);
console.log(obj["4-juegos"]);

// Como podemos llamar con variables
const prop = "isDeveloper"
console.log(obj[prop]);

// Replicar un objeto
// Lo que tiene de malo esto es que cuando yo haga un cambio en el obj2 tambien se va a realizar el cambio en el obj original.
const obj2 = obj
console.log(obj2);

obj2.nombre = "tiago"
console.log(obj2);
console.log(obj);


// Forma corresta de asignar un objeto a otro objeto
const obj3 = {...obj}

console.log(obj.nombre);

obj3.nombre = "De Nashe"
console.log(obj3.nombre);


//////////////////
// Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo:"lo que el viento se llevo", año: 1939},
    {titulo:"titanic", año: 1997},
    {titulo:"moana", año: 2016},
    {titulo:"el efecto mariposa", año: 2004},
    {titulo:"ted", año: 2012}
]
console.log(listaPeliculas);

// Ordenar .sort() => Muta el valor de la lista orginal
listaPeliculas.sort((a,b) => a.año - b.año)
console.log(listaPeliculas);