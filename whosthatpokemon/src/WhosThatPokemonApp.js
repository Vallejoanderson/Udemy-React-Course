import { PokemonsList } from './components/PokemonsList.js';
import { RandomPokemons } from './helpers/RandomPokemons.js'
import { DisplayPokemon } from './components/DisplayPokemon'
import { useState } from 'react'

const WhosThatPokemonApp = () => {

  const [ pokemons, setPokemons ] = setState([]);
  setPokemons( pokemons => RandomPokemons() );
  return(
    <div>
        {/* <DisplayPokemon pokemones={ [...pokemons] } /> */}
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp