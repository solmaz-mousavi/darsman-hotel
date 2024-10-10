import React from "react";
import { VscLoading } from "react-icons/vsc";

export default function CircleSpinner() {
  return (
    <div className="loader-container">
      <div className="loader">
        <VscLoading className="circle"/>
        <span>... Loading</span>
      </div>
    </div>
  );
}
