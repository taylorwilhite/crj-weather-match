import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = () => {
  return (
    <form className="searchForm">
      <input className="searchbar" type="text" placeholder="Search..." />
    </form>
  );
};

export default Searchbar;