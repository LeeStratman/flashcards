import React from "react";
import { connect } from "react-redux";
import { removeActiveCollection } from "./collections/actions";

const HomeButton = ({ removeActiveCollection }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <button
      onClick={() => removeActiveCollection()}
      type="button"
      className="px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Back
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeActiveCollection: () => dispatch(removeActiveCollection()),
});

export default connect(null, mapDispatchToProps)(HomeButton);
