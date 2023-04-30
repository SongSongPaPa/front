import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestSocket from "./0_presentation/TestSocket";
import SocketHandler from "./1_application/SocketHandler";

function App() {
  return (
    <BrowserRouter>
      <SocketHandler>
        <div className="App">
          <Routes>
            <Route path="/socket" element={<TestSocket />} />
          </Routes>
        </div>
      </SocketHandler>
    </BrowserRouter>
  );
}

export default App;
