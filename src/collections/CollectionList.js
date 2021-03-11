import React from "react";
import { connect } from "react-redux";
import CollectionListItem from "./CollectionListItem";
import { updateActiveCollection } from "./actions";

const CollectionList = ({
  collections,
  isLoading,
  startLoadingCollections,
  onViewClick,
}) => {
  const loadingMessage = <div>Loading collections...</div>;

  const content = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {collections.map((collection) => (
        <CollectionListItem
          key={collection._id}
          collection={collection}
          onButtonClick={() => onViewClick(collection)}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  collections: state.collections,
  isLoading: state.isLoading,
});

const mapDisptachToProps = (dispatch) => ({
  onViewClick: (collection) => dispatch(updateActiveCollection(collection)),
});

export default connect(mapStateToProps, mapDisptachToProps)(CollectionList);
