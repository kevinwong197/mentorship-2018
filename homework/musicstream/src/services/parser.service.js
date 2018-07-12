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
  fromYoutube(response) {
    return response.data.items.map(video => {
      return {
        title: video.snippet.title,
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        thumb: video.snippet.thumbnails.default.url
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
