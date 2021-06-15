/* eslint-disable comma-dangle */
import {
  GET_PUBLICATIONS,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_ERROR,
  GET_USER_PUBLICATION_SUCCESS,
  GET_USER_PUBLICATION_ERROR,
} from './publicationTypes';

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

export { getPublications, getUserPublication };
