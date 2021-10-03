import React from "react";
import Product from "./Product";
import productsData from "./ProductList";

export default function Home() {
  let productArray = productsData.map((element) => <Product info={element} />);

  return (
    <div>
      <div className="home">
        <h2>Ahmad's Electronic Store</h2>
      </div>
      <div className="product-list">{productArray}</div>
    </div>
  );
}
