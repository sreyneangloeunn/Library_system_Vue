import api from './axios';  // axios instance with base URL configured

export default {
  getAll: () => api.get('/libraries'),            // GET all libraries
  get: (id) => api.get(`/libraries/${id}`),       // GET library by id
  create: (data) => api.post('/libraries', data), // POST create new library
  update: (id, data) => api.put(`/libraries/${id}`, data), // PUT update library
  delete: (id) => api.delete(`/libraries/${id}`),           // DELETE library
};
