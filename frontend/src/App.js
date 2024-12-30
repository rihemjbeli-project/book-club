import React, { useState } from "react"; // Add useState
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";

function App() {
  const location = useLocation();
  const [books, setBooks] = useState([]); // Shared state for books

  return (
    <div className="app-container">
      {/* Conditionally render Navbar (Hide on Auth page) */}
      {location.pathname !== "/" && <Navbar />}

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route
            path="/books"
            element={<BookList books={books} />} // Pass books as prop
          />
          <Route
            path="/add-book"
            element={<AddBook books={books} setBooks={setBooks} />} // Pass books and setBooks
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
