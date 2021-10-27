import getPokemon from './helpers/getPokemon'
import { useState, useEffect } from 'react'

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
        <p>{ pokemon.name }</p>
    </div>
  )
}

export default WhosThatPokemonApp