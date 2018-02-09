import React from 'react';
import PropsTypes from 'prop-types';

export default function ( Component, Placeholder ) {
    return class extends React.Component {
        static propsTypes = {
            breed: PropsTypes.object,
            breeds: PropsTypes.object
        }

        needPlaceholder () {
            if ( this.props.breed ) return true;
            else if ( this.props.breeds ) return true;
            return false;
        }

        render () {
            return (
                this.needPlaceholder() ? <Component {...this.props} /> : <Placeholder />
            );
        }
    }
}