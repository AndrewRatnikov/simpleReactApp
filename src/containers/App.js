import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import constants from '../constants';

import Main from './Main';

import './App.css';

class App extends Component {

  static propTypes = {
    breeds: PropTypes.object,
    breed: PropTypes.object,
    onRequestBreeds: PropTypes.func,
    onRequestBreed: PropTypes.func
  }

  componentDidMount () {
    this.props.onRequestBreeds();
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs Breeds</h1>
        </header>
        <Main breeds={this.props.breeds} />
      </div>
    );
  } 
}

const mapStateToProps = state => ({ 
  breeds: state.breedsReducer
});
const mapDispathToProps = dispatch => ({ 
  onRequestBreeds: () => dispatch({ type: constants.GET_BREEDS_REQUEST })
 });

export default withRouter( connect( mapStateToProps, mapDispathToProps )( App ) );