import openWeatherInstance from '../openWeatherMapApi';

const fetchData = async (coordinates) => {
  try {
    const { data } = await openWeatherInstance.request({
      method: 'get',
      url: 'data/2.5/weather',
      params: {
        lat: coordinates.latitude,
        lon: coordinates.longitude,
        APPID: process.env.REACT_APP_OPEN_WEATHER_KEY
      }
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default fetchData;