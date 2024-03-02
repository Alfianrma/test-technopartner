import API from './apiConfig';

export default {
  Menu: async token => {
    return await API('/api/menu', {
      method: 'GET',
      head: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        show_all: 1,
      },
    });
  },
};
