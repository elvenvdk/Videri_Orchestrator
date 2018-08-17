import * as types from "../actions/types";

const INITIAL_STATE = {
  pictures: [],
  videos: [],
  err: {}
};

const previewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CARS:
      return {
        ...state,
        pictures: action.payload,
        videos: []
      };
    case types.GET_CLOUDS:
      return {
        ...state,
        pictures: action.payload,
        videos: []
      };
    case types.GET_URBAN:
      return {
        ...state,
        videos: action.payload,
        pictures: []
      };
    case types.GET_COUNTRY:
      return {
        ...state,
        videos: action.payload,
        pictures: []
      };
    default:
      return state;
  }
};

export default previewReducer;
