import { getUser, getUsuarioActivo } from '../../base/05-funciones'
import '@testing-library/jest-dom'

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();
        
        expect( user ).toEqual( userTest );
    })
    
});

describe('Pruebas en 05-funciones, segunda funcion', () => {

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Anderson';

        const userTest2 = {
            uid: 'ABC567',
            username: nombre,
        }

        const usuarioActivo = getUsuarioActivo( nombre );

        expect( usuarioActivo ).toEqual( userTest2 );
    })
    
});