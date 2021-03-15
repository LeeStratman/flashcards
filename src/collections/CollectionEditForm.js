import React, { useState } from "react";
import { connect } from "react-redux";
import { CheckCircle, ExclamationCircle } from "../icons";
import { updateCollectionRequest } from "./thunks";

const EditCollectionForm = ({ collection, close, onSave }) => {
  const [nameValue, setNameValue] = useState(collection.name);
  const [nameError, setNameError] = useState(false);
  const errorClass = nameError ? "input-error" : "";

  const updateName = (name) => {
    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    setNameValue(name);
  };

  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="form-title">Edit Collection</h3>
            <p className="form-description">
              Please enter a name for the collection.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="collection_name" className="form-label">
                Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="relative">
                  <input
                    value={nameValue}
                    onChange={(e) => updateName(e.target.value)}
                    type="text"
                    name="collection_name"
                    className={`input-txt ${errorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {nameError ? <ExclamationCircle /> : <CheckCircle />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => {
              close();
            }}
            type="button"
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            disabled={nameValue !== "" ? false : true}
            onClick={() => {
              onSave({ _id: collection._id, name: nameValue.trim() });
              setNameValue("");
              close();
            }}
            type="submit"
            className="btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSave: (collection) => dispatch(updateCollectionRequest(collection)),
});

export default connect(null, mapDispatchToProps)(EditCollectionForm);
