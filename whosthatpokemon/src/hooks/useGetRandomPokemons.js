import { useState } from 'react'
import getPokemon from '../helpers/getPokemon.js'

export const useGetRandomPokemons = () => {

    const arr = [];
    const [ pokemons, setPokemons ] = useState([]);
    for( let i = 0; i < 4; i++)
    {
        getPokemon()
             .then( newPokemon => 
                arr = [{ name: newPokemon.name, image: newPokemon.img }, ...arr ] ) 
    }

    setPokemons( [...arr] );

    return pokemons;

}