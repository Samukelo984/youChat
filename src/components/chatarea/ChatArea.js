import "./ChatArea.css";
import React from "react";
import Message from "../message/Message";

const ChatArea = () => {
  return (
    <section className="chat-area">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </section>
  );
};

export default ChatArea;
