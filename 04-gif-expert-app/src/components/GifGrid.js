import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ( { category } ) => {
    
    const { data:images, loading } = useFetchGifs( category );
    console.log( loading );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs) ) 
    // }, [ category ] )

    
    //getGifs();

    return (
        <>
            <h3>{  category }</h3>

            { loading && <p>Loading</p> }

            <div className="card-grid">
                {
                        images.map( img => //Desestructuración de objecto images
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        )
                }
            </div>
        </>
    )
}
