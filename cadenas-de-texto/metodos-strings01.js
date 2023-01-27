// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "Hola soy un string"
console.log(str.length);

// Obtener partes de cadenas de caracteres
// .slice() .substring() .substr()
let slice_str = str.slice(0,4)
console.log(slice_str);

let subtring_str = str.substring(4,11) 
console.log(subtring_str);


let substr_str = str.slice(11,18)
console.log(substr_str);


// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Owen"
console.log(cadena);

// Solo reemplaza la primer instancia 
console.log(cadena.replace("Owen", "Owen Maciel")); 


// ________________________________________

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar los arboles y odia comer platano. El prefiere pasear por el bosque, oler flores y recoger las nueces que caen de los arboles"

console.log(texto_largo.replace("los", "cinco"));

// Al utilizar la expresion regular /g (global), remplasa todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));


// 