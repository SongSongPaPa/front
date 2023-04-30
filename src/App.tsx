import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./0_presentation/TestPage";
import SocketHandler from "./1_application/SocketHandler";

function App() {
  return (
    <BrowserRouter>
      <SocketHandler>
        <div className="App">
          <Routes>
            <Route path="/socket" element={<TestPage />} />
          </Routes>
        </div>
      </SocketHandler>
    </BrowserRouter>
  );
}

export default App;
