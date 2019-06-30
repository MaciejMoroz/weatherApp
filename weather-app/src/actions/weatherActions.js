export const ACTION_TYPES = {
  WEATHER_FETCH: "WEATHER_FETCH",
  WEATHER_FETCH_SUCCESS: "WEATHER_FETCH_SUCCESS",
  WEATHER_FETCH_ERROR: "WEATHER_FETCH_ERROR"
};

export function fetchWeather(weather) {
  return {
    type: ACTION_TYPES.WEATHER_FETCH,
    weather
  };
}

export function fetchWeatherSuccess(weather) {
  return {
    type: ACTION_TYPES.WEATHER_FETCH_SUCCESS,
    weather
  };
}

export function fetchWeatherError() {
  return {
    type: ACTION_TYPES.WEATHER_FETCH_ERROR
  };
}

export const getWeather = (lat, lon) => {
  const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  return fetch(URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
};

export const fetchWeatherWithRedux = () => {
  return dispatch => {
    dispatch(fetchWeather());
    return getWeather().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchWeatherSuccess(json));
      } else {
        dispatch(fetchWeatherError());
      }
    });
  };
};
