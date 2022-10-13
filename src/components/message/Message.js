import "./Message.css";
import React from "react";

const Message = () => {
  return (
    <article className="message">
      <figure className="message-info">
        <img
          src="https://www.hdcarwallpapers.com/walls/mercedes_amg_c63_4k-HD.jpg"
          alt="contact-avatar"
        />
        <figcaption>Just now</figcaption>
      </figure>
      <figure className="message-content">
        <p>Hello Jane</p>
        <img
          src="https://wallpapercrafter.com/desktop/15381-mercedes-c63-amg-mercedes-car-white-front-view-4k.jpg"
          alt="attached-avatar"
        />
      </figure>
    </article>
  );
};

export default Message;
