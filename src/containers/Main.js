import React from 'react';
import PropTypes from 'prop-types';

import Breeds from '../components/Breeds';
import BreedImg from '../components/BreedImg';

const Main = props => {
  const { breeds, breed } = props;
  if ( breeds.fetching ) return ( <p>Loading...</p> );
  if ( breeds.error ) return ( <p>Error while loading. Try refresh browser.</p> )
  return [
      <Breeds key={0} breeds={props.breeds} breedHandler={props.breedHandler} />,
      <BreedImg key={1} breed={breed} breedName={props.breedName} />
  ];          
}

Main.propTypes = {
  breeds: PropTypes.object,
  breed: PropTypes.object,
  breedHandler: PropTypes.func,
  breedName: PropTypes.string
}

export default Main;