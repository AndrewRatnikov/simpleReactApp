import React, { Component } from 'react';

import Breeds from './Breeds'
import BreedImg from './BreedImg'

import { getAllBreeds, getBreedRandomImage } from '../api';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.breedHandler = this.breedHandler.bind(this);
  } 
  
  state = { 
    breeds: null,
    breed: null
  }

  componentDidMount () {
    getAllBreeds()
      .then(data => {
        this.setState({ breeds: data.message });
      });
  }

  breedHandler = ( breed, subbreed = '' ) => () => {
    getBreedRandomImage(breed, subbreed)
      .then(data => {
        this.setState({ 
          breed: {
            breedName: subbreed ? `${subbreed} ${breed}` : breed,
            breedImg: data.message 
          }
        });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs Breeds</h1>
        </header>
        { this.state.breeds ? <Breeds breeds={this.state.breeds} breedHandler={this.breedHandler} /> : <p>Loading...</p> }
        { this.state.breed ? <BreedImg breed={this.state.breed} /> : <h3 className="title">Choose breed to see photo</h3> }
      </div>
    );
  }
}

export default App;
