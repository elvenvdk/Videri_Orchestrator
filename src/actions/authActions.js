import * as types from "./types";

export const loginUser = userData => dispatch => {
  dispatch({
    type: types.SET_CURRENT_USER,
    payload: userData
  });
};
