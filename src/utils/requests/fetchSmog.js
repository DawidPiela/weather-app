import airlyInstance from '../airlyApi';

const fetchData = async (coordinates) => {
  try {
    const { data } = await airlyInstance.request({
      method: 'get',
      url: 'measurements/nearest',
      params: {
        lat: coordinates.latitude,
        lng: coordinates.longitude,
        apikey: 'PfrEDPGZPWlI18uC84zXH0S0FQ8vH41z'
      }
    });

    return data;
  } catch (error) {
    return error;
  }
};

export default fetchData;