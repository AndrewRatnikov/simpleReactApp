import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import constants from '../constants';

import Main from './Main';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.breedHandler = this.breedHandler.bind(this);
  }

  static propTypes = {
    breeds: PropTypes.object,
    breed: PropTypes.object,
    onRequestBreeds: PropTypes.func,
    onRequestBreed: PropTypes.func
  }

  state = {
    breed: ''
  }

  componentDidMount () {
    this.props.onRequestBreeds();
  }

  breedHandler = ( breed, subbreed = '' ) => () => {
    this.props.onRequestBreed(breed, subbreed);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs Breeds</h1>
        </header>
        <Main breeds={this.props.breeds} breedHandler={this.breedHandler} breed={this.props.breed} />
      </div>
    );
  } 
}

const mapStateToProps = state => ({ 
  breeds: state.breedsReducer,
  breed: state.breedReducer
});
const mapDispathToProps = dispatch => ({ 
  onRequestBreeds: () => dispatch({ type: constants.GET_BREEDS_REQUEST }),
  onRequestBreed: ( breed, subbreed ) => dispatch({ type: constants.SET_BREED_REQUEST, breed, subbreed })
 });

export default connect( mapStateToProps, mapDispathToProps )( App );