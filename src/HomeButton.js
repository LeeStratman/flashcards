import React from "react";
import { connect } from "react-redux";
import { removeActiveCollection } from "./collections/actions";

const HomeButton = ({ removeActiveCollection }) => (
  <div className="max-w-7xl mb-4 mx-auto px-4 sm:px-6 lg:px-8">
    <button
      onClick={() => removeActiveCollection()}
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg
        class="h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <span className="sr-only">Back</span>
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeActiveCollection: () => dispatch(removeActiveCollection()),
});

export default connect(null, mapDispatchToProps)(HomeButton);
