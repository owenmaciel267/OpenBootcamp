const boton = document.getElementById("btn")
const boton1 = document.getElementById("btn1")

boton.addEventListener("click", ()=>{
    console.log("click");
    alert("Se hizo click en el boton")

    confirm("Estas de acuerdo con esto") && console.log("Vale tio");

    confirm("bueno fijate si o no") 
        ? console.log("OK")
        : console.log("Nel");


    const respuesta = confirm("seguro")

    if(respuesta){
        console.log("Si lo estas");
    }else{
        console.log("no lo estas");
    }
})




// Boton 2
boton1.addEventListener("click", ()=>{
    const nombre = prompt("cual es tu nombre")
    if(nombre){

        console.log(`Tu nombre es ${nombre}`);
    }else {
        console.log("pone tu nombre te dije");
    }
})

const lista =[{
    nombre: "owen",
    edad: 20
},{
    nombre: "gallo",
    edad: 20 
},{
    nombre: "Regis",
    edad: 2
}]
// console.log(lista);
console.table(lista);