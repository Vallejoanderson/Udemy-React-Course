import { useState, useEffect } from 'react'
import getPokemon from '../helpers/getPokemon.js'

export const useFetchPokemons = () => {
    const [ pokemons, setPokemons ] = useState([]);    
    
    useEffect( () => {
        for( let i = 0; i < 4; i++)
        {
            getPokemon()
                .then( newPokemon => setPokemons( all => [ 
                    { name: newPokemon.name, image: newPokemon.img }, ...all]) )
        }
    }, []
    )

    return pokemons;

}