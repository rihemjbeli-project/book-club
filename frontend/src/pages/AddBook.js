import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/AddBook.css";

function AddBook({ books, setBooks }) {
  const navigate = useNavigate(); // To navigate after successful addition
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const addBook = () => {
    if (
      newBook.title &&
      newBook.description.length >= 5 &&
      newBook.author &&
      newBook.price &&
      newBook.image
    ) {
      setBooks([...books, { ...newBook, id: books.length + 1 }]); // Add book to list
      setSuccessMessage("Book added successfully!"); // Show success message
      setNewBook({
        title: "",
        description: "",
        author: "",
        price: "",
        image: "",
      });

      // Redirect to BookList after 2 seconds
      setTimeout(() => {
        setSuccessMessage(""); // Clear message
        navigate("/books"); // Navigate to BookList
      }, 2000);
    } else {
      alert("Please fill in all fields with valid information.");
    }
  };

  return (
    <div className="home-container">
      <section className="add-book-section">
        <h2>Add a New Book</h2>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addBook();
          }}
          className="add-book-form"
        >
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newBook.description}
            onChange={(e) =>
              setNewBook({ ...newBook, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          />
          <input
            type="url"
            placeholder="Image URL"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          />
          <button type="submit" className="btn">Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default AddBook;
