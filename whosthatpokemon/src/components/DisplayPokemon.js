
export const DisplayPokemon = ( { pokemons } ) => {
    const randomPokemon = Math.floor(Math.random() * 4);
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