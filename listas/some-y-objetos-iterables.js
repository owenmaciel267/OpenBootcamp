// .some()

const array = [3, 7, 2, 4, 7, 9, 42, 7865, 23, -2]

const res = array.some( valor => valor < 0)
console.log(res);

const existe = array.some(valor => valor === 3)
console.log(existe);


const listaObjetos = [
    {nombre:"leire", edad:24},
    {nombre:"gorka", edad:25},
    {nombre:"miguel", edad:20},
    {nombre:"gallo", edad:20},
    {nombre: "lucia", edad:21}
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "miguel")
console.log(existeMiguel);


// Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Owen"
console.log(str[5]);

const ar_str = Array.from(str)
console.log(ar_str);


const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);