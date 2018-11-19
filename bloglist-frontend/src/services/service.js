import axios from 'axios';

const baseUrl = '/api/blogs';



let authHeader = undefined;

const service = {
  setAuthHeader: newToken => authHeader = { headers: { 'Authorization': `bearer ${newToken}`, 'Content-Type': 'application/json'}},

  getBlogs: () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
  },

  submitBlog: blog =>
    axios.post('/api/blogs', blog, authHeader),


  login: (username, password) => axios.post('/api/login', ({ username, password })),
};

export default service;
