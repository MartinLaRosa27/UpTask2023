import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <div>
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
        </div>
        <div className="settings">
          <button
            type="button"
            className="btn btn-warning mt-3 mb-3 text-uppercase"
            onClick={() => handleClickToNewProyect()}
          >
            <strong>Add new project</strong>
            <span>
              <IoMdAddCircleOutline size={22} />
            </span>
          </button>
          <NavDropdown
            title={
              <img
                src="https://wrestlingnews.co/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkzMDQ4OTQwMTg1MTM0ODAw/roxanne-perez.png"
                alt="Profile img"
                className="user-icon"
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </header>
  );
};
