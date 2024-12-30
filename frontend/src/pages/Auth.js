import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import "../styles/Auth.css";
import bookStack from "../assets/stack_books.png";

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showLeftImage, setShowLeftImage] = useState(true);
  const [showRightImage, setShowRightImage] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);

    if (!isSignUpMode) {
      // Hide left image and show right image after 2.1 seconds
      setShowLeftImage(false);
      setTimeout(() => setShowRightImage(true), 1500);
    } else {
      // Hide right image and show left image after 2.1 seconds
      setShowRightImage(false);
      setTimeout(() => setShowLeftImage(true), 1500);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (e.g., API call)
    console.log("Login successful");
    navigate("/home"); // Navigate to the home page after login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup logic (e.g., API call)
    console.log("Signup successful");
    navigate("/home"); // Navigate to the home page after signup
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignup}>
            <h2 className="title">Signup</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
          </form>
        </div>
      </div>

      {/* Panels */}
      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel" style={{ position: "relative" }}>
          <div className="content">
            <h3>New to the Book Club?</h3>
            <p>Join our community to explore and share your love for books.</p>
            <button
              className="btn transparent"
              onClick={toggleMode}
              id="sign-up-btn"
            >
              Sign Up
            </button>
          </div>
          {/* Left Panel Image */}
          {showLeftImage && (
            <img
              src={bookStack}
              alt="Stack of Books"
              className="image"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "10%",
                width: "150px",
                height: "auto",
                objectFit: "contain",
                transition: "opacity 0.5s ease",
                opacity: isSignUpMode ? 0 : 1, // Fade out when switching to sign-up
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Right Panel */}
        <div className="panel right-panel" style={{ position: "relative" }}>
          <div className="content">
            <h3>Already a member?</h3>
            <p>
              Log in to access your book club account and connect with fellow
              readers.
            </p>
            <button
              className="btn transparent"
              onClick={toggleMode}
              id="sign-in-btn"
            >
              Sign In
            </button>
          </div>
          {/* Right Panel Image */}
          {showRightImage && (
            <img
              src={bookStack}
              alt="Stack of Books"
              className="image"
              style={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                width: "150px",
                height: "auto",
                objectFit: "contain",
                transition: "opacity 0.5s ease",
                opacity: isSignUpMode ? 1 : 0, // Fade in when switching to sign-up
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
