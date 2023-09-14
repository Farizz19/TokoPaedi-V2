import "../css/Style.css";
import "../css/Carousel.css";

import Header from "../images/header.png";
import Cart from "../images/cart.png";

import Navbar from "./Navbar";

function Shop() {
  return (
    <div>
      <div>
        <div>
          <Navbar />

          <img id="headerimg" src={Header} className="" />
          <div className="centeredos">
            Riz <span className="text-light">Shop</span>
          </div>

          <div className="centeredcarousel">
            <div className="banner_section layout_padding">
              <div className="container">
                <div
                  id="my_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-sm-12">
                          <h2 className="banner_taital">Welcome To <br/> RizShop</h2>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-sm-12">
                          <h2 className="banner_taital">#1 <br/> E-COMMERCE in indonesia</h2>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-sm-12">
                          <h2 className="banner_taital">enjoy and <br/> Happy Shopping</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="centeredwelcome text-light">Welcome <span className="text-black">To</span></div> */}
          <div className="searchbar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark mx-2" type="submit">
                Search
              </button>

              {/* <div style={{ width: "100" }} className="bg-dark rounded">
                <img src={Cart} width={40} height={40} alt="" />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
