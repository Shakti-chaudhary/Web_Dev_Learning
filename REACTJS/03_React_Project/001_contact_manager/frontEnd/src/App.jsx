import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Create from "./components/create/Create.jsx";
import Read from "./components/read/Read.jsx";
import Update from "./components/edit/Update.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
