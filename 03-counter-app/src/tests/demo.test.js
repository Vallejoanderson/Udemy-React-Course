
describe('Pruebas en e archivo demo.test.js', () => {
    
    test('Debe de ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamiento de
    expect( mensaje ).toBe( mensaje2 );
    })

});