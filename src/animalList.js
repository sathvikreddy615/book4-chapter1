import React, { Component } from "react";
import Animal from "./animal";


export default class AnimalList extends Component {
    state = {
        animals: [
            { id: 1, name: "Lion" },
            { id: 2, name: "Wolf" },
            { id: 3, name: "Elephant" },
            { id: 4, name: "Otter" },
            { id: 5, name: "Kangaroo" },
            { id: 6, name: "Anaconda" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <ul className="animalInfo">
                    {
                        this.state.animals.map(animal => {
                            return <Animal animals={animal} />
                        })

                    }
                </ul>
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews.js
