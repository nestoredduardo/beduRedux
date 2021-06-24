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

const initialState = {
  publications: null,
  userPublications: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return { ...state };
    case GET_POST_COMMENTS_SUCCESS:
      return { ...state, postComments: action.payload };
    case OPEN_CLOSE_USER_PUBLICATION:
      return { ...state, userPublications: action.payload };
    case GET_USER_PUBLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        userPublications: action.payload,
        error: false,
      };
    case GET_PUBLICATIONS:
      return { ...state, loading: true };
    case GET_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        publications: action.payload,
        error: false,
      };
    case GET_PUBLICATIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_USER_PUBLICATION_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
