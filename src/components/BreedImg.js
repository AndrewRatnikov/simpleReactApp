import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './BreedImg.css';

export default class BreedImg extends Component {

    static propTypes = {
        breed: PropTypes.shape({
            breedName: PropTypes.string.isRequired,
            breedImg: PropTypes.string.isRequired
        })
    }

    render () {
        let { breedName, breedImg } = this.props.breed;
        return (
            <div>
                <h2>{breedName}</h2>
                <img src={breedImg} alt={`Photo of ${breedName}`} className="breed-img" />
            </div>
        );
    }

}