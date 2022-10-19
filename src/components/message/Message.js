import "./Message.css";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <article
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <figure className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="contact-avatar"
        />
        <figcaption>Just now</figcaption>
      </figure>
      <figure className="message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="attached-avatar" />}
      </figure>
    </article>
  );
};

export default Message;
