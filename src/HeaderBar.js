import React from "react";

const HeaderBar = ({ title }) => (
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBar;
