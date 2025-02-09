//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
