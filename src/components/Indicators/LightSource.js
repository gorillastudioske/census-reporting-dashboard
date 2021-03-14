import React from 'react'

export default function LightSource() {
    return (
        <div className="metric">
            <div className="symbol"><svg>
                <use xlinkHref="#lightbulb" x="0" y="0"></use>
            </svg></div>
            <div className="description">
                <h6 className="title">Light Source <span className="separator">:</span><span className="active"> Electricity</span>
                </h6>
                <div className="highlight">2.4%</div>
                <p className="copy">In Kenya's Population and Housing Census 2009, 3,016 of respondents stated they had
                access to Electricity, this accounted for roughly 2.4% of 123,191 respondents using Electricity
                    across Turkana County, as a source of light for their homes.</p>
            </div>
            <ul className="metric-links">
                <li><a href="#" className="icon active"><svg>
                    <use xlinkHref="#electricity" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#pressureLamp" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#lantern" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#tinLamp" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#gasLamp" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#fuelWood" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#solar" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#other" x="0" y="0"></use>
                </svg></a></li>
            </ul>
        </div>
    )
}
