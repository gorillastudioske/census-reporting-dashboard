import React from 'react'

export default function CommunicationAccess() {
    return (
        <section className="communication-access">
            <div className="metric-viewport">
                <div className="chart-copy">
                    <h4 className="title">radio Access</h4>
                    <div className="content">
                        <p>Out of the 791,028 respondents in Turkana County, the majority <strong>650,093</strong> respond with
                    'no' when asked if they had radio access.</p>
                        <p>133,137 people responded with 'yes', while 'dk' recieved the lowest response of 779. </p>
                    </div>
                    <div className="figure-key">
                        <h6 className="figure-key-title">Resutls</h6>
                        <ul className="figure-key-list">
                            <li><span className="shape-circle shape-lemon-lime"></span>
                        yes (16.8%)
                    </li>
                            <li><span className="shape-circle shape-fuschia"></span>
                        no (82.2%)
                    </li>
                            <li><span className="shape-circle shape-blue"></span>
                        dk (0.0985%)
                    </li>
                        </ul>
                    </div>
                </div>
                <div className="chart-pictorial">
                    <figure>
                        <div className="figure-description">Turkana <span>: radio Access</span></div>
                        <div className="figure-artboard">
                            <div className="figure-content">
                                <svg viewBox="-1 -1 2 2" className="pie" style={{ transform: "rotate(-90deg)" }}>
                                    <path fill="#b1c94e" d="M 1 0 A 1 1 0 0 1 0.4910378594576568 0.8711382327617371 L 0 0">
                                    </path>
                                    <path fill="#ce4b99"
                                        d="M 0.4910378594576568 0.8711382327617371 A 1 1 0 1 1 0.9980823310542061 -0.06190040740901693 L 0 0">
                                    </path>
                                    <path fill="#377bbc"
                                        d="M 0.9980823310542061 -0.06190040740901693 A 1 1 0 0 1 0.9984462397167714 -0.0557234815444938 L 0 0">
                                    </path>
                                </svg></div>
                            <div className="figure-key">
                                <ul className="figure-key-list">
                                    <li><span className="shape-circle shape-lemon-lime"></span>
                                yes
                            </li>
                                    <li><span className="shape-circle shape-fuschia"></span>
                                no
                            </li>
                                    <li><span className="shape-circle shape-blue"></span>
                                dk
                            </li>
                                </ul>
                            </div>
                        </div>
                        <div className="figure-attribution">KNBS, Population and Housing Census (2009)</div>
                    </figure>
                </div>
            </div>
            <ul className="metric-links">
                <li>
                    <a href="#" className="icon active">
                        <svg><use xlinkHref="#radio" x="0" y="0"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon">
                        <svg><use xlinkHref="#tv" x="0" y="0"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon">
                        <svg><use xlinkHref="#mobile" x="0" y="0"></use></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon">
                        <svg><use xlinkHref="#landline" x="0" y="0"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="icon">
                        <svg><use xlinkHref="#computer" x="0" y="0"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    )
}
