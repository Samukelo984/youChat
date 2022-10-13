import "./Home.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Messages from "../../components/messages/Messages";

const Home = () => {
  return (
    <main className="home">
      <section className="home-content">
        <Sidebar />
        <Messages />
      </section>
    </main>
  );
};

export default Home;
