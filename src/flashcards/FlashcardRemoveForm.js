import React from "react";
import { connect } from "react-redux";
import { removeFlashcardRequest } from "./thunks";

const FlashcardRemoveForm = ({ collectionId, flashcard, close, onRemove }) => {
  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="form-title">Delete Flashcard</h3>
            <p className="form-description">
              This will permanently delete the flashcard! This action cannot be
              undone.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => {
              onRemove(collectionId, flashcard._id);
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
  onRemove: (collectionId, flashcardId) =>
    dispatch(removeFlashcardRequest(collectionId, flashcardId)),
});

export default connect(null, mapDispatchToProps)(FlashcardRemoveForm);
