import React from 'react'

export default function GenderDistribution(props) {
    let { population } = props

    let total = (population.male + population.female)

    return (
        <div className="metric genders">
            <div className="female">
                <div className="icon"><svg>
                    <use xlinkHref="#female" x="0" y="0"></use>
                </svg></div>
                <div className="stat">
                    <div className="highlight">{((population.female / total) * 100).toFixed(1)} %</div>
                    <div className="figure">{population.female.toLocaleString()}</div>
                    <small className="caption">Total female <span className="switch-lg">Population</span></small>
                </div>
            </div>
            <div className="male">
                <div className="icon"><svg>
                    <use xlinkHref="#male" x="0" y="0"></use>
                </svg></div>
                <div className="stat">
                    <div className="highlight">{((population.male / total) * 100).toFixed(1)} %</div>
                    <div className="figure">{population.male.toLocaleString()}</div>
                    <small className="caption">Total male <span className="switch-lg">Population</span></small>
                </div>
            </div>
        </div>
    )
}
