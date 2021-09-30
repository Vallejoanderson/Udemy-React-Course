const persona = {
    nombre: 'Tony',
    apellido: 'Startk',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 43231432,
        lat: 14.23123,
        lng: 34.123123,
    }
};

//console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );