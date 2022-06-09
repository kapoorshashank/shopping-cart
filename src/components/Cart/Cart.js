import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DEL } from "../../redux/actions";

export default function Cart() {
  const [totalPrice, setItemPrice] = useState(0);
  const getCartData = useSelector((state) => state?.carts);
  const getCount = useSelector((state) => state?.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setItemPrice(
      getCartData.reduce((acc, c) => {
        return (acc += c.quantity * c.price);
      }, 0)
    );
  }, [getCartData]);


const deleteItem = (id) => {
    console.log("delete called", id);
    dispatch(DEL(id))
}
  const addItem = (e) => {
      console.log('add item', e)
      dispatch(ADD(e))
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <strong>Total Items: </strong> {getCount}
        {getCartData ? (
          getCartData.map((data) => (
            <div style={{ margin: "40px" }}>
              <div>Item Name: {data.title}</div>
              <div>Item Price: {data.price * data.quantity}</div>
              <div>
                <span onClick={() => addItem(data)}>+</span>
                {data.quantity}
                <span onClick={()=> deleteItem(data.id)}>-</span>
              </div>
              <button onClick={() => deleteItem(data)}>
                Remove the product
              </button>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
        <strong>Total Price: </strong> {totalPrice}
      </div>
    </>
  );
}
