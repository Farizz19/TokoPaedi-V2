import React from "react";

// CSS
// import "../css/Login/LoginBase.css";
// import "../css/Login/LoginVertical.css";
// import "../css/Login/LoginFeather.css";
// CSS

import Logo from "../../../public/assets/images/logo.svg";
import TokoPaedi from "../../../public/assets/images/tokopaedi.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light rounded text-left py-5 px-4 px-sm-5">
                  <div class="brand-logo">
                    <img src={TokoPaedi} alt="logo" />
                  </div>
                  <h4>Hello! Welcome To TokoPaedi V.2</h4>
                  <h6 class="font-weight-light">Register to continue.</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control rounded bg-dark form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control rounded bg-dark form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="mt-3">
                      <Link
                        to={"/Dashboard"}
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        href="../../index.html"
                      >
                        SIGN IN
                      </Link>
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" class="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div class="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="register.html" class="text-primary">
                        Create
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
