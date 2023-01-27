// Metodos de cadenas de texto parte(3)
// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar los arboles y odia comer platano. El prefiere pasear por el bosque, oler flores y recoger las nueces que caen de los arboles"

// match => cuantas ves se repite una palabra
console.log(texto_largo.match(/no/g))


// includes => si el texto contiene sierta palabra
console.log(texto_largo.includes("prefiere"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"));
// Saber si el texto termina con una palabra
console.log(texto_largo.endsWith("arboles"));