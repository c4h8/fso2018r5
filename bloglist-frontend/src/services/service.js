import axios from 'axios';

const baseUrl = '/api/blogs';

const service = {
  getBlogs: () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
  },

  login: (username, password) => axios.post('/api/login', ({ username, password })),
};

export default service;
