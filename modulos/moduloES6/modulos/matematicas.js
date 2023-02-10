export function suma(a,b){
    return a+b
}

export function mult(a,b){
    return a * b
}

export function eleva(a,b){
    return a**b
}




// factorizando
export function factorial(a) {
    // Factorial de 5: 5*4*3*2*1

    let factorial = 1

    for (let i = 2; i <= a; i++){
        factorial *= i
    }

    return factorial
}

// const fact = factorial(5)
// console.log(fact);

// console.log(module);
// Exportar funciones


export const nombre = "owen "