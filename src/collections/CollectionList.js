import React from "react";
import { connect } from "react-redux";
import CollectionListItem from "./CollectionListItem";
import { updateActiveCollection } from "./actions";

const CollectionList = ({
  collections,
  isLoading,
  startLoadingCollections,
  onButtonClick,
}) => {
  const loadingMessage = <div>Loading collections...</div>;

  const content = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {collections.map((card) => (
        <CollectionListItem
          key={card._id}
          title={card.name}
          subtitle={card.name}
          onButtonClick={() => onButtonClick(card)}
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
  onButtonClick: (collection) => dispatch(updateActiveCollection(collection)),
});

export default connect(mapStateToProps, mapDisptachToProps)(CollectionList);
