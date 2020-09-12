import {
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "../actions/types";
  
  let initialState = { loading: false, registered: false, registerFailed: false };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { ...state, loading: true };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, registered: true };
      case REGISTER_FAILED:
        return { ...state, loading: false, registerFailed: true };
      default:
        return state;
    }
  };
  
  export default registerReducer;