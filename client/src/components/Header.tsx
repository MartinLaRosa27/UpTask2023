import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import { IoMdAddCircleOutline } from "react-icons/io";

export const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Image src={logo} alt="UpTask 2023" className="mt-3 mb-3 full-logo" />
        <Image src={icon} alt="UpTask 2023" className="mt-3 mb-3 icon-logo" />
        <button
          type="button"
          className="btn btn-warning mt-3 mb-3 text-uppercase"
        >
          <strong>Add new proyect</strong>
          <span>
            {""}
            <IoMdAddCircleOutline size={22} />
          </span>
        </button>
      </div>
    </header>
  );
};
