import React from "react";
import { Info } from "./icons";

const InfoMessage = ({ message }) => (
  <div class="rounded-md bg-blue-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <Info />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-sm text-blue-700">{message}</p>
      </div>
    </div>
  </div>
);

export default InfoMessage;
