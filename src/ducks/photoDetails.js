import PhotosAPI from '../API';

const SET_PHOTO = 'react-redux-gallery/photo/SET_PHOTO';
const SET_LOADING = 'react-redux-gallery/photo/SET_LOADING';

const setPhoto = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const fetchPhoto = (id) => async (dispatch) => {
  dispatch(setLoading());
  const photo = await PhotosAPI.getPhoto(id);
  dispatch(setPhoto(photo));
};

const initialState = {
  photo: null,
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PHOTO:
      return {
        photo: payload,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
