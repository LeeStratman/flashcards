import React from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";
import FlashcardList from "./flashcards/FlashcardList";

const CollectionView = ({ collection }) => (
  <div className="py-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
    <CollectionHeader title="Flashcards" collection={collection} />
    <Content>
      <FlashcardList collection={collection} />
    </Content>
  </div>
);

export default CollectionView;
