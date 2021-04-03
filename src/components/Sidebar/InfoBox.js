import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet';
import { useEffect } from 'react'

export function InfoBox(props) {
    const context = useLeafletContext()

    L.Control.Watermark = L.Control.extend({
        onAdd: function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        },

        update: function (props2) {
            this._div.innerHTML = `<h4>${props.region.name}</h4>`;
        },

        onRemove: function (map) {
            // Nothing to do here
        }
    });

    L.control.watermark = function (opts) {
        return new L.Control.Watermark(opts);
    }

    useEffect(() => {
        const container = context.layerContainer || context.map

        const control = L.control.watermark({ position: props.position })
        container.addControl(control)

        return () => {
            container.removeControl(control)
        }
    })

    return null
}