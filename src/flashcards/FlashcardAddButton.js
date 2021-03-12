import React, { useState } from "react";
import Modal from "../Modal";
import FlashcardAddForm from "./FlashcardAddForm";

const FlashcardAddButton = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = (e) => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={(e) => {
          console.log("click");
          setIsOpen(!isOpen);
        }}
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Flashcard
      </button>
      <button
        type="button"
        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Study
      </button>
      <Modal open={isOpen} close={close}>
        <FlashcardAddForm close={close} collection={collection} />
      </Modal>
    </>
  );
};

export default FlashcardAddButton;
