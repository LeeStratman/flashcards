import React, { useState } from "react";
import Modal from "../Modal";
import CollectionAddForm from "./CollectionAddForm";

const CollectionAddButton = ({ collection }) => {
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
        type="button"
        className="btn-primary"
      >
        Add Collection
      </button>
      <Modal open={isOpen} close={close}>
        <CollectionAddForm close={close} />
      </Modal>
    </>
  );
};

export default CollectionAddButton;
