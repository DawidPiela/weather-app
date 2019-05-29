import airlyInstance from '../airlyApi';

const fetchData = async (coordinates) => {
  try {
    const { data } = await airlyInstance.request({
      method: 'get',
      url: 'measurements/nearest',
      params: {
        lat: coordinates.latitude,
        lng: coordinates.longitude,
        apikey: process.env.REACT_APP_AIRLY_KEY
      }
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default fetchData;