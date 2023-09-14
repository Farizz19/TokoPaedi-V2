import React from "react";
import "../css/footer.css";

import Logo from "../images/footer-logo.png";

function Footer() {
  return (
    <div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
              <img src={Logo} />        
          </div>
          <div className="input_bt">
            <input
              type="text"
              className="mail_bt"
              placeholder="Your Email"
              name="Your Email"
            />
            <span className="subscribe_bt" id="basic-addon2">
              <a href="#">Subscribe</a>
            </span>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <a href="#">Men & Women Fashion</a>
              </li>
              <li>
                <a href="#">Electronic & Gadget</a>
              </li>
              <li>
                <a href="#">Jewellery Accessories</a>
              </li>
            </ul>
          </div>
          <div className="location_main">
            Contact : <a href="#">+62 882-1292-5193</a>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            © 2023 All Rights Reserved. Design by{" Muhammad Fariz Al-Haq "} |
            <a href="https://html.design"> EFLYER</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
