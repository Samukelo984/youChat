import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const Login = () => {
  const [error] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  };

  return (
    <main className="form-container">
      <section className="form-wrapper">
        <h2>you Chat</h2>
        <span>Login</span>
        <form className="form" onSubmit={handleLogin}>
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <button type="submit">Sign In</button>
          {error && (
            <span
              style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
            >
              Something Went Wrong!
            </span>
          )}
        </form>
        <p>
          Don't have an account ? <Link to="/register"> Register here </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
