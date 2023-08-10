import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../../Part/Footer";
import Navbar from "../../Part/Navbar";
import Sidebar from "../../Part/Sidebar";

// import User from "./UsersAPI";

function Users() {
  // const [ListUser, setDataUser] = useState([]);

  // useEffect(() => {
  //   User((data) => {
  //     setDataUser(data);
  //   });
  // });

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setUser(res.data);
        //  console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
                        <p className="card-title">Welcome To Users</p>
                      </div>
                      <div>
                        <span>
                          <Link to="/Add" className="btn btn-dark mb-3">
                            Add User
                          </Link>
                        </span>
                        <table className="table bg-primary text-light rounded shadow">       
                          <tr className="text-center">
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan="2">Action</th>
                          </tr>

                          {
                            user.length > 0 &&
                              // ?
                              user.map((data, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <tr key={index} className="text-center">
                                  <td>{index + 1}</td>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>
                                    <Link
                                      to="/edit"
                                      className="btn btn-success form-control"
                                    >
                                      Edit
                                    </Link>
                                  </td>
                                  <td>
                                    <button className="btn btn-danger form-control">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))
                            // : <tr>
                            //   <td colSpan="4">Data Kosong</td>
                            //   </tr>
                          }
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

export default Users;
