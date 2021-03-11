import React from "react";
import Header from "./Header";
import Content from "./Content";
import CollectionList from "./collections/CollectionList";
import NewCollectionForm from "./collections/NewCollectionForm";

const CollectionsView = () => (
  <div className="py-10">
    <Header title="Collections" />
    <Content>
      <CollectionList />
      <NewCollectionForm />
    </Content>
  </div>
);

export default CollectionsView;
