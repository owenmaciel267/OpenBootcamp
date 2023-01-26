let num = 10
let result = num
while (num > 1) { 

    num--; 
    result = result * num;

    // num=num*result
}

console.log(`La factorial con el bucle while es ${result}`);