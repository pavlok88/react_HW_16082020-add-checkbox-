import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/api/',
  responseType: 'json',
  timeout: 10000,
});

export const getData = async () => {
  try {
    const {
      data: { results },
    } = await http.get('?results=3');

    return results;
  } catch (err) {
    console.log(err);
  }
};
