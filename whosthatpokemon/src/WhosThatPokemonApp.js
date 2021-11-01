import { PokemonsList } from './components/PokemonsList.js';
import { useFetchPokemons } from './hooks/useFetchPokemons.js'
import { DisplayPokemon } from './components/DisplayPokemon'

const WhosThatPokemonApp = () => {

  const pokemons = useFetchPokemons();
  return(
    <div>
        <DisplayPokemon pokemones={ [...pokemons] } />
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp