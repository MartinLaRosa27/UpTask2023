import React from "react";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

export const Participants = () => {
  const handleClickRemoveParticipant = () => {
    Swal.fire({
      title: "Are you sure you want to remove the participant of the project?",
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
    <div id="proyect-participants" className="mt-5">
      <div className="header mb-4">
        <h4>List of participants</h4>
        <button type="button" className="btn btn-warning">
          Add participants
        </button>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
          Administrador
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Kamala Khan
          <div className="options">
            <span
              className="badge bg-danger rounded-pill"
              onClick={() => handleClickRemoveParticipant()}
            >
              <AiFillDelete size={18} />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
