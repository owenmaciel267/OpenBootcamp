// Bifurcaciones if ... else
let saldo = 50
let efectivo = 12


if(efectivo<saldo){
    console.log("Puedes sacar dinerp");
}else{
    console.log("Saldo insuficiente");
}


// if else + else if

let nota = 5

if(nota===5){
    console.log("Asa te ilusionaste");
}else if(nota === 4){
    console.log("na men que haces");
}else if(nota === 3){
    console.log("alto burro");
}else if(nota === 2){
    console.log("anda a estudiar loco");
}else if(nota === 1){
    console.log("retirate compa");
}else{
    console.log("No podes sacar 0 jaja ");
}


// Switch

let nota1 = 5

switch(nota1){
    case 6:
        console.log("de culo pa");
            break
    case 5:
        console.log("Asa te ilusionaste");
            break
    case 4:
        console.log("na men que haces");
            break
    case 3:
        console.log("alto burro");
            break
    case 2:
        console.log("retirate compa");
            break
    case 1:
        console.log("de lastima");
            break

    default:
        console.log("Ya fue al ejercito");
            break


}