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

export const LOAD_COLLECTIONS_IN_PROGRESS = "LOAD_COLLECTIONS_IN_PROGRESS";
export const loadCollectionsInProgress = () => ({
  type: LOAD_COLLECTIONS_IN_PROGRESS,
});

export const LOAD_COLLECTIONS_SUCCESS = "LOAD_COLLECTIONS_SUCCESS";
export const loadCollectionsSuccess = (collections) => ({
  type: LOAD_COLLECTIONS_SUCCESS,
  payload: { collections },
});

export const LOAD_COLLECTIONS_FAILURE = "LOAD_COLLECTIONS_FAILURE";
export const loadCollectionsFailure = () => ({
  type: LOAD_COLLECTIONS_FAILURE,
});
