import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from './userTypes';

const initialState = {
  users: null,
  fetching: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, fetching: false, users: action.payload };
    case GET_USERS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case GET_USERS:
      return { ...state, fetching: true };
    default:
      return state;
  }
};

export default reducer;
