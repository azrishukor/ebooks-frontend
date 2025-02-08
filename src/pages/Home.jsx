import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")  // Replace with your actual backend URL
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>📚 E-Books Collection</h1>
      <Link to="/add" className="btn btn-primary mb-3">➕ Add New Book</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                  <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm me-2">✏ Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book._id)}>🗑 Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center">No books found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this book?")) {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      window.location.reload();  // Refresh to show updated list
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
};

export default Home;
