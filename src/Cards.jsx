import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="Cardss">
        <div className="main-heading1">COLLECTIONS</div>
        <div className="main-para1">
          DISCOVER THE TAG HEUER COLLECTIONS & ALL OF OUR WATCHES
        </div>

        <div className="all-cards">
          <div className="card-1">
            <img
              className="card-1-img"
              src="https://th.bing.com/th/id/R.5cafe2ca2d14c61440764c2e5866d45e?rik=3Q3opnL0HV0mKQ&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="card-1-heading">Tag Heuer Formula</div>
            <div className="card-1-para">
              {" "}
              The 2021 edition launches at TAG Heuer today for £1,900.The
              motor-racing inspired collection for men who dare live life at
              full speed.
            </div>
            <div className="card-1-btn1">BUY NOW</div>
          </div>

          <div className="card-2">
            <img
              className="card-2-img"
              src="https://th.bing.com/th/id/R.20f53323e76ddbd1aaf6b753144ff6e5?rik=uCavajYI4CylrA&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="card-2-heading">Tag Heuer Smart Series</div>
            <div className="card-2-para">
              TAG Heuer has officially unveiled its connected watch, a $1,500
              Android Wear smartwatch made in partnership with Google and Intel.
            </div>
            <div className="card-2-btn2">BUY NOW</div>
          </div>

          <div className="card-3">
            <img
              className="card-3-img"
              src="https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2018/06/TAG-Heuer-Carrera-Calibre-16-Chronograph-Baselworld-2018-8.jpg"
              alt=""
            />
            <div className="card-3-heading">Tag Heuer Carrera Calibre</div>
            <div className="card-3-para">
              The Carrera is back on the race track in speedy colours and a
              brake on the price , the Carrera has been a cornerstone of the
              brand since 1963.
            </div>
            <div className="card-3-btn3">BUY NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
