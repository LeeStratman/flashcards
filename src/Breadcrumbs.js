import React from "react";
import { connect } from "react-redux";
import { removeActiveCollection } from "./collections/actions";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

const Breadcrumbs = ({
  activeCollection,
  isStudy = false,
  setIsStudy,
  removeActiveCollection,
}) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <button
              onClick={(e) => {
                removeActiveCollection();
                setIsStudy(false);
              }}
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Collections
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <BreadcrumbSeparator />
            <button
              onClick={() => setIsStudy(false)}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {activeCollection.name}
            </button>
          </div>
        </li>
        {isStudy && (
          <li>
            <div className="flex items-center">
              <BreadcrumbSeparator />
              <p className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                Study
              </p>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  activeCollection: state.activeCollection,
});

const mapDispatchToProps = (dispatch) => ({
  removeActiveCollection: () => dispatch(removeActiveCollection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
