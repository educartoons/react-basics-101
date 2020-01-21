import React from 'react';
import ReactDOM from 'react-dom';

import SearchParams from './SearchParams';
import Pet from './Pet';

const App = () => {
  return (
    // JSX
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      <Pet name="Toby" animal="dog" breed="mixed" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
