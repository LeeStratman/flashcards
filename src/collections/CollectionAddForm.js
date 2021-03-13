import React, { useState } from "react";
import { connect } from "react-redux";
import { addCollectionRequest } from "./thunks";

const CollectionAddForm = ({ collections, close, onSave }) => {
  const [nameValue, setNameValue] = useState("");
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
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              New Collection
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please enter a name for the collection.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="collection_name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="relative">
                  <input
                    value={nameValue}
                    onChange={(e) => updateName(e.target.value)}
                    type="text"
                    name="collection_name"
                    id="collection_name"
                    className={`input-txt ${errorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {nameError ? (
                      <svg
                        className="h-5 w-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {nameError && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    Collection name must not be blank.
                  </p>
                )}
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
              onSave(nameValue.trim());
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

const mapStateToProps = (state) => ({
  collections: state.collections,
});
const mapDispatchToProps = (dispatch) => ({
  onSave: (name) => dispatch(addCollectionRequest(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionAddForm);
