/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b:number): number {
    return a + b;
}//defino argumentos y el tipo de retorno 

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}//funcion flecha

function multiplicar( numero: number, otroNumero?: number, base:number = 2 ): number {
    return numero * base;
}//primero los argumentos obligatorios, luego los opcionales y luego los que tienen valor por default 


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}//defino la interface de un objeto con una funcion 


function curar( personaje: PersonajeLOR, curarX:number ): void {//si no retorna nada se pone void

    personaje.pv += curarX;
}//defino la funcion curar que va a recibir un objeto previamente creada su interface

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}// creo el objeto

curar( nuevoPersonaje, 20 );//ejecuto la funcion y le envio los argumentos previamente tipo declarado 

nuevoPersonaje.mostrarHp();// ejecuto funcion del objeto 


