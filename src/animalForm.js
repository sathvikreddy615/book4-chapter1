import React from "react";

export default class AnimalForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.addNewAnimal}>
                    <label htmlFor="animalName">Name: </label>
                    <input
                        type="text"
                        id="animalNameVal"
                        name="animalName"
                        placeholder="Animal's Name"
                        onChange={this.props.handleFieldChange}
                    />

                    <label htmlFor="animalBreed">Breed: </label>
                    <input
                        type="text"
                        id="animalBreedVal"
                        name="animalBreed"
                        placeholder="Animal's Breed"
                        onChange={this.props.handleFieldChange}
                    />

                    <input type="submit"
                    />
                </form>
            </React.Fragment>
        )
    }
}

// exports to AnimalList.js
