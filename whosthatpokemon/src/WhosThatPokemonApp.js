import { PokemonsList } from './components/PokemonsList.js'
import { DisplayPokemon } from './components/DisplayPokemon.js'
import { useGetRandomPokemons } from './hooks/useGetRandomPokemons.js'
import { useEffect } from 'react/cjs/react.development'

const WhosThatPokemonApp = () => {
  useEffect( () => { 
    const pokemones = useGetRandomPokemons();
  }, [])

  return(
    <div>
        <DisplayPokemon pokemones={ [...pokemones] } />
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp