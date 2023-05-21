import React, { useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        width: "20%",
      }}
    >
      <p style={{ alignSelf: "center" }}>Cart</p>
      <p style={{ alignSelf: "center" }}>Total: $ {total}</p>
      {cart.length > 0 ? (
        cart.map((prod) => {
          return (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid gray",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 200, objectFit: "contain" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>
            </div>
          );
        })
      ) : (
        <p>Cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
