import React, { useEffect } from "react";
import CollectionsView from "./CollectionsView";
import CollectionView from "./CollectionView";
import HeaderBar from "./HeaderBar";
import { connect } from "react-redux";
import { loadCollections } from "./collections/thunks";

function App({ activeCollection, startLoadingCollections }) {
  useEffect(() => {
    startLoadingCollections();
  }, [startLoadingCollections]);
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBar title="Flashcards" />
      {activeCollection ? (
        <CollectionView collection={activeCollection} />
      ) : (
        <CollectionsView />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeCollection: state.activeCollection,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingCollections: () => dispatch(loadCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
