import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

// functional component

const SearchParams = () => {
  // useState hook
  const [animal, setAnimal] = useState('dog');
  const [location, setLocation] = useState('Seattle, WA');

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
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
