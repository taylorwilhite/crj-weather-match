import React from 'react';
import Location from './Location';
import Weathericon from './Weathericon';
import Weatherdescription from './Weatherdescription';
import Temperature from './Temperature';

const Weatherdisplay = ({weather}) => {
  return (
    <div className="Weather">
      {weather.latitude}
      <Location location={weather.latitude} />
      <Weathericon icon={weather.currently.icon} />
      <Weatherdescription description={weather.currently.summary} />
      <Temperature temperature={weather.currently.temperature} />
    </div>
  );
};

export default Weatherdisplay;