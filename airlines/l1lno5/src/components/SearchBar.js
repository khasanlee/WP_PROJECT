// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter airline name"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
};

export default SearchBar;
