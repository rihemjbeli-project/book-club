import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookList.css"; // Use a new CSS file for styling

function BookList({ books }) {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>All Books</h1>
        <p>Browse all books uploaded by the community.</p>
      </header>

      <section className="books-grid-section">
        {books.length > 0 ? (
          <div className="books-grid">
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <Link to={`/book/${book.id}`} className="book-card-link">
                  <div className="book-image-container">
                    <img
                      src={book.image || "/placeholder.jpg"} // Placeholder if no image
                      alt={book.title}
                      className="book-image"
                    />
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <p className="book-price">
                      {book.price ? `$${book.price}` : "N/A"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No books available. Add some books first!</p>
        )}
      </section>
    </div>
  );
}

export default BookList;
