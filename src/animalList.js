import React, { Component } from "react";
import Animal from "./animal";


export default class AnimalList extends Component {
    state = {
        animals: []
    }

    componentDidMount () {
        fetch("http://localhost:5002/animals")
        .then(e => e.json())
        .then(animals => this.setState({ animals: animals }))
    }

    render() {
        return (
            <React.Fragment>
                    {
                        this.state.animals.map(animal =>
                            <Animal key={animal.id} animal={animal}>{animal.name}</Animal>
                        )
                    }
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews.js
