import React from "react";
import "./Featured.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Featured() {
  const [myData, setMyData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res);
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <div>
    <div className="featured_heading">FEATURED</div>
    <div className="featured_para">DISCOVER THE STORE COLLECTIONS & ALL OF OUR VARIETY</div>
      <div className="Featureds">
      {myData !== null ? (
          myData.slice(0,5).map((curValue, index) => {
              return (
                  <div
              className="featured_cards"
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
                className="featured_cards_img"
                src={curValue.image}
                alt={curValue.title}
              />
              <div className="featured_cards_title">
                {curValue.title.length > 30
                  ? curValue.title.slice(0, 29) + "..."
                  : curValue.title}
              </div>
              <div className="featured_cards_price">${curValue.price}</div>
            </div>
          );
        })
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
    </div>
  );
}
