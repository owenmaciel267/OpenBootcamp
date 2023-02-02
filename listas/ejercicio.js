// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)-
// - Modifica la lista de la compra y añádele "Aceite de Girasol"-
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"-
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha) -
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)-
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)-
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)-
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)-
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const compras = ["pan", "huevos", "carne", "tomate", "lechuga"]
console.log(compras);

// agregar
compras.push("Aceite de Girasol")
console.log(compras);
// eliminar
compras.pop()
console.log(compras);


const pelis = [
    {
        nombre: "Harry Potter",
        director: "Yzhi",
        fecha : "january 1 2009"
    },
    {
        nombre: "Rapido y furioso",
        director: "Owen",
        fecha : "january 1 2010"
    },
    {
        nombre: "Transformer",
        director: "Gallo",
        fecha : "january 10 2011"
    }
]
// Posterior al 2010
const posterior = pelis.filter(año => año.fecha > "january 1 2010")
console.log(posterior);

// los directores de la lista de películas original (utilizando map)-
const directores = pelis.map((director)=> `${director.director}`)
console.log(directores);



// los títulos de la lista de películas original (utilizando map)-
const titulos = pelis.map((title) => title.nombre )
console.log(titulos);


// Concatenar
const NameDirector1 = [titulos.concat(directores)]
console.log(NameDirector1);



// Concatenar con forma de propagacion
const NameDirector2 = [...titulos,...directores]
console.log(NameDirector2);