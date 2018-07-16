import React, { Component } from "react";
import Employee from "./employee";

export default class EmployeeList extends Component {
    state = {
        employees: []
    }

    componentDidMount () {
        fetch("http://localhost:5002/employees")
        .then(e => e.json())
        .then(employees => this.setState({ employees: employees }))
    }

    checkOutEmployee = employeeId => {
        fetch(`http://localhost:5002/employees/${employeeId}`, {
            method: "DELETE"
        })

        .then((data) => {
            return fetch("http://localhost:5002/employees");
        })

        .then(a => a.json())
        .then(employeeList => {
            console.log(employeeList);
            this.setState({
                employees: employeeList
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.employees.map(employee =>
                        <Employee 
                            key={employee.id} 
                            employee={employee}
                            checkOutEmployee={this.checkOutEmployee}>
                            {employee.name}
                        </Employee>
                    )
                }
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews.js
