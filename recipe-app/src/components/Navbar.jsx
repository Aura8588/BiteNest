import React from "react";
import { Link } from "react-router-dom"; // ✅ Use Link for navigation
import "./Navbar.css";
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="BiteNest Logo" className="logo-img" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-btn">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
