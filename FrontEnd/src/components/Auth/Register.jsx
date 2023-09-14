// CSS
// import "../css/Login/LoginBase.css";
// import "../css/Login/LoginVertical.css";
// import "../css/Login/LoginFeather.css";
// CSS

// import Logo from "../../../public/assets/images/logo.svg";
import TokoPaedi from "../../../public/assets/images/tokopaedi.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light rounded text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src={TokoPaedi} alt="logo" />
                  </div>
                  <h4>Hello! Welcome To TokoPaedi V.2</h4>
                  <h6 className="font-weight-light">Register to continue.</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control rounded bg-dark form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control rounded bg-dark form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <Link
                        to={"/Dashboard"}
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        href="../../index.html"
                      >
                        SIGN IN
                      </Link>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="register.html" className="text-primary">
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
