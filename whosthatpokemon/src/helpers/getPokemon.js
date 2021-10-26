
const getPokemon = async() => {

    const url = `https://pokeapi.co/api/v2/pokemon/1/`;
    const resp = await fetch(url);
      
    const results  = await resp.json();
    
    const { front_default:img } = results.sprites.other["official-artwork" ];
    const { name:pname }        = results.species;

    console.log(img);
    console.log(pname);

    return {
        pname,
        img,
    };
}

export default getPokemon