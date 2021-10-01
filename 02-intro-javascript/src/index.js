<<<<<<< HEAD
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;
console.log( p3 );

const retornaArreglo =  () => {
    return ['ABC', 123];
}
=======
//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'
import { heroes } from "./data/heroes";

const getHeroeById = ( id ) => {
    return heroes.find( obj => obj.id === id);  
}

//console.log( heroes );
console.log( getHeroeById(2) );

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( obj => obj.owner === owner);
}

console.log( getHeroeByOwner('DC') );
>>>>>>> f988a3ddbd2b1e0f70f0bec3522ea58efcefacfc
