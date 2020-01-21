import React, { useState } from 'react';

// functional component

const SearchParams = () => {
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
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
