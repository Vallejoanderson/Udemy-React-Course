const myname = 'Anderson';
const surname = 'Vallejo';

const fullname = `${ myname } ${ surname }`;

console.log(fullname);

function getSaludo(aname) {
    return 'Hola ' + aname; 
}

console.log(`Este es un saludo: ${ getSaludo(myname) }`);