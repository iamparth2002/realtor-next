import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '72c39470dfmshce6ca4f94abb3abp13c5a8jsn7d73f9fd8bca' ,
    },
  });
    
  return data;
}