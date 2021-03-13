import React, { useState } from "react";
import Flashcard from "./Flashcard";

const FlashcardCarousel = ({ collection }) => {
  const [activeFlashcard, setActiveFlashcard] = useState(0);
  const { flashcards } = collection;

  const nextFlashcard = () => {
    if (activeFlashcard === flashcards.length - 1) {
      setActiveFlashcard(0);
    } else {
      setActiveFlashcard(activeFlashcard + 1);
    }
  };

  const prevFlashcard = () => {
    if (activeFlashcard === 0) {
      setActiveFlashcard(flashcards.length - 1);
    } else {
      setActiveFlashcard(activeFlashcard - 1);
    }
  };

  return (
    <>
      <p className="mt-1 mb-3 text-center text-gray-500 text-sm truncate">
        {activeFlashcard + 1} / {flashcards.length}
      </p>
      <Flashcard
        flashcard={flashcards[activeFlashcard]}
        next={() => nextFlashcard()}
        prev={() => prevFlashcard()}
      />
    </>
  );
};

export default FlashcardCarousel;
