//import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe de mostra el mensaje "Hola, soy Goku"', async () => {   
    //     const saludo = "Hola, soy Goku";
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>)
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('Debe de mostra <PrimeraApp /> correctamente ', () => {
        
        const saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />)

        expect( wrapper ).toMatchSnapshot();
    })
  
    test('Debe de mostrar el subittulo enviado por props', () => {
        const saludo = "Hola, soy Goku";
        const subTitulo = "Soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo } 
                subTitulo={ subTitulo } 
            />
        );

        const textoParrafo = wrapper.find('p').text();
       expect(textoParrafo).toBe( subTitulo );
    })
    

})