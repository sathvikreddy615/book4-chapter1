import React, { Component } from "react";
import Animal from "./animal";
import AnimalForm from "./animalForm";

export default class AnimalList extends Component {
  state = {
    animals: []
  };

  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    fetch("http://localhost:5002/animals")
      .then(e => e.json())
      .then(animals => this.setState({ animals: animals }));
  }

  checkOutAnimal(animalId) {
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        console.log(animalList);
        this.setState({
          animals: animalList
        });
      });
  }

  addNewAnimal = () => {
    fetch("http://localhost:5002/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
        body: JSON.stringify({
            name: this.state.animalNameVal,
            breed: this.state.animalBreedVal
        })
    })
      .then(() => {
        return fetch("http://localhost:5002/animals");
      })

      .then(a => a.json())
      .then(animalList => {
        console.log(animalList);
        this.setState({
          animals: animalList
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <AnimalForm addNewAnimal={this.addNewAnimal} handleFieldChange={this.handleFieldChange} />
        {
            this.state.animals.map(animal => (
          <Animal
            key={animal.id}
            animal={animal}
            checkOutAnimal={this.checkOutAnimal.bind(this)}
          >
            {animal.name}
          </Animal>
        ))
        }
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
