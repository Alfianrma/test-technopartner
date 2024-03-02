import axios from 'axios';

const API = async (
  url,
  options = {
    method: 'GET',
    head: {},
    body: {},
  },
) => {
  const request = {
    baseURL: 'https://soal.staging.id',
    method: options.method,
    url,
    headers: options.head,
    responseType: 'json',
  };

  if (options.method === 'POST') {
    request.data = options.body;
  }

  const res = await axios(request);
  return res;
};

export default API;
