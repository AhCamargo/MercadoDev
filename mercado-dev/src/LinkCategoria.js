import React from 'react'
import { link } from 'react-router-dom'
import { link } from 'react-router-dom'

const LinkCategoria = ({categoria}) =>{
    return(
        <link to={`/anuncios/categoria/`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
                {categoria.categoria}
        </link>
    )
}

export default LinkCategoria