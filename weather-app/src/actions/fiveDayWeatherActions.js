export const ACTION_TYPES = {
  DAY_5_WEATHER_FETCH: "DAY_5_WEATHER_FETCH",
  DAY_5_WEATHER_FETCH_SUCCESS: "DAY_5_WEATHER_FETCH_SUCCESS",
  DAY_5_WEATHER_FETCH_ERROR: "DAY_5_WEATHER_FETCH_ERROR"
};

export function fetch_5day_Weather(d5_weather) {
  return {
    type: ACTION_TYPES.DAY_5_WEATHER_FETCH,
    d5_weather
  };
}

export function fetch_5day_WeatherSuccess(d5_weather) {
  return {
    type: ACTION_TYPES.DAY_5_WEATHER_FETCH_SUCCESS,
    d5_weather
  };
}

export function fetch_5day_WeatherError() {
  return {
    type: ACTION_TYPES.DAY_5_WEATHER_FETCH_ERROR
  };
}

export const get5DayWeather = (lat, lon) => {
  const API_KEY = "4fce18647ab5195058667f77b7ba0f85"; // o2

  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return fetch(URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
};

export const fetch_5day_WeatherWithRedux = (lat, lon) => {
  return dispatch => {
    dispatch(fetch_5day_Weather());
    return get5DayWeather(lat, lon).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetch_5day_WeatherSuccess(json));
      } else {
        dispatch(fetch_5day_WeatherError());
      }
    });
  };
};
