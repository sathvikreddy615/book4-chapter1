import React, { Component } from "react";
import EmployeeList from "./employeeList.js";
import LocationList from "./locationList";
import AnimalList from "./animalList";

export default class Kennel extends Component {
    state = {
        owners: [
            { id: 1, animalId: [5], name: "Ryan Tanay" },
            { id: 2, animalId: [3], name: "Emma Beaton" },
            { id: 3, animalId: [1], name: "Dani Adkins" },
            { id: 4, animalId: [2], name: "Adam Oswalt" },
            { id: 5, animalId: [6], name: "Fletcher Bangs" },
            { id: 6, animalId: [4], name: "Angela Lee" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners={this.state.owners} />
                <LocationList locations={this.state.locations} />
            </React.Fragment>
        );
    }
}
