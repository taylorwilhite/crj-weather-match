import React from 'react';

const Location = ({location}) => {
  return (
    <div className="weather-location">
      <p>{location}</p>
    </div>
  );
};

export default Location;