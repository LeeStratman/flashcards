import React from "react";

const HeaderBar = ({ title }) => (
  <div className="bg-white shadow-sm">
    <div className="container">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBar;
