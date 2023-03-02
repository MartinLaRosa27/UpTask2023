import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleClickToHome = () => {
    router.push("/");
  };

  const handleClickToNewProyect = () => {
    router.push("/new-proyect");
  };

  return (
    <header id="header">
      <div className="container">
        <Image
          src={logo}
          alt="UpTask 2023"
          className="mt-3 mb-3 full-logo"
          onClick={() => handleClickToHome()}
          priority={true}
        />
        <Image
          src={icon}
          alt="UpTask 2023"
          className="mt-3 mb-3 icon-logo"
          onClick={() => handleClickToHome()}
          priority={true}
        />
        <button
          type="button"
          className="btn btn-warning mt-3 mb-3 text-uppercase"
          onClick={() => handleClickToNewProyect()}
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
