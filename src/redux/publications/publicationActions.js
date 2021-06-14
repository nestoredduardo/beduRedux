import {
  GET_PUBLICATIONS,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_ERROR,
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

export { getPublications };
