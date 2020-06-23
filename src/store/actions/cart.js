import { CART_FAIL, CART_START, CART_SUCCESS } from "./actionTypes";
import { authAxios } from "./../../utils";
import { orderSummaryURL } from "./../../constants";

export const cartStart = () => {
  return {
    type: CART_START
  };
};

export const cartSuccess = (data) => {
  console.log(data);
  return {
    type: CART_SUCCESS,
    data
  };
};

export const cartFail = (error) => {
  return {
    type: CART_FAIL,
    error: error
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(cartStart());
    authAxios
      .get("http://127.0.0.1:8000/api/order-summary/")
      .then((res) => {
        dispatch(cartSuccess(res.data));
      })
      .catch((err) => {
        dispatch(cartFail(err));
      });
  };
};
