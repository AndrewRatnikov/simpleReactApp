import React from 'react';
import PropTypes from 'prop-types';

import placeholder from '../hoc/placeholder';
import Breeds from '../components/Breeds';
import BreedImg from '../components/BreedImg';

const Main = props => {
  let breed;
  if (props.breed[props.breedName]) breed = { breedName: props.breedName, breedImg: props.breed[props.breedName] };
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

export default placeholder( Main, () => (<p>Loading...</p>) )