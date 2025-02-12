//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Navbar from "./Navbar";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

console.log("API Base URL:", API_BASE_URL); // Debugging

fetch(`${API_BASE_URL}/books`)
  .then(response => response.json())
  .then(data => console.log(data));

function App() {
  return (
    <BrowserRouter> {/* ✅ Use BrowserRouter instead of Router */}
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
