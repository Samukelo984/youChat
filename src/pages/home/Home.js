import "./Home.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ChatBox from "../../components/chatbox/ChatBox";

const Home = () => {
  return (
    <main className="home">
      <section className="home-content">
        <Sidebar />
        <ChatBox />
      </section>
    </main>
  );
};

export default Home;
