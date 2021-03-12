import React, { useState } from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";
import FlashcardList from "./flashcards/FlashcardList";
import StudyView from "./StudyView";

const SingleCollectionView = ({ collection }) => {
  const [isStudy, setIsStudy] = useState(true);

  const content = isStudy ? (
    <StudyView collection={collection} />
  ) : (
    <>
      <CollectionHeader title="Flashcards" collection={collection} />
      <Content>
        <FlashcardList collection={collection} />
      </Content>
    </>
  );

  return <div className="py-10 container">{content}</div>;
};

export default SingleCollectionView;
