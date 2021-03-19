import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Breadcrumb(props) {
    let { region } = props
    return (
        <nav className="_app-breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/" className="nuxt-link-active">Kenya</NavLink></li>
                {region && region.name.toLocaleLowerCase() !== "kenya" ? <li className="breadcrumb-item">{region.name}</li> : null}
            </ol>
        </nav>
    )
}
