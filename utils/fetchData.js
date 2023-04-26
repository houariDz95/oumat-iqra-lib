import axios from 'axios';

const BASE_URL = "https://arabic-books-library.p.rapidapi.com"
const options = {
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'arabic-books-library.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  try{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data 
  }catch(err){
    console.log(err);
  }
};