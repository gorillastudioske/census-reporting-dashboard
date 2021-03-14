import React from 'react'

export default function Overview(props) {
    let { population, region } = props

    return (
        <div className="overview-content text-center">
            <h6 className="county">
                <span className="name">{region.name}</span> : {region.capital}
            </h6>
            <div className="population">{population.total}</div>
            <div className="stats">
                <div className="area">
                    <span className="meta">Area:</span>
                    <span>
                        <strong>{population.area}</strong>
                            Km<sup>2</sup>
                    </span>
                </div>
                <div className="household">
                    <span className="meta">Households:</span>
                    <strong>{population.households}</strong>
                </div>
                <div className="density">
                    <span>
                        <span className="meta">Density:</span>
                        <strong>{population.density}</strong>
                        People/sq. Km
                    </span>
                </div>
            </div>
        </div>
    )
}
