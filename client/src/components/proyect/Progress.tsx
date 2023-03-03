import React from "react";

export const Progress = () => {
  return (
    <div id="proyect-progress" className="mt-4 container">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: "25%" }}
        >
          25/100
        </div>
      </div>
    </div>
  );
};
