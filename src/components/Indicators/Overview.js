import React from 'react'

export default function Overview(props) {
    let location = props.location

    return (
        <div className="overview-content text-center">
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
        </div>
    )
}
