// Crea un nuevo proyecto de Node
// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
// - Duplica el archivo del ejercicio de la sesión 04-Textos
// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
// - Crea el fichero .eslintrc.json
// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
// - Crea un script en el package.json para corregir automáticamente todos los errores
// - Ejecuta el script a través del terminal


// String o cadena de caracteres 

let str = "Hola soy un texto";
let str_sng = "Hola soy un texto";
console.log(str);
console.log(str_sng);


let comillas = "el otro dia me dijo que \"que era re gil\", pero yo no le hice caso";
console.log(comillas);

// __________
let invertida = "Hola mi reinol ";
console.log(invertida);

let nombre = "Owen";
console.log(`Hola como estas ${nombre}`);

// Plantillas html
let plantillas = `
<html>
    <h1>Hola como estas</h1>
    <p>Este es un parrafo</p>
</html>
`;
console.log(plantillas);

// Introduccion de variables en html
let libros = ["Empieza por el por que", "El moje que vendio su ferrari", "El poder del ahora"];