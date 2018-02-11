import React from 'react';
import PropTypes from 'prop-types';

import placeholder from '../hoc/placeholder';
import Breeds from '../components/Breeds';
import BreedImg from '../components/BreedImg';

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