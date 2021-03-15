import React, { useState } from "react";
import { Pencil } from "../icons";
import Modal from "../Modal";
import CollectionEditForm from "./CollectionEditForm";
import CollectionRemoveForm from "./CollectionRemoveForm";

const CollectionEditButton = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
        className="btn-list-item"
      >
        <Pencil />
        <span className="ml-3">Edit</span>
      </button>
      <Modal open={isOpen} close={close}>
        <CollectionEditForm close={close} collection={collection} />
        <CollectionRemoveForm close={close} collection={collection} />
      </Modal>
    </>
  );
};

export default CollectionEditButton;
