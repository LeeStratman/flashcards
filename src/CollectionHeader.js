import React from "react";
import { connect } from "react-redux";
import { removeActiveCollection } from "./collections/actions";
import FlashcardAddButton from "./flashcards/FlashcardAddButton";

const CollectionHeader = ({ collection, title, removeActiveCollection }) => {
  return (
    <>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <button
            onClick={(e) => {
              removeActiveCollection();
            }}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <svg
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <button
                  onClick={(e) => {
                    removeActiveCollection();
                  }}
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Collections
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <button className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {collection.name}
                </button>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {title}
          </h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <FlashcardAddButton collection={collection} />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeActiveCollection: () => dispatch(removeActiveCollection()),
});

export default connect(null, mapDispatchToProps)(CollectionHeader);
