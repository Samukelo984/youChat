import "./Navbar.css";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="navbar">
      <h4>you Chat</h4>
      <article className="nav-user-info">
        <img src={currentUser.photoURL} alt="user-avatar" />
        <h5>{currentUser.username}</h5>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </button>
      </article>
    </section>
  );
};

export default Navbar;
