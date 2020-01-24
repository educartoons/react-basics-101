import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

import Routes from './Routes';

import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('peru');
  return (
    // JSX
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
