import {
  CREATE_COLLECTION,
  REMOVE_COLLECTION,
  LOAD_COLLECTIONS_IN_PROGRESS,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_FAILURE,
  UPDATE_ACTIVE_COLLECTION,
  REMOVE_ACTIVE_COLLECTION,
} from "./actions";

export const activeCollection = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ACTIVE_COLLECTION: {
      const { collection } = payload;
      return collection;
    }
    case REMOVE_ACTIVE_COLLECTION: {
      return null;
    }
    default:
      return state;
  }
};

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
      const { collection } = payload;

      return state.concat(collection);
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
