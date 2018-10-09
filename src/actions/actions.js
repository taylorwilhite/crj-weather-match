export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const GET_LOCATION = 'GET_LOCATION';

export const requestLocation = location => ({ 
  type: REQUEST_LOCATION, location
});

export const getLocation = location => ({
  type: GET_LOCATION, location
});
