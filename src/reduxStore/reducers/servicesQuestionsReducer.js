import { FETCH_SERVICES_QNA_FAILURE, FETCH_SERVICES_QNA_REQUEST, FETCH_SERVICES_QNA_SUCCESS } from '../constants/servicesConstants'

const initialState = {
  loading: false,
  error: false,
  data: null
};

export const servicesQuestionsReducer = (state = initialState, action) => {
  if (action.type === FETCH_SERVICES_QNA_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_SERVICES_QNA_SUCCESS) {
    return { ...state, loading: false, error: false, data: action.payload };
  }
  if (action.type === FETCH_SERVICES_QNA_FAILURE) {
    return { ...state, loading: false, error: true };
  }
  return state;
}