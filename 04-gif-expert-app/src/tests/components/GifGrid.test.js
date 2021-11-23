import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en GifGrid', () => {

    const category = 'Soyunacategoria'
    
    test('Obtener snapshot inicial de <GifGrid />', () => {

        useFetchGifs.mockReturnValue({

            data: [],
            loading: true,

        });

        const wrapper = shallow( <GifGrid key = { category } category = { category } /> );
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cual/quierocosa,jpg',
            title: 'Cualquier cosa',
        }]

        useFetchGifs.mockReturnValue({

            data: gifs,
            loading: false,

        });

        const wrapper = shallow( <GifGrid key = { category } category = { category } /> );
        
        expect(wrapper ).toMatchSnapshot();

    })

})
