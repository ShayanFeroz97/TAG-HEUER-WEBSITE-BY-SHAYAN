import React from "react";
import "./Contact.css";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { TbBuildingStore } from "react-icons/tb";

function contact() {
  return (
    <div>
      <div className="Contact-banner">
        <div className="contact-background">
          <img
            src="https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dwf0dbb53d/images/ContactUs/top-banner.jpg"
            alt=""
          />
          <div className="contact-container">
            <div className="contact-title">TAG HEUER</div>
            <div className="contact-main-heading">CONTACT US</div>
            <div className="contact-para-1">
              Do you have a question about TAG Heuer products or services?
            </div>
            <div className="contact-para-2">We are here for you.</div>
            <div className="contact-button">READ OUR FAQ</div>
          </div>
        </div>
      </div>

      <div className="Contact-cards">
        <div className="contact-cards-heading">
          HOW WOULD YOU PREFER TO CONTACT US?
        </div>
        <div className="contact-card-all">

          <div className="contactcard-1">
            <div className="card1-content">
              <div className="card1-icon">
                <BiPhone />
              </div>
              <div className="card1-heading">BY PHONE</div>
              <div className="card1-para">
                Our advisors are available to listen to you.
              </div>
              <div className="card1-btn"> CALL US</div>
            </div>

          </div>
          <div className="contactcard-1">
            <div className="card1-content">
              <div className="card1-icon">
                <HiOutlineMail />
              </div>
              <div className="card1-heading">BY E-MAIL</div>
              <div className="card1-para">
                We will get back to you as soon as possible.
              </div>
              <div className="card1-btn"> SEND EMAIL</div>
            </div>
          </div>

          <div className="contactcard-1">
            <div className="card1-content">
              <div className="card1-icon">
                <TbBuildingStore />
              </div>
              <div className="card1-heading">IN STORE</div>
              <div className="card1-para">Find a TAG Heuer shop near you.</div>
              <div className="card1-btn">VISIT US</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default contact;
