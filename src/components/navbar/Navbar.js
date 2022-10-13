import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <section className="navbar">
      <h4>you Chat</h4>
      <article className="nav-user-info">
        <img
          src="https://wallpapercave.com/wp/wp1972384.jpg"
          alt="user-avatar"
        />
        <span>John</span>
        <button>Logout</button>
      </article>
    </section>
  );
};

export default Navbar;
