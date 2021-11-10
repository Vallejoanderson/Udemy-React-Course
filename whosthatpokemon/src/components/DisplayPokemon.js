
<<<<<<< HEAD
export const DisplayPokemon = ( { pokemons } ) => {
    const randomPokemon = Math.floor(Math.random() * 4);
=======

export const DisplayPokemon = async({ pokemones }) => {
    // const randomNumber = Math.floor(Math.random() * 3);
    // const image = await pokemones[randomNumber].image;
    // console.log(pokemones);
>>>>>>> 3fda27a99822f8c90501feeaa716162b6c0aa96d
    return (
        <>
            {
                pokemons.map( (e, i) => {
                    if( i === randomPokemon ){
                        return <img src={ e.img } />
                    }
                })
            }
        </>
    );
}