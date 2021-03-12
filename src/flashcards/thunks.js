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

export const displayAlert = (message) => () => {
  alert(message);
};
