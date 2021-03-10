import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import MobileHeader from './MobileHeader'
import OverviewIndicator from './Indicators/Overview'
import GenderDistributionIndicator from './Indicators/GenderDistribution'
import CommunicationAccessIndicator from './Indicators/CommunicationAccess'
import EnergyAccessIndicator from './Indicators/EnergyAccess'
import SidebarMap from './Sidebar/Map'


export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            counties: [
                { id: "baringo", name: "Baringo" },
                { id: "bomet", name: "Bomet" },
                { id: "bungoma", name: "Bungoma" },
                { id: "busia", name: "Busia" },
                { id: "elgeyo-marakwet", name: "Elgeyo-Marakwet" },
                { id: "embu", name: "Embu" },
                { id: "garissa", name: "Garissa" },
                { id: "homa-bay", name: "Homa Bay" },
                { id: "isiolo", name: "Isiolo" },
                { id: "kajiado", name: "Kajiado" },
                { id: "kakamega", name: "Kakamega" },
                { id: "kericho", name: "Kericho" },
                { id: "kiambu", name: "Kiambu" },
                { id: "kilifi", name: "Kilifi" },
                { id: "kirinyaga", name: "Kirinyaga" },
                { id: "kisii", name: "Kisii" },
                { id: "kisumu", name: "Kisumu" },
                { id: "kitui", name: "Kitui" },
                { id: "kwale", name: "Kwale" },
                { id: "laikipia", name: "Laikipia" },
                { id: "lamu", name: "Lamu" },
                { id: "machakos", name: "Machakos" },
                { id: "makueni", name: "Makueni" },
                { id: "mandera", name: "Mandera" },
                { id: "marsabit", name: "Marsabit" },
                { id: "meru", name: "Meru" },
                { id: "migori", name: "Migori" },
                { id: "mombasa", name: "Mombasa" },
                { id: "muranga", name: "Murang'a" },
                { id: "nairobi", name: "Nairobi" },
                { id: "nakuru", name: "Nakuru" },
                { id: "nandi", name: "Nandi" },
                { id: "narok", name: "Narok" },
                { id: "nyamira", name: "Nyamira" },
                { id: "nyandarua", name: "Nyandarua" },
                { id: "nyeri", name: "Nyeri" },
                { id: "samburu", name: "Samburu" },
                { id: "siaya", name: "Siaya" },
                { id: "taita-taveta", name: "Taita-Taveta" },
                { id: "tana-river", name: "Tana River" },
                { id: "tharaka-nithi", name: "Tharaka-Nithi" },
                { id: "trans-nzoia", name: "Trans-Nzoia" },
                { id: "turkana", name: "Turkana" },
                { id: "uasin-gishu", name: "Uasin Gishu" },
                { id: "vihiga", name: "Vihiga" },
                { id: "wajir", name: "Wajir" },
                { id: "west-pokot", name: "West Pokot" }
            ]
        }
    }
    render() {
        return (
            <main>
                <div className="container">
                    <MobileHeader counties={this.state.counties} />
                    <Breadcrumb />
                    <div className="row">
                        <div className="col-md-8">
                            <OverviewIndicator />
                            <GenderDistributionIndicator />
                            <CommunicationAccessIndicator />
                            <EnergyAccessIndicator />
                        </div>

                        <SidebarMap />
                    </div>
                </div>
            </main>
        )
    }
}
