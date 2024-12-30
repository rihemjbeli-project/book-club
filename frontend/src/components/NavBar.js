import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/book/1">Book Details</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link> {/* Make sure this links to /books */}
          </li>
          <li>
            <Link to="/add-book">Add Book</Link> {/* Make sure this links to /add-book */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
