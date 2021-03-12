import React from "react";
import CollectionHeader from "./Header";
import Content from "./Content";
import CollectionList from "./collections/CollectionList";
import NewCollectionForm from "./collections/NewCollectionForm";

const CollectionsView = () => (
  <div className="py-10 container">
    <CollectionHeader title="Collections" />
    <Content>
      <CollectionList />
      <NewCollectionForm />
    </Content>
  </div>
);

export default CollectionsView;
