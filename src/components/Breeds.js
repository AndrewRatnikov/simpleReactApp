import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './Breeds.css';

class Breeds extends Component {

    static propTypes = {
        breeds: PropTypes.object.isRequired,
    }

    sublist ( breed, list ) {
        if ( !list ) return '';
        return (
            <ul className="sublist">
                { list.map(subbreed => {
                    return (
                        <li key={ subbreed }>
                            <Link to={`/${breed}/${subbreed}`} ><span>{ subbreed }</span></Link>
                        </li>
                    );
                }) } 
            </ul>
        );
    }

    render () {
        const { breeds } = this.props.breeds;
        if ( !breeds ) return '';
        return (
            <ul className="left-menu">
                { Object.keys( breeds ).map(breed => {
                    return (
                        <li key={ breed } className="text-left">
                            <Link to={`/${breed}`} ><span>{ breed }</span></Link>
                            { this.sublist( breed, breeds[breed] ) }
                        </li>
                    );
                }) }
            </ul>
        );
    }

}

export default withRouter(Breeds);