import React from 'react';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
    const [destination, setDestination] = useState('');
    const [locationType, setLocationType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Destination:', destination);
        console.log('Location Type:', locationType);
    }


    return (
       <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search destinations"
        className="search-input"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <div className="divider"></div>
      <input
        type="text"
        placeholder="Search specific type"
        className="search-input"
        value={locationType}
        onChange={(e) => setLocationType(e.target.value)}
      />
      <button type="submit" className="search-button">
        <img src="https://www.toptal.com/designers/htmlarrows/assets/images/search-button-c0042ed6.svg" alt="" />
      </button>
    </form>
    
  );
};

export default SearchBar;