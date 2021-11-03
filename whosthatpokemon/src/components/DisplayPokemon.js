import { useEffect } from "react";

export const DisplayPokemon = ( { pokemones } ) => {
    console.log(pokemones)
    const randomNumber = Math.floor(Math.random() * 3);
    const myPokemon = pokemones[randomNumber];
    return(
        <img  src="" alt="Random pokemon" />
        );
}