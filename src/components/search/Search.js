import "./Search.css";
import React from "react";

const Search = () => {
  return (
    <section className="search">
      <article className="search-form">
        <input type="text" placeholder="find a contact..." />
      </article>
      <article className="contacts-messages">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/782/246/421/mercedes-benz-c63-amg-wallpaper-preview.jpg"
          alt="contact avatar"
        />
        <figure className="contact-info">
          <figcaption>Jane</figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Search;
