import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Signup.css";

const signupImage = "/sign-pic.jpg"; // Ensure this image is in the public folder

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="signup-box">
        {/* Left Side - Image Section */}
        <div className="signup-image">
          <img src={signupImage} alt="Cooking together" />
        </div>

        {/* Right Side - Form Section */}
        <div className="signup-form">
          <h2>Create an Account</h2>

          <form>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Full Name" required />
            </div>

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

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="or-text">Or sign up with</p>
          <div className="social-signup">
            <button className="google-btn">
              <FaGoogle /> Sign up with Google
            </button>
            <button className="facebook-btn">
              <FaFacebook /> Sign up with Facebook
            </button>
          </div>

          <p className="login-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
