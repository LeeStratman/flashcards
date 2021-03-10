import {
  CREATE_COLLECTION,
  REMOVE_COLLECTION,
  LOAD_COLLECTIONS_IN_PROGRESS,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_FAILURE,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_COLLECTIONS_IN_PROGRESS: {
      return true;
    }
    case LOAD_COLLECTIONS_SUCCESS: {
      return false;
    }
    case LOAD_COLLECTIONS_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const collections = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_COLLECTION: {
      const { name } = payload;
      const newCollection = {
        name,
      };
      return state.concat(newCollection);
    }
    case REMOVE_COLLECTION: {
      const { id } = payload;
      return state.filter((collection) => collection._id !== id);
    }
    case LOAD_COLLECTIONS_SUCCESS: {
      const { collections } = payload;
      return collections;
    }
    case LOAD_COLLECTIONS_IN_PROGRESS:
    case LOAD_COLLECTIONS_FAILURE:
    default:
      return state;
  }
};
