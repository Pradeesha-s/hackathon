import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductCatalogue.css';  // Import your custom CSS file

const ProductCatalogue = ({ products }) => {
    const handleClick = (id)=>{
        products[id].qty +=1;
    }
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img className="product-image" src={product.image} alt={product.name} />

              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary" onClick={() => handleClick(product.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}


export default ProductCatalogue;
