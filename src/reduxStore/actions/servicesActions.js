import axios from 'axios';
import {
  FETCH_SERVICES_QNA_FAILURE,
  FETCH_SERVICES_QNA_REQUEST,
  FETCH_SERVICES_QNA_SUCCESS
} from '../constants/servicesConstants';

export const fetchServicesQnA = () => async(dispatch) => {
  dispatch({
    type: FETCH_SERVICES_QNA_REQUEST,
  })
  const baseURL = "http://127.0.0.1:8000/api/checkout-qna";
  try {
    const { data } = await axios.get(baseURL);
    dispatch({
      type: FETCH_SERVICES_QNA_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: FETCH_SERVICES_QNA_FAILURE,
    })
  }
}