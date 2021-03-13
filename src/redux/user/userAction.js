import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./userTypes";
import axios from "axios";
const fetchRequestAction = () => {
  return {
    type: FETCH_REQUEST,
  };
};
const fetchSuccessAction = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailAction = (error) => {
  return {
    type: FETCH_FAIL,
    error: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchRequestAction());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userName = response.data.map((user) => user.name);
        dispatch(fetchSuccessAction(userName));
      })
      .catch((error) => {
        dispatch(fetchFailAction(error.message));
      });
  };
};
