/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {//funciones que reciben diferentes tipos de dato en el argumento
    return argumento;
}


let soyString  = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

let soyExplicito = queTipoSoy<number>( 100 );





