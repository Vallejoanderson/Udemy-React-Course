import getPokemon from './helpers/getPokemon'
import { useState } from 'react'

const WhosThatPokemonApp = () => {

  const [ pokemon, setPokemon ] = useState({
    name: '',
    image: '',
  });

  getPokemon()
    .then( img =>
          console.log('Hola', img.pname); 
          { setPokemon(
            {
              name: img.name,
              image: img.image,
            }
          )}
    )

  return(
    <div>
        <p>Hola</p>
        <img  src={ pokemon } alt="Random pokemon"/>
    </div>
  )
}

export default WhosThatPokemonApp