import React from "react";
import Content from "./Content";
import CollectionHeader from "./CollectionHeader";

const CollectionView = ({ collection }) => (
  <div className="py-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
    <CollectionHeader title={collection.name} />
    <Content>
      <p>flashcards here</p>
    </Content>
  </div>
);

export default CollectionView;
