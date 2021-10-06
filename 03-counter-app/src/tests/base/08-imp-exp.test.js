import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'


describe('Prueba en funciones de heroes', () => {
    
    test('Debe retonar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual(heroeData);
    })

    test('Debe retonar undefined si el heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( undefined );
    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        //owner
        //toEqual al arreglo filter

        const owner = 'DC';
        const heroesArr = getHeroesByOwner(owner);
        console.log( heroesArr );
        expect( heroesArr ).toEqual( heroes.filter( h => h.owner === owner) );
    })

    test('Evalue la longitud del arreglo de Marvello', () =>{
        const owner = 'Marvel';
        const heroesArr = getHeroesByOwner(owner);
        console.log( heroesArr );

        expect( heroesArr.length ).toBe( 2 );

    })

})