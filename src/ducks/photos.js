import PhotosAPI from '../API';

const SET_PHOTOS = 'react-redux-gallery/photos/SET_PHOTOS';
const SET_LOADING = 'react-redux-gallery/photos/SET_LOADING';
const LOAD_MORE = 'react-redux-gallery/photos/LOAD_MORE';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const setLoadedMore = (photos) => ({
  type: LOAD_MORE,
  payload: photos,
});

export const fetchPhotos = () => async (dispatch) => {
  dispatch(setLoading());
  const photos = await PhotosAPI.getPhotos();
  dispatch(setPhotos(photos));
};

export const loadMore = (page) => async (dispatch) => {
  const photos = await PhotosAPI.getPhotos(page);
  dispatch(setLoadedMore(photos));
};

const initialState = {
  isLoading: false,
  photos: null,
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
