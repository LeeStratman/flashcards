import React from "react";
import { Close } from "./icons";

const Modal = ({ open, close, children }) => {
  const overlayClass = open
    ? "ease-in duration-200 opacity 100"
    : "ease-out duration-300 opacity-0";

  const panelClass = open
    ? "ease-in duration-200 opacity-100 translate-y-0 sm:scale-100"
    : "ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";

  const modalClass = open ? "" : "invisible";

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${modalClass}`}>
      <div
        className={`flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ${overlayClass}`}
      >
        <div
          className={`fixed inset-0 transition-opacity ${overlayClass}`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm w-full sm:p-6 ${panelClass}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={close}
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Close</span>
              <Close />
            </button>
          </div>
          {open && children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
