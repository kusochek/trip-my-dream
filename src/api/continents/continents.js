import axios from '../service';

const continents = {
  get: () => axios.get('/continents')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/continents', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { continents };
