
import React, { useState, useEffect } from "react";
import "./PremiumProducts.css";

function PremiumProducts() {
  const [activeTab, setActiveTab] = useState("login"); // login ya signup
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage for login status
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login logic (replace with real auth if needed)
    localStorage.setItem("user", JSON.stringify({ name: "User" }));
    setIsLoggedIn(true);
    alert("Logged in successfully!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simple signup logic
    localStorage.setItem("user", JSON.stringify({ name: "User" }));
    setIsLoggedIn(true);
    alert("Signed up successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setActiveTab("login");
    alert("Logged out successfully!");
  };

  return (
    <div className="premium-container">
      <h1>Welcome to GlowUp</h1>

      {!isLoggedIn ? (
        <>
          <div className="form-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={activeTab === "signup" ? "active" : ""}
              onClick={() => setActiveTab("signup")}
            >
              Signup
            </button>
          </div>

          <div className="form-container">
            {activeTab === "login" && (
              <form className="auth-form" onSubmit={handleLogin}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            )}

            {activeTab === "signup" && (
              <form className="auth-form" onSubmit={handleSignup}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Signup</button>
              </form>
            )}
          </div>
        </>
      ) : (
        <div className="logged-in">
          <h2 style={{ color: "black" }}>You are logged in!</h2>

          <button onClick={handleLogout} style={{ color: "white" }}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default PremiumProducts;
