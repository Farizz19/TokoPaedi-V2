import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Part/Footer";
import Navbar from "../../Part/Navbar";
import Sidebar from "../../Part/Sidebar";

function users() {
  return (
    <div>
      <div class="container-scroller">
        <Navbar />

        <div class="container-fluid page-body-wrapper">
          <div class="theme-setting-wrapper"></div>

          <Sidebar />

          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-md-12 grid-margin">
                  <div class="row">
                    <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 class="font-weight-bold">Selamat Datang Fariz</h3>
                      <h6 class="font-weight-normal mb-0">
                        Selamat Datang Di TokoPaedi{" "}
                        {/* <span class="text-primary">3 unread alerts!</span> */}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <p class="card-title">WELCOME TO Category</p>
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

export default users;
