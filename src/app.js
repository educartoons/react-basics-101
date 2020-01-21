import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Pet';

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'dog',
      breed: 'Hanavese'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'bird',
      breed: 'Cocktail'
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'cat',
      breed: 'Mixed'
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
