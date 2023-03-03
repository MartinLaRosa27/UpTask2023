import React from "react";
import Swal from "sweetalert2";
import { AiFillDelete, AiOutlineSmile } from "react-icons/ai";
import { BiSad } from "react-icons/bi";

export const Tasks = () => {
  const handleClickDeleteTask = () => {
    Swal.fire({
      title: "Are you sure you want to delete the task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        alert("Delte confirmation");
      }
    });
  };

  return (
    <div id="proyect-tasks" className="mt-5">
      <div className="header mb-4">
        <h4>List of tasks</h4>
        <button type="button" className="btn btn-warning">
          Add Task
        </button>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          A list item
          <div className="options">
            <span className="badge bg-success rounded-pill">
              <AiOutlineSmile size={18} />
            </span>
            <span
              className="badge bg-danger rounded-pill"
              onClick={() => handleClickDeleteTask()}
            >
              <AiFillDelete size={18} />
            </span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          A list item
          <div className="options">
            <span className="badge bg-warning rounded-pill">
              <BiSad size={18} />
            </span>
            <span
              className="badge bg-danger rounded-pill"
              onClick={() => handleClickDeleteTask()}
            >
              <AiFillDelete size={18} />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
