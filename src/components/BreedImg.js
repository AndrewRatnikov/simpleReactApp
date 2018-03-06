import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './BreedImg.css';

export default  class BreedImg extends Component {

    static propTypes = {
        breed: PropTypes.object
    }

    render () {
        const { breed, fetching, error } = this.props.breed;
        if ( !breed ) return (<h3 className="title">Choose breed to see photo</h3>);
        if ( fetching ) return (<p>Loading...</p>);
        if ( error ) return (<p>Error while loading. Try refresh browser.</p>);

        return (
            <div>
                <h2>{breed.name}</h2>
                <img src={breed.url} alt={breed.name} className="breed-img" />
            </div>
        );
    }

}