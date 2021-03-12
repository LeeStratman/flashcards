export const CREATE_COLLECTION = "CREATE_COLLECTION";
export const createCollection = (collection) => ({
  type: CREATE_COLLECTION,
  payload: {
    collection,
  },
});

export const UPDATE_COLLECTION = "UPDATE_COLLECTION";
export const updateCollection = (collection) => ({
  type: UPDATE_COLLECTION,
  payload: {
    collection,
  },
});

export const REMOVE_COLLECTION = "REMOVE_COLLECTION";
export const removeCollection = (id) => ({
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

export const UPDATE_ACTIVE_COLLECTION = "UPDATE_ACTIVE_COLLECTION";
export const updateActiveCollection = (collection) => ({
  type: UPDATE_ACTIVE_COLLECTION,
  payload: { collection },
});

export const REMOVE_ACTIVE_COLLECTION = "REMOVE_ACTIVE_COLLECTION";
export const removeActiveCollection = (collection) => ({
  type: REMOVE_ACTIVE_COLLECTION,
});
