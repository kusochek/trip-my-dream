import axios from '../service';

const countries = {
  get: (continent) => axios.get(`/${continent}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { countries };
