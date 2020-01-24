import React from 'react';
import { Router } from '@reach/router';

import SearchParams from './SearchParams';
import Details from './Details';
import Config from './Config';

const Routes = () => {
  return (
    <Router>
      <SearchParams path="/" />
      <Config path="config" />
      <Details path="details/:id" />
    </Router>
  );
};

export default Routes;
