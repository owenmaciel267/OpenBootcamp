// - Una cadena de texto con tu Nombre
// - Otra cadena de texto con tu Apellido
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// - Una variable que contenga la primera letra del Nombre
// - Otra variable que contenga la última letra del Apellido

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"


// nombre
let nombre = "Owen"
console.log(nombre);
// apellido
let apellido = "Maciel"
console.log(apellido);
// Contiene nombre y apellido
let estudiante = `${nombre} ${apellido}`
console.log(estudiante);


// Nombre y apellido en mayusculas
let estudianteMayus = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
console.log(estudianteMayus);


// Nombre y apellido en minusculas
let estudianteMinus = `${nombre.toLowerCase()} ${apellido.toLowerCase()}`
console.log(estudianteMinus);



// El numero de letras que tiene estudiante
let numero_letras = estudiante.length
console.log(numero_letras);


// Primer caracter del nombre
let primer_letra = nombre.charAt(0)
console.log(primer_letra);


// Primer caracter del apellido
let primer_Aletra = apellido.charAt(0)
console.log(primer_Aletra);


//Eliminando el espacio en estudiante 
let dltSpace = estudiante.replace(" ","")
console.log(dltSpace);


// Preguntando si El nombre esta incluido
let contiene = estudiante.includes("Owen")
console.log(contiene);

