import { PokemonsList } from './components/PokemonsList.js'
import { DisplayPokemon } from './components/DisplayPokemon.js'
import { useGetRandomPokemons } from './hooks/useGetRandomPokemons.js'


const WhosThatPokemonApp = () => {
  const pokemons = useGetRandomPokemons();
  return(
    <div>

        {/* <DisplayPokemon pokemones={ pokemons } /> */}
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp