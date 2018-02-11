import React from 'react';
import PropTypes from 'prop-types';

import placeholder from './placeholder';
import Breeds from './Breeds';
import BreedImg from './BreedImg';

const Main = props => {
  return [
      <Breeds key={0} breeds={props.breeds} breedHandler={props.breedHandler} />,
      <BreedImg key={1} breed={props.breed} />
  ];          
}

Main.propTypes = {
  breeds: PropTypes.object,
  breed: PropTypes.object,
  breedHandler: PropTypes.func
}

export default placeholder( Main, () => (<p>Loading...</p>) )