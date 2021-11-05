import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import getPokemon from '../helpers/getPokemon.js'

export const useGetRandomPokemons = () => {

    const [ pokemons, setPokemons ] = useState([]);
    useEffect( () => {
        Promise.all( [ getPokemon(), getPokemon(), getPokemon(), getPokemon() ] )
            .then( P => setPokemons(P) );
    }, [])

    console.log(pokemons)

    return pokemons;

}