import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  // initial state..
  console.log(state);

  const fetchProduct = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data.products);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
