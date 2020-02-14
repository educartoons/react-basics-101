import React, { useState } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import store from './store';

const Results = ({ pets }) => {
  const [flag, setFlag] = useState(false);

  function select(state) {
    return state.theme;
  }

  let currentValue;
  function handleChange() {
    let previousValue = currentValue;
    currentValue = select(store.getState());

    if (previousValue !== currentValue) {
      setFlag(true);
    }
  }
  let unsubscribe = store.subscribe(handleChange);
  return (
    <div>
      {flag && <p>Hola mundo</p>}
      {pets.length === 0 ? (
        <h2>No Pets found</h2>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = ({ theme }) => ({
  theme
});

export default connect(mapStateToProps)(Results);
