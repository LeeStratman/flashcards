import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardListItem from "./CardListItem";
import { displayAlert } from "./collections/thunks";
import { loadCollections } from "./collections/thunks";

const CardList = ({ cards = [], isLoading, startLoadingCollections }) => {
  useEffect(() => {
    startLoadingCollections();
  }, [startLoadingCollections]);
  const loadingMessage = <div>Loading collections...</div>;
  const content = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <CardListItem key={card._id} title={card.name} subtitle={card.name} />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  cards: state.collections,
  isLoading: state.isLoading,
});

const mapDisptachToProps = (dispatch) => ({
  startLoadingCollections: () => dispatch(loadCollections()),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDisptachToProps)(CardList);
