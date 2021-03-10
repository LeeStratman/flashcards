import {
  loadCollectionsInProgress,
  loadCollectionsSuccess,
  loadCollectionsFailure,
} from "./actions";
import axios from "axios";

export const loadCollections = () => async (dispatch, getState) => {
  try {
    dispatch(loadCollectionsInProgress());

    const response = await axios.get("http://localhost:5000/api/collections");
    const collections = await response.data;

    dispatch(loadCollectionsSuccess(collections));
  } catch (err) {
    dispatch(loadCollectionsFailure());
    displayAlert(err);
  }
};

export const displayAlert = (message) => (message) => {
  alert(message);
};
