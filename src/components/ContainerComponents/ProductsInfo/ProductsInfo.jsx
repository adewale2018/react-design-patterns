import React from 'react';

const ProductInfo = ({ product: { name, price, description, rating } }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Price: ${price} years</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <hr />
    </>
  );
};

export default ProductInfo;
