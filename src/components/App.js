import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { getAllBreeds, getBreedRandomImage } from '../api';

import Main from '../containers/Main';

import './App.css';

@observer
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
    this.props.store.getBreeds()
    // getAllBreeds()
    //   .then(data => {
    //     this.setState({ breeds: data.message });
    //   });
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

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs Breeds</h1>
        </header>
        <Main breeds={this.state.breeds} breedHandler={this.breedHandler} breed={this.state.breed} />
      </div>
    );
  } 
}

export default App;