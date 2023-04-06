import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import LobbyPage from "./pages/LobbyPage";
import GameWaitPage from "./pages/GameWaitPage";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/game-wait" element={<GameWaitPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
