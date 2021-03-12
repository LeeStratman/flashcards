import React from "react";
import Header from "./Header";
import Content from "./Content";
import CollectionList from "./collections/CollectionList";
import NewCollectionForm from "./collections/NewCollectionForm";

const CollectionsView = () => (
  <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Header title="Collections" />
    <Content>
      <CollectionList />
      <NewCollectionForm />
    </Content>
  </div>
);

export default CollectionsView;
