import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Main from '../containers/Main';

import './App.css';

@inject('store')
@observer
class App extends Component {
  constructor (props) {
    super(props);
    this.breedHandler = this.breedHandler.bind(this);
  }

  static propTypes = {
    store: PropTypes.object
  }

  componentDidMount () {
    this.props.store.getBreeds();
  }

  breedHandler = ( breed, subbreed = '' ) => () => {
    this.props.store.getSelectedBreed( breed, subbreed );
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs Breeds</h1>
        </header>
        <Main breeds={this.props.store.breeds} breedHandler={this.breedHandler} breed={this.props.store.selectedBreed} />
      </div>
    );
  } 
}

export default App;