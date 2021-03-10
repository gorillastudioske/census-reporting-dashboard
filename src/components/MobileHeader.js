import React from 'react'

export default function MobileHeader(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="country-search">
                    <div className="counties-select input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary nuxt-link-exact-active nuxt-link-active">Kenya</button>
                        </div>
                        <select className="custom-select">
                            <option value="default" disabled="disabled" defaultValue>Choose a county</option>
                            {(props.counties.map(county => <option value={county.id}>{county.name}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
