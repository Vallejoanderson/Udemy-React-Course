
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme'

describe('Pruebas en <CounterApp />', () => {
    test('Debe de mostrar un snapshot con los valores por defecto', () => {
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar un snapshot con el valor de 100', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor}/>);

        const valueH2 = wrapper.find('h2').text();
        expect( parseInt(valueH2) ).toBe( valor );
    })
    
})
