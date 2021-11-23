import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( { title, url } ) => {

    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={ url } alt={ title }/>
            <p> { title }</p>
        </div>
    )
}

GifGridItem.propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
 }

/*  Tarea
    1. Enzyme
    2. Enzyme to Json
    3. Debe de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSsnapshot()
*/