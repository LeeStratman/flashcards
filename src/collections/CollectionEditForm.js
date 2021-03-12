import React, { useState } from "react";
import { connect } from "react-redux";
import { updateCollectionRequest } from "./thunks";

const EditCollectionForm = ({ collection, close, onSave }) => {
  const [nameValue, setNameValue] = useState(collection.name);

  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit Collection
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
                <input
                  placeholder={collection.name}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  type="text"
                  name="collection_name"
                  className="input-txt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={(e) => {
              onSave({ _id: collection._id, name: nameValue });
              setNameValue("");
              close(e);
            }}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
