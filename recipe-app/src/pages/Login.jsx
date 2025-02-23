import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Login.css";

const loginImage = "/login-pic.jpg"; // Ensure this image is in the public folder

const Login = () => {
  return (
    <div className="auth-container">
      <div className="login-box">
        {/* Left Side - Image Section */}
        <div className="login-image">
          <img src={loginImage} alt="Delicious food" />
        </div>

        {/* Right Side - Form Section */}
        <div className="login-form">
          <h2>Welcome Back!</h2>

          <form>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Email" required />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Password" required />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <Link to="/terms">terms & policy</Link>
              </label>
            </div>

            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>

          <p className="or-text">Or sign in with</p>
          <div className="social-login">
            <button className="google-btn">
              <FaGoogle /> Sign in with Google
            </button>
            <button className="facebook-btn">
              <FaFacebook /> Sign in with Facebook
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
