import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => {
        return (
          <div
            key={prod.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 10,
              border: "solid 1px gray",
              width: "30%",
              marginTop: 10,
              gap: 10,
            }}
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{ height: 200, objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{prod.title}</span>
              <b>$ {prod.price}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
