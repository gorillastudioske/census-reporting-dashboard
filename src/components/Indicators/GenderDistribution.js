import React from 'react'

export default function GenderDistribution(props) {
    let location = props.location

    return (
        <div className="metric genders">
            <div className="female">
                <div className="icon"><svg>
                    <use xlinkHref="#female" x="0" y="0"></use>
                </svg></div>
                <div className="stat">
                    <div className="highlight">48.0%</div>
                    <div className="figure">{location.female}</div>
                    <small className="caption">Total female <span className="switch-lg">Population</span></small>
                </div>
            </div>
            <div className="male">
                <div className="icon"><svg>
                    <use xlinkHref="#male" x="0" y="0"></use>
                </svg></div>
                <div className="stat">
                    <div className="highlight">52.0%</div>
                    <div className="figure">{location.male}</div>
                    <small className="caption">Total male <span className="switch-lg">Population</span></small>
                </div>
            </div>
        </div>
    )
}
