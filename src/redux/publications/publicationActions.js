/* eslint-disable comma-dangle */
import {
  GET_PUBLICATIONS,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_ERROR,
  GET_USER_PUBLICATION_SUCCESS,
  GET_USER_PUBLICATION_ERROR,
  OPEN_CLOSE_USER_PUBLICATION,
} from './publicationTypes';

const openClosePublications = (key, commentId) => (dispatch, getState) => {
  const { userPublications } = getState().publication;
  const newUserPublications = userPublications.map((item) => {
    if (item.id - 1 === commentId) {
      return { ...item, open: true };
    }
    return { ...item, open: false };
  });
  console.log(newUserPublications);
  dispatch({
    type: OPEN_CLOSE_USER_PUBLICATION,
    payload: newUserPublications,
  });
};

const getPublications = () => async (dispatch) => {
  dispatch({
    type: GET_PUBLICATIONS,
  });
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({
      type: GET_PUBLICATIONS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_PUBLICATIONS_ERROR,
      payload: e.message,
    });
  }
};

const getUserPublication = (key) => async (dispatch) => {
  dispatch({
    type: GET_PUBLICATIONS,
  });
  try {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts?userId=${key}`
    );
    const data = await response.json();
    dispatch({
      type: GET_USER_PUBLICATION_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispacth({
      type: GET_USER_PUBLICATION_ERROR,
      payload: e.message,
    });
  }
};

export { getPublications, getUserPublication, openClosePublications };
