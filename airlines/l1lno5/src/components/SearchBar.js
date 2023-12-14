// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault()
        onSearch(searchTerm);
    };

    return (
        <div>
            <form onsubmit={handleSearch}>
                     <input
                     type="text"
                     placeholder="Enter airline name"
                     value={searchTerm}
                    onChange={handleInputChange}
                     />
                    <button type="submit" onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                    
            </form>
             
        </div>
    );
};

export default SearchBar;
