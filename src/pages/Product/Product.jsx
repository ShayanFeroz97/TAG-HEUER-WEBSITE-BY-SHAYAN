import React from "react";
import { CircularProgress } from "@mui/material";
import "./Product.css";
import { useLocation, useNavigate } from "react-router-dom";
import myData from "../../data.json"

function Product() {
  const navigate = useNavigate();
  return (
    <div className="Products">
      {myData !== null ? (
        myData.map((curValue, index) => {
          return (
            <div
              className="product_cards"
              key={index}
              onClick={() => {
                navigate("/ProductIn", {
                  state: {
                    data: curValue,
                  },
                });
              }}
            >
              <img
                className="product_cards_img"
                src={curValue.image}
                alt={curValue.title}
              />
              <div className="product_cards_title">
                {curValue.title.length > 30
                  ? curValue.title.slice(0, 29) + "..."
                  : curValue.title}
              </div>
              <div className="product_cards_price">${curValue.price}</div>
            </div>
          );
        })
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default Product;
