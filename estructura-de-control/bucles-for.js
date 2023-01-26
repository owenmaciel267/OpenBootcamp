// Bucle for

// for(inicializacion; condicion; actualizacion){
//     // Esto es el bucle
// }
// for (let i = 0; i < 10; i+=1) {
//     console.log(i);
    
// }

let lista = [1,4,6,2,3,7,10,12,800];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// for of
for (const valor of lista) {
    console.log(valor*2);
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor);
})

// for in
let persona = {
    nombre:"owen",
    apellido:"maciel",
    edad:20,
    isDeveloper: true
}

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}