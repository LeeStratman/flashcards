import React, { useState } from "react";
import Modal from "../Modal";
import FlashcardEditForm from "../flashcards/FlashcardEditForm";
import FlashcardRemoveForm from "./FlashcardRemoveForm";

const FlashcardListItem = ({ collectionId, flashcard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <div className="flex-1 min-w-0">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="focus:outline-none"
        >
          <span className="absolute inset-0" aria-hidden="true"></span>
          <p className="text-sm font-medium text-gray-900">
            {flashcard.question}
          </p>
        </button>
        <Modal open={isOpen} close={close}>
          <FlashcardEditForm
            close={close}
            collectionId={collectionId}
            flashcard={flashcard}
          />
          <FlashcardRemoveForm
            close={close}
            collectionId={collectionId}
            flashcard={flashcard}
          />
        </Modal>
      </div>
    </div>
  );
};

export default FlashcardListItem;
