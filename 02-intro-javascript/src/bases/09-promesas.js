import { getHeroeById } from './bases/08-imp-exp'

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => { 
        //Tareas
        // Importen el
        const heroe = getHeroeById(2);
        resolve( heroe );
        //reject('No se pudo encontrar el heroe')
    }, 2000)
});

promesa
.then( ( p1) => {
    console.log('Heroe:', p1);
} )
.catch( err => console.warn(err) );

console.log('Testing') */

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => { 
            //Tareas
            // Importen el
            const p1 = getHeroeById(id);
            //console.log( p1 );
            if ( p1 !== undefined ) { 
                resolve( p1 );
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn )