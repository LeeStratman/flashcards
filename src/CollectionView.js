import React from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";
import FlashcardList from "./flashcards/FlashcardList";

const CollectionView = ({ collection }) => (
  <div className="py-10">
    <CollectionHeader title="Flashcards" collection={collection} />
    <Content>
      <FlashcardList collection={collection} />
    </Content>
  </div>
);

export default CollectionView;
