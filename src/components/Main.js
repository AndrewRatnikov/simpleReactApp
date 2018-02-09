import React from 'react';

import placeholder from './placeholder';
import Breeds from './Breeds';
import BreedImg from './BreedImg';

const Main = props => {
  return [
      <Breeds key={0} breeds={props.breeds} breedHandler={props.breedHandler} />,
      <BreedImg key={1} breed={props.breed} />
  ];          
}

export default placeholder( Main, () => (<p>Loading...</p>) )