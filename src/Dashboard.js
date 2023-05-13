import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Dashboard.css";
import { FaApple, FaCarrot, FaDrumstickBite } from "react-icons/fa";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Dashboard({ loggedInUser, addToCart, allItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const result = allItems.find(
      (item) => item.productName.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(result);
    navigate("/searchResult", { state: { searchResult: result } });
  };


  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="search-container">
        <Autocomplete
          freeSolo
          options={allItems.map((item) => item.productName)}
          value={searchTerm}
          onChange={(event, value) => setSearchTerm(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search..."
              variant="outlined"
              className="search-bar"
              inputProps={{
                ...params.inputProps,
                style: { width: "200px" },
              }}
            />
          )}
        />
        <button onClick={handleSearch} disabled={!searchTerm}>
          Search
        </button>
      </div>
      {!searchResult && (
        <div>
          <h2 className="category-heading">Categories</h2>
          <div className="category-buttons">
            <Link to="/fruits">
              <button>
                <FaApple />
                Fruits
              </button>
            </Link>
            <Link to="/veggies">
              <button>
                <FaCarrot />
                Vegetables
              </button>
            </Link>
            <Link to="/meats">
              <button>
                <FaDrumstickBite />
                Meats
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

