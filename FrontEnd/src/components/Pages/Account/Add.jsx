import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

//import axios
import axios from 'axios';

import Footer from "../../Part/Footer";
import Navbar from "../../Part/Navbar";
import Sidebar from "../../Part/Sidebar";

// import User from "./UsersAPI";

function Add() {
  //define state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);

  //define history
  const navigate = useNavigate();

  //function "registerHanlder"
  const registerHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("password_confirmation", passwordConfirmation);

    //send data to server
    await axios
      .post("http://localhost:8000/api/add", formData)
      .then(() => {
        //redirect to logi page
        navigate.push("/users");
      })
      .catch((error) => {
        //assign error to state "validation"
        setValidation(error.response.data);
      });
    };
    
  return (
    <div>
      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <div className="theme-setting-wrapper"></div>

          <Sidebar />

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        {validation.message && (
                          <div className="alert alert-danger">
                            {validation.message}
                          </div>
                        )}
                        <p className="card-title">Welcome To Add Users</p>
                      </div>
                      <div onSubmit={registerHandler}>
                        <table className="table bg-primary text-light rounded shadow">
                          <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>
                              <input
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                type="text"
                                value={name}
                                placeholder="Enter Your Name"
                              />
                              {validation.name && (
                                <div className="alert alert-danger">
                                  {validation.name[0]}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                type="email"
                                value={email}
                                placeholder="Enter Your Email"
                              />
                              {validation.email && (
                                <div className="alert alert-danger">
                                  {validation.email[0]}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Password</td>
                            <td>:</td>
                            <td>
                              <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                type="password"
                                value={password}
                                placeholder="Enter Your Password"
                              />
                              {validation.password && (
                                <div className="alert alert-danger">
                                  {validation.password[0]}
                                </div>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <button type="submit" className="btn btn-success form-control text-light">
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <Link
                                to="/Users"
                                className="btn btn-danger form-control"
                              >
                                Back
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
