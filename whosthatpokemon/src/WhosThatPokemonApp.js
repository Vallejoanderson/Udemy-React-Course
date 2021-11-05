import { PokemonsList } from './components/PokemonsList.js'
import { DisplayPokemon } from './components/DisplayPokemon.js'
import { useGetRandomPokemons } from './hooks/useGetRandomPokemons.js'


const WhosThatPokemonApp = () => {
  console.log( useGetRandomPokemons() );
  return(
    <div>

        <DisplayPokemon pokemones={ useGetRandomPokemons() } />
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp