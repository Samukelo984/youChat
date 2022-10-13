import "./Login.css";
import React from "react";

const Login = () => {
  return (
    <main className="form-container">
      <section className="form-wrapper">
        <h2>you Chat</h2>
        <span>Login</span>
        <form className="form">
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <button>Sign In</button>
        </form>
        <p>Don't have an account ? Register here</p>
      </section>
    </main>
  );
};

export default Login;
