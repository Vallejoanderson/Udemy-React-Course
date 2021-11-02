import getPokemon from './getPokemon.js'

export const RandomPokemons = () => {
    const pokemons = [];
    useEffect( () => {
        for( let i = 0; i < 4; i++)
        {
            getPokemon()
                .then( [{ name: newPokemon.name, image: newPokemon.img }, ...pokemons ] ); 
        }
    }, []
    )
    console.log(pokemons);
    return pokemons;
}