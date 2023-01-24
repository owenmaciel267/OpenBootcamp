// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const myData = new Array(5)

myData[0] = "Owen Maciel"
myData[1] = 20
myData[2] = true
myData[3] = new Date(2003,0,22)
myData[4] = libroFavorito ={
    autor: "ni idea",
    fecha: "en emicion",
    titulo: "La vida despues de la muerte",
    url: "https://nartag.com/l/el-principio-despues-del-fin-novela/capitulo-403/"
}

console.log(myData);