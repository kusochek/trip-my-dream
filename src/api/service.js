import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f2fed6edfa0459f6c63242.mockapi.io/api/v1/',
  headers: {'Content-Type': 'application/json'}
});
