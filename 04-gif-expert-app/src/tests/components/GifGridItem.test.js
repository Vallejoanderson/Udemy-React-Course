import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

import '@testing-library/jest-dom';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/image.jpg';
    const wrapper = shallow( 
        <GifGridItem 
            title = { title }
            url = { url }
        /> 
    );
    
    test('Debe de mostrar el componente <GifGridItem />', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de tener este parrafo con el titulo', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
        
    })
    

    test('Debe de tener la image igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })
    

    test('Debe de tener la clase animate__zoomIn', () => {
        
        const div = wrapper.find('div');

        console.log( div.props().className );

        expect( div.props().className ).toContain('animate__zoomIn');
    })

})