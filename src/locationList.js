import React, { Component } from "react";
import Location from "./location";

export default class LocationList extends Component {
    state = {
        locations: []
    }

    componentDidMount () {
        fetch("http://localhost:5002/locations")
        .then(e => e.json())
        .then(locations => this.setState({ locations: locations }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="locationList">
                    {
                        this.state.locations.map(location => {
                            return <Location key={location.id} location={location}>{location.name}</Location>
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
