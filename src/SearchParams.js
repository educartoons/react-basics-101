import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

// functional component

const SearchParams = () => {
  // useState hook
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  // custom hook
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form action="">
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
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
