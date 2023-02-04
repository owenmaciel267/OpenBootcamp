// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const miNacimiento = new Date(2003, 0, 22)
let hoy = new Date()

let comparacion = hoy > miNacimiento
console.log(comparacion);

let dia = miNacimiento.getDate()
console.log(dia);

let mes = miNacimiento.getMonth() + 1
console.log(mes);

let año = miNacimiento.getFullYear()
console.log(año);