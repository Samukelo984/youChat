import "./Search.css";
import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { AuthContext } from "../../context/AuthContext";

const Search = () => {
  const [contactName, setContactName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  // SEARCH FOR USER
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("username", "==", contactName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  // HANDLE SELECTED USER
  const handleSelect = async () => {
    // CHECK WHETHER GROUP(CHATS IN FIRESTORE) EXISTS // CREATE NEW IF DOESNT EXIST
    const comninedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const response = await getDoc(doc(db, "chats", comninedId));

      // CREATE CONVERSATION BETWEEN 2 USERS
      if (!response.exists()) {
        // CREATE CHATS COLLECTION
        await setDoc(doc(db, "chats", comninedId), { messages: [] });
        // CREATE USER CHATS
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [comninedId + ".userInfo"]: {
            uid: user.uid,
            username: user.username,
            photoURL: user.photoURL,
          },
          [comninedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [comninedId + ".userInfo"]: {
            uid: currentUser.uid,
            username: currentUser.username,
            photoURL: currentUser.photoURL,
          },
          [comninedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    // CREATE USERCHATS
    setUser(null);
    setContactName("");
  };

  return (
    <section className="search">
      <article className="search-form">
        <input
          type="text"
          placeholder="find a contact..."
          value={contactName}
          onKeyDown={handleKey}
          onChange={(e) => {
            setContactName(e.target.value);
          }}
        />
      </article>
      {error && <span>Something Wrong Occured!</span>}
      {user && (
        <article className="contacts-messages" onClick={handleSelect}>
          <img src={user.photoURL} alt="contact avatar" />
          <figure className="contact-info">
            <figcaption>{user.username}</figcaption>
          </figure>
        </article>
      )}
    </section>
  );
};

export default Search;
