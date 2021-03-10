import React from "react";

const CardListItem = ({ title, subtitle }) => (
  <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
    <div className="flex-1 min-w-0">
      <button className="focus:outline-none">
        <span className="absolute inset-0" aria-hidden="true"></span>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 truncate">{subtitle}</p>
      </button>
    </div>
  </div>
);

export default CardListItem;
