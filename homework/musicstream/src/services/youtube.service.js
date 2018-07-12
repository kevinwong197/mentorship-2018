import axios from 'axios';

const API_KEY = '';
const API_URL = 'https://www.googleapis.com/youtube/v3/';

const service = {
  searchYoutube(query) {
    const searchUrl = `${API_URL}search`;
    const config = {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'video',
        key: API_KEY
      },
    };
    return axios.get(searchUrl, config);
  },
};

export default service;
