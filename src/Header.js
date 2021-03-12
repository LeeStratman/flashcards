import React from "react";

const Header = ({ title }) => (
  <div className="mt-2 md:flex md:items-center md:justify-between">
    <div className="flex-1 min-w-0">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        {title}
      </h1>
    </div>
  </div>
);

export default Header;
