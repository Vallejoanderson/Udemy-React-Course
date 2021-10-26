import getPokemon from './helpers/getPokemon'
import { useState } from 'react'

const WhosThatPokemonApp = () => {

  const [ image, setImage ] = useState('');

  getPokemon()
    .then( img => 
          { setImage(img) }
    )

  return(
    <div>
        <p>Hola</p>
        <img  src={ image } alt="Random pokemon"/>
    </div>
  )
}

export default WhosThatPokemonApp