export const CREATE_COLLECTION = "CREATE_COLLECTION";
export const createCollection = (name) => ({
  type: CREATE_COLLECTION,
  payload: {
    name,
  },
});

export const REMOVE_COLLECTION = "REMOVE_COLLECTION";
export const removeCollectio = (id) => ({
  type: REMOVE_COLLECTION,
  payload: { id },
});
