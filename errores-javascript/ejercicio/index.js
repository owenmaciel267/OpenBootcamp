// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch

const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


const msjPersonalizado = valor =>{

    if(typeof valor === "number"){
        return valor * 2
    }
    
    throw Error("Pone un numero pelotudo")

}

const elNumero = "3"

try{
    const dobleNumero = msjPersonalizado(elNumero)
    console.log(dobleNumero);

    console.info("Esto va re cheto");
} catch (e){
    console.error(`pone un numero te dije boludo ${e}`);
} finally{
    console.warn("Soy re pesado");
}

