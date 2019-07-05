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
  const API_KEY = "4fce18647ab5195058667f77b7ba0f85"; // o2
  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return fetch(URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
};

export const fetchWeatherWithRedux = (lat, lon) => {
  return dispatch => {
    dispatch(fetchWeather());
    return getWeather(lat, lon).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchWeatherSuccess(json));
      } else {
        dispatch(fetchWeatherError());
      }
    });
  };
};
