/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter', 'Healing'];//creo un array de tipo string

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;//publo natal puede ser una propiedad o no en el objeto
}//creo una interface para crear un opjeto de este tipo


const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}//creo el onjeto de tipo interface que cree previamente 

personaje.puebloNatal = 'Pueblo Paleta';


console.table( personaje );
