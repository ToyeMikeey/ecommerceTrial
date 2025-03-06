import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Useapi from './Useapi'
import NavBar from './Navbar';

function App() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);
  
  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  }, [search, products]);


  const handleSearch = () => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  };
  

  const showItems = (category) => {
    setCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <NavBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        cartCount={cartItems.length}
      />
      <div className="categorybutton">
        <button onClick={() => showItems("")}>All</button>
        <button onClick={() => showItems("men's clothing")}>Men's Clothing</button>
        <button onClick={() => showItems("women's clothing")}>Women's Clothing</button>
        <button onClick={() => showItems("jewelery")}>Jewelery</button>
        <button onClick={() => showItems("electronics")}>Electronics</button>
      </div>
      <Useapi
        filteredProducts={filteredProducts}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
