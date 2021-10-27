
const getPokemon = async() => {

    const randomPokemon = Math.floor(Math.random() * 200 + 1);

    const url = `https://pokeapi.co/api/v2/pokemon/${ randomPokemon }/`;
    const resp = await fetch(url);
      
    const results  = await resp.json();
    
    const { front_default:img } = results.sprites.other["official-artwork" ];
    const { name }              = results.species;

    return ({
        name,
        img,
    });
}

export default getPokemon