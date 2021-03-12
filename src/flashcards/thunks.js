import {
  updateActiveCollection,
  updateCollection,
} from "../collections/actions";
import axios from "axios";

export const createFlashcardRequest = (collectionId, flashcard) => async (
  dispatch
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/collections/${collectionId}/flashcards`,
      flashcard
    );

    const collection = await response.data;
    dispatch(updateCollection(collection));
    dispatch(updateActiveCollection(collection));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const updateFlashcardRequest = (collectionId, flashcard) => async (
  dispatch
) => {
  const { _id } = flashcard;

  try {
    const response = await axios.put(
      `http://localhost:5000/api/collections/${collectionId}/flashcards/${_id}`,
      flashcard
    );

    const collection = await response.data;
    dispatch(updateCollection(collection));
    dispatch(updateActiveCollection(collection));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const removeFlashcardRequest = (collectionId, flashcardId) => async (
  dispatch
) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/collections/${collectionId}/flashcards/${flashcardId}`
    );

    const collection = await response.data;

    dispatch(updateCollection(collection));
    dispatch(updateActiveCollection(collection));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (message) => () => {
  alert(message);
};
