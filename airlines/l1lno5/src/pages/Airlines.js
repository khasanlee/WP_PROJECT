// Airlines.js
import React, { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import CardGrid from '../components/CardGrid';
import Filter from '../components/FilterArea';
import Title from '../components/PageTitle';
import SearchBar from '../components/SearchBar';



const api = 'https://www.kayak.com/h/mobileapis/directory/airlines/homework';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  const [showAirlines, setShowAirlines] = useState([]);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Add state for search term

  useEffect(() => {
    fetchJsonp(api, {
      jsonpCallbackFunction: 'invalidCallbackFunctionName',
    })
      .then((response) => response.json())
      .then((res) => setAirlines(res));
  }, []);

  useEffect(() => {
    if (filters.length === 0) {
      setShowAirlines(airlines);
      return;
    }
    setShowAirlines(
      airlines.filter((airline) => {
        return filters.includes(airline.alliance);
      })
    );
  }, [filters, airlines]);

  useEffect(() => {
    // Add a search filter
    if (searchTerm.trim() === '') {
      setShowAirlines(airlines);
      return;
    }
    setShowAirlines(
      airlines.filter((airline) =>
        airline.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, airlines]);

  const onFilterChange = (filterBy) => {
    setFilters(filterBy);
  };

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Title text="A I R L I N E S" />
      <SearchBar onSearch={onSearch} />
      <Filter onChange={onFilterChange} />
      <CardGrid items={showAirlines} />
    </div>
  );
};

export default Airlines;
