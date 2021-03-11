import React from 'react'
import { useSelector } from 'react-redux'

export default function Overview() {
    const population = useSelector(state => state.population)
    let location = population.collection.find(county => county.id === "TRK")

    return (
        <section className="census-overview">
            {
                location ? (<div className="overview-content text-center">
                    <h6 className="county">
                        <span className="name">{location.id}</span> : Lodwar
                </h6>
                    <div className="population">{location.total}</div>
                    <div className="stats">
                        <div className="area">
                            <span className="meta">Area:</span>
                            <span>
                                <strong>{location.area}</strong>
                            Km<sup>2</sup>
                            </span>
                        </div>
                        <div className="household">
                            <span className="meta">Households:</span>
                            <strong>{location.households}</strong>
                        </div>
                        <div className="density">
                            <span>
                                <span className="meta">Density:</span>
                                <strong>{location.density}</strong>
                        People/sq. Km
                    </span>
                        </div>
                    </div>
                </div>) : (<div className="loader-wrapper">
                    <span>Loading....</span>
                    <div className="loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>)
            }

            <div className="data-attribution text-center mt-2">
                <small className="d-block text-muted">Source: Kenya Population and Housing Census 2009 </small>
            </div>
        </section>
    )
}
