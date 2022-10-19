import "./ChatBox.css";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import videoCam from "../../assets/cam.png";
import addContact from "../../assets/add.png";
import moreOptions from "../../assets/more.png";
import ChatArea from "../chatarea/ChatArea";
import ChatInput from "../chatinput/ChatInput";

const ChatBox = () => {
  const { data } = useContext(ChatContext);

  return (
    <section className="chatbox">
      <article className="chatnav-info">
        <h4>{data.user?.username}</h4>
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
