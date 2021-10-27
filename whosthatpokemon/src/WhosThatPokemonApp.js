import getPokemon from './helpers/getPokemon'
import { useState, useEffect } from 'react'
import { PokemonsList } from './components/PokemonsList.js';

const WhosThatPokemonApp = () => {

  const [ pokemon, setPokemon ] = useState({
    name: '',
    image: '',
  });


  useEffect(() => {
    getPokemon()
      .then( newPokemon => setPokemon({
        name: newPokemon.name,
        image: newPokemon.img,
      })
      )
  }, [])


  return(
    <div>
        <img  src={ pokemon.image } alt="Random pokemon"/>
        <PokemonsList />
    </div>
  )
}

export default WhosThatPokemonApp