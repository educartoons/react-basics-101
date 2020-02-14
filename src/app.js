import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';

const App = () => {
  return (
    // JSX
    <Provider store={store}>
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
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
