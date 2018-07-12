const service = {
  fromVimeo(response) {
    return response.data.data.map(video => {
      return {
        title: video.name,
        url: video.link,
        thumb: video.pictures.sizes[0].link
      }
    });
  },
  default() {
    return {
      title: '',
      url: '',
      thumb: ''
    }
  }
};

export default service;
