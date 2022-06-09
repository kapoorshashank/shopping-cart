import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'
import './Header.css'
export default function Header() {
  const getCartItems = useSelector(state => state?.carts)
  const totalCount = useSelector(state => state?.count)
  console.log(totalCount, totalCount)
  return (
    <>
      <div className="container">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/cart"> Cart Items {totalCount}</NavLink>
      </div>
    </>
  );
}
