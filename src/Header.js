import React from "react";

const Header = ({ title }) => (
  <div className="mt-2 md:flex md:items-center md:justify-between">
    <div className="flex-1 min-w-0">
      <h2>{title}</h2>
    </div>
  </div>
);

export default Header;
