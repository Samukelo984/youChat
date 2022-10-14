import "./Register.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import addAvatar from "../../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // CREATE USER
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      // CREATE UNIQUE IMAGE NAME
      const date = new Date().getTime();
      const storageRef = ref(storage, ` ${username + date}`);
      // UPLOAD IMAGE TO STORAGE
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // UPDATEPROFILE
            await updateProfile(response.user, {
              username,
              photoURL: downloadURL,
            });
            // CREATE USER ON FIRESTORE
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              username,
              email,
              photoURL: downloadURL,
            });
            // CREATE CHAT COLLECTION
            await setDoc(doc(db, "userChats", response.user.uid), {});
            navigate("/");
          } catch (error) {
            setError(error);
            console.log(error);
          }
        });
      });
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <main className="form-container">
      <section className="form-wrapper">
        <h2>you Chat</h2>
        <span>Register</span>
        <form className="form" onSubmit={handleRegistration}>
          <input type="text" placeholder="username..." />
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <label htmlFor="form-upload">
            <img src={addAvatar} alt="file-upload-avatar" />
            <h4>Add an image</h4>
          </label>
          <input type="file" id="form-upload" style={{ display: "none" }} />
          <button type="submit">Sign Up</button>
          {error && <span>{error}</span>}
        </form>
        <p>
          Already have an account ?<Link to="/login">Login Here</Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
