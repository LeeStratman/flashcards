import React from "react";
import FlashcardAddButton from "./flashcards/FlashcardAddButton";
import Breadcrumbs from "./Breadcrumbs";

const CollectionHeader = ({ collection, title, removeActiveCollection }) => {
  return (
    <>
      <Breadcrumbs />
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

export default CollectionHeader;
