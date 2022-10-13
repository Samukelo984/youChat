import "./Sidebar.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Contact from "../contact/Contact";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Navbar />
      <Search />
      <Contact />
    </section>
  );
};

export default Sidebar;
