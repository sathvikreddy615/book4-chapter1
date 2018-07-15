import React, { Component } from "react";
import { Route } from "react-router-dom";
import AnimalList from "./animalList";
import LocationList from "./locationList";
import EmployeeList from "./employeeList";
import Animal from "./animal";
import Employee from "./employee";
import Location from "./location";
import Login from "./Login";

export default class ApplicationViews extends Component {
  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        {/* locations routing */}
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/locations/:locationId"
          render={props => {
            return (
              <Location Location={props.location.state.Location}>
                {props.location.state.Location.name}
              </Location>
            );
          }}
        />
        {/* animals routing */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/animals/:animalId"
          render={props => {
            return (
              <Animal animal={props.location.state.animal}>
                {props.location.state.animal.name}
              </Animal>
            );
          }}
        />
        {/* employees routing */}
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return <EmployeeList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/employees/:employeeId"
          render={props => {
            return (
              <Employee employee={props.location.state.employee}>
                {props.location.state.employee.name}
              </Employee>
            );
          }}
        />

        <Route path="/Login" component={Login} />
      </React.Fragment>
    );
  }
}

// exports to KennelCompany.js
