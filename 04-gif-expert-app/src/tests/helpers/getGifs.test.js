

import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        
    })
    
    test('Debe de traer 0 elements', async() => {
        
        const gifs = await getGifs('');
    
        expect( gifs.length ).toBe( 0 );
    })
    
    
})
