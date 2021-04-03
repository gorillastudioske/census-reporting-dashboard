import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import Breadcrumb from './Breadcrumb'
import MobileHeader from './MobileHeader'
import OverviewIndicator from './Indicators/Overview'
import GenderDistributionIndicator from './Indicators/GenderDistribution'
import CommunicationAccessIndicator from './Indicators/CommunicationAccess'
import CookingFuelIndicator from './Indicators/CookingFuel'
import AgeGroupsDistributionIndicator from './Indicators/AgeGroupsDistribution'
import SidebarMap from './Sidebar/LeafletMap'
import LightSource from './Indicators/LightSource'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Main(props) {
    const query = useQuery()
    const [region, setRegion] = useState({ id: "KE", name: "Kenya", capital: "Nairobi" })
    const [population, setPopulation] = useState(props.summary)

    function setDefaults(params) {
        setRegion({ id: "KE", name: "Kenya", capital: "Nairobi" })
        setPopulation(props.summary)
    }

    useEffect(() => {
        if (query.has('region')) {
            setRegion(props.counties.find(county => county.slug === query.get('region')))
            setPopulation(props.population.find(county => region ? county.id === region.id : null))
        }
    }, [query])

    return population && region ? (
        <main>
            <div className="container">
                <MobileHeader setDefaults={setDefaults} counties={props.counties} />
                <Breadcrumb setDefaults={setDefaults} region={region} />
                <div className="row">
                    <div className="col-md-7 indicators loaded">

                        <section className="census-overview">
                            <OverviewIndicator population={population} region={region} />
                            <div className="data-attribution text-center mt-2">
                                <small className="d-block text-muted">Source: Kenya Population and Housing Census 2009 </small>
                            </div>
                        </section>

                        <section className="gender-age">
                            <div className="metrics">
                                <h6 className="description">Gender Population Distribution</h6>
                                <GenderDistributionIndicator population={population} />
                            </div>
                            <div className="data-attribution text-center mt-2">
                                <small className="d-block text-muted">Source: Kenya Population and Housing Census 2009 </small>
                            </div>
                        </section>

                        {/* <section className="gender-age">
                            <div className="metrics">
                                <h6 className="description">Age Groups Distribution</h6>
                                <AgeGroupsDistributionIndicator />
                            </div>
                            <div className="data-attribution text-center mt-2">
                                <small className="d-block text-muted">Source: Kenya Population and Housing Census 2009 </small>
                            </div>
                        </section> */}

                        {/* <section className="communication-access">
                            <CommunicationAccessIndicator />
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
                        </section> */}

                        {/* <section className="energy-consumption text-center">
                            <div className="metrics">
                                <CookingFuelIndicator />
                            </div>
                        </section> */}

                        {/* <section className="energy-consumption text-center">
                            <div className="metrics">
                                <LightSource />
                            </div>
                        </section> */}
                    </div>

                    <div className="col-md-5">
                        {props.featureCollection && props.featureCollection.features && props.featureCollection.features.length > 0 ? <SidebarMap featureCollection={props.featureCollection} counties={props.counties} region={region} /> : "Map is Loading"}
                    </div>
                </div>
            </div>
        </main>
    ) : "Loading"
}