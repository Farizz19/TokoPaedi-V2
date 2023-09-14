import "./css/Style.css";

import Header from "./part/Header";
import Footer from "./part/Footer";

import Kaos from "./images/tshirt-img.png";
import Kemeja from "./images/dress-shirt-img.png";
import Gaun from "./images/women-clothes-img.png";

import Laptop from "./images/laptop-img.png";
import Handphone from "./images/mobile-img.png";
import Computer from "./images/computer-img.png";

import Anting from "./images/jhumka-img.png";
import Kalung from "./images/neklesh-img.png";
import Gelang from "./images/kangan-img.png";

function Products() {
  return (
    <div style={{ background:"#212529" }}>
      <Header />
      <div id="product" className="container">
        <h1 id="Fashion" className="text-center mt-5">Man & Woman Fashion</h1>
        <div className="daftar d-flex">
          <div className="row mx-auto">
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Man T-shirt</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Kaos}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Man Shirt</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Kemeja}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Woman Scart</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Gaun}
                  alt=""
                  className="m-3 mx-auto"
                  style={{ width: "185px", height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 id="Electronic" className="text-center mt-5">Electronic & Gadget</h1>
        <div className="daftar d-flex">
          <div className="row mx-auto">
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Laptop</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Laptop}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Mobile</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Handphone}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Computers</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Computer}
                  alt=""
                  className="m-3 mx-auto"
                  style={{ width: "185px", height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 id="Jewellery" className="text-center mt-5">Jewellery Accessories</h1>
        <div className="daftar d-flex">
          <div className="row mx-auto">
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Jumkas</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Anting}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Necklaces</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Kalung}
                  alt=""
                  className="m-3"
                  style={{ height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
            <div className="col p-3">
              <div
                className="card mt-5"
                style={{ width: "300px", height: "550px" }}
              >
                <center className="p-3">
                  <strong>Kangans</strong>
                  <p>
                    <strong className="text-warning me-2">Start Price </strong>
                    $ 30
                  </p>
                </center>
                <img
                  src={Gelang}
                  alt=""
                  className="m-3 mx-auto"
                  style={{ width: "185px", height: "100vh" }}
                />
                <a id="bn" href="#" className="m-3 nav-link text-warning">
                  <strong>Buy Now</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
