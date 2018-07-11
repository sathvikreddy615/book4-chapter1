import React, { Component } from "react";
import EmployeeList from "./employeeList.js";
import LocationList from "./locationList";

export default class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <LocationList />
                <EmployeeList />
            </React.Fragment>
        );
    }
}
