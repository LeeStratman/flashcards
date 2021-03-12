import React, { useState } from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";
import FlashcardList from "./flashcards/FlashcardList";
import StudyView from "./StudyView";

const CollectionView = ({ collection }) => {
  const [isStudy, setIsStudy] = useState(true);

  const content = isStudy ? (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StudyView collection={collection} />
    </div>
  ) : (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CollectionHeader title="Flashcards" collection={collection} />
      <Content>
        <FlashcardList collection={collection} />
      </Content>
    </div>
  );

  return content;
};

export default CollectionView;
