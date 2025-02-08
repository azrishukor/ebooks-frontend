import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", year: "" });

  // Fetch the book data
  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book:", error));
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/books/${id}`, book);
      navigate("/"); // Redirect to home page after update
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>✏ Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={book.title} required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" className="form-control" value={book.author} required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input type="number" name="year" className="form-control" value={book.year} required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-warning">✅ Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
