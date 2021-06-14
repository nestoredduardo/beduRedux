import {
  GET_PUBLICATIONS,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_ERROR,
} from './publicationTypes';

const initialState = {
  publications: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return { ...state, loading: true };
    case GET_PUBLICATIONS_SUCCESS:
      return { ...state, loading: false, publications: action.payload };
    case GET_PUBLICATIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
