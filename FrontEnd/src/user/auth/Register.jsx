import "../css/Auth.css";

import { Link } from "react-router-dom";

import Logo from "../images/Header.png";

import Footer from "../part/Footer";
// import Navbar from "../part/Navbar";

function Register() {
  return (
    <>
      {/* <Navbar /> */}
      <section style={{ background: "#212529" }} className="vh-100 text-light">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div id="desc">
                <span>
                  Welcome to RizShop
                  <br />
                  <span>Number #1 E-Commerce In Indonesia</span>
                </span>

                <img src={Logo} className="img-fluid mt-3" alt="Phone image" />
                <hr id="line" />

                <div className="">
                  <div className="banner_section layout_padding">
                    <div className="container">
                      <div
                        id="my_slider"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="row">
                              <div className="col-sm-12">
                                <h2 className="banner_taital">
                                  Welcome To RizShop
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="col-sm-12">
                                <h2 className="banner_taital">#1 E-COMMERCE</h2>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="row">
                              <div className="col-sm-12">
                                <h2 className="banner_taital">
                                  Happy Shopping
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <p>
                    Have An Account?{" "}
                    <Link to="/User/Login">
                      <u>Sign In</u>
                    </Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark shadow btn-lg btn-block"
                >
                  Sign Up
                </button>
                <Link
                  className="btn btn-danger mt-4 shadow btn-lg btn-block"
                  to="/"
                >
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Register;
