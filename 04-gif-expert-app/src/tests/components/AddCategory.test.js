import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( 
        <AddCategory setCategories={ setCategories }/> );
    
    beforeEach( () => {
        
        jest.clearAllMocks();
        wrapper = shallow( 
            <AddCategory setCategories={ setCategories }/> );
         
    });

    test('Debe de mostrarse correctamente', () => {
        
            expect( wrapper ).toMatchSnapshot();

    })

    test('Debe cambiar cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe( value  );

    })
    
    test('No debe de postear la informacion on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. El valor del input debe de estar ''
        wrapper = shallow( 
            <AddCategory setCategories={ setCategories }/> );
        const value = 'Hola mundo';
        const input = wrapper.find('input');

        input.simulate('change', { target: { value } } );
        wrapper.find('form').simulate('submit',  { preventDefault(){} } );

        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('p').text().trim() ).toBe( '' );
    })
    

})
