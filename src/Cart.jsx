import React from "react";
import "./Cart.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart({ myData }) {

  const navigate = useNavigate();
  const location = useLocation();
  let input = location?.state?.data;

  console.log(myData);

  console.log(input);

  if (input) {
    return (
      <>
        <div className="Cart_main">
          <div className="cart_box">
            <div className="cart_headings">
              <div className="cart_heading_product">PRODUCT</div>
              <div className="cart_heading_name">NAME</div>
              <div className="cart_heading_price">PRICE</div>
              <div className="cart_heading_quantity">QUANTITY</div>
              <div className="cart_heading_total">TOTAL</div>
              <div className="cart_heading_delete">
                {" "}
                <HiOutlineTrash />{" "}
              </div>
            </div>

            <div className="cart_gap"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
            <div className="cart_all_data">
              <div className="cart_main_img">
                <div className="cart_img">
                  <img src={input.image} alt="" />
                </div>
              </div>

              <div className="cart_title">{input.title.slice(0, 20)}</div>

              <div className="cart_price">${input.price}</div>

              <div className="cart_quantity">- 1 +</div>

              <div className="cart_total">1</div>

              <div className="cart_delete">
                <HiOutlineTrash />
              </div>
            </div>

            <div className="divider"></div>
          </div>
        </div>
      </>
    );
  } else {
    return <div className="Cart_Main">Invalid URL</div>;
  }
}

export default Cart;
