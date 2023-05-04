import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./0_presentation/Lobby";
import TestPage from "./0_presentation/TestPage";
import TestUI from "./0_presentation/TestUI";
import SocketHandler from "./1_application/SocketHandler";
import GlobalModal from "./0_presentation/modals/GlobalModal";

function App() {
  return (
    <BrowserRouter>
      <GlobalModal />
      <SocketHandler>
        <div className="App">
          <Routes>
            <Route path="/socket" element={<TestPage />} />
            <Route path="/ui" element={<TestUI />} />
            <Route path="lobby" element={<Lobby />} />
          </Routes>
        </div>
      </SocketHandler>
    </BrowserRouter>
  );
}

export default App;
