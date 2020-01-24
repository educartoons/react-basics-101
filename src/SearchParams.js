import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';

import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';
// functional component

const SearchParams = () => {
  // useState hook
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  // custom hook
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  const [theme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet
      .animals({
        location,
        breed,
        type: animal
      })
      .catch(err => console.log(err));
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedsArray = breeds.map(({ name }) => name);
      setBreeds(breedsArray);
    });
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
            type="text"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
