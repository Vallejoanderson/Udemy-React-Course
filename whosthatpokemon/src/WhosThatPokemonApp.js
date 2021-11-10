import { PokemonsList } from './components/PokemonsList.js'
import getPokemon from './helpers/getPokemon'
import { useEffect, useState } from 'react'
import { DisplayPokemon } from './components/DisplayPokemon'


const WhosThatPokemonApp = () => {

  const [ pokemons, setPokemons ] = useState([]);
  
  useEffect( () => {
      Promise.all( [ getPokemon(), getPokemon(), getPokemon(), getPokemon() ] )
          .then( P => setPokemons(P) );
  }, [])

  return(
    <div>
        <DisplayPokemon pokemons= { pokemons } />
        <PokemonsList pokemons={ pokemons } />
    </div>
  )
}

export default WhosThatPokemonApp