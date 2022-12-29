import Link from "next/link";
import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { toast } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../../lib/client";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, showCart, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => dispatch({ type: "showCart" })}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => dispatch({ type: "showCart" })}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((cartItem, i) => (
              <div className="product" key={cartItem._id}>
                <img
                  src={urlFor(cartItem?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{cartItem.name}</h5>
                    <h4>${cartItem.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            dispatch({
                              type: "toggleCartItemQty",
                              payload: { itemId: cartItem._id, value: "dec" },
                            })
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{cartItem.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            dispatch({
                              type: "toggleCartItemQty",
                              payload: { itemId: cartItem._id, value: "inc" },
                            })
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() =>
                        dispatch({
                          type: "removeCartItem",
                          payload: { itemId: cartItem._id },
                        })
                      }
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay With Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
