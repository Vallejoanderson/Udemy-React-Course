import { PokemonsList } from './components/PokemonsList.js'
import { DisplayPokemon } from './components/DisplayPokemon.js'
import { useGetRandomPokemons } from './hooks/useGetRandomPokemons.js'
import { useState } from 'react'


const WhosThatPokemonApp = () => {
  const pokemones = useGetRandomPokemons();
  const [ pokemon, setPokemon ] = useState("");
  setPokemon( pokemon[0].name )
  // const [ pokemon, setPokemon ] = useState('');
  // setPokemon( pokemones[0].img )
  console.log( pokemones[0]);
  return(
    <div>
        <p>It is  </p>
        {/* <DisplayPokemon pokemones={ pokemons } /> */}
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp