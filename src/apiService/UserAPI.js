import API from './apiConfig';

export default {
  GetUserData: async token => {
    return await API('/api/home', {
      method: 'GET',
      head: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
