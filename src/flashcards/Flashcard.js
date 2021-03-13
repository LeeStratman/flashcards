import React, { useState } from "react";

const Flashcard = ({ flashcard, next, prev }) => {
  const [showQuestion, setShowQuestion] = useState(true);

  const text = showQuestion ? flashcard.question : flashcard.answer;
  const buttonText = showQuestion ? "SHOW ANSWER" : "SHOW QUESTION";

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg max-w-xl m-auto h-80">
        <div className="flex justify-center px-4 py-5 sm:p-6 h-full">
          <h3 className="my-auto text-3xl leading-6 font-medium text-gray-900 text-center">
            {text}
          </h3>
        </div>
      </div>
      <div className="mt-5 text-center">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            onClick={() => prev()}
            type="button"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
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
          </button>
          <button
            onClick={() => setShowQuestion(!showQuestion)}
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {buttonText}
          </button>
          <button
            onClick={() => next()}
            type="button"
            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
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
          </button>
        </span>
      </div>
    </>
  );
};

export default Flashcard;
