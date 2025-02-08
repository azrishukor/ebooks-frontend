import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({ title: "", author: "", year: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", book);
      navigate("/");  // Redirect to home page after adding book
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>➕ Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input type="number" name="year" className="form-control" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">✅ Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
