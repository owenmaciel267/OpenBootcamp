// Carga y sobrecarga de funciones

function saludar(){
    hola()
}
function hola(){
    console.log("Holas soy la funcion Hola()");
}
saludar()

//// 1. global()
//  2. saluda() global()
// 3. hola() saludar() global()
// 4. saluda() global()
// 5. global()

// Functions recursivo
// function recursivo(){
// recursivo()
// }
// recursivo()