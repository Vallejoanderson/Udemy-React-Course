import { useState } from 'react'

export const DisplayPokemon = ( { pokemones } ) => {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(pokemones)
    // const myPokemon = pokemones[randomNumber].image;
    // const [ image, setImage ] = useState('');
    // setImage( myPokemon );
    return(
        <img  src="" alt="Random pokemon"/>
        );
}