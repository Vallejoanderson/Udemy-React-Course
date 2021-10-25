
const getPokemon = async() => {

    const url = `https://pokeapi.co/api/v2/pokemon/18/`;
    const resp = await fetch(url);
      
    const results  = await resp.json();
    
    const { front_default:img } = results.sprites.other["official-artwork" ];

    return img;
}

export default getPokemon