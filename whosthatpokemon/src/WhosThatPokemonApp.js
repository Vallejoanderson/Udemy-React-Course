import { PokemonsList } from './components/PokemonsList.js'
<<<<<<< HEAD
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
=======
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
>>>>>>> 3fda27a99822f8c90501feeaa716162b6c0aa96d
    </div>
  )
}

export default WhosThatPokemonApp