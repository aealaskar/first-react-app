import React from "react";

export default function Product(props) {
  console.log(props.info);
  const info = props.info;
  return (
    <div className="product">
      <img src={info.image} className="product-image" />
      <h5>{info.name}</h5>
      <p>{info.price} KD</p>
    </div>
  );
}
