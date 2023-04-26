import axios from 'axios';

const BASE_URL = "https://arabic-books-library.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get('/api/config');
    const options = {
      headers: {
        'X-RapidAPI-Key': data.apiKey,
        'X-RapidAPI-Host': 'arabic-books-library.p.rapidapi.com'
      },
    };
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
