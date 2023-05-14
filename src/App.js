import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Fruits from "./Fruits";
import Veggies from "./Veggies";
import Meats from "./Meats";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Sales from "./Sales";
import "./css/index.css";
import Layout from "./Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchResult from "./SearchResult";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userCarts, setUserCarts] = useState({});
  const [salesData, setSalesData] = useState([]);
  const [allItems, setAllItems] = useState([]);

  // Check if there is a logged-in user in sessionStorage on initial load
  useEffect(() => {
    const storedUser = sessionStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  // Update sessionStorage when the logged-in user changes
  useEffect(() => {
    if (loggedInUser) {
      sessionStorage.setItem("loggedInUser", loggedInUser);
    } else {
      sessionStorage.removeItem("loggedInUser");
    }
  }, [loggedInUser]);

  // Fetch all items on initial load
  useEffect(() => {
    fetch("http://localhost:5092/products")
      .then((response) => response.json())
      .then((result) => {
        setAllItems(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleLogin = (username) => {
    setLoggedInUser(username);
    if (!userCarts[username]) {
      setUserCarts({ ...userCarts, [username]: [] });
    }
  };

  const addToCart = (item) => {
    if (loggedInUser) {
      const newUserCarts = {
        ...userCarts,
        [loggedInUser]: [...(userCarts[loggedInUser] || []), item],
      };
      setUserCarts(newUserCarts);
      toast.success(`${item.productName} added to cart.`, {
        position: "bottom-left", autoClose: 500
      });
    } else {
      alert("Please log in to add items to the cart.");
    }
  };

  const clearCart = () => {
    if (loggedInUser) {
      setUserCarts((prevUserCarts) => ({
        ...prevUserCarts,
        [loggedInUser]: [],
      }));
    }
  };

  const handlePlaceOrder = (sale) => {
    setSalesData([...salesData, sale]);
    setUserCarts({ ...userCarts, [loggedInUser]: [] });
  };

  return (
    <Router>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                loggedInUser={loggedInUser}
                addToCart={addToCart}
                allItems={allItems}
              />
            }
          />
          <Route
            path="/fruits"
            element={<Fruits addToCart={addToCart} />}
          />
          <Route
            path="/veggies"
            element={<Veggies addToCart={addToCart} />}
          />
          <Route path="/meats" element={<Meats addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={userCarts[loggedInUser] || []} clearCart={clearCart} />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={userCarts[loggedInUser] || []}
                onPlaceOrder={handlePlaceOrder}
              />
            }
          />
          <Route path="/sales" element={<Sales salesData={salesData} />} />
          <Route
            path="/searchResult"
            element={<SearchResult addToCart={addToCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;