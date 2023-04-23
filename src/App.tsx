import React from "react";
import "./App.css";
import LoginPage from "./0_presentation/pages/LoginPage";
import LobbyPage from "./0_presentation/pages/LobbyPage";
import GameWaitPage from "./0_presentation/pages/GameWaitPage";
import ChatPage from "./0_presentation/pages/ChatPage";
import SignupPage from "./0_presentation/pages/SignupPage";
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
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
