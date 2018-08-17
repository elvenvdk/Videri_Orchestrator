import * as types from "../actions/types";

const INITIAL_STATE = {
  contentURL: ""
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECT_CONTENT:
      return { ...state, contentURL: action.payload };
    default:
      return state;
  }
};

export default contentReducer;
