import PhotosAPI from '../API';

const SET_PHOTOS = 'react-redux-gallery/photos/SET_PHOTOS';
const SET_LOADING = 'react-redux-gallery/photos/SET_LOADING';
const LOAD_MORE = 'react-redux-gallery/photos/LOAD_MORE';

const initialState = {
  isLoading: false,
  isLoadMore: false,
  photos: [],
};

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setLoadedMore = (photos) => ({
  type: LOAD_MORE,
  payload: photos,
});

export const loadMore = (offset) => async (dispatch) => {
  const photos = await PhotosAPI.getPhotos(offset);
  dispatch(setLoadedMore(photos));
};

export const fetchPhotos = () => async (dispatch) => {
  dispatch(setLoading());
  const photos = await PhotosAPI.getPhotos();
  dispatch(setPhotos(photos));
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: payload,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MORE:
      return {
        ...state,
        photos: [...state.photos, ...payload],
        isLoadMore: false,
      };
    default:
      return state;
  }
};

export default reducer;
