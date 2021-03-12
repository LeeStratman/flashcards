import React from "react";

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
        className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ${overlayClass}`}
      >
        {/* Background overlay, show/hide based on modal state.
		
					Entering: "ease-out duration-300"
						From: "opacity-0"
						To: "opacity-100"
					Leaving: "ease-in duration-200"
						From: "opacity-100"
						To: "opacity-0" */}

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

        {/* Modal panel, show/hide based on modal state.
		
					Entering: "ease-out duration-300"
						From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						To: "opacity-100 translate-y-0 sm:scale-100"
					Leaving: "ease-in duration-200"
						From: "opacity-100 translate-y-0 sm:scale-100"
						To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

        <div
          className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 ${panelClass}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={close}
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Close</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
