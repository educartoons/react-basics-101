import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div>
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

export default Results;
