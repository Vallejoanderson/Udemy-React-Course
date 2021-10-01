const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros] = retornaArreglo();
console.log( letras, numeros );

const useState = ( valor  ) => {
    return [ valor, ()=> { console.log('Hola mundo') }];
}

const arr = useState('Goku');
console.log(arr);
console.log( arr[1]() );

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const [ nombre, setNombre ] = useState('Vegeta');
console.log( nombre );
setNombre();