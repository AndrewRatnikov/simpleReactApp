import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import constants from '../constants';
import NoMatch from './NoMatch';

import './BreedImg.css';

class BreedImg extends Component {

    static propTypes = {
        breed: PropTypes.object,
        match: PropTypes.object,
        onRequestBreed: PropTypes.func,
        location: PropTypes.object
    }

    componentDidMount () {
        const breed = this.props.match.params.breed;
        const subbreed = this.props.match.params.subbreed || '';
        this.props.onRequestBreed(breed, subbreed);
    }

    componentWillReceiveProps (nextProps) {
        if ( this.props.location.pathname !== nextProps.location.pathname ) {
            const breed = nextProps.match.params.breed;
            const subbreed = nextProps.match.params.subbreed || '';
            this.props.onRequestBreed(breed, subbreed);
        }
    }

    render () {
        if ( this.props.breed.error ) return <NoMatch />

        const { breed, fetching, error } = this.props.breed;
        if ( error ) return (<p>Error while loading. Try refresh browser.</p>);
        if ( fetching ) return (<p>Loading...</p>);
        if ( !breed ) return '';

        return (
            <div>
                <h2>{breed.name}</h2>
                <img src={breed.url} alt={breed.name} className="breed-img" />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    breed: state.breedReducer
});

const mapDispatchToProps = dispatch => ({
    onRequestBreed: ( breed, subbreed ) => dispatch({ type: constants.SET_BREED_REQUEST, breed, subbreed })
});

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( BreedImg ) );