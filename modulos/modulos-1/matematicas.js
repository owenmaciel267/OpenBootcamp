function suma(a,b){
    return a+b
}

function mult(a,b){
    return a * b
}

function eleva(a,b){
    return a**b
}




// factorizando
function factorial(a) {
    // Factorial de 5: 5*4*3*2*1

    let factorial = 1

    for (let i = 2; i <= a; i++){
        factorial *= i
    }

    return factorial
}

// const fact = factorial(5)
// console.log(fact);

console.log(module);
// Exportar funciones
module.exports = {
    suma,
    mult,
    eleva,
    factorial
}