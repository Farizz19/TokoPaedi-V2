import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

import Swal from "sweetalert2";

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

        Swal.fire(
          "Success",
          "Login Success",
          "success",
        )
        Navigate("/Admin/Dashboard");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      });
  };

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                {validation.message && (
                  <div className="alert alert-danger">{validation.message}</div>
                )}

                <div
                  onSubmit={loginHandler}
                  className="auth-form-light rounded text-left py-5 px-4 px-sm-5"
                >
                  <div className="brand-logo">
                    <img src={TokoPaedi} alt="logo" />
                  </div>
                  <h4>Hello! Welcome To TokoPaedi V.2</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control rounded bg-light form-control-lg"
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
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control rounded bg-light form-control-lg"
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
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        Sign In
                      </button>
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
