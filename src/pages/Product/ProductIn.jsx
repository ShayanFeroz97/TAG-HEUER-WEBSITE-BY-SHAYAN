import "./ProductIn.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import myData from "../../data.json";

function ProductIn() {

  const navigate = useNavigate();
  const location = useLocation();
  let id = location?.state?.data.id;

  let input = myData.find((o) => {
    return o.id === id;
  });

  console.log(input);

  if (input) {
    return (
      <div className="ProductIn_Main">
        <div className="product_category">{input.category}</div>
        <div className="ProductIn_Main_All_Data">
          <div className="ProductIn_Main_Img">
            <div className="product_img">
              <img src={input.image} alt="" />
            </div>
          </div>
          <div className="ProductIn_Main_Data">
            <div className="product_title">{input.title.slice(0, 40)}</div>

            <div className="product_price">
              <div className="product_price_heading">Price:</div>
              <div className="product_price_digit">${input.price}</div>
            </div>

            <div className="product_description">
              <div className="product_description_heading">Description:</div>
              <div className="product_description_para">
                {input.description.slice(0, 250)}
              </div>
            </div>

            <div className="product_rating">
              <div className="product_rating_heading">Rating:</div>
              <div className="product_rating_rate">{input.rating.rate}</div>
            </div>

            <div className="product_buttons">
              <div
                className="product_buynow"
                onClick={() => {
                  navigate("/Cart", {
                    state: {
                      data: input,
                    },
                  });
                }}
              >
                Buy Now
              </div>

              <div
                className="product_addtocart"
                onClick={() => {
                  navigate("/Cart", {
                    state: {
                      data: input,
                    },
                  });
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="ProductIn_Main">Invalid URL</div>;
  }
}

export default ProductIn;
