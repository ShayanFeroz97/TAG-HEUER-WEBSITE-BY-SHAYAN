import React from "react";
import "./Slider.css";
import Tagheuer1 from "./tagheuer1.jpeg";
import Tagheuer2 from "./tagheuer2.jpeg";
import Tagheuer3 from "./tagheuer3.jpeg";
import Tagheuer4 from "./tagheuer4.jpeg";

function Slider() {
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Tagheuer1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Tagheuer2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Tagheuer3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Tagheuer4} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Slider;
