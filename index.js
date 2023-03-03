// localStorage.setItem("nombre", "Owen")
// localStorage.setItem("nombre", "gallo")

console.log(localStorage.getItem("nombre"))

// JSON.stringify => convierte un objeto/array en string
localStorage.setItem("soyyo", JSON.stringify({nombre: "Owen", edad: 20}))
// JSON.parse => convierte un objeto/array en un objeto de javascript
console.log(JSON.parse(localStorage.getItem("soyyo")));

// Como eliminar un item de localstorage
// localStorage.removeItem("nombre")




// Todos estos conceptos se aplican al sessionStorage y en teoria el session storage solo se guarda en su pestaña principal 

sessionStorage.setItem("nombre1", "Delia")
sessionStorage.getItem("nombre")
sessionStorage.removeItem("nombre")

sessionStorage.getItem("esElla", JSON.stringify({nombre: "gallo", edad: 20}))
console.log(JSON.parse(sessionStorage.getItem("esElla")));

sessionStorage.removeItem("esELla")
sessionStorage.removeItem("persona")

// ______ Cookies________________
// Creando una nueva cookie
document.cookie = "I'am=OwenConCookie"

// Como hacer que caduque una cookie
// Es necesaria la palabra clave "expires"
document.cookie = "NombreCaducidad=OwenseVa;expires=" + new Date(2023, 2, 3, 16,45,00).toUTCString()

