import "./Register.css";
import React from "react";
import addAvatar from "../../assets/addAvatar.png";

const Register = () => {
  return (
    <main className="form-container">
      <section className="form-wrapper">
        <h2>you Chat</h2>
        <span>Register</span>
        <form className="form">
          <input type="text" placeholder="name..." />
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <label htmlFor="form-upload">
            <img src={addAvatar} alt="file-upload-avatar" />
            <h4>Add an image</h4>
          </label>
          <input type="file" id="form-upload" style={{ display: "none" }} />
          <button>Sign Up</button>
        </form>
        <p>Already have an account ? Login here</p>
      </section>
    </main>
  );
};

export default Register;
