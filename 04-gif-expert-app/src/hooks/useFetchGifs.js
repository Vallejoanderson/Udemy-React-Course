import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs( category )
            .then( imgs => {

                console.log( imgs )
        
                getGifs( category )
                    .then( imgs => {
                        setState({
                            data: imgs,
                            loading: false,
                        })
                    })

            })



    }, [ category ])

    return state; // data { data: [], loading: true }

}