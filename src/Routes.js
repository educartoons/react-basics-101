import React from 'react';
import { Router } from '@reach/router';

import SearchParams from './SearchParams';
import Details from './Details';
import Config from './Config';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <Router>
      <SearchParams path="/" />
      <Config path="config" />
      <Details path="details/:id" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
