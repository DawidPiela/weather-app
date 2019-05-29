import openWeatherInstance from '../openWeatherMapApi';

const fetchData = async (city) => {
  try {
    const { data } = await openWeatherInstance.request({
      method: 'get',
      url: 'data/2.5/weather',
      params: {
        q: city,
        APPID: '6628a1835fed01ea65e1905d03b57f12'
      }
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default fetchData;