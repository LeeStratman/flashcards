import React from "react";
import Header from "./Header";
import Content from "./Content";
import CollectionList from "./collections/CollectionList";
import CollectionAddButton from "./collections/CollectionAddButton";

const CollectionsView = () => (
  <div className="py-10 container">
    <Header title="Collections">
      <CollectionAddButton />
    </Header>
    <Content>
      <CollectionList />
    </Content>
  </div>
);

export default CollectionsView;
