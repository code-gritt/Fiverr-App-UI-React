import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
