import {
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
  } from "../actions/types";
  
  let user = JSON.parse(localStorage.getItem("user"));
  const initialState = user
    ? { loading: false, loggedIn: true, user }
    : { loading: false, loggedIn: false };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, loggedIn: true, user: action.payload };
      case LOGIN_FAILED:
        return { ...state, loading: false, loginFailed: true };
      case LOGOUT:
        return state;
      default:
        return state;
    }
  };
  
  export default loginReducer;