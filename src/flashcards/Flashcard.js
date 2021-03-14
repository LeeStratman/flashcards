import React, { useState } from "react";
import FlashcardNavigation from "./FlashcardNavigation";

const Flashcard = ({ flashcard, next, prev }) => {
  const [showQuestion, setShowQuestion] = useState(true);
  const buttonText = showQuestion ? "SHOW ANSWER" : "SHOW QUESTION";

  const rotateClass = showQuestion ? "" : "rotate";

  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner max-w-xl m-auto h-80 ${rotateClass}`}>
          <div className="flip-card-front">
            <h3 className="flip-card-text">{flashcard.question}</h3>
          </div>
          <div className="flip-card-back">
            <h3 className="flip-card-text">{flashcard.answer}</h3>
          </div>
        </div>
      </div>
      <FlashcardNavigation
        buttonText={buttonText}
        prev={prev}
        next={next}
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
      />
    </>
  );
};

export default Flashcard;
