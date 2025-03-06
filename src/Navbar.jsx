import React from 'react';

const NavBar = ({ search, setSearch, handleSearch, cartCount }) => {
    return (
        <nav className='navBar'>
            <div className="nav-content">
                <div className="search-icon">
                    <input
                        type="text"
                        placeholder="Search products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="cart-icon">
                    <img
                        src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
                        alt="Cart Icon"
                        style={{ width: '24px', height: '24px' }}
                    />
                    <span>{cartCount}</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
