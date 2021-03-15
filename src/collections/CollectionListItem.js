import React from "react";
import { Eye } from "../icons";
import CollectionEditButton from "./CollectionEditButton";

const CollectionListItem = ({ collection, onButtonClick }) => {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {collection.name}
            </h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">
            Flashcards: {collection.flashcards.length}
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <button
              onClick={(e) => onButtonClick()}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              <Eye />
              <span className="ml-3">View</span>
            </button>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <CollectionEditButton collection={collection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionListItem;
