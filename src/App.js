import React, { useEffect } from "react";
import CollectionsView from "./CollectionsView";
import SingleCollectionView from "./SingleCollectionView";
import HeaderBar from "./HeaderBar";
import { connect } from "react-redux";
import { loadCollections } from "./collections/thunks";

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
