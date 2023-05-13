import React from "react";
import { useLocation, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Layout({ children }) {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {!isLoginPage && (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Online Store Capstone
            </Typography>
            <Button component={Link} to="/dashboard" color="inherit">
              Dashboard
            </Button>
            <Button component={Link} to="/sales" color="inherit">
              Sales
            </Button>
            <Button component={Link} to="/cart" color="inherit">
              View Cart
            </Button>
            <Button component={Link} to="/" color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      )}

      <div>{children}</div>
    </div>
  );
}

export default Layout;