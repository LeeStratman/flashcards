import React from "react";

const FlashcardStudyButton = ({ isStudy, setIsStudy }) => (
  <button onClick={setIsStudy} type="button" className="btn-primary">
    {isStudy ? "Exit" : "Study"}
  </button>
);

export default FlashcardStudyButton;
