export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const GET_WEATHER = 'GET_WEATHER';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export const requestWeather = location => ({ 
  type: REQUEST_WEATHER, location
});

export const getWeather = (location, weather) => ({
  type: GET_WEATHER,
  location,
  weather: weather.weather
});

export const selectLocation = location => ({

});
