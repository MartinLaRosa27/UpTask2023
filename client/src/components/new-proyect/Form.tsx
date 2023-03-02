import React from "react";

export const Form = () => {
  return (
    <div id="new-proyect-form" className="container">
      <h2 className="text-center mt-5">
        Register a <strong>New Proyect</strong>
      </h2>
      <form className="mt-5">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Proyect Name"
          />
          <label>Proyect Name</label>
        </div>
        <select
          className="form-select form-select-lg mb-3"
          aria-label="Default select example"
        >
          <option defaultValue="0">Proyect Category</option>
          <option value="1">Work</option>
          <option value="2">Study</option>
          <option value="3">Home</option>
          <option value="4">Others</option>
        </select>
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
