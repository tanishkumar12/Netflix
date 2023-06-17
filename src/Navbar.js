import React, { useEffect } from "react";
import "./Navbar.css";
import "./search.png";
import search from "./search.png";
function Navbar() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.querySelector(".Navbar").style.backgroundColor = "black";

      if (window.scrollY <= 100) {
        document.querySelector(".Navbar").style.backgroundColor =
          "rgba(255, 255, 255, 0)";
      }
    });
  }, []);

  return (
    <div className="Navbar">
      <a href="/index.html">
        <img
          id="logo"
          className="nav-img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </a>

      <ul id="menu-text">
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/index.html">Tv Shows</a>
        </li>
        <li>
          <a href="/index.html">Movies</a>
        </li>
        <li>
          <a href="/index.html">New & Popular</a>
        </li>
        <li>
          <a href="/index.html">My List</a>
        </li>
      </ul>

      <img id="search" className="nav-img" src={search} alt="Search" />
      <img
        id="p-pic"
        className="nav-img"
        src="https://pbs.twimg.com/media/EyRLnz-UUAA6YHg?format=jpg&name=medium"
        alt="Profile Pic"
      />
    </div>
  );
}

export default Navbar;
