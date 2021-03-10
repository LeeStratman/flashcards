import { CREATE_COLLECTION, REMOVE_COLLECTION } from "./actions";

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
    default:
      return state;
  }
};
