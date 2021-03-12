import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCollections } from "./collections/thunks";
import HeaderBar from "./HeaderBar";
import SingleCollectionView from "./SingleCollectionView";
import CollectionsView from "./CollectionsView";

function App({ activeCollection, startLoadingCollections }) {
  useEffect(() => {
    startLoadingCollections();
  }, [startLoadingCollections]);

  return (
    <>
      <HeaderBar title="Flashcards" />
      {activeCollection ? (
        <SingleCollectionView collection={activeCollection} />
      ) : (
        <CollectionsView />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  activeCollection: state.activeCollection,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingCollections: () => dispatch(loadCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
