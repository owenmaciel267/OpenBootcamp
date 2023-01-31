/* Crea un archivo JS que contenga las siguientes líneas

    - Una variable que contenga tu altura en centímetros (entero)-
    - Una variable que contenga tu altura en metros (número de coma flotante)-
    - Una variable que contenga tu peso en kilogramos (número de coma flotante)-
    - Una variable que contenga tu altura en metros redondeada hacia arriba-
    - Una variable que contenga tu peso en kilogramos redondeado hacia abajo-
    - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript -
*/

// Mi altura en centimetros(entero)
let miAltura = 1.73
console.log(miAltura.toFixed());

// Mi altura en numero coma flotante
console.log(miAltura.toPrecision());

// Mi peso en kg de coma flotante
let miPeso = 77.40
console.log(miPeso.toPrecision());

// Mi altura redondeada hacia arriba
console.log(Math.round(miAltura));

// Mi peso redondeado hacia abajo
console.log(Math.floor(miPeso));

// el máximo valor que se puede obtener en Javascript + 1
let max_valor_js = Number.MAX_VALUE
let suma = max_valor_js + 1
console.log(max_valor_js);

if(suma === max_valor_js){
    console.log(`La suma del maximo valor que se puede obtener en Js + 1 es igual al maximo valor que seria ${suma}`);
}else{
    console.log("error");
}