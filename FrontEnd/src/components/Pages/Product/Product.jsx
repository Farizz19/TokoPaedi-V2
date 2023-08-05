import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Part/Footer";
import Navbar from "../../Part/Navbar";
import Sidebar from "../../Part/Sidebar";

function Product() {
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
                <div class="col grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <p class="card-title">WELCOME TO Product</p>
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

export default Product;
