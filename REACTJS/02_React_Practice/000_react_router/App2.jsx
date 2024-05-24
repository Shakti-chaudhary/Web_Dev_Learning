import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Data } from "./Data";
import Login from "./Login";
import Home from "./Home";
import { dataLoader } from "./Data";
import Books from "./Books";

function App2() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App2;
