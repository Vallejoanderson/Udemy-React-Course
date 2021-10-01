// Funciones en JS
/*const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}*/

/*const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}*/

//const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo`;

//saludar = 30;

console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502',
});


const user = getUser();
console.log( user );




//Tarea
//1. Transformarlo en una funcion flecha de
//2. Tiene que retonar un objeto implicito
//3. Pruebas
const getUsuarioActivo = ( nombre ) => (
    {
        uid: 'AB3241',
        username: nombre,
    });
const usuarioActivo = getUsuarioActivo('Andersoon');

console.log(usuarioActivo);