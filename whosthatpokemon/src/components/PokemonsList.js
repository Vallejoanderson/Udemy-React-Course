

export const PokemonsList = ( { pokemons } ) => {
    const checkChoice = () => {
        
    }

    return(
        <ol>
            {
                pokemons.map( pokemon => 
                    <button onClick={ () => { console.log( pokemon.name ) } }>{ pokemon.name }</button>)
            }
        </ol>
    );
}