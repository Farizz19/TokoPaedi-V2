import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//import axios
import axios from "axios";

import Swal from "sweetalert2";

import Footer from "../../Part/Footer";
import Navbar from "../../Part/Navbar";
import Sidebar from "../../Part/Sidebar";

// import User from "./UsersAPI";

function Add() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const addHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/add", form)
      .then(() => {
        Swal.fire("Success", "Data Has Been Added", "success");
        navigate("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const Sweet = () => {
  //   Swal.fire(
  //     'the internet?',
  //     'that test',
  //     'test'
  //   )
  // }

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
                        {/* {validation.message && (
                          <div className="alert alert-danger">
                            {validation.message}
                          </div>
                        )} */}
                        <p className="card-title">Welcome To Add Users</p>
                      </div>
                      <div>
                        <form onSubmit={addHandler}>
                          <table className="table bg-primary text-light rounded shadow">
                            <tr>
                              <td>Name</td>
                              <td>:</td>
                              <td>
                                <input
                                  value={form.name}
                                  onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                  }
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter Your Name"
                                />
                                {/* {validation.name && (
                                  <div className="alert alert-danger">
                                    {validation.name[0]}
                                  </div>
                                )} */}
                              </td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>:</td>
                              <td>
                                <input
                                  value={form.email}
                                  onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                  }
                                  className="form-control"
                                  type="email"
                                  placeholder="Enter Your Email"
                                />
                                {/* {validation.email && (
                                  <div className="alert alert-danger">
                                    {validation.email[0]}
                                  </div>
                                )} */}
                              </td>
                            </tr>
                            <tr>
                              <td>Password</td>
                              <td>:</td>
                              <td>
                                <input
                                  value={form.password}
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      password: e.target.value,
                                    })
                                  }
                                  className="form-control"
                                  type="password"
                                  placeholder="Enter Your Password"
                                />
                                {/* {validation.password && (
                                  <div className="alert alert-danger">
                                    {validation.password[0]}
                                  </div>
                                )} */}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="3">
                                <button
                                  type="submit"
                                  // onClick={Sweet}
                                  className="btn btn-success form-control text-light"
                                >
                                  SAVE
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="3">
                                <Link
                                  to="/Users"
                                  className="btn btn-danger form-control"
                                >
                                  BACK
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </form>
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
