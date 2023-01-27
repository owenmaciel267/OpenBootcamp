// Metodos de cadenas de texto (parte 2)

let input = "ACUARIO"
let db = "acuario"

// toLoweCase()=>todo minusculas - toUpperCase() =>todo mayusculas

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase()===db.toLowerCase());

// Formas de concatenar dos cadenas de caracteres

let str_1 = "Holas soy la primera cadena"
let str_2 = "Y soy la segunda parte"

console.log(str_1.concat(" ",str_2," Mas cosas"));
console.log(str_1+" "+str_2);
console.log(`${str_1} ${str_2}`);



// Eliminar espacios al inicio y al final
let str_3 = "   Hola Soy un string con espacios al final.   "
console.log(str_3.length);

// trim()
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);
console.log(str_3.trim().length);


// Obetener el caracter que hay en cierta posicion

let str_4 = "Hola soy el string número 4" //["H","o","l","a"," ","s"...]

console.log(str_4.charAt(0));
console.log(str_4[1]);


// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Owen y me gusta ek futbol. Mi nombre es Owen y mi apellido Maciel"

console.log(str_5.indexOf("Owen"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Owen"));
