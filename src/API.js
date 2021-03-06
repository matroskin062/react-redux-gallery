import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const PhotosAPI = {
  getPhotos: async (page = 1, albumId) => {
    const { data } = await instance.get('photos/', {
      params: {
        albumId,
        _page: page,
        _limit: 6,
      },
    });
    return data;
  },

  getPhoto: async (id) => {
    const { data } = await instance.get(`photos/${id}?_expand=album`);
    return data;
  },

  getUser: async (id) => {
    const { data } = await instance.get(`albums/${id}?_expand=user`);
    return data.user;
  },
};

export default PhotosAPI;
