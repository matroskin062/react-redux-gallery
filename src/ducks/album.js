import PhotosAPI from '../API';

const SET_LOADING = 'react-redux-gallery/album/SET_LOADING';
const SET_PHOTOS = 'react-redux-gallery/album/SET_PHOTOS';
const LOAD_MORE = 'react-redux-gallery/album/LOAD_MORE';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setAlbumPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const setLoadedMore = (photos) => ({
  type: LOAD_MORE,
  payload: photos,
});

export const fetchAlbumPhotos = (id) => async (dispatch) => {
  dispatch(setLoading());
  const photos = await PhotosAPI.getAlbumPhotos(id);
  dispatch(setAlbumPhotos(photos));
};

export const fetchMoreAlbumPhotos = (id, page) => async (dispatch) => {
  const photos = await PhotosAPI.getAlbumPhotos(id, page);
  dispatch(setLoadedMore(photos));
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
        isLoading: false,
        photos: payload,
      };
    case LOAD_MORE:
      return {
        ...state,
        photos: [...state.photos, ...payload],
      };
    default:
      return state;
  }
};

export default reducer;
