import React from 'react';

const ProductDetails = ({ productDetails }) => {
  if (!productDetails) {
    return <div>No product details available.</div>;
  }

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <img src={productDetails.image} alt={productDetails.name} />
      <p>{productDetails.price}</p>
      <p>{productDetails.description}</p>
      {/* Display specifications, customer reviews, and related items */}
    </div>
  );
};

export default ProductDetails;
