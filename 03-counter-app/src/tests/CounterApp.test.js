
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme'

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });
    
    test('Debe de mostrar un snapshot con los valores por defecto', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar un snapshot con el valor de 100', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor}/>);

        const valueH2 = wrapper.find('h2').text();
        expect( parseInt(valueH2) ).toBe( valor );
    })


    test('Deberia sumar + 1 al hacer click en el button +1', () => {

        wrapper.find('button').at(0).simulate('click'); 
        const counterText = wrapper.find('h2').text().trim();
    
        expect( counterText ).toBe('11');

    })

    test('Deberia restar -1 al hacer click en el button -1', () => {

        wrapper.find('button').at(2).simulate('click'); 
        const counterText = wrapper.find('h2').text().trim();
    
        expect( counterText ).toBe('9');

    })

    test('Deberia resetear el valor por defecto en el componente', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 }/> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim;

        expect( counterText) .toBe('105')

    })
    
})
