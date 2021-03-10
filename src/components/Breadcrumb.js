import React from 'react'

export default function Breadcrumb() {
    return (
        <nav className="app-breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/" className="nuxt-link-active">Kenya</a></li>
                <li className="breadcrumb-item">Turkana</li>
            </ol>
        </nav>
    )
}
