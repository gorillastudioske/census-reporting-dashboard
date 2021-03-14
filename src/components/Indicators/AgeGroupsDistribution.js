import React from 'react'

export default function AgeGroupsDistribution() {
    return (
        <div className="metric age-groups-chart">
            {/* <h6 className="description">Age Group's</h6> */}
            <div className="canvas">
                <div className="ag-progress-title-container">
                    <p className="title">children <span className="range">| 0 - 18</span></p>
                    <div className="progress-container">
                        <div className="age-range-lg"><span className="bracket">0 - 18</span></div>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "63%" }}>58%</div>
                        </div>
                    </div>
                </div>
                <div className="ag-progress-title-container">
                    <p className="title">youth <span className="range">| 19 - 34</span></p>
                    <div className="progress-container">
                        <div className="age-range-lg"><span className="bracket">19 - 34</span></div>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "29%" }}>24%</div>
                        </div>
                    </div>
                </div>
                <div className="ag-progress-title-container">
                    <p className="title">adults <span className="range">| 35 - 66</span></p>
                    <div className="progress-container">
                        <div className="age-range-lg"><span className="bracket">35 - 66</span></div>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "21%" }}>16%</div>
                        </div>
                    </div>
                </div>
                <div className="ag-progress-title-container">
                    <p className="title">seniors <span className="range">| 67 - 99</span></p>
                    <div className="progress-container">
                        <div className="age-range-lg"><span className="bracket">67 - 99</span></div>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "7%" }}>2%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="keys">
                <div className="key"><span className="box portion"></span> % of Total</div>
                <div className="key"><span className="box entire"></span> Total (100%)</div>
            </div>
        </div>
    )
}
