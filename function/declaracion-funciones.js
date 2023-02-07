// Que son las funciones, como se declaran y como se utilizan

const nom = "Owen Maciel"

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar(nom)

// ////////////////////
let nombre_2 = "Owen gi"

console.log(nombre_2);

despedir(nombre_2)
console.log(nombre_2);

function despedir(nombre){
    nombre = "Owen Maciel"
    console.log(`Adios ${nombre}`);
}

// ////////////// fuction con objetos

let persona = {nombre: "Juan", apellido: "Gonzalez"}

saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

// ///////////// Prametro por defecto

function impremeNumero(numero = 7) { // Parametros por defectos
    console.log(numero);
}
impremeNumero()

// ////////// Parametros indeterminado propagacion

function imprimir(...parametros){
    console.log(parametros);
}
imprimir(1, 2 ,3, 45, "hola", {id: 14})

function suma(...nums){
    return nums.reduce((a,b)=> a + b)
}
const s = suma(4, 4, 4, 4, 4, 20)
console.log(s);


// Que es el hambito de una function => no se puede acceder a las variables que estan dentro de las funciones desde fuera de la function, pero si se puede acceder a las variables que estan fuera de la function desde adentero de la fuction

function multiplicar(a=0, b=0){
    return a*b
}
console.log(multiplicar(2,3));