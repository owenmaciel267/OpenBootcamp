// Como obtener una lista a partir de otra .slice()
const array = ["Hola", 1, 2, 3, true, null, "adios"]

// .slice > no modifica el valor del array original
console.log(array.slice(1, 5));

const array2 = array.slice(1, 5)
console.log(array2);
