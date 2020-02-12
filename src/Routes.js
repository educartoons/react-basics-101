import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import Config from './Config';
import NotFound from './NotFound';

const SearchParams = lazy(() => import('./SearchParams'));
const Details = lazy(() => import('./Details'));

const Routes = () => {
  return (
    <Suspense fallback={<h4>loading route...</h4>}>
      <Router>
        <SearchParams path="/" />
        <Config path="config" />
        <Details path="details/:id" />
        <NotFound default />
      </Router>
    </Suspense>
  );
};

export default Routes;
