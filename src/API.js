import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const PhotosAPI = {
  getPhotos: async (offset = 1) => {
    const { data } = await instance.get('photos/', {
      params: {
        _page: offset,
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
  getAlbumPhotos: async (id) => {
    const { data } = await instance.get(
      `photos?albumId=${id}&_offset=0&_limit=6`
    );
    return data;
  },
};

export default PhotosAPI;
