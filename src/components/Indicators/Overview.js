import React from 'react'

export default function Overview() {
    return (
        <section className="census-overview">
            <div className="loader-wrapper" style={{ display: "none" }}><span>Loading....</span>
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="overview-content text-center">
                <h6 className="county"><span className="name">Turkana</span> : Lodwar</h6>

                <p>&nbsp;</p>
                <div className="population">855,399</div>
                <div className="stats">
                    <div className="area"><span className="meta">Area:</span><span><strong> 68,680.11</strong> Km<sup>2</sup></span>
                    </div>
                    <div className="household"><span className="meta">Households:</span><strong> 123,191</strong></div>
                    <div className="density"><span><span className="meta">Density:</span><strong> 12.455</strong> People/sq. Km</span>
                    </div>
                </div>
            </div>
            <div className="data-attribution text-center mt-2">
                <small className="d-block text-muted">Source: Kenya Population and Housing Census 2009 </small>
            </div>
        </section>
    )
}
