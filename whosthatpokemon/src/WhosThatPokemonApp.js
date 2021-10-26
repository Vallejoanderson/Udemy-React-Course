import getPokemon from './helpers/getPokemon'

const WhosThatPokemonApp = () => {
  getPokemon()
    .then( img => { pokemon = img })
  return(
    <div>
        <p>Hola</p>
        <img  src={ pokemon } alt="Random pokemon"/>
    </div>
  )
}

export default WhosThatPokemonApp