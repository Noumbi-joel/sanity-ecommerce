import Link from "next/link";
import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Cart } from "..";

const Navbar = () => {
  const dispatch = useDispatch();
  const { totalQuantities, showCart } = useSelector((state) => state.cart);
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">LJ Headphones</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => dispatch({ type: "showCart" })}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
