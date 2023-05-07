import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./0_presentation/Lobby";
import TestPage from "./0_presentation/TestPage";
import TestUI from "./0_presentation/TestUI";
import SocketHandler from "./1_application/SocketHandler";
import GlobalModal from "./0_presentation/modals/GlobalModal";
import Chat from "./0_presentation/Chat";
import GameWait from "./0_presentation/GameWait";
import Login from "./0_presentation/Login";
import TwoFactor from "./0_presentation/TwoFactor";

function App() {
  return (
    <BrowserRouter>
      <GlobalModal />
      <SocketHandler>
        <div className="App">
          <Routes>
            <Route path="socket" element={<TestPage />} />
            <Route path="ui" element={<TestUI />} />
            <Route path="/" element={<Login />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="chat" element={<Chat />} />
            <Route path="game-wait" element={<GameWait />} />
            <Route path="two-factor" element={<TwoFactor />} />
          </Routes>
        </div>
      </SocketHandler>
    </BrowserRouter>
  );
}

export default App;
