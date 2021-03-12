import React from "react";
import { connect } from "react-redux";
import { removeCollectionRequest } from "./thunks";

const CollectionRemoveForm = ({ collection, close, onRemove }) => {
  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Delete {collection.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This will permanently delete the collection along with it's
              flashcards!
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => {
              onRemove(collection._id);
              close();
            }}
            type="submit"
            className="btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeCollectionRequest(id)),
});

export default connect(null, mapDispatchToProps)(CollectionRemoveForm);
