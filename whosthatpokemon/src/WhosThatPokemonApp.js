

const WhosThatPokemonApp = () => {

    const getPokemons = async() => {

    const url = `https://pokeapi.co/api/v2/pokemon/18/`;
    const resp = await fetch(url);
  
    const results  = await resp.json();

    const { front_default:img } = results.sprites.other["official-artwork" ];
  
    console.log( results, results.name, img );
  }
  
  getPokemons();

  return(
    <div>
        <p>{ img }</p>
        {/* <img src={ imgs } alt="Pokemon image"/> */}
    </div>
  );

}

export default WhosThatPokemonApp;