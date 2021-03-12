import React, { useState } from "react";
import Modal from "../Modal";
import CollectionEditForm from "./CollectionEditForm";

const CollectionEditButton = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = (e) => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
      >
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <span className="ml-3">Edit</span>
      </button>
      <Modal open={isOpen} close={close}>
        <CollectionEditForm close={close} collection={collection} />
      </Modal>
    </>
  );
};

export default CollectionEditButton;
