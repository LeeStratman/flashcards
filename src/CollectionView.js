import React from "react";
import Header from "./Header";
import Content from "./Content";
import HomeButton from "./HomeButton";

const CollectionView = ({ collection }) => (
  <div className="py-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
    <HomeButton />
    <Header title={collection.name} />
    <Content>
      <p>flashcards here</p>
    </Content>
  </div>
);

export default CollectionView;
