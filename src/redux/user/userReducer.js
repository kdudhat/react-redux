import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
