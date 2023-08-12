import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

function Navbar() {
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHanlder = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://localhost:8000/api/logout").then(() => {
      localStorage.removeItem("token");
      Swal.fire(
        "Goodbye",
        "Log Out Success",
        "success",
      )
      Navigate("/");
    });
  };

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href="index.html">
          <img
            src="./public/assets/images/tokopaedi.png"
            className="mr-2"
            alt="logo"
          />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="./public/assets/images/tokopaedi.png" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div
                className="input-group-prepend hover-cursor"
                id="navbar-search-icon"
              >
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <img
                src="./public/assets/images/faces/face28.jpg"
                width={43}
                alt="profile"
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <p className="mb-0 font-weight-normal float-left dropdown-header">
                Notifications
              </p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">
                    Application Error
                  </h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <img
                      src="./public/assets/images/faces/face28.jpg"
                      alt="profile"
                    />
                    <i className="ti-user mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <a>
                    <span onClick={logoutHanlder}>Log Out</span>
                  </a>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
