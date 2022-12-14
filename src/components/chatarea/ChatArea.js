import "./ChatArea.css";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import Message from "../message/Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <section className="chat-area">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </section>
  );
};

export default ChatArea;
