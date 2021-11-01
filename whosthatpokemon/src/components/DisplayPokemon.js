
export const DisplayPokemon = ( { pokemones } ) => {
    const randomNumber = Math.floor(Math.random() * 3);
    const myPokemon = pokemones[randomNumber].image;
    console.log(myPokemon);
    // const { name, image } = pokemones[randomNumber];
    // console.log(name, image)
    return(
        <img  src={ myPokemon.image } alt="Random pokemon"/>
        );
}