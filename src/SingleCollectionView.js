import React, { useState } from "react";
import Content from "./Content";
import CollectionHeader from "./Header";
import FlashcardList from "./flashcards/FlashcardList";
import StudyView from "./StudyView";
import Breadcrumbs from "./Breadcrumbs";
import FlashcardAddButton from "./flashcards/FlashcardAddButton";
import FlashcardStudyButton from "./flashcards/FlashcardStudyButton";

const SingleCollectionView = ({ collection }) => {
  const [isStudy, setIsStudy] = useState(false);

  const content = isStudy ? (
    <StudyView collection={collection} />
  ) : (
    <FlashcardList collection={collection} />
  );

  return (
    <div className="py-10 container">
      <Breadcrumbs isStudy={isStudy} setIsStudy={setIsStudy} />
      <CollectionHeader title={collection.name}>
        <FlashcardAddButton collection={collection} />
        <FlashcardStudyButton
          isStudy={isStudy}
          setIsStudy={() => setIsStudy(!isStudy)}
          disabled={collection.flashcards.length > 0 ? false : true}
        />
      </CollectionHeader>
      <Content>{content}</Content>
    </div>
  );
};

export default SingleCollectionView;
