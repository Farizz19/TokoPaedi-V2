import { Link } from "react-router-dom";
import "../css/Style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark shadow fixed-top bg-transparent">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" id="navbarnav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Fashion"
              >
                Man & Women Fashion
              </a>
              <label className="text-light mt-2">|</label>
              <a className="nav-link" href="#Electronic">
                Electronics
              </a>
              <label className="text-light mt-2">|</label>
              <a className="nav-link" href="#Jewellery">
                Jewellery Accessories
              </a>
            </div>
          </div>

          <div className="text-light">
            <Link className="btn btn-dark rounded" to="/User/Register">Sign Up</Link>
          </div>
          <div className="text-light mx-3">
            <Link className="btn btn-dark rounded" to="/User/Login">Sign In</Link>
          </div>
          {/* <div className="text-light">
            <Link to="/">Home</Link>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
