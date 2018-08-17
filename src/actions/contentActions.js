import axios from "axios";

import { searchURL, searchVideoURL, API_KEY } from "../data/config";
import * as types from "./types";

export const getCars = () => dispatch => {
  axios
    .get(`${searchURL}${API_KEY}&q=cars`)
    .then(res =>
      dispatch({
        type: types.GET_CARS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getClouds = () => dispatch => {
  axios
    .get(`${searchURL}${API_KEY}&q=clouds`)
    .then(res =>
      dispatch({
        type: types.GET_CLOUDS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getUrban = () => dispatch => {
  axios
    .get(`${searchVideoURL}${API_KEY}&q=urban`)
    .then(res =>
      dispatch({
        type: types.GET_URBAN,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const getCountry = () => dispatch => {
  axios
    .get(`${searchVideoURL}${API_KEY}&q=country`)
    .then(res =>
      dispatch({
        type: types.GET_COUNTRY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const selectContent = selectedContent => dispatch => {
  dispatch({
    type: types.SELECT_CONTENT,
    payload: selectedContent
  });
};
