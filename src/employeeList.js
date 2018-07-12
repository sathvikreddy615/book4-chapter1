import React, { Component } from "react";
import Employee from "./employee";

export default class EmployeeList extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul className="animalInfo">
                    {
                        this.state.employees.map(employee => {
                            return <Employee employees={employee} />
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
