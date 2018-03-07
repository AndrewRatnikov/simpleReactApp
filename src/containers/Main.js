import React from 'react';
import PropTypes from 'prop-types';

import Breeds from '../components/Breeds';
import BreedsRoute from '../containers/BreedsRoute';

const Main = props => {
  const { breeds } = props;
  if ( breeds.error ) return ( <p>Error while loading. Try refresh browser.</p> );
  if ( breeds.fetching ) return ( <p>Loading...</p> );
  return [
      <Breeds key={0} breeds={props.breeds} />,
      <BreedsRoute key={1} />
  ];          
}

Main.propTypes = {
  breeds: PropTypes.object,
  breed: PropTypes.object,
  breedHandler: PropTypes.func,
  breedName: PropTypes.string
}

export default Main;