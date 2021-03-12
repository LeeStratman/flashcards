import React from "react";

const FlashcardStudyButton = ({ isStudy, setIsStudy }) => (
  <button
    onClick={setIsStudy}
    type="button"
    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {isStudy ? "Exit" : "Study"}
  </button>
);

export default FlashcardStudyButton;
