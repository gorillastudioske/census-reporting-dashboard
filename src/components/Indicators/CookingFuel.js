import React from 'react'

export default function CookingFuel() {
    return (
        <div className="metric">
            <div className="symbol"><svg>
                <use xlinkHref="#cooking-pot" x="0" y="0"></use>
            </svg></div>
            <div className="description">
                <h6 className="title">Cooking Fuel <span className="separator">:</span><span className="active"> Electricity</span>
                </h6>
                <div className="highlight">0.30%</div>
                <p className="copy">In Kenya's Population and Housing Census 2009, 364 of respondents stated they had access
                to Electricity, this accounted for roughly 0.30% of 123,191 respondents using Electricity across
                    Turkana County, to prepare and cook their foods.</p>
            </div>
            <ul className="metric-links">
                <li><a href="#" className="icon active"><svg>
                    <use xlinkHref="#electricity" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#paraffin" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#lpg" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#biogas" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#firewood" x="0" y="0"></use>
                </svg></a></li>
                <li><a href="#" className="icon"><svg>
                    <use xlinkHref="#charcoal" x="0" y="0"></use>
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
