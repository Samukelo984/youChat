import "./ChatInput.css";
import React from "react";
import attach from "../../assets/attach.png";
import addImg from "../../assets/img.png";

const ChatInput = () => {
  return (
    <article className="chat-input">
      <input type="text" placeholder="Send a message..." />
      <aside className="attach-options">
        <img src={attach} alt="" />
        <input type="file" id="file-upload" style={{ display: "none" }} />
        <label htmlFor="file-upload">
          <img src={addImg} alt="" />
        </label>
        <button>Send</button>
      </aside>
    </article>
  );
};

export default ChatInput;
