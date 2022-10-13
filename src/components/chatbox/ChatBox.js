import "./ChatBox.css";
import React from "react";
import videoCam from "../../assets/cam.png";
import addContact from "../../assets/add.png";
import moreOptions from "../../assets/more.png";
import ChatArea from "../chatarea/ChatArea";
import ChatInput from "../chatinput/ChatInput";

const ChatBox = () => {
  return (
    <section className="chatbox">
      <article className="chatnav-info">
        <h4>Jane</h4>
        <aside className="chatnav-icons">
          <img src={videoCam} alt="chatnav-navbar-icon" />
          <img src={addContact} alt="chatnav-navbar-icon" />
          <img src={moreOptions} alt="chatnav-navbar-icon" />
        </aside>
      </article>
      <ChatArea />
      <ChatInput />
    </section>
  );
};

export default ChatBox;
