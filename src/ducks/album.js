import PhotosAPI from '../API';

const SET_LOADING = 'react-redux-gallery/album/SET_LOADING';
const SET_PHOTOS = 'react-redux-gallery/album/SET_PHOTOS';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setAlbumPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const fetchAlbumPhotos = (id) => async (dispatch) => {
  dispatch(setLoading());
  const photos = await PhotosAPI.getAlbumPhotos(id);
  dispatch(setAlbumPhotos(photos));
};

const initialState = {
  photos: [],
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_PHOTOS:
      return {
        ...state,
        photos: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
