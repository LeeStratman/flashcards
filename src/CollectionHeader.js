import React from "react";

const CollectionHeader = ({ children, title }) => {
  return (
    <>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2>{title}</h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default CollectionHeader;
