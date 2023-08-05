import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <Link to={"/dashboard"} class="nav-link">
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </Link>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i class="icon-head menu-icon"></i>
            <span class="menu-title">Account</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                {" "}
                <Link
                  to="/Users"
                  class="nav-link"
                  href="pages/samples/login.html"
                >
                  {" "}
                  Users{" "}
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link
                  to={"/"}
                  class="nav-link"
                  href="pages/samples/register.html"
                >
                  {" "}
                  Register{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="collapse"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i class="icon-grid-2 menu-icon"></i>
            <span class="menu-title">Products</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="tables">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                {" "}
                <Link
                  to="/Product"
                  class="nav-link"
                  href="pages/tables/basic-table.html"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <Link
                  to="/Category"
                  class="nav-link"
                  href="pages/tables/basic-table.html"
                >
                  Category
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
