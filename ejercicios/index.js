// Crea un nuevo proyecto de Node
// - Crea un fichero index.html (utiliza el comando "!")
// - Crea un fichero index.js
// - Integra el fichero index.js en el html
// - En el fichero index.js:
// - Crea una variable con tu nombre
// - Crea una variable con tu apellido
// - Crea un objeto con tu nombre y tu apellido

// - Almacena el objeto anterior en la SessionStorage

// - Almacena el objeto anterior en la LocalStorage
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo
// - Observa cómo la SessionStorage está vacía
// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador
// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

let nombre = "Owen"
let apellido = "Maciel"

const nombreCompleto ={
    name: nombre,
    lastname: apellido
}
console.log(nombreCompleto);

// SessionStorage

sessionStorage.setItem("nombreCompleto", JSON.stringify({name: nombre, lastname: apellido}))
console.log(JSON.parse(sessionStorage.getItem("nombreCompleto")));


// LocalStorage

localStorage.removeItem("soyyo")
localStorage.setItem("nombreCopleto", JSON.stringify({name: nombre, lastname: apellido}))
console.log(JSON.parse(localStorage.getItem("nombreCompleto")));

// cookie

// const covertirEn = JSON.stringify(nombreCompleto);
// document.cookie = `nombreCompleto=${covertirEn}; expires=Fri, 3 march 2023 17:43:00` //
//se borro


const jsonString = JSON.stringify(nombreCompleto);

document.cookie = `nombreCompleto=${jsonString}; expires=Fri,`+ new Date(2023,2,3, 18,00,00).toUTCString() ; //31 Dec 9999 23:59:59 GMT
