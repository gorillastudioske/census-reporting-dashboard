import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router'
// import L from 'leaflet';
// import 'leaflet-draw';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { InfoBox } from './InfoBox';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });

// L.Marker.prototype.options.icon = DefaultIcon;

let baseline = {
    strokeOpacity: 0.7,
    weight: 1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fillOpacity: 0.3,
    fillRule: "evenodd",
}
const styles = {
    default: {
        ...baseline,
        color: "#e2e8f0",
        fillColor: "#cbd5e0",
    },
    hover: {
        ...baseline,
        color: "#cbd5e0",
        fillColor: "#e2e8f0",
    },
    selected: {
        ...baseline,
        color: "#e2e8f0",
        fillColor: "#a0aec0",
    },
    red: {
        ...baseline,
        color: "#feb2b2",
        fillColor: "#fc8181"
    },
    green: {
        ...baseline,
        color: "#9ae6b4",
        fillColor: "#68d391"
    },
    yellow: {
        ...baseline,
        color: "#faf089",
        fillColor: "#f6e05e"
    },
};

export default function LeafletMap(props) {
    let history = useHistory();
    const geojsonRef = useRef()

    const [region, setRegion] = useState(props.region)

    const handleLayerClick = (e) => {
        const _region = props.counties.find(county => county.id === e.target.feature.properties.id)
        setRegion(_region)
        history.push(`/?region=${_region.slug}`);
    }
    const handleLayerMouseover = (e) => { }
    const handleLayerMouseout = (e) => { }

    function onEachFeatureControl(feature, layer) {
        const events = {
            click: (e) => { geojsonRef.current.resetStyle(); handleLayerClick(e); layer.setStyle(styles.red) },
            mouseover: handleLayerMouseover,
            mouseout: handleLayerMouseout,
        }

        layer.on(events)
    }

    return (
        <MapContainer className="map" center={[1.2921, 36.8219]} zoom={5}>
            {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            /> */}
            <GeoJSON key='my-geojson' ref={geojsonRef} data={props.featureCollection} onEachFeature={onEachFeatureControl} style={styles.default} />
            <InfoBox position="bottomleft" region={region} />
        </MapContainer>
    )
}
