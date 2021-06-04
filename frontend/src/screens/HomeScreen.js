import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen (props) {
    return <ul className="products">
                  {
                    data.products.map(product => 
                      <li>
                      <div className="product">
                        <img className="product-image" src={product.image} alt="pro" />
                        <div className="product-name">
                          <Link to={'/product/' + product._id} >{product.name}</Link>
                        </div>
                        <div className="product-desc">{product.description}</div>
                        <div className="product-price">taka {product.price}</div>
                        <div className="product-rating">{product.rating} stars ({product.numReviews})</div>
                      </div>
                    </li> )
                  }
            </ul>
}

export default HomeScreen;