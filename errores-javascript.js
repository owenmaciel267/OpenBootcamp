const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val
    }
    // return false
    // El estandar para lanzar error
    throw new Error("El valor debe ser de tipo numero") 
}
// 

// console.log(elDoble);

const numero = "6"

try{
    // Codigo que oyede fallar
    const elDoble = miFuncion(numero)
    console.log(elDoble);

    console.log("Esta ejecutandose de manera correcta");
} catch(e){

    // En caso de que falle, quiero que ejecutes 
    console.error(`El valor es ${e}`);
    console.error("Error!");


} finally{

    // Esto se ejecuta siempre
    console.log("Yo estoy siempre ");

}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
