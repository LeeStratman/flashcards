import React from "react";
import FlashcardListItem from "./FlashcardListItem";
import WarningMessage from "../WarningMessage";

const FlashcardList = ({ collection }) => {
  const content =
    collection.flashcards.length > 0 ? (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {collection.flashcards.map((flashcard) => (
          <FlashcardListItem
            key={flashcard._id}
            collectionId={collection._id}
            flashcard={flashcard}
          />
        ))}
      </div>
    ) : (
      <WarningMessage
        message="No flashcards exist in this collection. Please add a flashcard to get
      started."
      />
    );
  return content;
};

export default FlashcardList;
