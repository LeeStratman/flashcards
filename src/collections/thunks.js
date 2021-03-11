import {
  loadCollectionsInProgress,
  loadCollectionsSuccess,
  loadCollectionsFailure,
  createCollection,
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

export const addCollectionRequest = (name) => async (dispatch) => {
  try {
    const body = { name };

    const response = await axios.post(
      "http://localhost:5000/api/collections",
      body
    );

    const collection = await response.data;
    dispatch(createCollection(collection));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (message) => () => {
  alert(message);
};
