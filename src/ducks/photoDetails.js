import PhotosAPI from '../API';

const SET_LOADING = 'react-reudx-gallery/photoDetails/SET_LOADING';
const SET_PHOTO = 'react-reudx-gallery/photoDetails/SET_PHOTO';
const CLEAR = 'react-reudx-gallery/photoDetails/CLEAR';
const ERROR = 'react-reudx-gallery/photoDetails/ERROR';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = () => ({
  type: ERROR,
});
export const setPhoto = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});

export const fetchPhoto = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const photo = await PhotosAPI.getPhoto(id);
    dispatch(setPhoto(photo));
  } catch (e) {
    dispatch(setError());
  }
};

export const clearPhotoDetailsState = () => ({
  type: CLEAR,
});

const initialState = {
  isLoading: true,
  photo: null,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PHOTO:
      return {
        ...state,
        photo: payload,
        isLoading: false,
      };
    case CLEAR:
      return {
        isLoading: false,
        error: false,
        photo: null,
      };
    case ERROR:
      return {
        isLoading: false,
        photo: null,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
