import PhotosAPI from '../API';

const SET_PHOTOS = 'react-redux-gallery/photos/SET_PHOTOS';
const SET_LOADING = 'react-redux-gallery/photos/SET_LOADING';
const SET_LOADING_MORE = 'react-redux-gallery/photos/SET_LOADING_MORE';
const LOAD_MORE = 'react-redux-gallery/photos/LOAD_MORE';
const CLEAR = 'react-redux-gallery/photos/CLEAR';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setLoadingMore = () => ({
  type: SET_LOADING_MORE,
});

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const setLoadedMore = (photos) => ({
  type: LOAD_MORE,
  payload: photos,
});

export const fetchPhotos = (albumId) => async (dispatch) => {
  dispatch(setLoading());
  const photos = await PhotosAPI.getPhotos(1, albumId);
  dispatch(setPhotos(photos));
};

export const loadMore = (page, albumId) => async (dispatch) => {
  dispatch(setLoadingMore());
  const photos = await PhotosAPI.getPhotos(page, albumId);
  dispatch(setLoadedMore(photos));
};

export const clearPhotosListState = () => ({
  type: CLEAR,
});

const initialState = {
  isLoading: true,
  photos: null,
  isLoadingMore: true,
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
        isLoadingMore: false,
      };
    case SET_LOADING_MORE:
      return {
        ...state,
        isLoadingMore: true,
      };
    case CLEAR:
      return {
        isLoading: true,
        isLoadingMore: true,
        photos: null,
      };
    default:
      return state;
  }
};

export default reducer;
