import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from './userTypes';

const getUsers = () => async (dispatch, getState) => {
  dispatch({
    type: GET_USERS,
  });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: error.message,
    });
  }
};

export { getUsers };
