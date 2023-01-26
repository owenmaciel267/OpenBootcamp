let num = 10
let result = num
while (true) { 
    if(num > 1){
        num--; 
        result = result * num    
    
    }else if(num === 1){
        
        break
    }     
    console.log(`La factorial con el bucle while es ${result}`);   
}
