import PhotosAPI from '../API';

const SET_LOADING = 'react-reudx-gallery/photoDetails/SET_LOADING';
const SET_PHOTO = 'react-reudx-gallery/photoDetails/SET_PHOTO';

export const setLoading = (payloa) => ({
  type: SET_LOADING,
});

export const setPhoto = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});

export const fetchPhoto = (id) => async (dispatch) => {
  dispatch(setLoading());
  const photo = await PhotosAPI.getPhoto(id);
  dispatch(setPhoto(photo));
};

const initialState = {
  isLoading: false,
  photo: null,
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
    default:
      return state;
  }
};

export default reducer;
