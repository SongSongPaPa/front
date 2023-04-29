import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestSocket from "./0_presentation/TestSocket";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/socket" element={<TestSocket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
