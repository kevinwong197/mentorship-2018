import axios from 'axios';

const API_KEY = '84921107d9a327259ccf88148da2dd62';
const API_URL = 'https://api.vimeo.com/';

const service = {
  searchVimeo(query) {
    const searchUrl = `${API_URL}videos`;
    const config = {
      headers: { Authorization: `Bearer ${API_KEY}` },
      params: {
        query,
      },
    };

    return axios.get(searchUrl, config);
  },
};

export default service;
