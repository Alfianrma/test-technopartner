import API from './apiConfig';

export default {
  Login: async data => {
    return await API('/oauth/token', {
      method: 'POST',
      body: data,
    });
  },
};
