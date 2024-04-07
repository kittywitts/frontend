import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mail from "./components/Mail";
import Success from "./components/Success";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
