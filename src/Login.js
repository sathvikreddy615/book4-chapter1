import React, { Component } from "react";

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    // update state whenever an input field is edited
    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }

    // simplistic handler for login submit
    handleCheckBox = e => {
        e.preventDefault();

        let isChecked = document.getElementById("isChecked").checked;

        if (isChecked === true) {
            localStorage.setItem("credentials", JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
            )
        } else {
            sessionStorage.setItem("credentials", JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCheckBox}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <button type="submit">
                    Sign in
                </button>
                <label htmlFor="checkBox">Remember Me</label>
                <input onChange={this.handleFieldChange}
                type="checkbox"
                id="isChecked" />
            </form>

        )
    }
}

// exports to ApplicationViews.js
