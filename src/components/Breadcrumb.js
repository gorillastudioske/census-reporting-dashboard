import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Breadcrumb(props) {
    let { region } = props
    return (
        <nav className="app-breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/" onClick={props.setDefaults} className="nuxt-link-active">Kenya</NavLink></li>
                {region && region.name.toLocaleLowerCase() !== "kenya" ? <li className="breadcrumb-item">{region.name}</li> : null}
            </ol>
            <div className="">
                <select>
                    <option value="2009">2009</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </nav>
    )
}
