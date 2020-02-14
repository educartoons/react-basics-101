import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './Routes';

const App = () => {
  return (
    // JSX
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt me!</h1>
          </Link>
        </header>
        <Routes />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
