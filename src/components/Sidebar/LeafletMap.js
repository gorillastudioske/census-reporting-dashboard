import React, { useState } from 'react'
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


export default function LeafletMap(props) {
    let history = useHistory();

    const [region, setRegion] = useState(props.region)

    function handleLayerClick(e) {
        // let area = 0
        // for (let section of e.target.getLatLngs()) {
        //     if (section.length < 2) {
        //         section = section[0]
        //     }
        //     area += L.GeometryUtil.geodesicArea(section)
        // }
        // console.log(area / 1000000)

        const _region = props.counties.find(county => county.id === e.target.feature.properties.id)
        setRegion(_region)
        history.push(`/?region=${_region.slug}`);
    }

    return (
        <MapContainer className="map" center={[1.2921, 36.8219]} zoom={5}>
            {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            /> */}
            <GeoJSON key='my-geojson' data={props.featureCollection} onEachFeature={(feature, layer) => {
                layer.on({
                    click: handleLayerClick
                })
            }} />
            <InfoBox position="bottomleft" region={region} />
        </MapContainer>
    )
}
