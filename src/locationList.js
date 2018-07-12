import React, { Component } from "react";
import Location from "./location";

export default class LocationList extends Component {
    state = {
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <div className="locationList">
                    {
                        this.state.locations.map(location => {
                            return <Location locations={location} />
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
