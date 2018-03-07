import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BreedImg from '../components/BreedImg';
import EmptyBreed from '../components/EmptyBreed';
import NoMatch from '../components/NoMatch';

const BreedsRoute = () => (
    <Switch>
        <Route exact path='/' component={EmptyBreed} />
        <Route path='/:breed/:subbreed' component={BreedImg} />
        <Route path='/:breed' component={BreedImg} />
        <Route component={NoMatch} />
    </Switch>
);

export default BreedsRoute;