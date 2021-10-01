//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';
import heroes from "../data/heroes";

//console.log( owners );

const getHeroeById = ( id ) => {
    return heroes.find( obj => obj.id === id);  
}

//console.log( heroes );
//console.log( getHeroeById(2) );

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( obj => obj.owner === owner);
}

//console.log( getHeroeByOwner('DC') );

export {
    getHeroeById,
    getHeroeByOwner,
}

