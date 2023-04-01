import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import LobbyPage from "./pages/LobbyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
