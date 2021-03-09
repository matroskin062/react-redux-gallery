import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
});

const PhotosAPI = {
  getPhotos: async (offset = 1) => {
    const { data } = await instance.get('', {
      params: {
        _page: offset,
        _limit: 6,
      },
    });
    return data;
  },
  getPhoto: async (id) => {
    const { data } = await instance.get(`/${id}`);
    return data;
  },
};

export default PhotosAPI;
