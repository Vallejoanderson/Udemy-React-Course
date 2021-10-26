import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD

export const getPokemons = async() => {

  const url = `https://pokeapi.co/api/v2/pokemon`;
  
  const resp = await fetch(url);

  const data  = await resp.json();

  console.log( data );
}

getPokemons();
=======
import WhosThatPokemonApp from './WhosThatPokemonApp.js'
>>>>>>> c083308daf91e4115407bc913264060eac8fd27c

ReactDOM.render(
  <WhosThatPokemonApp />,
  document.getElementById('root')
);
