import PhotosAPI from '../API';

const SET_USER = 'react-redux-gallery/user/SET_USER';
const SET_LOADING = 'react-redux-gallery/user/SET_LOADING';
const CLEAR = 'react-redux-gallery/user/CLEAR';
const ERROR = 'react-redux-gallery/user/ERROR';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = () => ({
  type: ERROR,
});

export const fetchUser = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = await PhotosAPI.getUser(id);
    dispatch(setUser(user));
  } catch (e) {
    dispatch(setError());
  }
};

export const clearUserState = () => ({
  type: CLEAR,
});

const initialState = {
  user: null,
  isLoading: true,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      const { name, username, email, website } = payload;
      const user = {
        name,
        username,
        email,
        website,
      };
      return {
        ...state,
        isLoading: false,
        user,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR:
      return {
        user: null,
        isLoading: true,
      };
    case ERROR:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
