import { useState, useEffect } from "react";
import './App.css';

const Useapi = ({ filteredProducts, addToCart }) => {
    return (
        <div>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div id="cardstyle" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div id="viewmore">
                            <h3>{product.title}</h3>
                            <a href="#">view more</a>
                        </div>
                        <h2>${product.price}</h2>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Useapi;
