import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./types";
import axios from "axios";

export const login = (cb, user) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios
    .post("http://localhost:5000/api/users/authenticate", user)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      cb();
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};