import React from "react";
import { Exclamation } from "./icons";

const WarningMessage = ({ message }) => (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <Exclamation />
      </div>
      <div className="ml-3">
        <p className="text-sm text-yellow-700">{message}</p>
      </div>
    </div>
  </div>
);

export default WarningMessage;
