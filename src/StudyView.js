import React from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";
import FlashcardCarousel from "./flashcards/FlashcardCarousel";

const StudyView = ({ collection }) => (
  <>
    <CollectionHeader title="Study" collection={collection} />
    <Content>
      <FlashcardCarousel collection={collection} />
    </Content>
  </>
);

export default StudyView;
