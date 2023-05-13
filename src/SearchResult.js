import React from "react";
import { useLocation } from "react-router-dom";
import "./css/SearchResult.css";

function SearchResult({ addToCart }) {
  const location = useLocation();
  const searchResult = location.state?.searchResult;

  const handleAddToCartClick = () => {
    if (searchResult) {
      addToCart(searchResult);
    }
  };

  return (
    <div className="search-result-container">
      <h1>Search Results</h1>
      {searchResult ? (
        <div className="product-details">
          <p className="product-name">Product Name: {searchResult.productName}</p>
          <p className="product-price">Price: ${searchResult.price.toFixed(2)}</p>
          <button className="add-to-cart-button" onClick={handleAddToCartClick}>
            Add to Cart
          </button>
        </div>
      ) : (
        <p className="no-results-message">No search results found.</p>
      )}
    </div>
  );
}

export default SearchResult;
