import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import Routes from './Routes';

const App = () => {
  return (
    // JSX
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt me!</h1>
          </Link>
        </header>
        <Routes />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
