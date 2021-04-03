import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';

export default function MobileHeader(props) {
    let history = useHistory();

    function handleChange(event) {
        const { value } = event.target

        if ("default" === value) {
            props.setDefaults()
            history.push(`/`);
            return
        }

        history.push(`/?region=${value}`);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="country-search">
                    <div className="counties-select input-group">
                        <div className="input-group-prepend">
                            <Link to="/" onClick={props.setDefaults} className="btn btn-outline-secondary nuxt-link-exact-active nuxt-link-active">Kenya</Link>
                        </div>
                        <select className="custom-select" onChange={handleChange}>
                            <option value="default" defaultValue>Choose a county</option>
                            {(props.counties.map(county => <option key={county.id} value={county.slug}>{county.name}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}
