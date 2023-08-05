import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";

import Logo from "../../../public/assets/images/logo.svg";
import TokoPaedi from "../../../public/assets/images/tokopaedi.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const Navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("email", email);
    formData.append("password", password);

    //send data to server
    await axios
      .post("http://localhost:8000/api/login", formData)
      .then((response) => {
        //set token on localStorage
        localStorage.setItem("token", response.data.token);

        //redirect to dashboard
        Navigate("/Dashboard");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      });
  };

  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                {validation.message && (
                  <div className="alert alert-danger">{validation.message}</div>
                )}

                <div
                  onSubmit={loginHandler}
                  class="auth-form-light rounded text-left py-5 px-4 px-sm-5"
                >
                  <div class="brand-logo">
                    <img src={TokoPaedi} alt="logo" />
                  </div>
                  <h4>Hello! Welcome To TokoPaedi V.2</h4>
                  <h6 class="font-weight-light">Sign in to continue.</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control rounded bg-light form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                    </div>
                    {validation.email && (
                      <div className="alert alert-danger">
                        {validation.email[0]}
                      </div>
                    )}
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control rounded bg-light form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    {validation.password && (
                      <div className="alert alert-danger">
                        {validation.password[0]}
                      </div>
                    )}
                    <div class="mt-3">
                      <button
                        type="submit"
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        Sign In
                      </button>
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

export default Login;
