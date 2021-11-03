<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useState } from 'react'
>>>>>>> f59309b746eba32bae0ea7e5b5aad72325b81def

export const DisplayPokemon = ( { pokemones } ) => {
    console.log(pokemones)
    const randomNumber = Math.floor(Math.random() * 3);
<<<<<<< HEAD
    const myPokemon = pokemones[randomNumber];
    return(
        <img  src="" alt="Random pokemon" />
=======
    console.log(pokemones)
    // const myPokemon = pokemones[randomNumber].image;
    // const [ image, setImage ] = useState('');
    // setImage( myPokemon );
    return(
        <img  src="" alt="Random pokemon"/>
>>>>>>> f59309b746eba32bae0ea7e5b5aad72325b81def
        );
}