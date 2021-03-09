import PhotosAPI from '../API';

const SET_USER = 'react-redux-gallery/user/SET_USER';
const SET_LOADING = 'react-redux-gallery/user/SET_LOADING';
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const fetchUser = (id) => async (dispatch) => {
  dispatch(setLoading());
  const user = await PhotosAPI.getUser(id);
  dispatch(setUser(user));
};

const initialState = {
  user: null,
  isLoading: false,
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
        user,
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
