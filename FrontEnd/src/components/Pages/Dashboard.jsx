import { Link, Navigate } from "react-router-dom";
import Footer from "../Part/Footer";
import Navbar from "../Part/Navbar";
import Sidebar from "../Part/Sidebar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const [user, setUser] = useState({});
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.get("http://localhost:8000/api/user").then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    if (!token) {
      Navigate("/");
    }

    fetchData();
  }, []);

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
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">Selamat Datang, {user.name}</h3>
                      <h6 className="font-weight-normal mb-0">
                        Selamat Datang Di TokoPaedi{" "}
                        {/* <span class="text-primary">3 unread alerts!</span> */}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="card-title">Welcome To Dashboard</p>
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

export default Dashboard;
