import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./0_presentation/Profile";
import Login from "./0_presentation/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
