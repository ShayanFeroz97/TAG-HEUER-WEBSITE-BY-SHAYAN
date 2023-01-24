import React from "react";
import "./Footer.css";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import messenger from "./assets/messenger.png";
import twitter from "./assets/twitter.png";
import whatsapp from "./assets/whatsapp.png";
import youtube from "./assets/youtube.png";

function Footer() {
  return (
    <div>
      <div className="footerrr">
        <div className="logo">
          <img
            src="https://www.tagheuer.com/on/demandware.static/Sites-TAG_INT-Site/-/default/dw89017176/images/logo-footer.svg"
            alt=""
          />
        </div>


        <div className="footer1">

        <div className="Divider"></div>

          <div className="socials">
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={linkedin} alt="" />
            </div>
            <div>
              <img src={messenger} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={whatsapp} alt="" />
            </div>
            <div>
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>

        <div className="Divider"></div>

        <div className="footer-links">

          <div className="COLLECTIONS">
            <h6>COLLECTIONS</h6>
            <div>TAG Heuer Connected</div>
            <div>TAG Heuer Carrera</div>
            <div>TAG Heuer Aquaracer</div>
            <div>TAG Heuer Monaco</div>
            <div>TAG Heuer Formula</div>
            <div>TAG Heuer Autavia</div>
          </div>

          <div className="SERVICES">
            <h6>SERVICES</h6>
            <div>Care recommendations</div>
            <div>Home</div>
            <div>Warranty</div>
            <div>Services & prices</div>
            <div>Repair my watch</div>
            <div>Contact us</div>
          </div>

          <div className="CONTACT">
            <h6>CONTACT</h6>
            <div>By Email</div>
            <div>In Stores</div>
            <div>Buying on TAGHeuer.com</div>
            <div>+41 855 665 852</div>
            <div>By Phone</div>
            <div>Service Centers</div>
          </div>

          <div className="SUPPORT">
            <h6>SUPPORT</h6>
            <div>Contact Us</div>
            <div>Warranty</div>
            <div>FAQ</div>
            <div>Shipping</div>
            <div>Track your Order</div>
            <div>Returns</div>
          </div>

          <div className="PRIVACY & TERMS">
            <h6>PRIVACY & TERMS</h6>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Cookies Settings</div>
            <div>Terms of Use</div>
            <div>Legal Notice</div>
            <div>Human Rights Policy</div>
          </div>
        </div>


        <div className="copyright-text">
          © 2022 Copyright at Shayan's Swiss Watches, All Right Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
