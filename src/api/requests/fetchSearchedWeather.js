import openWeatherInstance from '../openWeatherMapApi';

const fetchData = async (city) => {
  try {
    const { data } = await openWeatherInstance.request({
      method: 'get',
      url: 'data/2.5/weather',
      params: {
        q: city,
        APPID: process.env.REACT_APP_OPEN_WEATHER_KEY
      }
    });

    return data;
  } catch (error) {
  }
};

export default fetchData;