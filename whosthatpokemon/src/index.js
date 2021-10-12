import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export const getPokemons = async() => {

  const url = `https://pokeapi.co/api/v2/pokemon`;
  const resp = await fetch(url);

  const data  = await resp.json();

  console.log( data );
}

getPokemons();

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);
