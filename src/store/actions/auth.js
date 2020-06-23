import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .get(`http://127.0.0.1:8000/api/fakeuser/${username}/`)
      .then((res) => {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", username);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(username));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authSignup(username));
      });
  };
};

export const authSignup = (username) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/api/fakeuser/", {
        username: username,
      })
      .then((res) => {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", username);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(username));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
