import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Breeds.css';

export default class Breeds extends Component {

    static propTypes = {
        breeds: PropTypes.object.isRequired,
        breedHandler: PropTypes.func.isRequired
    }

    sublist ( breed, list ) {
        if ( list.length === 0 ) return '';
        return (
            <ul className="sublist">
                { list.map(subbreed => {
                    return (
                        <li key={ subbreed }>
                            <span onClick={this.props.breedHandler(breed, subbreed)}>{ subbreed }</span>
                        </li>
                    );
                }) } 
            </ul>
        );
    }

    render () {
        return (
            <ul className="left-menu">
                { Object.keys( this.props.breeds ).map(breed => {
                    return (
                        <li key={ breed } className="text-left">
                            <span onClick={this.props.breedHandler(breed)}>{ breed }</span>
                            { this.sublist( breed, this.props.breeds[breed] ) }
                        </li>
                    );
                }) }
            </ul>
        );
    }

}