import React from 'react';

export default function ( Component, Placeholder ) {
    return class extends React.Component {

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