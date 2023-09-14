import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/dashboard"} class="nav-link">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="icon-head menu-icon"></i>
            <span className="menu-title">Account</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
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
              <li className="nav-item">
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

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i className="icon-grid-2 menu-icon"></i>
            <span className="menu-title">Products</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  to="/Product"
                  className="nav-link"
                  href="pages/tables/basic-table.html"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  to="/Category"
                  className="nav-link"
                  href="pages/tables/basic-table.html"
                >
                  Category
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
