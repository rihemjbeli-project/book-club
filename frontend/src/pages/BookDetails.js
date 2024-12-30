import React from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Book Details</h1>
      <p>Book ID: {id}</p>
      <p>
        Here you can fetch and display additional details for the book based on
        its ID.
      </p>
    </div>
  );
}

export default BookDetails;
