import React from "react";

const FlashcardStudyButton = ({ disabled = false, isStudy, setIsStudy }) => (
  <button
    disabled={disabled}
    onClick={setIsStudy}
    type="button"
    className="btn-primary"
  >
    {isStudy ? "Exit" : "Study"}
  </button>
);

export default FlashcardStudyButton;
