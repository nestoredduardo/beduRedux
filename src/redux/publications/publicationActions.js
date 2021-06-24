/* eslint-disable comma-dangle */
import {
  GET_PUBLICATIONS,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_ERROR,
  GET_USER_PUBLICATION_SUCCESS,
  GET_USER_PUBLICATION_ERROR,
  OPEN_CLOSE_USER_PUBLICATION,
  GET_POST_COMMENTS,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_ERROR,
} from './publicationTypes';

const getPostComments = (postId) => async (dispatch) => {
  dispatch({
    type: GET_POST_COMMENTS,
  });
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const data = await response.json();
    dispatch({
      type: GET_POST_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_COMMENTS_ERROR,
      payload: 'No se pudo traer los comentarios. Intente mas tarde',
    });
  }
};

const openClosePublications = (key, commentId) => (dispatch, getState) => {
  const { userPublications } = getState().publication;
  const newUserPublications = userPublications.map((item, itemId) => {
    if (itemId === commentId) {
      return { ...item, open: true };
    }
    return { ...item, open: false };
  });
  dispatch({
    type: OPEN_CLOSE_USER_PUBLICATION,
    payload: newUserPublications,
  })
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

export {
  getPublications,
  getUserPublication,
  openClosePublications,
  getPostComments,
};
