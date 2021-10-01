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